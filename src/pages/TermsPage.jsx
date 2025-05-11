import React, { useState, useEffect } from 'react';
import '../styles/terms.css';
const TermsPage = () => {
  const [terms, setterms] = useState("");
  const [lang, setlang] = useState('en');
  const images = {
    'en': 'https://storage.123fakturere.no/public/flags/GB.png',
    'sv': 'https://storage.123fakturere.no/public/flags/SE.png'
  }

  // const [language, setlanguage] = useState("en");

  useEffect(() => {
    const getterms = async () => {
      const response = await fetch(`https://lettfaktura-backend-8u3e.onrender.com/terms?lang=${lang}`,);
      const json = await response.json();
      if (response.ok) {
        setterms(json.content);
        // setlanguage(json.language);
      } else {
        console.error('Error fetching terms:', json.error);
      }
    }
    getterms();

  }, [lang]);
  return (
    <div className="terms-container">
      <nav class="navbar navbar-expand-lg bg-none my-2">
        <div class="container-fluid">
          <a href="/" style={{ marginLeft: '10%' }}>
            <img alt="" className="navigation-logo" src="https://storage.123fakturera.se/public/icons/diamond.png" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll" >
            <ul className="navbar-nav" style={{ '--bs-scroll-height': '100px', gap: '30px', marginTop: '10px', marginBottom: '0px', marginLeft: '10%', fontSize: '17px' }}>
              <li class="nav-item">
                <a class="nav-link active" style={{ color: 'white' }} aria-current="page" href="/">{lang === 'en' ? "Home" : "Hem"}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" style={{ color: 'white' }} aria-current="page" href="/">{lang === 'en' ? "Order" : "Beställ"}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" style={{ color: 'white' }} aria-current="page" href="/">{lang === 'en' ? "Our Customers" : "Våra Kunder"}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" style={{ color: 'white' }} aria-current="page" href="/">{lang === 'en' ? "About Us" : "Om oss"}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" style={{ color: 'white' }} aria-current="page" href="/">{lang === 'en' ? "Contact Us" : "Kontakta oss"}</a>
              </li>
              <li class="nav-item dropdown">
                <p class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'white' }}>
                  {lang === 'en' ? "English" : "Svenska"} <img className="flag" src={images[lang]} alt="flag" width="30" height="24" class="d-inline-block align-text-top" style={{ marginLeft: '10px', borderRadius: '5px' }} />
                </p>
                <ul class="dropdown-menu" style={{ color: 'white' }}>
                  <li><button class="dropdown-item" onClick={() => {
                    setlang('sv');
                  }}>Svenska<img className="flag" src={images['sv']} alt="flag" width="30" height="24" class="d-inline-block align-text-top" style={{ marginLeft: '10px', borderRadius: '5px' }} /></button></li>
                  <li><button class="dropdown-item" onClick={() => {
                    setlang('en');
                  }}>English<img className="flag" src={images['en']} alt="flag" width="30" height="24" class="d-inline-block align-text-top" style={{ marginLeft: '15px', borderRadius: '5px' }} /></button></li>

                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="content">
        <section className="terms-section">
          <div className="terms-top-text">
            <h1 className="terms-heading">{lang === 'en' ? "Terms" : "Villkor"}</h1>
            <button className="go-back-button" onClick={() => window.location.href = "/"} style={{ color: 'white' }}>{lang === 'en' ? 'Close and Go Back' : 'Stäng och gå tillbaka'}</button>
          </div>

          <div className="back-terms">
            {terms}
          </div>

          <div className="terms-top-text">
            <button className="go-back-button lower-back-button" onClick={() => window.location.href = "/"} style={{ color: 'white' }}>{lang === 'en' ? 'Close and Go Back' : 'Stäng och gå tillbaka'}</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsPage;
