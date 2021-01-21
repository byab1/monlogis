import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AgentApi from '../services/agentsApi';

const AgentPage = (props) => {

  const { id } = props.match.params;

  const [showAgent, setShowAgent] = useState([]);

  const fetchAgent = async id => {
    try {
        const data = await AgentApi.find(id);
        setShowAgent(data);
      } catch (error) {
      }
    
  }
  useEffect(() => {
      fetchAgent(id);
  }, []);
    return ( 
    <>
    {/* <!-- PAGE TITLE --> */}
    <div class="page-title page-main-section parallaxie">
        <div class="container padding-bottom-top-120 text-uppercase text-center">
            <div class="main-title">
                <h1>Profile Agent</h1>
                <h5>10 Years Of Experience!</h5>
                <div class="line_4"></div>
                <div class="line_5"></div>
                <div class="line_6"></div>
                <a href="index.html">accueil</a>
                <span><i class="fa fa-angle-double-right" aria-hidden="true"></i></span>
                <Link to="/agents">Liste des agents</Link> 
            </div>
        </div>
    </div>
    {/* <!-- PAGE TITLE --> */}

    <section id="agent-profile" class="padding">
      <div class="container margin_bottom">
        <div class="row">
          {showAgent.map(agent => 
            <h1>{agent.nomAgent}</h1> )};
          
          
        </div>
      </div>
  <div class="container">
    <div class="row">
      <div class="col-md-12 bottom40">
        <h2 class="text-uppercase">Charli Robert's <span class="color_red">Properites</span></h2>
        <div class="line_1"></div>
        <div class="line_2"></div>
        <div class="line_3"></div>
        <p>We have Properties in these Areas View a list of Featured Properties.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-sm-6">
        <div class="project1">
          <div class="col-md-12 col-sm-12 col-xs-12 padding_L_0 project-images">
            <div class="gri">
              <figure class="effect-layla">
                <img src="images/b-d-property.jpg" alt="img"/>
                <figcaption> </figcaption>
              </figure>
            </div>
            <div class="col-md-3 col-sm-3 col-xs-12 project-owl-slidee padding_L_0 project-owl-slideee">
              <div class="item background-color-white">
                <h4>Residential Project-d05</h4>
                <div class="small-title">
                  <div class="line1"></div>
                  <div class="line2"></div>
                  <div class="clearfix"></div>
                </div>
                <div class="client-loc">
                  <p><span>Client:</span> Bryan Doe Joe</p>
                  <p><span>Location:</span> Mountain Line CA 62548</p>
                  <p><span>Value:</span> $15,000</p>
                </div>
                <a href="#." class="link_arrow">read more</a> 
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-sm-6">
        <div class="project1">
          <div class="col-md-12 col-sm-12 col-xs-12 padding_L_0 project-images">
            <div class="gri">
              <figure class="effect-layla">
                <img src="images/b-d-property-2.jpg" alt="img"/>
                <figcaption> </figcaption>
              </figure>
            </div>
            <div class="col-md-3 col-sm-3 col-xs-12 project-owl-slidee padding_L_0 project-owl-slideee">
              <div class="item background-color-white">
                <h4>Residential Project-d05</h4>
                <div class="small-title">
                  <div class="line1"></div>
                  <div class="line2"></div>
                  <div class="clearfix"></div>
                </div>
                <div class="client-loc">
                  <p><span>Client:</span> Bryan Doe Joe</p>
                  <p><span>Location:</span> Mountain Line CA 62548</p>
                  <p><span>Value:</span> $15,000</p>
                </div>
                <a href="#." class="link_arrow">read more</a> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-sm-6">
        <div class="project1">
          <div class="col-md-12 col-sm-12 col-xs-12 padding_L_0 project-images">
            <div class="gri">
              <figure class="effect-layla">
                <img src="images/b-d-property.jpg" alt="img"/>
                <figcaption> </figcaption>
              </figure>
            </div>
            <div class="col-md-3 col-sm-3 col-xs-12 project-owl-slidee padding_L_0 project-owl-slideee">
              <div class="item background-color-white">
                <h4>Residential Project-d05</h4>
                <div class="small-title">
                  <div class="line1"></div>
                  <div class="line2"></div>
                  <div class="clearfix"></div>
                </div>
                <div class="client-loc">
                  <p><span>Client:</span> Bryan Doe Joe</p>
                  <p><span>Location:</span> Mountain Line CA 62548</p>
                  <p><span>Value:</span> $15,000</p>
                </div>
                <a href="#." class="link_arrow">read more</a>  
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-sm-6">
        <div class="project1">
          <div class="col-md-12 col-sm-12 col-xs-12 padding_L_0 project-images">
            <div class="gri">
              <figure class="effect-layla">
                <img src="images/b-d-property-2.jpg" alt="img"/>
                <figcaption> </figcaption>
              </figure>
            </div>
            <div class="col-md-3 col-sm-3 col-xs-12 project-owl-slidee padding_L_0 project-owl-slideee">
              <div class="item background-color-white">
                <h4>Residential Project-d05</h4>
                <div class="small-title">
                  <div class="line1"></div>
                  <div class="line2"></div>
                  <div class="clearfix"></div>
                </div>
                <div class="client-loc">
                  <p><span>Client:</span> Bryan Doe Joe</p>
                  <p><span>Location:</span> Mountain Line CA 62548</p>
                  <p><span>Value:</span> $15,000</p>
                </div>
                <a href="#." class="link_arrow">read more</a>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-sm-6">
        <div class="project1">
          <div class="col-md-12 col-sm-12 col-xs-12 padding_L_0 project-images">
            <div class="gri">
              <figure class="effect-layla">
                <img src="images/b-d-property.jpg" alt="img"/>
                <figcaption> </figcaption>
              </figure>
            </div>
            <div class="col-md-3 col-sm-3 col-xs-12 project-owl-slidee padding_L_0 project-owl-slideee">
              <div class="item background-color-white">
                <h4>Residential Project-d05</h4>
                <div class="small-title">
                  <div class="line1"></div>
                  <div class="line2"></div>
                  <div class="clearfix"></div>
                </div>
                <div class="client-loc">
                  <p><span>Client:</span> Bryan Doe Joe</p>
                  <p><span>Location:</span> Mountain Line CA 62548</p>
                  <p><span>Value:</span> $15,000</p>
                </div>
                <a href="#." class="link_arrow">read more</a>  
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-sm-6">
        <div class="project1">
          <div class="col-md-12 col-sm-12 col-xs-12 padding_L_0 project-images">
            <div class="gri">
              <figure class="effect-layla">
                <img src="images/b-d-property-2.jpg" alt="img"/>
                <figcaption> </figcaption>
              </figure>
            </div>
            <div class="col-md-3 col-sm-3 col-xs-12 project-owl-slidee padding_L_0 project-owl-slideee">
              <div class="item background-color-white">
                <h4>Residential Project-d05</h4>
                <div class="small-title">
                  <div class="line1"></div>
                  <div class="line2"></div>
                  <div class="clearfix"></div>
                </div>
                <div class="client-loc">
                  <p><span>Client:</span> Bryan Doe Joe</p>
                  <p><span>Location:</span> Mountain Line CA 62548</p>
                  <p><span>Value:</span> $15,000</p>
                </div>
                <a href="#." class="link_arrow">read more</a>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row padding-b-80">
      <div class="col-md-12">
        <ul class="pager">
          <li><a href="#">1</a></li>
          <li class="active"><a href="#">2</a></li>
          <li><a href="#">3</a></li>
        </ul>
      </div>
    </div>
  </div>
</section>
    </> );
}
 
export default AgentPage;