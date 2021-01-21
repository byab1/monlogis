import React, { useEffect, useState } from 'react';
import AgenceApi from '../services/agencesAPI';

const AgencePage = (props) => {

  const { id } = props.match.params;

  const [showAgence, setShowAgence] = useState([]);

  const fetchAgence = async id => {
    try {
        const data = await AgenceApi.find(id);
        setShowAgence(data);
      } catch (error) {
    }
    
  }
  useEffect(() => {
      fetchAgence(id);
  }, []);

    return ( 
    <>
       <div className="page-title page-main-section parallaxie">
          <div className="container padding-bottom-top-120 text-uppercase text-center">
              <div className="main-title">
              <h1>Détails sur l'agence</h1>
              <h5>10 Years Of Experience!</h5>
              <div className="line_4"></div>
              <div className="line_5"></div>
              <div className="line_6"></div>
              <a href="index.html">accueil</a>
              <span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span>
              <a href="property-details-1.html">Détail agence</a> 
              </div>
          </div>
       </div> 
       <section id="news-section-1" className="padding agency-listing bg_light">
           <div className="container">
               <div className="row">
                   <div className="col-md-8">
                       <div className="agency-listing-box">
                           <div className="image-round">
                               <div>
                                    <img src="images/testinomils.png" alt="image" />
                                    <span>
                                    09.12.2017
                                    </span>
                                </div>
                           </div>
                           <div className="details">
                                <div className="agency-box">
                                    <h2>Phasellus pharetra</h2>
                                    <h3><i className="fa fa-map-marker"></i> 16 Property</h3>
                                    <p>Proin condimentum tempus ultrices. Suspendisse vestibulum suscipit erat, ac efficitur lorem. Nullam non ex vel turpis imperdiet maximus sit amet nec odio. Donec mauris nisl, vestibulum id efficitur at, convallis id dui. Sed enim nisl, ultrices vitae sodales eu, vestibulum a mi. Morbi consectetur pulvinar sagittis. Phasellus pharetra diam id leo gravida pharetra. In rutrum est gravida, maximus mi ac, mattis metus. Ut at tempus sem. Vivamus condimentum erat eget aliquet dignissim. Proin condimentum tempus ultrices. Suspendisse vestibulum suscipit erat, ac efficitur lorem. Nullam non ex vel turpis imperdiet maximus sit amet nec odio. Donec mauris nisl, vestibulum id efficitur at, convallis id dui. Sed enim nisl, ultrices vitae sodales eu, vestibulum a mi. Morbi consectetur pulvinar sagittis. Phasellus pharetra diam id leo gravida pharetra. In rutrum est gravida, maximus mi ac, mattis metus. Ut at tempus sem. Vivamus condimentum erat eget aliquet dignissim. </p>
                                    <a href="#" className="btn_fill">Read More</a>
                                </div>
                            </div>
                       </div>
                       <div className="row">
                            <div className="col-md-12 margin-t60 margin-b60">
                                <h2 className="text-uppercase">Vos <span className="color_red">Commentaires</span></h2>
                                <div className="line_1"></div>
                                <div className="line_2"></div>
                                <div className="line_3"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2 col-sm-2 col-xs-12">
                                <img src="images/news-comnts-1.jpg" alt="image"/>
                            </div>
                            <div className="col-md-10 col-sm-10 col-xs-12">
                                <div className="news-comnts-text">
                                    <h4>Alison Johnson <span>Feb 22, 2017</span></h4>
                                    <a href="#." className="link_arrow top20">Reply</a>
                                    <p>Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin sagittis dolor sed mi elementum pretium. Donec et justo ante. Vivamus egestas sodales est, eu rhoncus urna semper eu. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.</p>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <div class="row">
                            <div class="col-md-3 col-sm-3 col-xs-12 text-right">
                                <img src="images/news-comnts-1.jpg" alt="image"/>
                            </div>
                            <div class="col-md-9 col-sm-9 col-xs-12">
                                <div class="news-comnts-text">
                                    <h4>Alison Johnson <span>Feb 22, 2017</span></h4>
                                    <a href="#." class="link_arrow top20">Reply</a>
                                    <p class="p-font-15">Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin sagittis dolor sed mi elementum pretium. Donec et justo ante. Vivamus egestas sodales</p>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="row bg_white">
                            <div className="col-md-12 margin-t60 margin-b60">
                                <h2 className="text-uppercase">Laissez un <span className="color_red">Commentaire</span></h2>
                                <div className="line_1"></div>
                                <div className="line_2"></div>
                                <div className="line_3"></div>
                            </div>
                            <div className="col-md-12">
                                <div className="agent-p-form padding_bottom">
                                    <form className="findus" onSubmit="return false">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="single-query">
                                                    <input type="text" className="keyword-input" placeholder="Your Name" id="name"/>
                                                </div>
                                                <div className="single-query">
                                                    <input type="text" className="keyword-input" placeholder="Email Adress" id="email"/>
                                                </div>
                                                <div className="single-query">
                                                    <input type="text" className="keyword-input" placeholder="Website" id="phone"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="single-query">
                                                    <textarea placeholder="Massege" id="massege"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <button type="submit" className="btn_fill" id="btn_submit">Post Comment</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
               <div className="col-md-4 col-lg-4">
                    <div className="search_box blog-thumbnail">
                        <div className="input-group">
                            <input className="form-control custom_input" placeholder="Search" type="text"/>
                            <span className="input-group-btn">
                                <button className="btn btn-default custom_input" type="button"><i className="fa fa-search"></i></button>
                            </span>
                        </div>
                    </div>
                    <div className="blog_info blog-thumbnail">
                        <div className="blogimagedescription">
                            <h3>Categories</h3>
                        </div>
                        <ul className="archieves clearfix">
                            <li><a href="#.">Property updates</a></li>
                            <li><a href="#.">Near by places</a></li>
                            <li><a href="#.">Aminities at sabestian villa</a></li>
                            <li><a href="#.">University near villa</a></li>
                            <li><a href="#.">Property type and title clear</a></li>
                        </ul>
                    </div>
                    <div className="blog_info blog-thumbnail">
                        <div className="blogimagedescription">
                            <h3>Popular posts</h3>
                        </div>
                        <ul className="archieves clearfix">
                            <li>
                                <div className="col-md-4 col-sm-2 padding_none">
                                    <div className="blogimage_thumbnail">
                                        <img src="images/f-p-1.png" alt="blog1 image"/>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-10">
                                    <div className="blogimagedescription">
                                        <h3><a href="#.">WE HAVe ADDED NEW FEATURES TO DreamVilla</a></h3>
                                        <p className="detail">
                                            <span><a href="#.">June 12,2015</a></span>
                                            <span><a href="#.">John doe</a></span>
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="blog_info blog-thumbnail">
                        <div className="blogimagedescription">
                            <h3>Archieves</h3>
                        </div>
                        <ul className="archieves">
                            <li><a href="#.">MAY 2015</a></li>
                            <li><a href="#.">APRIL 2015</a></li>
                            <li><a href="#.">FEBRUARY 2015</a></li>
                            <li><a href="#.">JANUARY 2015</a></li>
                            <li><a href="#.">NAOVEMBER 2014</a></li>
                        </ul>
                    </div>

                    <div className="clearfix"></div>

                    <h3 className="text-uppercase  bottom40">Tags</h3>
                    <div className="news-tag">
                        <a href="#.">Planning</a>
                        <a href="#.">Apartments</a>
                        <a href="#.">Reality Home</a>
                    </div>
                    <div className="row">
                        <div className="col-md-12 bottom20">
                            <h3 className="text-uppercase top40 bottom40">Latest <span className="color_red">Properties</span></h3>
                        </div>
                        <div className="col-md-12">
                            <div id="agent-3-slider" className="owl-carousel">
                                <div className="item">
                                    <div className="property_item">
                                        <div className="image">
                                            <a href="#."><img src="images/property-listing-6.jpg" alt="listin" className="img-responsive"/></a>
                                            <div className="feature"><span className="tag-2">For Rent</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div class="property_item">
                                        <div class="image">
                                            <a href="#."><img src="images/property-listing-6.jpg" alt="listin" class="img-responsive"/></a>
                                            <div class="feature"><span class="tag-2">For Rent</span></div>
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
    </> );
}
 
export default AgencePage;