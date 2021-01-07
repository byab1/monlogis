import axios from 'axios';
import React, { useEffect, useState } from 'react';

const HomePage = (props) => {

    const [proprietes, setProprietes] = useState([]);
    
    useEffect(()=> {
        axios.get("http://localhost:8000/api/proprietes")
        .then(response => response.data["hydra:member"])
        .then(data => setProprietes(data))
        .catch(error => console.log(error));
    }, []);
    
    return (  <>
    <section className="rev_slider_wrapper">
        <div id="rev_slider_3" className="rev_slider" data-version="5.0">
            <ul>
                <li data-transition="fade">
					<img src="images/banner-4.jpg" alt="" data-bgposition="center center" data-bgfit="cover" className="rev-slidebg"/>
					<div className="tp-caption tp-resizeme" data-x="['left','left','left','left']" data-hoffset="['15','15','30','15']" data-y="['240','200','140','140']" data-voffset="['0','0','0','0']" data-responsive_offset="on" data-visibility="['on','on','on','on']" data-transform_idle="o:1;" data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start="800">
						<h2 className="border_heading p-white">
							We Complete Your Dreams
						</h2>
					</div>
					<div className="tp-caption tp-resizeme" data-x="['left','left','left','left']" data-hoffset="['15','15','30','15']" data-y="['330','290','230','230']" data-voffset="['0','0','0','0']" data-responsive_offset="on" data-visibility="['on','on','on','off']" data-transform_idle="o:1;" data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start="800">
						<p className="p-white">Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque</p>
					</div>
					<div className="tp-caption tp-resizeme" data-x="['left','left','left','left']" data-hoffset="['15','15','30','15']" data-y="['390','350','290','240']" data-voffset="['0','0','0','0']" data-responsive_offset="on" data-visibility="['on','on','on','on']" data-transform_idle="o:1;" data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start="800">
						<a href="#." className="btn_fill">Read More</a>
					</div>
				</li>
                <li data-transition="slideremoveleft">
					<img src="images/banner-5.jpg" alt="" data-bgposition="center center" data-bgfit="cover" className="rev-slidebg"/>
					<div className="tp-caption tp-resizeme" data-x="['center','center','center','center']" data-hoffset="['15','15','0','0']" data-y="['240','200','140','140']" data-voffset="['0','0','0','0']" data-responsive_offset="on" data-visibility="['on','on','on','on']" data-transform_idle="o:1;" data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start="800">
						<h2 className="border_heading p-white">
							We Complete Your Dreams
						</h2>
					</div>
					<div className="tp-caption tp-resizeme" data-x="['center','center','center','center']" data-hoffset="['15','15','0','0']" data-y="['330','290','230','230']" data-voffset="['0','0','0','0']" data-responsive_offset="on" data-visibility="['on','on','on','off']" data-transform_idle="o:1;" data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start="800">
						<p className="p-white text-center">Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit,
														                            elementum sed
							
							varius at, adipiscing vitae est. Sed nec felis pellentesque</p>
					</div>
					<div className="tp-caption tp-resizeme" data-x="['center','center','center','center']" data-hoffset="['15','15','0','0']" data-y="['390','350','290','240']" data-voffset="['0','0','0','0']" data-responsive_offset="on" data-visibility="['on','on','on','on']" data-transform_idle="o:1;" data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start="800">
						<a href="#." className="btn_fill">Read More</a>
					</div>
				</li>
                <li data-transition="zoomout">
					<img src="images/banner-6.jpg" alt="" data-bgposition="center center" data-bgfit="cover" className="rev-slidebg"/>
					<div className="tp-caption tp-resizeme" data-x="['center','center','center','center']" data-hoffset="['15','15','0','0']" data-y="['240','200','140','140']" data-voffset="['0','0','0','0']" data-responsive_offset="on" data-visibility="['on','on','on','on']" data-transform_idle="o:1;" data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start="800">
						<h2 className="border_heading p-white">
							We Complete Your Dreams
						</h2>
					</div>
					<div className="tp-caption tp-resizeme" data-x="['center','center','center','center']" data-hoffset="['15','15','0','0']" data-y="['330','290','230','230']" data-voffset="['0','0','0','0']" data-responsive_offset="on" data-visibility="['on','on','on','off']" data-transform_idle="o:1;" data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start="800">
						<p className="p-white text-center">Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit,
														                            elementum sed
							
							varius at, adipiscing vitae est. Sed nec felis pellentesque</p>
					</div>
					<div className="tp-caption tp-resizeme" data-x="['center','center','center','center']" data-hoffset="['15','15','0','0']" data-y="['390','350','290','240']" data-voffset="['0','0','0','0']" data-responsive_offset="on" data-visibility="['on','on','on','on']" data-transform_idle="o:1;" data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start="800">
						<a href="#." className="btn_fill">Read More</a>
					</div>
				</li>
            </ul>
        </div>
    </section>
    <div id="home_icon">
        <div className="container">
            <div className="row">
                <div className="col-md-2 col-sm-4 col-xs-12 text-center">
                    <a href="listing_1.html" className="home_feature">
                        <i className="icon-icons215"></i>
                        <h4>For Sale</h4>
                        <p>Latest for sale</p>
                    </a>
                </div>
                <div className="col-md-2 col-sm-4 col-xs-12 text-center">
                    <a href="my_properties.html" className="home_feature">
                        <i className="icon-key3"></i>
                        <h4>For Rent</h4>
                        <p>Latest for sale</p>
                    </a>
                </div>
                <div className="col-md-2 col-sm-4 col-xs-12 text-center">
                    <a href="gallery_1.html" className="home_feature">
                        <i className="icon-icons74"></i>
                        <h4>Beachside</h4>
                        <p>Near the beach</p>
                    </a>
                </div>
                <div className="col-md-2 col-sm-4 col-xs-12 text-center">
                    <a href="news_details.html" className="home_feature">
                        <i className="icon-stats-dots"></i>
                        <h4>Reduced</h4>
                        <p>Price reduced</p>
                    </a>
                </div>
                <div className="col-md-2 col-sm-4 col-xs-12 text-center">
                    <a href="listing_3.html" className="home_feature">
                        <i className="icon-icons185"></i>
                        <h4>Let Us Find</h4>
                        <p>Ask an agent</p>
                    </a>
                </div>
                <div className="col-md-2 col-sm-4 col-xs-12 text-center">
                    <a href="listing_2.html" className="home_feature">
                        <i className=" icon-clipboard"></i>
                        <h4>Sell Property</h4>
                        <p>Get in touch</p>
                    </a>
                </div>
            </div>
        </div>
	</div> 
     {/* <!--  Home Icons End  -->  */}

    {/* WELCOME */}
    <section id="wellcome" className="padding">
        <div className="container">
            <div className="row">
                <div className="col-sm-1 col-md-2"></div>
                <div className="col-xs-12 col-sm-10 col-md-8 text-center">
                    <h2 className="text-uppercase">Welcome to
                        <span className="color_red">idea homes</span>
                    </h2>
                    <div className="line_1-1"></div>
                    <div className="line_2-2"></div>
                    <div className="line_3-3"></div>
                    <p className="heading_space">Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum
                                                                        sed varius at, adipiscing
                                                                        vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien.
                    </p>
                </div>
                <div className="col-sm-1 col-md-2"></div>
            </div>
            <div className="row">
                <div className="col-md-3 col-sm-3 col-xs-12 text-center">
                    <div className="welcome top40">
                        <img src="images/wellcome_1.png" alt="image"/>
                        <h4>
                            24/7 Emergency Available</h4>
                    </div>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-12 text-center">
                    <div className="welcome top40">
                        <img src="images/wellcome_2.png" alt="image"/>
                        <h4>Expert and Professional</h4>
                    </div>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-12 text-center">
                    <div className="welcome top40">
                        <img src="images/wellcome_3.png" alt="image"/>
                        <h4>Satisfaction Guarantee</h4>
                    </div>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-12 text-center">
                    <div className="welcome top40">
                        <img src="images/wellcome_4.png" alt="image"/>
                        <h4>Free Inspection</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* END WELCOME */}

    <section id="estimate" className="padding parallaxie">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="estimate_image">
                        <img src="images/estimate.png" alt="image" className="img-responsive"/>
                    </div>
				</div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="estimate_form">
                    <h2 className="text-uppercase">Search your<span className="color_red">
                            Dream</span>
                    </h2>
                    <div className="line_1"></div>
                    <div className="line_2"></div>
                    <div className="line_3"></div>
                    <p>Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at,</p>
                    <div className="property-query-area top40">
                        <form className="findus">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="single-query">
                                        <input className="keyword-input" placeholder="Keyword (e.g. 'office')" type="text"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="single-query">
                                        <select className="selectpicker" data-live-search="true">
                                            <option className="active">Loction</option>
                                            <option>Loction - 1</option>
                                            <option>Loction - 2</option>
                                            <option>Loction - 3</option>
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
                            </div>
                        </form>
                        <div className="row search-2">
                            <form className="findus">
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
                                                <input className="keyword-input" placeholder="Min Area (sq ft)" type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="single-query">
                                                <input className="keyword-input" placeholder="Max Area (sq ft)" type="text"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="query-submit-button">
                                        <button type="submit" className="btn_fill">Search</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    {/* <!-- RECENT PROPERTY --> */}
        <section id="agent-p-2" class="property-details bg_light padding">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 bottom40">
                        <h2 class="text-uppercase">Recent
                            <span class="color_red">PROPERTY</span>
                        </h2>
                        <div class="line_1"></div>
                        <div class="line_2"></div>
                        <div class="line_3"></div>
                        <p class="margin-t-20">Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum
                                                                            sed varius at, adipiscing
                            vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien.
                        </p>
					</div>
                </div>
                <div class="col-md-12">
                    <div class="row">
                        <div id="property-2-slider" class="owl-carousel">
                            {proprietes.map(propriete =>
                            <div key={propriete.id} class="item">
                                <div class="property_item bottom40">
                                    <div class="image">
                                        <img src={propriete.photoPropriete} alt="listin" class="img-responsive"/>
										<div class="property_meta">
                                            <span>
												<i class="fa fa-object-group"></i>530 sq ft
											</span>
											<span>
												<i class="fa fa-bed"></i>2</span>
											<span>
												<i class="fa fa-bath"></i>1 Bathroom</span>
                                        </div>
                                        <div class="price">
                                            <span class="tag">{propriete.statut}</span>
                                        </div>
                                        <div class="overlay">
                                            <div class="centered">
                                                <a class="link_arrow white_border" href="property_details_1.html">View Detail</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="proerty_content">
                                        <div class="proerty_text">
                                            <h3>
                                                <a href="property_details_1.html"></a>
                                            </h3>
                                            <span class="bottom10">{propriete.localisation}</span>
                                            <p>
                                                <strong>{propriete.prixPropriete}</strong>
                                            </p>
                                        </div>
                                        <div class="favroute clearfix">
                                            <p class="pull-left">
                                                <i class="icon-calendar2"></i>
                                                3 Days ago</p>
                                            <ul class="pull-right">
                                                <li>
                                                    <a href="#.">
                                                        <i class="icon-video"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#.">
                                                        <i class="icon-like"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
									</div>
                                </div>
                            </div> 
                                )}
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    {/* <!-- RECENT PROPERTY --> */}

    {/* Image & Text */}
	<section className="image-text" className="padding-bottom-top-120 parallaxie">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="image-text-heading top30 bottom30">
                        <h2 className="bottom40">We Don't Just Find<span>Great Deals</span>
                            We Create Them</h2>
                        <a href="listing-1.html" className="link_arrow white_border top10">View All Listing</a>
                    </div>
                </div>
            </div>
        </div>
	</section>
	{/* Image & Text End */}

    {/* BEST DEALS */}
	<section id="property-listing" className="padding">
					<div className="container">
						<div className="row">
							<div className="col-md-12 bottom40">
								<h2 className="text-uppercase">Best Deal
									<span className="color_red">Properties</span>
								</h2>
								<div className="line_1"></div>
								<div className="line_2"></div>
								<div className="line_3"></div>
								<p>We have Properties in these Areas View a list of Featured Properties.</p>
							</div>
						</div>
						<div className="col-md-12">
							<div className="row">
								<div id="listing_slider" className="owl-carousel">
									<div className="item clearfix">
										<div className="project1 clearfix">
											<div className="col-md-12 col-sm-12 col-xs-12 padding-left-0 project-images">
												<div className="gri">
													<figure className="effect-layla">
														<img src="images/b-d-property.jpg" alt="img"/>
														<figcaption></figcaption>
													</figure>
												</div>
												<div className="col-md-3 col-sm-3 col-xs-12 project-owl-slidee padding-left-0 project-owl-slideee">
													<div className="item background-color-white">
														<h4>Residential Project-d05</h4>
														<div className="small-title">
															<div className="line1"></div>
															<div className="line2"></div>
															<div className="clearfix"></div>
														</div>
														<div className="client-loc">
															<p>
																<span>Client:</span>
																Bryan Doe Joe</p>
															<p>
																<span>Location:</span>
																Mountain Line CA 62548</p>
															<p>
																<span>Value:</span>
																$15,000</p>
														</div>
														<a href="property_details_1.html" className="link_arrow">read more</a>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="item clearfix">
										<div className="project1 clearfix">
											<div className="col-md-12 col-sm-12 col-xs-12 padding-left-0 project-images">
												<div className="gri">
													<figure className="effect-layla">
														<img src="images/b-d-property-2.jpg" alt="img"/>
														<figcaption></figcaption>
													</figure>
												</div>
												<div className="col-md-3 col-sm-3 col-xs-12 project-owl-slidee padding-left-0 project-owl-slideee">
													<div className="item background-color-white">
														<h4>Residential Project-d05</h4>
														<div className="small-title">
															<div className="line1"></div>
															<div className="line2"></div>
															<div className="clearfix"></div>
														</div>
														<div className="client-loc">
															<p>
																<span>Client:</span>
																Bryan Doe Joe</p>
															<p>
																<span>Location:</span>
																Mountain Line CA 62548</p>
															<p>
																<span>Value:</span>
																$15,000</p>
														</div>
														<a href="property_details_1.html" className="link_arrow">read more</a>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="item clearfix">
										<div className="project1 clearfix">
											<div className="col-md-12 col-sm-12 col-xs-12 padding-left-0 project-images">
												<div className="gri">
													<figure className="effect-layla">
														<img src="images/b-d-property.jpg" alt="img"/>
														<figcaption></figcaption>
													</figure>
												</div>
												<div className="col-md-3 col-sm-3 col-xs-12 project-owl-slidee padding-left-0 project-owl-slideee">
													<div className="item background-color-white">
														<h4>Residential Project-d05</h4>
														<div className="small-title">
															<div className="line1"></div>
															<div className="line2"></div>
															<div className="clearfix"></div>
														</div>
														<div className="client-loc">
															<p>
																<span>Client:</span>
																Bryan Doe Joe</p>
															<p>
																<span>Location:</span>
																Mountain Line CA 62548</p>
															<p>
																<span>Value:</span>
																$15,000</p>
														</div>
														<a href="property_details_1.html" className="link_arrow">read more</a>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="item clearfix">
										<div className="project1 clearfix">
											<div className="col-md-12 col-sm-12 col-xs-12 padding-left-0 project-images">
												<div className="gri">
													<figure className="effect-layla">
														<img src="images/b-d-property-2.jpg" alt="img"/>
														<figcaption></figcaption>
													</figure>
												</div>
												<div className="col-md-3 col-sm-3 col-xs-12 project-owl-slidee padding-left-0 project-owl-slideee">
													<div className="item background-color-white">
														<h4>Residential Project-d05</h4>
														<div className="small-title">
															<div className="line1"></div>
															<div className="line2"></div>
															<div className="clearfix"></div>
														</div>
														<div className="client-loc">
															<p>
																<span>Client:</span>
																Bryan Doe Joe</p>
															<p>
																<span>Location:</span>
																Mountain Line CA 62548</p>
															<p>
																<span>Value:</span>
																$15,000</p>
														</div>
														<a href="property_details_1.html" className="link_arrow">read more</a>
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
	{/* BEST DEALS */}
    
    {/* OUR PARTNERS */}
	<section id="our-partner" className="padding">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                        <h2 className="text-uppercase">our
                            <span className="color_red">partners</span>
                        </h2>
                        <div className="line_1"></div>
                        <div className="line_2"></div>
                        <div className="line_3"></div>
                        <p className="bottom20">Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed
                                                                            varius at, adipiscing
                            vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien.
                        </p>
				</div>
			</div>
            <div className="row">
                <div className="col-md-12">
                    <div id="partner_slider_2" className="owl-carousel">
                        <div className="item"><img src="images/partner-1.png" alt="Our Partner"></img></div>
                        <div className="item"><img src="images/partner-2.png" alt="Our Partner"/></div>
                        <div className="item"><img src="images/partner-3.png" alt="Our Partner"/></div>
                        <div className="item"><img src="images/partner-4.png" alt="Our Partner"/></div>
                        <div className="item"><img src="images/partner-5.png" alt="Our Partner"/></div>
                        <div className="item"><img src="images/partner-1.png" alt="Our Partner"/></div>
                        <div className="item"><img src="images/partner-2.png" alt="Our Partner"/></div>
                        <div className="item"><img src="images/partner-3.png" alt="Our Partner"/></div>
                        <div className="item"><img src="images/partner-4.png" alt="Our Partner"/></div>
                        <div className="item"><img src="images/partner-5.png" alt="Our Partner"/></div>
                    </div>
                </div>
            </div>
		</div>
    </section>
	{/* OUR PARTNERS */}

    </>
    );
}
 
export default HomePage;