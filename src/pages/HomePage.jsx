import { useState, useEffect } from 'react';
import { FaBars, FaPrint, FaFileInvoiceDollar, FaArrowDown, FaUser, FaCalculator, FaIdCard, FaFileContract } from 'react-icons/fa';
import { IoToggle } from "react-icons/io5";
import { IoIosSettings, IoIosLogOut } from "react-icons/io";
import { TfiFiles } from "react-icons/tfi";
import { MdLocalOffer, MdOutlineInventory } from "react-icons/md";
import { TbXboxXFilled } from "react-icons/tb";
import { BiSolidOffer } from "react-icons/bi";
import { FaCloudArrowUp } from "react-icons/fa6";
import '../styles/home.css';
import Form from "../components/Form"
import { CiSearch } from "react-icons/ci";
const HomePage = () => {
    const [data, setData] = useState([]);
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const accountName = "John Doe";
    const profilePhoto = "https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_hybrid&w=740";
    const countryName = "United States";
    const countryFlag = "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"; // Replace with real flag URL

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
        <div className="flex-grow-1 d-flex flex-column" style={{ position: 'relative', overflow: 'hidden', height: '100vh', background: "white" }}>

            <div className="flex-grow-1" style={{ position: 'relative', }}>
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
                        width: sidebarCollapsed ? '28%' : '210px',
                        height: '100vh',
                        marginTop: '-25px',
                        backgroundColor: '#ffffff',
                        boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
                        color: 'black',
                        padding: sidebarCollapsed ? '0px' : '5px',
                    }}
                >
                    <h3 className='mx-3'>Menu</h3>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a href="/" className="nav-link" style={{ color: 'black' }}><FaFileInvoiceDollar style={{ marginRight: "10px", color: "#89CFEF" }} />Invoices</a>
                        </li>
                        <li className="nav-item">
                            <a href="#order" className="nav-link" style={{ color: 'black' }}> <FaUser style={{ marginRight: "10px", color: "#3DED97" }} />Customers</a>
                        </li>
                        <li className="nav-item">
                            <a href="#customers" className="nav-link" style={{ color: 'black' }}><IoIosSettings style={{ marginRight: "10px", color: "#87CEEB" }} />My Business</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link" style={{ color: 'black' }}><FaCalculator style={{ marginRight: "10px", color: "#0080FE" }} />Invoice Journal</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link" style={{ color: 'black' }}><MdLocalOffer style={{ marginRight: "10px", color: "#FDB515" }} />Price List</a>
                        </li>
                        <li className="nav-item">
                            <a href="#customers" className="nav-link" style={{ color: 'black' }}><TfiFiles
                                style={{ marginRight: "8px", color: "#87CEEB" }} />Multiple Invoicing</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link" style={{ color: 'black' }}><TbXboxXFilled style={{ marginRight: "10px", color: "red" }} />Unpaid Invoices</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link" style={{ color: 'black' }}><BiSolidOffer style={{ marginRight: "10px", color: "#FFD700" }} />Offer</a>
                        </li>
                        <li className="nav-item">
                            <a href="#customers" className="nav-link" style={{ color: 'black' }}><MdOutlineInventory style={{ marginRight: "10px", color: "#0080FE" }} />Inventory Control</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link" style={{ color: 'black' }}><FaIdCard style={{ marginRight: "10px", color: "#0080FE" }} />Member Invoicing</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link" style={{ color: 'black' }}><FaCloudArrowUp style={{ marginRight: "10px", color: "#4682B4" }} />Import/Export</a>
                        </li>
                        <li className="nav-item">
                            <a href="/terms" className="nav-link" style={{ color: 'black' }}><FaFileContract style={{ marginRight: "10px", color: "#3DED97" }} />Terms</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link" style={{ color: 'black' }}><IoIosLogOut ser style={{ marginRight: "10px", color: "#89CFEF" }} />Log out</a>
                        </li>
                    </ul>
                </div>


                <div className="flex-grow-1 p-4" style={{ marginLeft: getContentMargin(), transition: 'margin-left 0.3s', }}>

                    <div className="d-flex justify-content-between align-items-start flex-wrap mb-3">
                        {/* Left: Search Fields */}
                        <div className="d-flex flex-column gap-2">
                            <div className="input-group">
                                <input className="form-control" placeholder="Search Article No..." />
                                <span className="input-group-text bg-white">
                                    <CiSearch className='text-primary' />
                                </span>
                            </div>
                            <div className="input-group">
                                <input className="form-control" placeholder="Search Product ..." />
                                <span className="input-group-text bg-white"><CiSearch className='text-primary' />
                                </span>
                            </div>
                        </div>

                        {/* Right: Buttons */}
                        <div className="d-flex gap-2 align-items-center mt-2 mt-md-0">
                            <Form initialData={{}} mode="add" modalId="addModal" />
                            <button className="btn btn-outline-primary border rounded-pill d-flex align-items-center">
                                Print List <FaPrint className='mx-2' />
                            </button>
                            <button className="btn btn-outline-primary border rounded-pill d-flex align-items-center">
                                Advanced mode <IoToggle className='mx-2' />
                            </button>
                        </div>
                    </div>

                    <div style={{
                        height: '60vh',
                        overflowY: 'auto',
                        paddingRight: '10px'
                    }}>    <table className="min-w-full table-auto border-collapse">
                            <thead className="sticky top-0 bg-white z-10">
                                <tr className="text-left text-secondary-dark text-[0.95rem] font-semibold border-b">
                                    <th className="p-3 min-w-[50px]"></th>
                                    {windowWidth >= 768 && (
                                        <th className="p-3 min-w-[150px] max-w-[250px]">
                                            Article No. <FaArrowDown style={{ color: "#87CEEB" }} />
                                        </th>
                                    )}
                                    <th className="p-3 min-w-[300px]">
                                        Product/Service <FaArrowDown style={{ color: "green" }} />
                                    </th>
                                    {windowWidth >= 992 && (
                                        <th className="p-3 min-w-[150px]">In Price</th>
                                    )}
                                    <th className="p-3 min-w-[150px]">Price</th>
                                    <th className="p-3 min-w-[100px]">...</th>
                                    <th className="p-3 min-w-[100px]">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr className="border-b border-dashed last:border-b-0" key={index}>
                                        <td className="p-2">
                                            {index === data.length - 1 && (
                                                <img
                                                    src="https://lett-faktura-frontend.vercel.app/blue_tick.png"
                                                    style={{ width: "15px", height: "15px", transform: `rotate(270deg)` }}
                                                    alt=""
                                                />
                                            )}
                                        </td>
                                        <td className="p-2">
                                            <input
                                                className="form-control form-control-sm rounded-pill w-full"
                                                readOnly
                                                value={item.article_no}
                                            />
                                        </td>
                                        {windowWidth >= 768 && (
                                            <td className="p-2">
                                                <input
                                                    className="form-control form-control-sm rounded-pill w-full"
                                                    readOnly
                                                    value={item.product_service}
                                                />
                                            </td>
                                        )}
                                        {windowWidth >= 992 && (
                                            <td className="p-2">
                                                <input
                                                    className="form-control form-control-sm rounded-pill w-full"
                                                    readOnly
                                                    value={item.in_price}
                                                />
                                            </td>
                                        )}
                                        <td className="p-2">
                                            <input
                                                className="form-control form-control-sm rounded-pill w-full"
                                                readOnly
                                                value={item.price}
                                            />
                                        </td>
                                        <td className="text-center p-2">
                                            <div className="dropdown">
                                                <button className="btn btn-light btn-sm" type="button" data-bs-toggle="dropdown">
                                                    ...
                                                </button>
                                                <ul className="dropdown-menu">
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
                                        <td className="p-2">
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
