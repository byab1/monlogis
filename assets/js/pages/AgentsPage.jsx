import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import agentsApi from '../services/agentsApi';

const AgentsPage = (props) => {

  const [agents, setAgents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  //permet de recuperer les agences
    const fetchAgents = async () => {
      try {
        const data = await agentsApi.findAll();
        setAgents(data);
      } catch (error) {
    }
  }

    useEffect(()=> {
        fetchAgents();
    }, []);

    //Gestion du changement de page
    const handlePageChange = (page) => {
      setCurrentPage(page);
    }
    const itemsPerPage = 5;
    const pagesCount = Math.ceil(agents.length / itemsPerPage);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
      
    }
    const start = currentPage * itemsPerPage - itemsPerPage;
    const paginationAgents = agents.slice(start, start + itemsPerPage);
    return (
        <>
          {/* <!--===== PAGE TITLE =====--> */}
<div class="page-title page-main-section parallaxie">
  <div class="container padding-bottom-top-120 text-uppercase text-center">
    <div class="main-title">
      <h1>Notre équipe</h1>
      <h5>10 Années d'expériences !</h5>
      <div class="line_4"></div>
      <div class="line_5"></div>
      <div class="line_6"></div>
      <a href="index.html">accueil</a><span><i class="fa fa-angle-double-right" aria-hidden="true"></i></span>
      <a href="#">Team Style - 1</a> 
    </div>
  </div>
</div>
{/* <!--===== #/PAGE TITLE =====-->  */}



{/* <!--===== AGENTS =====-->  */}
<section id="agent-1" class="padding">
  <div class="container">
    <div class="row">
      {paginationAgents.map(agent => 
      <div key={agent.id} class="col-md-4 col-sm-4 col-xs-12 text-center">
        <div class="effects clearfix">
          <div class="img">
            <div class="gri">
              <figure class="effect-layla">
                <img src={agent.photoAgent} alt={agent.photoAgent}/>
                <figcaption> </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div class="agent-text">
          <h3>{agent.nomAgent} {agent.prenAgent}</h3>
          <p>{agent.emailAgent}</p>
          <p>Statut: {agent.statutAgent}</p>
          <p>Cote: {agent.coteAgent}</p>
          <Link to={`/agents/${agent.id}/profile-agent`} class="link_arrow">En savoir plus</Link>
        </div>
      </div>
      )}
    </div>
    <ul class="pager top40 padding_bottom">
      {pages.map(page => 
      <li key={page} class={currentPage === page && " active"}>
        <a onClick={()=> handlePageChange(page)}>{page}</a>
      </li>
      )}
    </ul>
  </div>
</section>
{/* <!--===== #/AGENTS =====--> */}

</>
      );
}
 
export default AgentsPage;