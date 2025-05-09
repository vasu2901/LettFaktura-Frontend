import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa'; // Hamburger icon
import '../styles/home.css';

import Form from "../components/Form"

const HomePage = () => {
    const [data, setData] = useState([]);
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const accountName = "John Doe";
    const profilePhoto = "https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_hybrid&w=740";
    const countryName = "United States";
    const countryFlag = "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"; // Replace with real flag URL

    const [editdata, seteditData] = useState({
        article_no: '',
        product_service: '',
        in_price: 0,
        price: 0,
        unit: '',
        in_stock: 0,
        description: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://lettfaktura-backend-8u3e.onrender.com/products');
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Set initial width just in case
        setWindowWidth(window.innerWidth);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const getContentMargin = () => {
        if (windowWidth < 768) {
            return sidebarCollapsed === false ? '0px' : '30%'; // Mobile
        } else if (windowWidth >= 768 && windowWidth < 992) {
            return sidebarCollapsed === false ? '0px' : '30%'; // Tablet
        } else {
            return '250px'; // Desktop
        }
    };
    return (
        <div className="d-flex" style={{ height: '100vh', overflow: 'hidden', backgroundColor: '#ffffff' }}>
            <div className="flex-grow-1" style={{ position: 'relative', overflowY: 'auto' }}>
                <div className="d-flex justify-content-between align-items-center mb-4" style={{
                    padding: '10px 20px',
                    backgroundColor: '#0088cc',
                    color: 'white',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                    position: 'relative',
                    zIndex: 1,
                }}>
                    <button
                        className="btn btn-light d-block d-md-none"
                        onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                        style={{ fontSize: '24px' }}
                    >
                        <FaBars />
                    </button>
                    <div className='d-flex align-items-center'>
                        <img
                            src={profilePhoto}
                            alt="Profile"
                            style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
                        />
                        <span style={{ fontWeight: 'bold' }}>{accountName}</span>
                    </div>


                    <div className="d-flex align-items-center">
                        <span style={{ marginRight: '10px' }}>{countryName}</span>
                        <img
                            src={countryFlag}
                            alt="Country Flag"
                            style={{ width: '30px', height: '20px' }}
                        />
                    </div>
                </div>
                <div
                    className={`sidebar ${sidebarCollapsed ? 'active' : ''}`}
                    style={{
                        transition: 'all 0.3s',
                        position: 'absolute',
                        width: sidebarCollapsed ? '28%' : '250px',
                        height: '100vh',
                        marginTop: '-25px',
                        backgroundColor: '#ffffff',
                        boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
                        color: 'black',
                        padding: sidebarCollapsed ? '0px' : '20px',
                    }}
                >
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a href="/" className="nav-link" style={{ color: 'black' }}>Invoices</a>
                        </li>
                        <li className="nav-item">
                            <a href="#order" className="nav-link" style={{ color: 'black' }}>Customers</a>
                        </li>
                        <li className="nav-item">
                            <a href="#customers" className="nav-link" style={{ color: 'black' }}>My Business</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link" style={{ color: 'black' }}>Invoice Journal</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link" style={{ color: 'black' }}>Price List</a>
                        </li>
                        <li className="nav-item">
                            <a href="#customers" className="nav-link" style={{ color: 'black' }}>Multiple Invoicing</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link" style={{ color: 'black' }}>Unpaid Invoices</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link" style={{ color: 'black' }}>Offer</a>
                        </li>
                        <li className="nav-item">
                            <a href="#customers" className="nav-link" style={{ color: 'black' }}>Inventory Control</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link" style={{ color: 'black' }}>Member Invoicing</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link" style={{ color: 'black' }}>Import/Export</a>
                        </li>
                        <li className="nav-item">
                            <a href="/terms" className="nav-link" style={{ color: 'black' }}>Terms</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link" style={{ color: 'black' }}>Log out</a>
                        </li>
                    </ul>
                </div>

                <div className="flex-grow-1 p-4" style={{ marginLeft: getContentMargin(), transition: 'margin-left 0.3s', }}>

                    <div className="d-flex align-items-center mb-3 gap-2 flex-wrap overflow-y-auto">
                        <input className="form-control w-25" placeholder="Search Article No.__" />
                        <input className="form-control w-25" placeholder="Search Product ..." />
                        <Form />
                        <button className="btn btn-outline-primary">Print List</button>
                        <button className="btn btn-outline-secondary">Advanced mode</button>
                    </div>


                    <div className="table-responsive" style={{ overflowX: 'auto', maxHeight: 'calc(100vh - 200px)' }}>
                        <table className="table align-middle">
                            <thead className="table-light">
                                <tr>
                                    <th>Article No.</th>
                                    {windowWidth >= 768 && <th>Product/Service</th>}
                                    {windowWidth >= 992 && <th>In Price</th>}
                                    <th>Price</th>
                                    <th className="text-center">...</th>
                                    <th className="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td>
                                            <input
                                                className="form-control form-control-sm rounded-pill"
                                                readOnly
                                                value={item.article_no}
                                            />
                                        </td>
                                        {windowWidth >= 768 && (
                                            <td>
                                                <input
                                                    className="form-control form-control-sm rounded-pill"
                                                    readOnly
                                                    value={item.product_service}
                                                />
                                            </td>
                                        )}
                                        {windowWidth >= 992 && (
                                            <td>
                                                <input
                                                    className="form-control form-control-sm rounded-pill"
                                                    readOnly
                                                    value={item.in_price}
                                                />
                                            </td>
                                        )}
                                        <td>
                                            <input
                                                className="form-control form-control-sm rounded-pill"
                                                readOnly
                                                value={item.price}
                                            />
                                        </td>
                                        <td className="text-center">
                                            <div className="dropdown">
                                                <button className="btn btn-light btn-sm" type="button" data-bs-toggle="dropdown">
                                                    ...
                                                </button>
                                                <ul className="dropdown-menu">
                                                    {/* Show missing fields based on screen size */}
                                                    {windowWidth < 768 && (
                                                        <>
                                                            <li><strong>Product:</strong> {item.product_service}</li>
                                                            <li><strong>In Price:</strong> {item.in_price}</li>
                                                        </>
                                                    )}
                                                    {(windowWidth < 992 && windowWidth >= 768) && (
                                                        <li><strong>In Price:</strong> {item.in_price}</li>
                                                    )}
                                                    <li><strong>Unit:</strong> {item.unit}</li>
                                                    <li><strong>In Stock:</strong> {item.in_stock}</li>
                                                    <li><strong>Description:</strong> {item.description}</li>
                                                </ul>
                                            </div>
                                        </td>
                                        <td>
                                            <Form initialData={item} mode="edit" modalId={`editModal-${item.id}`} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HomePage;
