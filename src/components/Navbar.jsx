import React, { useState } from 'react';
// import '../styles/navbar.css';

const Navbar = () => {
    const [lang, setLang] = useState('en');

    const images = {
        en: 'https://storage.123fakturere.no/public/flags/GB.png',
        sv: 'https://storage.123fakturere.no/public/flags/SE.png'
    };

    const languages = {
        en: 'English',
        sv: 'Svenska'
    };

    return (
        <>
            <nav class="navbar bg-light fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Offcanvas navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Link</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li>
                                            <hr class="dropdown-divider" />
                                        </li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>

            {/* Content Wrapper - shift right on desktop */}
            <div className="my-2" style={{ marginLeft: '250px' }}></div>
        </>
    );
};

export default Navbar;
