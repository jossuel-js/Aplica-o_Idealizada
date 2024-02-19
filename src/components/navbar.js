/* eslint-disable jsx-a11y/anchor-is-valid */


        import React from 'react';
        import { useState } from 'react';
        import cowlogo from '../assets/cowlogo.png';
        const Navbar = () => {
          const [showOffcanvas, setShowOffcanvas] = useState(false);
        
          const handleToggleOffcanvas = () => {
            setShowOffcanvas(!showOffcanvas);
          };
        
          return (
            <nav className="navbar navbar-dark bg-dark fixed-top">
              <div className="container-fluid">
              <div className="d-flex align-items-center">
                      <img src={cowlogo} alt="Logo" style={{ marginRight: '10px', width: '50px', height: '50px' }} />
                <a className="navbar-brand" >Campeio</a>
                </div>
                <button className="navbar-toggler" type="button" onClick={handleToggleOffcanvas} aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`offcanvas offcanvas-end text-bg-dark ${showOffcanvas ? 'show' : ''}`} tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                  <div className="offcanvas-header">
                  <div className="d-flex align-items-center">
                      <img src={cowlogo} alt="Logo" style={{ marginRight: '10px', width: '50px', height: '50px' }} />
                      
                    </div>
                    <button type="button" className="btn-close btn-close-white" onClick={handleToggleOffcanvas} aria-label="Close"></button>
                  </div>
                  <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Compra</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Venda</a>
                      </li>
                      <li className="nav-item dropdown dropright">
                        <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Estatisticas
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark">
                          <li><a className="dropdown-item" href="#">Estatisticas de Compra</a></li>
                          <li><a className="dropdown-item" href="#">Estatisticas de Vendas</a></li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li><a className="dropdown-item" href="#">Peso Ideal</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          );
        };
        
        export default Navbar;
      