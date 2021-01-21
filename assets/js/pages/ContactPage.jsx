import React from 'react';

const ContactPage = (props) => {
    return ( <>
    {/* <!--===== PAGE TITLE =====--> */}
<div className="page-title page-main-section parallaxie" style="background-image: url(images/titlebg-1.jpg);">
  <div className="container padding-bottom-top-120 text-uppercase text-center">
    <div className="main-title">
      <h1>Contact us</h1>
      <h5>10 Years Of Experience!</h5>
      <div className="line_4"></div>
      <div className="line_5"></div>
      <div className="line_6"></div>
      <a href="index.html">accueil</a><span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span><a href="contact-us.html">Contact us</a> 
    </div>
  </div>
</div>
{/* <!--===== #/PAGE TITLE =====-->


<!--===== CONTACT US =====--> */}
<section id="contact-us">
	<div className="container">
      <div className="row padding">
      	
        <div className="col-md-8">
        	<div className="bottom40">
                <h2 className="text-uppercase">Send us<span className="color_red"> a message </span></h2>
                <div className="line_1"></div>
                <div className="line_2"></div>
                <div className="line_3"></div>
              </div>
        	<div className="agent-p-form p-t-30">
            
            <div className="row">
            	<form className="callus padding-bottom"  id="contact-form" onSubmit="return false">
            
                     <div className="form-group">
                         <div id="result">
                         </div>
                     </div>
            
            	<div className="col-md-12">
                    <div className="single-query">
                        <input type="text" className ="keyword-input" placeholder="Name" name="name" id="name"/>
                    </div>
                </div>
               <div className="col-md-12">    
                    <div className="single-query">
                        <input type="text" className ="keyword-input" placeholder="Phone" name="phone" id="phone"/>
                    </div>
               </div>
               <div className="col-md-12">     
                    <div className="single-query">
                        <input type="email" className ="keyword-input" placeholder="E - mail" name="email" id="email"/>
                    </div>
               </div>
               <div className="col-md-12">
                    <div className="single-query">
                        <textarea name="message" placeholder="Message" id="message"></textarea>
                    </div>
               </div>
                 <div className="col-md-12">   
                      <button type="submit" className="btn_fill" id="btn_submit" name="btn_submit">Submit</button>
                 </div>     
                    </form>
        
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
        	<div className="bottom40">
                <h2 className="text-uppercase">get in<span className="color_red"> touch</span></h2>
                <div className="line_1"></div>
                <div className="line_2"></div>
                <div className="line_3"></div>
              </div>
              
        	<div className="agent-p-contact p-t-30">
            <div className="agetn-contact-2">
              <p><i className="icon-telephone114"></i> (+01) 34 56 7890</p>
              <a href="#.">
                <p><i className=" icon-icons142"></i> info@ideahomes.com</p>
              </a>
              <a href="#.">
                <p><i className="icon-browser2"></i>www.ideahomes.com</p>
              </a>
              <p><i className="icon-icons74"></i> Idea Homes, Merrick Way, FL 12345 Australia</p>
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
       
      </div>
    </div>
    
    <div className="contact">
      <div id="map"></div>
    </div>
</section>
{/* #/CONTACT US  */}
    </> );
}
 
export default ContactPage;