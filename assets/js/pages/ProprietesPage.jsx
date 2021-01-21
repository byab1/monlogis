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
<div className="page-title page-main-section parallaxie">
  <div className="container padding-bottom-top-120 text-uppercase text-center">
    <div className="main-title">
      <h1>Listings</h1>
      <h5>10 Years Of Experience!</h5>
      <div className="line_4"></div>
      <div className="line_5"></div>
      <div className="line_6"></div>
      <a href="index.html">accueil</a>
      <span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span>
      <Link to="/proprietes">Liste des proprietes</Link> 
    </div>
  </div>
</div>
{/* <!-- PAGE TITLE --> */}


{/* <!-- LISTING STYLE--> */}
<section id="agent-p-2" className="listing-1 bg_light padding_top">
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <h2 className="uppercase">LISTE <span className="color_red">DES PROPRIETES</span></h2>
        <div className="line_1"></div>
        <div className="line_2"></div>
        <div className="line_3"></div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-8 col-sm-12 col-xs-12">
        <form className="findus">
          <div className="row bottom30">
            <div className="col-md-12">
              <div className="single-query">
                  <select className="selectpicker" data-live-search="true">
                    <option className="active">Default Order</option>
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
          <div className="row">
            {paginationProprietes.map(propriete => 
            <div key={propriete.id} className="col-md-6 col-sm-6">
              <div className="property_item heading_space">
                <div className="image">
                  <img src={propriete.photoPropriete} alt="listin" className="img-responsive"/>
                  <div className="overlay">
                    <div className="centered"><Link className="link_arrow white_border" to={`/proprietes/${propriete.id}/details`}>Voir Détail</Link></div>
                  </div>
                  <div className="feature"><span className="tag">{propriete.statut}</span></div>
                  <div className="price"><span className="tag">For Sale</span></div>
                  <div className="property_meta">
                    <span><i className="fa fa-object-group"></i>530 sq ft </span>
                    <span><i className="fa fa-bed"></i>{propriete.nbrPiece} chambre</span>
                    <span><i className="fa fa-bath"></i>{propriete.salleEau} douche</span>
                  </div>
                </div>
                <div className="proerty_content">
                  <div className="proerty_text">
                    <h3><Link to={"/proprietes/" + propriete.id + "/details"}>{propriete.nomPropriete}</Link></h3>
                    <span className="bottom10">{propriete.adrPropriete} | {propriete.ville}</span>
                    <p><strong>{propriete.prixPropriete} FCFA</strong></p>
                  </div>
                  <div className="favroute clearfix">
                    <p className="pull-left"><i className="icon-calendar2"></i> {propriete.dateAjout}</p>
                    <ul className="pull-right">
                      <li><a href="#."><i className="icon-video"></i></a></li>
                      <li><a href="#."><i className="icon-like"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            )}
          </div>
          <ul className="pager top40 padding_bottom">
            {pages.map(page => 
            <li key={page} className={currentPage === page && " active"}>
              <a onClick={()=> handlePageChange(page)}>{page}</a>
            </li>
            )}
          </ul>
        </form>
      </div>
      <div className="col-md-4 colsm-4 col-xs-12">
        <div className="property-query-area padding-all20">
          <div className="row">
            <div className="col-md-12">
              <h3 className="text-uppercase  bottom40 top10">Recherche <span className="color_red">Avancée</span></h3>
            </div>
          </div>
          <div className="row">
            <form className="findus">
              <div className="col-md-12">
                <div className="single-query">
                  <input type="text" className="keyword-input" placeholder="Keyword (e.g. 'office')"/>
                </div>
              </div>
              <div className="col-md-12">
                <div className="single-query">
                    <select className="selectpicker" data-live-search="true">
                      <option selected="" value="any">Location</option>
                      <option>Location - 1</option>
                      <option>Location - 2</option>
                      <option>Location - 3</option>
                      <option>Location - 4</option>
                    </select>
                </div>
              </div>
              <div className="col-md-12">
                <div className="single-query">
                    <select className="selectpicker" data-live-search="true">
                      <option className="active">Type de propriété</option>
                      <option>Property Type - 1</option>
                      <option>Property Type - 2</option>
                      <option>Property Type - 3</option>
                      <option>Property Type - 4</option>
                    </select>
                </div>
              </div>
              <div className="col-md-12">
                <div className="single-query">
                    <select className="selectpicker" data-live-search="true">
                      <option className="active">Statut propriété</option>
                      <option>Property Status - 1</option>
                      <option>Property Status - 2</option>
                      <option>Property Status - 3</option>
                      <option>Property Status - 4</option>
                    </select>
                </div>
              </div>
            </form>
          </div>
          <div className="row search-2">
            <form action="#">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <div className="single-query">
                        <select className="selectpicker" data-live-search="true">
                          <option className="active">Min Beds</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                        </select>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="single-query">
                        <select className="selectpicker" data-live-search="true">
                          <option className="active">Min Baths</option>
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
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <div className="single-query">
                      <input type="text" className="keyword-input" placeholder="Min Area (sq ft)"/>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="single-query">
                      <input type="text" className="keyword-input" placeholder="Max Area (sq ft)"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="single-query-slider">
                  <label>Price Range:</label>
                  <div className="price text-right">
                    <span>$</span>
                    <div className="leftLabel"></div>
                    <span>to $</span>
                    <div className="rightLabel"></div>
                  </div>
                  <div data-range_min="0" data-range_max="1500000" data-cur_min="0" data-cur_max="1500000" className="nstSlider">
                    <div className="bar"></div>
                    <div className="leftGrip"></div>
                    <div className="rightGrip"></div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="row">
            <div className="col-md-6 text-center">
              <div className="query-submit-button top30">
                <a href="#." className="btn_fill">Recherche</a>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div className="group-button-search">
                <a data-toggle="collapse" href=".search-propertie-filters" className="more-filter">
                  <i className="fa fa-plus text-1 bg-color-yello" aria-hidden="true"></i>
                  <i className="fa fa-minus text-2 hide bg-color-yello" aria-hidden="true"></i>
                  <div className="text-1">plus d'options</div>
                  <div className="text-2 hide">plus d'options</div>
                </a>
              </div>
            </div>
          </div>
          <div className="search-propertie-filters collapse">
            <div className="container-2">
              <div className="row">
                <div className="col-md-12">
                  <div className="search-form-group white">
                    <input type="checkbox" name="check-box" />
                    <span>Washer and Dryer</span>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="search-form-group white">
                    <input type="checkbox" name="check-box" />
                    <span>Balcony</span>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="search-form-group white">
                    <input type="checkbox" name="check-box" />
                    <span>Storage</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-uppercase  bottom40 top40">Propriété <span className="color_red">Recente</span></h3>
        <div className="media">
          <div className="media-left media-middle">
            <a href="#.">
            <img className="media-object" src="images/f-p-1.png" alt="image"/>
            </a>
          </div>
          <div className="media-body">
            <h4 className="media-heading"><a href="#.">Historic Town House</a></h4>
            <p>45 Regent Street, London, UK</p>
            <a href="#.">$178,600</a>
          </div>
        </div>
        <div className="media">
          <div className="media-left media-middle">
            <a href="#.">
            <img className="media-object" src="images/f-p-2.png" alt="image"/>
            </a>
          </div>
          <div className="media-body">
            <h4 className="media-heading"><a href="#.">Historic Town House</a></h4>
            <p>45 Regent Street, London, UK</p>
            <a href="#.">$178,600</a>
          </div>
        </div>
        <div className="media">
          <div className="media-left media-middle">
            <a href="#.">
            <img className="media-object" src="images/f-p-3.png" alt="image"/>
            </a>
          </div>
          <div className="media-body">
            <h4 className="media-heading"><a href="#.">Historic Town House</a></h4>
            <p>45 Regent Street, London, UK</p>
            <a href="#.">$178,600</a>
          </div>
        </div>
        <div className="media">
          <div className="media-left media-middle">
            <a href="#.">
            <img className="media-object" src="images/f-p-1.png" alt="image"/>
            </a>
          </div>
          <div className="media-body">
            <h4 className="media-heading"><a href="#.">Historic Town House</a></h4>
            <p>45 Regent Street, London, UK</p>
            <a href="#.">$178,600</a>
          </div>
        </div>
        <h3 className="text-uppercase bottom40 top40">Propriétés <span className="color_red">en vedette</span></h3>
        <div id="agent-2-slider" className="owl-carousel">
          <div className="item">
            <div className="property_item">
              <div className="image">
                <a href="#."><img src="images/property-listing-6.jpg" alt="listin" className="img-responsive"/></a>
                <div className="feature"><span className="tag-2">For Rent</span></div>
                <div className="price clearfix"><span className="tag pull-right">$8,600 Per Month - <small>Family Home</small></span></div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="property_item">
              <div className="image">
                <a href="#."><img src="images/property-listing-6.jpg" alt="listin" className="img-responsive"/></a>
                <div className="feature"><span className="tag-2">For Rent</span></div>
                <div className="price clearfix"><span className="tag pull-right">$8,600 Per Month - <small>Family Home</small></span></div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="property_item">
              <div className="image">
                <a href="#."><img src="images/property-listing-6.jpg" alt="listin" className="img-responsive"/></a>
                <div className="feature"><span className="tag-2">For Rent</span></div>
                <div className="price clearfix"><span className="tag pull-right">$8,600 Per Month - <small>Family Home</small></span></div>
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