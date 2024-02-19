import React from 'react';
import bois from '../../../assets/bois.jpg'; // Importando a imagem
import './home.css'; // Importando o arquivo CSS para estilização

function ProjectsSection() {
  return (
    <section className="projects-section bg-light" id="projects">
      <div className="container-fluid px-0 position-relative">
        {/* Featured Project Row */}
        <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
          <div className="w-100 vh-100 overflow-hidden position-relative">
            {/* Imagem de fundo ocupando todo o espaço */}
            <img className="img-fluid w-100 vh-100 object-fit-cover" src={bois} alt="..." />
            {/* Texto sobreposto */}
            <div className="position-absolute" style={{ top: '100px', right: '10px', margin: '5px' }}>
              
              <div className='d-flex justify-content-center'>

               <button type="button" className="btn btn-dark btn-lg ">Conhecer</button> 
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { ProjectsSection };
