import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProprietesApi from '../services/ProprietesApi';

const ProprietesPage = (props) => {

    const [proprietes, setProprietes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    //permet de recuperer les propriétés
    const fetchProprietes = async () => {
      try {
        const data = await ProprietesApi.findAll();
        setProprietes(data);
      } catch (error) {
        console.log(error);
      }
    }
    
    //Rechercher les propriétés au chargement du component
    useEffect(()=> {
     fetchProprietes();
    }, []);

    //Gestion du changement de page
    const handlePageChange = (page) => {
      setCurrentPage(page);
    }
    const itemsPerPage = 10;
    const pagesCount = Math.ceil(proprietes.length / itemsPerPage);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
      
    }
    const start = currentPage * itemsPerPage - itemsPerPage;
    const paginationProprietes = proprietes.slice(start, start + itemsPerPage);

    return (
    <>
    {/* <!-- PAGE TITLE --> */}
<div class="page-title page-main-section parallaxie">
  <div class="container padding-bottom-top-120 text-uppercase text-center">
    <div class="main-title">
      <h1>Listings</h1>
      <h5>10 Years Of Experience!</h5>
      <div class="line_4"></div>
      <div class="line_5"></div>
      <div class="line_6"></div>
      <a href="index.html">accueil</a>
      <span><i class="fa fa-angle-double-right" aria-hidden="true"></i></span>
      <Link to="/proprietes">Liste des proprietes</Link> 
    </div>
  </div>
</div>
{/* <!-- PAGE TITLE --> */}


{/* <!-- LISTING STYLE--> */}
<section id="agent-p-2" class="listing-1 bg_light padding_top">
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h2 class="uppercase">LISTE <span class="color_red">DES PROPRIETES</span></h2>
        <div class="line_1"></div>
        <div class="line_2"></div>
        <div class="line_3"></div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 col-sm-12 col-xs-12">
        <form class="findus">
          <div class="row bottom30">
            <div class="col-md-12">
              <div class="single-query">
                  <select class="selectpicker" data-live-search="true">
                    <option class="active">Default Order</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                  </select>
              </div>
            </div>
          </div>
          <div class="row">
            {paginationProprietes.map(propriete => 
            <div key={propriete.id} class="col-md-6 col-sm-6">
              <div class="property_item heading_space">
                <div class="image">
                  <img src={propriete.photoPropriete} alt="listin" class="img-responsive"/>
                  <div class="overlay">
                    <div class="centered"><a class="link_arrow white_border" href="property_details_1.html">Voir Détail</a></div>
                  </div>
                  <div class="feature"><span class="tag">{propriete.statut}</span></div>
                  <div class="price"><span class="tag">For Sale</span></div>
                  <div class="property_meta">
                    <span><i class="fa fa-object-group"></i>530 sq ft </span>
                    <span><i class="fa fa-bed"></i>{propriete.nbrPiece} chambre</span>
                    <span><i class="fa fa-bath"></i>{propriete.salleEau} douche</span>
                  </div>
                </div>
                <div class="proerty_content">
                  <div class="proerty_text">
                    <h3><a href="property_details_1.html">{propriete.nomPropriete}</a></h3>
                    <span class="bottom10">{propriete.adrPropriete} | {propriete.ville}</span>
                    <p><strong>{propriete.prixPropriete} FCFA</strong></p>
                  </div>
                  <div class="favroute clearfix">
                    <p class="pull-left"><i class="icon-calendar2"></i> {propriete.dateAjout}</p>
                    <ul class="pull-right">
                      <li><a href="#."><i class="icon-video"></i></a></li>
                      <li><a href="#."><i class="icon-like"></i></a></li>
                    </ul>
                  </div>
                </div>
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
        </form>
      </div>
      <div class="col-md-4 colsm-4 col-xs-12">
        <div class="property-query-area padding-all20">
          <div class="row">
            <div class="col-md-12">
              <h3 class="text-uppercase  bottom40 top10">Recherche <span class="color_red">Avancée</span></h3>
            </div>
          </div>
          <div class="row">
            <form class="findus">
              <div class="col-md-12">
                <div class="single-query">
                  <input type="text" class="keyword-input" placeholder="Keyword (e.g. 'office')"/>
                </div>
              </div>
              <div class="col-md-12">
                <div class="single-query">
                    <select class="selectpicker" data-live-search="true">
                      <option selected="" value="any">Location</option>
                      <option>Location - 1</option>
                      <option>Location - 2</option>
                      <option>Location - 3</option>
                      <option>Location - 4</option>
                    </select>
                </div>
              </div>
              <div class="col-md-12">
                <div class="single-query">
                    <select class="selectpicker" data-live-search="true">
                      <option class="active">Type de propriété</option>
                      <option>Property Type - 1</option>
                      <option>Property Type - 2</option>
                      <option>Property Type - 3</option>
                      <option>Property Type - 4</option>
                    </select>
                </div>
              </div>
              <div class="col-md-12">
                <div class="single-query">
                    <select class="selectpicker" data-live-search="true">
                      <option class="active">Statut propriété</option>
                      <option>Property Status - 1</option>
                      <option>Property Status - 2</option>
                      <option>Property Status - 3</option>
                      <option>Property Status - 4</option>
                    </select>
                </div>
              </div>
            </form>
          </div>
          <div class="row search-2">
            <form action="#">
              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-6 col-sm-6">
                    <div class="single-query">
                        <select class="selectpicker" data-live-search="true">
                          <option class="active">Min Beds</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                        </select>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6">
                    <div class="single-query">
                        <select class="selectpicker" data-live-search="true">
                          <option class="active">Min Baths</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                        </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-6 col-sm-6">
                    <div class="single-query">
                      <input type="text" class="keyword-input" placeholder="Min Area (sq ft)"/>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6">
                    <div class="single-query">
                      <input type="text" class="keyword-input" placeholder="Max Area (sq ft)"/>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="single-query-slider">
                  <label>Price Range:</label>
                  <div class="price text-right">
                    <span>$</span>
                    <div class="leftLabel"></div>
                    <span>to $</span>
                    <div class="rightLabel"></div>
                  </div>
                  <div data-range_min="0" data-range_max="1500000" data-cur_min="0" data-cur_max="1500000" class="nstSlider">
                    <div class="bar"></div>
                    <div class="leftGrip"></div>
                    <div class="rightGrip"></div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="row">
            <div class="col-md-6 text-center">
              <div class="query-submit-button top30">
                <a href="#." class="btn_fill">Recherche</a>
              </div>
            </div>
            <div class="col-md-6 text-center">
              <div class="group-button-search">
                <a data-toggle="collapse" href=".search-propertie-filters" class="more-filter">
                  <i class="fa fa-plus text-1 bg-color-yello" aria-hidden="true"></i>
                  <i class="fa fa-minus text-2 hide bg-color-yello" aria-hidden="true"></i>
                  <div class="text-1">plus d'options</div>
                  <div class="text-2 hide">plus d'options</div>
                </a>
              </div>
            </div>
          </div>
          <div class="search-propertie-filters collapse">
            <div class="container-2">
              <div class="row">
                <div class="col-md-12">
                  <div class="search-form-group white">
                    <input type="checkbox" name="check-box" />
                    <span>Washer and Dryer</span>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="search-form-group white">
                    <input type="checkbox" name="check-box" />
                    <span>Balcony</span>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="search-form-group white">
                    <input type="checkbox" name="check-box" />
                    <span>Storage</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 class="text-uppercase  bottom40 top40">Propriété <span class="color_red">Recente</span></h3>
        <div class="media">
          <div class="media-left media-middle">
            <a href="#.">
            <img class="media-object" src="images/f-p-1.png" alt="image"/>
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading"><a href="#.">Historic Town House</a></h4>
            <p>45 Regent Street, London, UK</p>
            <a href="#.">$178,600</a>
          </div>
        </div>
        <div class="media">
          <div class="media-left media-middle">
            <a href="#.">
            <img class="media-object" src="images/f-p-2.png" alt="image"/>
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading"><a href="#.">Historic Town House</a></h4>
            <p>45 Regent Street, London, UK</p>
            <a href="#.">$178,600</a>
          </div>
        </div>
        <div class="media">
          <div class="media-left media-middle">
            <a href="#.">
            <img class="media-object" src="images/f-p-3.png" alt="image"/>
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading"><a href="#.">Historic Town House</a></h4>
            <p>45 Regent Street, London, UK</p>
            <a href="#.">$178,600</a>
          </div>
        </div>
        <div class="media">
          <div class="media-left media-middle">
            <a href="#.">
            <img class="media-object" src="images/f-p-1.png" alt="image"/>
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading"><a href="#.">Historic Town House</a></h4>
            <p>45 Regent Street, London, UK</p>
            <a href="#.">$178,600</a>
          </div>
        </div>
        <h3 class="text-uppercase bottom40 top40">Propriétés <span class="color_red">en vedette</span></h3>
        <div id="agent-2-slider" class="owl-carousel">
          <div class="item">
            <div class="property_item">
              <div class="image">
                <a href="#."><img src="images/property-listing-6.jpg" alt="listin" class="img-responsive"/></a>
                <div class="feature"><span class="tag-2">For Rent</span></div>
                <div class="price clearfix"><span class="tag pull-right">$8,600 Per Month - <small>Family Home</small></span></div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="property_item">
              <div class="image">
                <a href="#."><img src="images/property-listing-6.jpg" alt="listin" class="img-responsive"/></a>
                <div class="feature"><span class="tag-2">For Rent</span></div>
                <div class="price clearfix"><span class="tag pull-right">$8,600 Per Month - <small>Family Home</small></span></div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="property_item">
              <div class="image">
                <a href="#."><img src="images/property-listing-6.jpg" alt="listin" class="img-responsive"/></a>
                <div class="feature"><span class="tag-2">For Rent</span></div>
                <div class="price clearfix"><span class="tag pull-right">$8,600 Per Month - <small>Family Home</small></span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* <!-- LISTING --> */}

    </>
 );
}
 
export default ProprietesPage;