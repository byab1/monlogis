import React from 'react';

const CompteAgent = (props) => {
    return ( <>
    
<div class="page-title page-main-section parallaxie">
  <div class="container padding-bottom-top-120 text-uppercase text-center">
    <div class="main-title">
      <h1>Compte Agent</h1>
      <h5>10 Années d'expériences !</h5>
      <div class="line_4"></div>
      <div class="line_5"></div>
      <div class="line_6"></div>
      <a href="index.html">accueil</a><span><i class="fa fa-angle-double-right" aria-hidden="true"></i></span>
      <a href="#">Team Style - 1</a> 
    </div>
  </div>
</div>
<section id="profile" class="padding bg_light">
    <div class="container">
        <div class="row">
            <div class="col-md-3 col-sm-3 col-xs-12">
                <div class="file_uploader bottom20">
                  <form id="upload-widget" method="post" action="/upload" class="dropzone">
                  
                    <div class="dz-default dz-message">
                      <span>
                      <i class="fa fa-cloud-upload" aria-hidden="true"></i>
                      </span>
                    </div>
                    
                  </form>
                </div>
                <div class="profile-list">
                    <ul>
                        <li class="active">
                            <a href="#"><i class="fa fa-user-o" aria-hidden="true"></i> General Info</a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-sliders" aria-hidden="true"></i> Contact Information</a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-plus-square" aria-hidden="true"></i> Position info</a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-commenting" aria-hidden="true"></i> Position on Map</a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-eye" aria-hidden="true"></i> Select a Package</a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-server" aria-hidden="true"></i> Dashboard</a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-cogs" aria-hidden="true"></i> Setting</a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-lock" aria-hidden="true"></i> Log Out</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-9 col-sm-9 col-xs-12">
                <div class="profile-login-bg">
                    <div class="row bottom40">
                        <div class="col-md-12"> <h2><span><i class="fa fa-user"></i></span> General <span>Info</span></h2></div>
                        <div class="col-md-6 col-sm-6">
                             <div class="form-group">
                                <label for="name">Name</label>
                                <input class="form-control" id="name" name="name" value="Bobby H. Robinson" type="text"/>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6">
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input class="form-control" id="email" name="email" value="bobbyh.robinson@example.com" type="email"/>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6">
                            <div class="form-group">
                                <label for="mobile">Mobile</label>
                                <input class="form-control" id="mobile" name="mobile" value="732-727-4884" type="text"/>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6">
                            <div class="form-group">
                                <label for="phone">Phone</label>
                                <input class="form-control" id="phone" name="phone" value="732-727-4884" type="text"/>
                            </div>
                        </div>
                    </div>
                    <div class="row bottom40">
                        <div class="col-md-12">
                            <h2><span><i class="fa fa-map-marker"></i></span> Position <span>Info</span></h2>
                            <div class="form-group">
                                <label for="state">State</label>
                                <input class="form-control" id="state" name="state" value="American" type="text"/>
                            </div>
                            <div class="form-group">
                                <label for="city">City</label>
                                <input class="form-control" id="city" name="city" value="Hispanic" type="text"/>
                            </div>
                            <div class="row">
                                <div class="col-md-8 col-sm-8">
                                    <div class="form-group">
                                        <label for="street">Street</label>
                                        <input class="form-control" id="street" name="street" value="272 Duke Lane" type="text"/>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4">
                                    <div class="form-group">
                                        <label for="zip">ZIP</label>
                                        <input class="form-control" id="zip" name="zip" value="08879 " type="text"/>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group p_b30">
                                <label for="additional-address">Additional Address Line</label>
                                <input class="form-control" id="additional-address" name="additional-address" type="text"/>
                            </div>
                        </div>
                    </div>
                    <div class="row bottom40" id="pricing-area">
                        <div class="col-md-12"><h2><span><i class="fa fa-info-circle" aria-hidden="true"></i></span> Select <span>a Package</span></h2></div>
                        <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="pricing-box">
                          <span class="header">
                            <span class="title">Free</span>
                            <span class="sub-title">Fusce lobortis</span>
                            <span class="cover"></span>
                          </span>
                          <div class="price">$ 0,00</div>
                          <button type="button" class="btn btn-default select-button"><i class="icon fa fa-cart-arrow-down"></i></button>
                        </div>
                      </div>
                      <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="pricing-box">
                          <span class="header">
                            <span class="title">Basic</span>
                            <span class="sub-title">Fusce aliquet</span>
                            <span class="cover"></span>
                          </span>
                          <div class="price">$ 99,99</div>
                          <button type="button" class="btn btn-default select-button"><i class="icon fa fa-cart-arrow-down"></i></button>
                        </div>
                      </div>
                      <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="pricing-box">
                          <span class="header">
                            <span class="title">Classic</span>
                            <span class="sub-title">Fusce lobortis</span>
                            <span class="cover"></span>
                          </span>
                          <div class="price">$ 209,99</div>
                          <button type="button" class="btn btn-default select-button"><i class="icon fa fa-cart-arrow-down"></i></button>
                        </div>
                      </div>
                      <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="pricing-box">
                          <span class="header">
                            <span class="title">Premium</span>
                            <span class="sub-title">Fusce aliquet</span>
                            <span class="cover"></span>
                          </span>
                          <div class="price">$ 399,99</div>
                          <button type="button" class="btn btn-default select-button"><i class="icon fa fa-cart-arrow-down"></i></button>
                        </div>
                      </div>
                    </div>
                    <div class="row bottom40">
                      <div class="col-md-12">
                        <h2><span><i class="fa fa-street-view" aria-hidden="true"></i></span> Position<span> on Map</span></h2>
                        <div id="address-text">
                            <i class="fa fa-map-marker"></i> 
                            <input type="text" class="form-control" placholder="Drag the pin to the location on the map" name="text"/>
                        </div>
                        <div id="map"></div>
                      </div>
                    </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12">
                        <h2><span><i class="fa fa-map-marker"></i></span> A propos de <span>l'Agent</span></h2>
                        <div class="form-group">
                            <label for="about-me">Some Words About Our Agency</label>
                            <div class="form-group">
                                <textarea class="form-control" id="about-me" rows="3" name="about-me" required=""></textarea>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn_fill" id="submit">Create Now</button>
                    </div>
            </div>
        </div>
    </div>
</section> 
</>);
}
 
export default CompteAgent;