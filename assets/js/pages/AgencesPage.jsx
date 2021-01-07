import React, { useEffect, useState } from 'react';
import AgencesApi from '../services/agencesAPI';
import { NavLink } from 'react-router-dom';


const AgencesPage = (props) => {

    const [agences, setAgences] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    //permet de recuperer les agences
    const fetchAgences = async () => {
      try {
        const data = await AgencesApi.findAll();
        setAgences(data);
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(()=> {
        fetchAgences();
    }, []);

    //Gestion du changement de page
    const handlePageChange = (page) => {
      setCurrentPage(page);
    }
    const itemsPerPage = 10;
    const pagesCount = Math.ceil(agences.length / itemsPerPage);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
      
    }
    const start = currentPage * itemsPerPage - itemsPerPage;
    const paginationAgences = agences.slice(start, start + itemsPerPage);
    return ( 
    <>
        {/* <!--===== PAGE TITLE =====--> */}
<div className="page-title page-main-section parallaxie">
  <div className="container padding-bottom-top-120 text-uppercase text-center">
    <div className="main-title">
      <h1>Listes des agences</h1>
      <h5>10 années d'expériences !</h5>
      <div className="line_4"></div>
      <div className="line_5"></div>
      <div className="line_6"></div>
      <NavLink to="/">accueil</NavLink><span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span><NavLink to="/agences">Liste des agences</NavLink> 
    </div>
  </div>
</div>
{/* <!--===== #/PAGE TITLE =====--> */}


{/* <!--===== Agency Listing =====--> */}
<section className="padding agency-listing">
  <div className="container">
    <div className="row bottom40">
        <div className="col-sm-1 col-md-2"></div>
        <div className="col-xs-12 col-sm-10 col-md-8 text-center">
          <h2 className="text-uppercase">Liste<span className="color_red"> Agences</span></h2>
          <div className="line_1-1"></div>
          <div className="line_2-2"></div>
          <div className="line_3-3"></div>
          <p className="heading_space">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="col-sm-1 col-md-2"></div>
    </div>

    {paginationAgences.map(agence => 
    <div key={agence.id} className="row agency-listing-box">
      <div className="image-round">
        <div>
          <img src="images/testinomils.png" alt="image" />
          <span>
          {agence.dateInscription}
          </span>
        </div>
      </div>
      <div className="details">
        <div className="agency-box">
          <h2>{agence.nomAgence}</h2>
          <h3><i className="fa fa-map-marker"></i> {agence.proprietes.length} Property</h3>
          <p>Proin condimentum tempus ultrices. Suspendisse vestibulum suscipit erat, ac efficitur lorem. Nullam non ex vel turpis imperdiet maximus sit amet nec odio. Donec mauris nisl, vestibulum id efficitur at, convallis id dui. Sed enim nisl, ultrices vitae sodales eu, vestibulum a mi. Morbi consectetur pulvinar sagittis. Phasellus pharetra diam id leo gravida pharetra. In rutrum est gravida, maximus mi ac, mattis metus. Ut at tempus sem. Vivamus condimentum erat eget aliquet dignissim. </p>
          <a href="#" className="btn_fill">En savoir plus</a>
        </div>
      </div>
    </div>
      )}
      <ul className="pageragence top40 padding_bottom">
        {pages.map(page => 
        <li key={page} class={currentPage === page && " active"}>
          <a onClick={()=> handlePageChange(page)}>{page}</a>
        </li>
        )}
    </ul>
  </div>
</section>
    
{/* <!--===== #/Agency Listing =====--> */}
    </> 
);
}
 
export default AgencesPage;