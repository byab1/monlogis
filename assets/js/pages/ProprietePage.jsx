import React, { useEffect, useState } from 'react';
import ProprietesApi from '../services/ProprietesApi';

const ProprietePage = props => {
  const { id } = props.match.params;

  const [proprietes, setProprietes] = useState([]);

  const fetchPropriete = async id => {
    try {
        const data = await ProprietesApi.find(id);
        setProprietes(data);
      } catch (error) {
      }
    
  }
  useEffect(() => {
      fetchPropriete(id);
  }, []);
    return ( <>
  
      <div className="page-title page-main-section parallaxie">
          <div className="container padding-bottom-top-120 text-uppercase text-center">
              <div className="main-title">
              <h1>Property</h1>
              <h5>10 Years Of Experience!</h5>
              <div className="line_4"></div>
              <div className="line_5"></div>
              <div className="line_6"></div>
              <a href="index.html">accueil</a>
              <span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span>
              <a href="property-details-1.html">Property details Style - 1</a> 
              </div>
          </div>
      </div>
      <section className="property-details padding">
          <div className="container">
            <div className="row">
              {proprietes.map(propriete =>
              <div key={propriete.id} className="col-md-12">
                <h2 className="text-uppercase">{propriete.nomPropriete}</h2>
                <p className="bottom20">45 Regent Street, London, UK</p>
              </div>
              )};
            </div>
            <div className="row">
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-12">
                    <div id="property-d-1" className="owl-carousel">
                      <div className="item"><img src="images/property-d-1-1.jpg" alt="image" /></div>
                      <div className="item"><img src="images/property-d-1-1.jpg" alt="image" /></div>
                      <div className="item"><img src="images/property-d-1-1.jpg" alt="image" /></div>
                      <div className="item"><img src="images/property-d-1-1.jpg" alt="image" /></div>
                      <div className="item"><img src="images/property-d-1-1.jpg" alt="image" /></div>
                      <div className="item"><img src="images/property-d-1-1.jpg" alt="image" /></div>
                      <div className="item"><img src="images/property-d-1-1.jpg" alt="image" /></div>
                    </div>
                    <div id="property-d-1-2" className="owl-carousel">
                      <div className="item"><img src="images/property-d-s-1-1.jpg" alt="image" /></div>
                      <div className="item"><img src="images/property-d-s-1-2.jpg" alt="image" /></div>
                      <div className="item"><img src="images/property-d-s-1-3.jpg" alt="image" /></div>
                      <div className="item"><img src="images/property-d-s-1-4.jpg" alt="image" /></div>
                      <div className="item"><img src="images/property-d-s-1-5.jpg" alt="image" /></div>
                      <div className="item"><img src="images/property-d-s-1-1.jpg" alt="image" /></div>
                      <div className="item"><img src="images/property-d-s-1-2.jpg" alt="image" /></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="property-tab">
                      <ul className="nav nav-tabs" role="tablist">
                        <li role="presentation" className="active"><a href="#description" aria-controls="description" role="tab" data-toggle="tab">Description</a></li>
                        <li role="presentation"><a href="#summary" aria-controls="summary" role="tab" data-toggle="tab">Summary</a></li>
                        <li role="presentation"><a href="#features" aria-controls="features" role="tab" data-toggle="tab">Features</a></li>
                        <li role="presentation"><a href="#plan" aria-controls="plan" role="tab" data-toggle="tab">Plans</a></li>
                        <li role="presentation"><a href="#tab_contact" aria-controls="tab_contact" role="tab" data-toggle="tab">Contact</a></li>
                      </ul>
                      <div className="tab-content">
                        <div role="tabpanel" className="tab-pane active" id="description">
                          <h3 className="text-uppercase  bottom20 top10">Property <span className="color_red">Description</span></h3>
                          <p className="p-font-15">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et dui vestibulum, bibendum purus sit amet, vulputate mauris. Ut adipiscing gravida tincidunt. Duis euismod placerat rhoncus. Phasellus mollis imperdiet placerat. Sed ac turpis nisl. Mauris at ante mauris. Aliquam posuere fermentum lorem, a aliquam mauris rutrum a. Curabitur sit amet pretium lectus, nec consequat orci.</p>
                          <p className="p-font-15 top30 bottom30">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis et metus in libero sollicitudin venenatis eu sed enim. Nam felis lorem, suscipit ac nisl ac, iaculis dapibus tellus. Cras ante justo, aliquet quis placerat nec, molestie id turpis.</p>
                          <div className="property_meta bottom40">
                            <span><i className="fa fa-object-group"></i>530 sq ft </span>
                            <span><i className="fa fa-bed"></i>2 Bedrooms</span>
                            <span><i className="fa fa-bath"></i>3 Bathroom</span>
                            <span><i className="fa fa-car"></i>1 Garage</span>
                          </div>
                          <a className="link_arrow" href="#.">Read More</a>
                        </div>
                        <div role="tabpanel" className="tab-pane" id="summary">
                          <div className="row property-d-table">
                            <div className="col-md-12">
                              <h3 className="text-uppercase  bottom30 top10">Quick <span className="color_red">Summary</span></h3>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                              <table className="table table-striped table-responsive">
                                <tbody>
                                  <tr>
                                    <td><b>Property Id</b></td>
                                    <td className="text-right">5456</td>
                                  </tr>
                                  <tr>
                                    <td><b>Price</b></td>
                                    <td className="text-right">$8,600 / month</td>
                                  </tr>
                                  <tr>
                                    <td><b>Property Size</b></td>
                                    <td className="text-right">5,500 ft2</td>
                                  </tr>
                                  <tr>
                                    <td><b>Bedrooms</b></td>
                                    <td className="text-right">5</td>
                                  </tr>
                                  <tr>
                                    <td><b>Bathrooms</b></td>
                                    <td className="text-right">3</td>
                                  </tr>
                                  <tr>
                                    <td><b>Available From</b></td>
                                    <td className="text-right">22-04-2017</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                              <table className="table table-striped table-responsive">
                                <tbody>
                                  <tr>
                                    <td><b>Status</b></td>
                                    <td className="text-right">Rent</td>
                                  </tr>
                                  <tr>
                                    <td><b>Year Built</b></td>
                                    <td className="text-right">1991</td>
                                  </tr>
                                  <tr>
                                    <td><b>Garages</b></td>
                                    <td className="text-right">1</td>
                                  </tr>
                                  <tr>
                                    <td><b>Cross Streets</b></td>
                                    <td className="text-right">Nordoff</td>
                                  </tr>
                                  <tr>
                                    <td><b>Floors</b></td>
                                    <td className="text-right">Carpet - Ceramic Tile</td>
                                  </tr>
                                  <tr>
                                    <td><b>Plumbing</b></td>
                                    <td className="text-right">Full Copper Plumbing</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div role="tabpanel" className="tab-pane" id="features">
                          <div className="row">
                            <div className="col-md-12">
                              <h3 className="text-uppercase  bottom30 top10">Proprty <span className="color_red">Features</span></h3>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                              <ul className="pro-list">
                                <li>
                                  Air Conditioning
                                </li>
                                <li>
                                  Barbeque
                                </li>
                                <li>
                                  Dryer
                                </li>
                                <li>
                                  Laundry
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                              <ul className="pro-list">
                                <li>
                                  Microwave
                                </li>
                                <li>
                                  Outdoor Shower
                                </li>
                                <li>
                                  Refrigerator
                                </li>
                                <li>
                                  Swimming Pool
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                              <ul className="pro-list">
                                <li>
                                  Quiet Neighbourhood
                                </li>
                                <li>
                                  TV Cable & WIFI
                                </li>
                                <li>
                                  Window Coverings
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div role="tabpanel" className="tab-pane bg_light" id="plan">
                          <div className="row">
                            <div className="col-md-12">
                              <h3 className="text-uppercase bottom20 top10">Our <span className="color_red">Plans</span></h3>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12 top10">
                              <div className="image">
                                <img src="images/property-d-1-f-1.jpg" alt="image" />
                                <div className="overlay border_radius">
                                  <a className="fancybox centered" href="images/property-d-1-f-1.jpg" data-fancybox-group="gallery"><i className="icon-focus"></i></a>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12 top10">
                              <div className="image">
                                <img src="images/property-d-1-f-2.jpg" alt="image" />
                                <div className="overlay border_radius">
                                  <a className="fancybox centered" href="images/property-d-1-f-1.jpg" data-fancybox-group="gallery"><i className="icon-focus"></i></a>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12 top10">
                              <div className="image">
                                <img src="images/property-d-1-f-3.jpg" alt="image" />
                                <div className="overlay border_radius">
                                  <a className="fancybox centered" href="images/property-d-1-f-1.jpg" data-fancybox-group="gallery"><i className="icon-focus"></i></a>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12 top10">
                              <div className="image">
                                <img src="images/property-d-1-f-4.jpg" alt="image" />
                                <div className="overlay border_radius">
                                  <a className="fancybox centered" href="images/property-d-1-f-1.jpg" data-fancybox-group="gallery"><i className="icon-focus"></i></a>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12 top10">
                              <div className="image">
                                <img src="images/property-d-1-f-5.jpg" alt="image" />
                                <div className="overlay border_radius">
                                  <a className="fancybox centered" href="images/property-d-1-f-1.jpg" data-fancybox-group="gallery"><i className="icon-focus"></i></a>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12 top10">
                              <div className="image">
                                <img src="images/property-d-1-f-6.jpg" alt="image" />
                                <div className="overlay border_radius">
                                  <a className="fancybox centered" href="images/property-d-1-f-1.jpg" data-fancybox-group="gallery"><i className="icon-focus"></i></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div role="tabpanel" className="tab-pane" id="tab_contact">
                          <div className="row">
                            <div className="col-md-12">
                              <h3 className="text-uppercase  bottom30 top10">Contact <span className="color_red">Agent</span></h3>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                              <div className="agent-p-img"> <img src="images/agent-p-1.jpg" className="img-responsive" alt="image" /> </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                              <div className="agent-p-contact">
                                <div className="our-agent-box">
                                  <h3 className="bottom10">Kristen Kononets</h3>
                                  <p className="bottom30">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh tempor cum soluta nobis consectetuer adipiscing eleifend option congue nihil imperdiet doming…</p>
                                </div>
                                <div className="agetn-contact">
                                  <h6>Phone:</h6>
                                  <h6>Mobile:</h6>
                                  <h6>Email Adress:</h6>
                                  <h6>Skype:</h6>
                                </div>
                                <div className="agetn-contact-2">
                                  <p>(+01) 34 56 7890</p>
                                  <p>(+033) 34 56 7890</p>
                                  <p>bohdan@ideahomes.com</p>
                                  <p>bohdan.kononets</p>
                                </div>
                              </div>
                              <ul className="socials">
                                <li><a href="#."><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#."><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#."><i className="fa fa-youtube"></i></a></li>
                                <li><a href="#."><i className="fa fa-instagram"></i></a></li>
                                <li><a href="#."><i className="fa fa-pinterest"></i></a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="row top30">
                            <div className="col-xs-12">
                              <form className="findus">
                                <div className="row">
                                  <div className="col-sm-6">
                                    <div className="single-query">
                                      <input type="text" placeholder="Your Name" className="keyword-input"/>
                                    </div>
                                    <div className="single-query">
                                      <input type="text" placeholder="Phone Number" className="keyword-input"/>
                                    </div>
                                    <div className="single-query">
                                      <input type="text" placeholder="Email Adress" className="keyword-input"/>
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="single-query">
                                      <textarea placeholder="Massege"></textarea>
                                    </div>
                                  </div>
                                  <div className="col-sm-12">
                                    <input type="submit" value="Submit Now" className="btn_fill"/>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="social-networks top40">
                                <div className="social-icons-2">
                                  <span className="share-it">Share: </span>
                                  <span><a href="#."> Facebook</a></span>
                                  <span><a href="#.">Twitter</a></span>
                                  <span><a href="#."> Google +</a></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="property-query-area">
                  <div className="row">
                    <div className="col-md-12">
                      <h3 className="text-uppercase  bottom40">Advance <span className="color_red">Search</span></h3>
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
                              <option className="active">Property Type</option>
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
                              <option className="active">Property Status</option>
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
                      <div className="col-md-6 text-center  top30">
                        <div className="query-submit-button">
                          <button type="submit" className="btn_fill black">Search</button>
                        </div>
                      </div>
                      <div className="col-md-6 text-center">
                        <div className="group-button-search">
                          <a data-toggle="collapse" href=".search-propertie-filters" className="more-filter">
                            <i className="fa fa-plus text-1 bg-color-yello" aria-hidden="true"></i> <i className="fa fa-minus text-2 hide bg-color-yello" aria-hidden="true"></i>
                            <div className="text-1">more options</div>
                            <div className="text-2 hide">more options</div>
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="search-propertie-filters collapse">
                    <div className="container-2">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="search-form-group white">
                            <input type="checkbox" name="check-box" />
                            <span>Washer and Dryer</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="search-form-group white">
                            <input type="checkbox" name="check-box" />
                            <span>Balcony</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="search-form-group white">
                            <input type="checkbox" name="check-box" />
                            <span>Storage</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="search-form-group white">
                            <input type="checkbox" name="check-box" />
                            <span>Balcony</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="search-form-group white">
                            <input type="checkbox" name="check-box" />
                            <span>Storage</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="search-form-group white">
                            <input type="checkbox" name="check-box" />
                            <span>Balcony</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <h3 className="text-uppercase  bottom40 top40">Recent <span className="color_red">Properties</span></h3>
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
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <h3 className="text-uppercase bottom40 top40">Featured <span className="color_red">Properties</span></h3>
                  </div>
                  <div className="col-md-12">
                    <div id="agent-2-slider" className="owl-carousel">
                      <div className="item">
                        <div className="property_item heading_space">
                          <div className="image">
                            <a href="#."><img src="images/property-listing-6.jpg" alt="listin" className="img-responsive"/></a>
                            <div className="feature"><span className="tag-2">For Rent</span></div>
                            
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="property_item heading_space">
                          <div className="image">
                            <a href="#."><img src="images/property-listing-6.jpg" alt="listin" className="img-responsive"/></a>
                            <div className="feature"><span className="tag-2">For Rent</span></div>
                            
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="property_item heading_space">
                          <div className="image">
                            <a href="#."><img src="images/property-listing-6.jpg" alt="listin" className="img-responsive"/></a>
                            <div className="feature"><span className="tag-2">For Rent</span></div>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </section>

    <section className="bg_light padding">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 bottom40">
              <h2 className="text-uppercase">Property <span className="color_red">Map</span></h2>
              <div className="line_1"></div>
              <div className="line_2"></div>
              <div className="line_3"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              
              <div id="map_canvas"></div>
            </div>
          </div>
        </div>
    </section>

    <section id="agent-p-2" class="property-details padding">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 bottom40">
              <h2 className="text-uppercase">Similar <span className="color_red">Properties </span></h2>
              <div className="line_1"></div>
              <div className="line_2"></div>
              <div className="line_3"></div>
            </div>
          </div>
          <div className="row">
            <div id="property-1-slider" className="owl-carousel">
              <div className="item">
                <div className="property_item heading_space">
                  <div className="image">
                    <img src="images/b-d-property-2.jpg" alt="listin" className="img-responsive"/>
                    <div className="overlay">
                      <div className="centered"><a className="link_arrow white_border" href="property_details_1.html">View Detail</a></div>
                    </div>
                    <div className="feature"><span className="tag">Featured</span></div>
                    <div className="price"><span className="tag">For Sale</span></div>
                    <div className="property_meta">
                      <span><i className="fa fa-object-group"></i>530 sq ft </span>
                      <span><i className="fa fa-bed"></i>2 Bedrooms</span>
                      <span><i className="fa fa-bath"></i>1 Bathroom</span>
                    </div>
                  </div>
                  <div className="proerty_content">
                    <div className="proerty_text">
                      <h3><a href="property_details_1.html">House in New York City</a></h3>
                      <span className="bottom10">Merrick Way, Miami, USA</span>
                      <p><strong>$83,600,200</strong></p>
                    </div>
                    <div className="favroute clearfix">
                      <p className="pull-left"><i className="icon-calendar2"></i> 3 Days ago</p>
                      <ul className="pull-right">
                        <li><a href="#."><i className="icon-video"></i></a></li>
                        <li><a href="#."><i className="icon-like"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="property_item heading_space">
                  <div className="image">
                    <img src="images/b-d-property.jpg" alt="listin" className="img-responsive"/>
                    <div className="overlay">
                      <div className="centered"><a className="link_arrow white_border" href="property_details_1.html">View Detail</a></div>
                    </div>
                    <div className="feature"><span className="tag">Featured</span></div>
                    <div className="price"><span className="tag">For Sale</span></div>
                    <div className="property_meta">
                      <span><i className="fa fa-object-group"></i>530 sq ft </span>
                      <span><i className="fa fa-bed"></i> 3 Bedrooms</span>
                      <span><i className="fa fa-bath"></i>3 Bathroom</span>
                    </div>
                  </div>
                  <div className="proerty_content">
                    <div className="proerty_text">
                      <h3><a href="property_details_1.html">House in New York City</a></h3>
                      <span className="bottom10">Merrick Way, Miami, USA</span>
                      <p><strong>$83,600,200</strong></p>
                    </div>
                    <div className="favroute clearfix">
                      <p className="pull-left"><i className="icon-calendar2"></i> 3 Days ago</p>
                      <ul className="pull-right">
                        <li><a href="#."><i className="icon-video"></i></a></li>
                        <li><a href="#."><i className="icon-like"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="property_item heading_space">
                  <div className="image">
                    <img src="images/b-d-property-2.jpg" alt="listin" className="img-responsive"/>
                    <div className="overlay">
                      <div className="centered"><a className="link_arrow white_border" href="property_details_1.html">View Detail</a></div>
                    </div>
                    <div className="feature"><span className="tag">Featured</span></div>
                    <div className="price"><span className="tag">For Sale</span></div>
                    <div className="property_meta">
                      <span><i className="fa fa-object-group"></i>530 sq ft </span>
                      <span><i className="fa fa-bed"></i>2 Bedrooms</span>
                      <span><i className="fa fa-bath"></i>1 Bathroom</span>
                    </div>
                  </div>
                  <div className="proerty_content">
                    <div className="proerty_text">
                      <h3><a href="property_details_1.html">House in New York City</a></h3>
                      <span className="bottom10">Merrick Way, Miami, USA</span>
                      <p><strong>$83,600,200</strong></p>
                    </div>
                    <div className="favroute clearfix">
                      <p className="pull-left"><i className="icon-calendar2"></i> 3 Days ago</p>
                      <ul className="pull-right">
                        <li><a href="#."><i className="icon-video"></i></a></li>
                        <li><a href="#."><i className="icon-like"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="property_item heading_space">
                  <div className="image">
                    <img src="images/b-d-property-2.jpg" alt="listin" className="img-responsive"/>
                    <div className="overlay">
                      <div className="centered"><a className="link_arrow white_border" href="property_details_1.html">View Detail</a></div>
                    </div>
                    <div className="feature"><span className="tag">Featured</span></div>
                    <div className="price"><span className="tag">For Sale</span></div>
                    <div className="property_meta">
                      <span><i className="fa fa-object-group"></i>5,302 sq ft </span>
                      <span><i className="fa fa-bed"></i>2 Bedrooms</span>
                      <span><i className="fa fa-bath"></i>1 Bathroom</span>
                    </div>
                  </div>
                  <div className="proerty_content">
                    <div className="proerty_text">
                      <h3><a href="property_details_1.html">House in New York City</a></h3>
                      <span className="bottom10">Merrick Way, Miami, USA</span>
                      <p><strong>$83,600,200</strong></p>
                    </div>
                    <div className="favroute clearfix">
                      <p className="pull-left"><i className="icon-calendar2"></i> 3 Days ago</p>
                      <ul className="pull-right">
                        <li><a href="#."><i className="icon-video"></i></a></li>
                        <li><a href="#."><i className="icon-like"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="property_item heading_space">
                  <div className="image">
                    <img src="images/b-d-property.jpg" alt="listin" className="img-responsive"/>
                    <div className="overlay">
                      <div className="centered"><a className="link_arrow white_border" href="property_details_1.html">View Detail</a></div>
                    </div>
                    <div className="feature"><span className="tag">Featured</span></div>
                    <div className="price"><span className="tag">For Sale</span></div>
                    <div className="property_meta">
                      <span><i className="fa fa-object-group"></i>5,630 sq ft </span>
                      <span><i className="fa fa-bed"></i>6 Bedrooms</span>
                      <span><i className="fa fa-bath"></i>8 Bathroom</span>
                    </div>
                  </div>
                  <div className="proerty_content">
                    <div className="proerty_text">
                      <h3><a href="property_details_1.html">House in New York City</a></h3>
                      <span className="bottom10">Merrick Way, Miami, USA</span>
                      <p><strong>$83,600,200</strong></p>
                    </div>
                    <div className="favroute clearfix">
                      <p className="pull-left"><i className="icon-calendar2"></i> 3 Days ago</p>
                      <ul className="pull-right">
                        <li><a href="#."><i className="icon-video"></i></a></li>
                        <li><a href="#."><i className="icon-like"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="property_item heading_space">
                  <div className="image">
                    <img src="images/b-d-property-2.jpg" alt="listin" className="img-responsive"/>
                    <div className="overlay">
                      <div className="centered"><a className="link_arrow white_border" href="property_details_1.html">View Detail</a></div>
                    </div>
                    <div className="feature"><span className="tag">Featured</span></div>
                    <div className="price"><span className="tag">For Sale</span></div>
                    <div className="property_meta">
                      <span><i className="fa fa-object-group"></i>530 sq ft </span>
                      <span><i className="fa fa-bed"></i>2 Bedrooms</span>
                      <span><i className="fa fa-bath"></i>1 Bathroom</span>
                    </div>
                  </div>
                  <div className="proerty_content">
                    <div className="proerty_text">
                      <h3><a href="property_details_1.html">House in New York City</a></h3>
                      <span className="bottom10">Merrick Way, Miami, USA</span>
                      <p><strong>$83,600,200</strong></p>
                    </div>
                    <div className="favroute clearfix">
                      <p className="pull-left"><i className="icon-calendar2"></i> 3 Days ago</p>
                      <ul className="pull-right">
                        <li><a href="#."><i className="icon-video"></i></a></li>
                        <li><a href="#."><i className="icon-like"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
 </>);
}
 
export default ProprietePage;