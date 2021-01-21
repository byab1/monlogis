import React, { useEffect, useState } from 'react';
import UserApi from '../services/userApi';

const UserProfile = (props) => {
    const { id } = props.match.params;

    const [profileUser, setProfileUser] = useState([]);
    
    const fetchUser = async id => {
    try {
        const data = await UserApi.UserProfile(id);
        setProfileUser(data);
      } catch (error) {
      }
    
  }
  useEffect(() => {
      fetchUser(id);
  }, []);

    return (<>

    <div className="page-title page-main-section parallaxie">
      <div className="container padding-bottom-top-120 text-uppercase text-center">
        <div className="main-title">
          <h1>User Profile</h1>
          <h5>10 Years Of Experience!</h5>
          <div className="line_4"></div>
          <div className="line_5"></div>
          <div className="line_6"></div>
          <a href="index.html">accueil</a><span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span><a href="profile.html"> User Profile</a> 
        </div>
      </div>
    </div>
    <section id="agent-2-peperty" className="profile padding ">
        <div className="container-3">
            <div className="row">
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <h2 className="text-uppercase">my profile</h2>
                    <div className="agent-p-img">
                        <img src="" className="img-responsive" alt="image"/>
                        <a href="#">Update Profile Picture</a>
                        <p>Minimum 215px x 215px<span>*</span></p>
                    </div>
                    <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        More Options
                    </button>
                </div>
                <div class="col-md-8">
                    <div class="agent-p-form">
                        <div class="row">
                          {profileUser.map(user => <form action="#">
                                <div key={user.id} class="col-md-12 clearfix">
                                  <div class="single-query">
                                    <label>Votre Nom:</label>
                                      <input type="text" value={user.nom} placeholder="Bohdan Kononets" class="keyword-input"/>
                                  </div>
                                </div>
                                <div class="col-md-12 clearfix">
                                  <div class="single-query">
                                    <label>Votre Prénom:</label>
                                      <input type="text" value={user.prenom} placeholder="Bohdan Kononets" class="keyword-input"/>
                                  </div>
                                </div>
                                <div class="col-md-12 clearfix">
                                  <div class="single-query">
                                  <label>Phone:</label>
                                    <input type="text" placeholder="(+01) 34 56 7890" class="keyword-input"/>
                                  </div>
                                </div>
                                <div class="col-md-12 clearfix">
                                  <div class="single-query">
                                  <label>Mobile:</label>
                                    <input type="text" placeholder="(+033) 34 56 7890" class="keyword-input"/>
                                  </div>
                                </div>
                                <div class="col-md-12 clearfix">
                                  <div class="single-query">
                                  <label>Email Adress:</label>
                                    <input type="text" placeholder="bohdan@ideahomes.com" value={user.email} class="keyword-input"/>
                                  </div>
                                </div>
                                <div class="col-md-12 clearfix">
                                  <div class="single-query">
                                  <label>Skype:</label>
                                    <input type="text" placeholder="bohdan.kononets" class="keyword-input"/>
                                  </div>
                                </div>
                                <div class="col-md-12 clearfix">
                                  <div class="single-query">
                                    <label>About:</label>
                                      <textarea placeholder="Write here somthing about yours"></textarea>
                                  </div>                          
                                </div>
                            </form>)}
                            
                        </div>
                    </div>
                </div>
                <div class="col-md-12 text-center">
                    <ul class="socials">
                      <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                      <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                      <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container">
        
        

        <div class="row">
          <div class="collapse" id="collapseExample">
          <div class="well">
            <div class="agent-p-form social-network">
            
                <div class="col-md-5 col-sm-5 col-xs-12">  
                  <h3 class="text-uppercase  bottom40">My Social <span class="color_red">Network</span></h3>
                  <div class="row">
                    <form action="#">
                      <div class="col-md-12">
                        <div class="single-query">
                        <label>Facebook:</label>
                          <input type="text" placeholder="http://facebook.com" class="keyword-input"/>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="single-query">
                        <label>Twitter:</label>
                          <input type="text" placeholder="http://twitter.com" class="keyword-input"/>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="single-query">
                        <label>Google Plus:</label>
                          <input type="text" placeholder="http://google-plus.com" class="keyword-input"/>
                        </div>
                      </div>
                      
                      <div class="col-md-12">
                        <div class="single-query">
                        <label>Linkedin:</label>
                          <input type="text" placeholder="http://linkedin.com" class="keyword-input"/>
                        </div>
                      </div>
                                        
                    </form>
                    <div class="col-md-12 col-sm-12 col-xs-12 text-right">
                      <div class="query-submit-button">
                        <input type="submit" class="btn_fill" value="submit now"/>
                      </div>
                    </div>
                  </div>
                </div> 
                <div class="col-md-1 hidden-xs"></div>
                <div class="col-md-6 col-sm-6 col-xs-12">  
                  <h3 class="text-uppercase  bottom40">Change Your <span class="color_red">Password</span></h3>
                  <div class="row">
                    <form action="#">
                      <div class="col-md-12">
                        <div class="single-query">
                        <label>Current Password</label>
                          <input type="text" placeholder="" class="keyword-input"/>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="single-query">
                        <label>New Password</label>
                          <input type="text" placeholder="" class="keyword-input"/>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="single-query">
                        <label>Confirm Password</label>
                          <input type="text" placeholder="" class="keyword-input"/>
                        </div>
                      </div>
                                                          
                    </form>
                    <div class="col-md-12 col-sm-12 col-xs-12 text-right">
                      <div class="query-submit-button">
                        <input type="submit" class="btn_fill" value="submit now"/>
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
 </>);
}
 
export default UserProfile;