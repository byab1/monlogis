import React from 'react';

const Footer = (props) => {
    return ( 
    <>
         {/* CONTACT */}
<section id="contact" className="bg-color-red">
  <div className="container">
    <div className="row">
      <div className="col-md-4 col-sm-4 col-xs-12 text-center">
        <div className="get-tuch"><i className="icon-telephone114"></i>
          <ul>
            <li>
              <h4 className="p-font-17">Phone Number</h4>
            </li>
            <li>
              <p className="p-font-15">+1 900 234 567 - 68</p>
            </li>
          </ul>
        </div>
        <div className="get-tech-line"><img src="images/get-tuch-line.png" alt="line"/></div>
      </div>
      <div className="col-md-4 col-sm-4 col-xs-12 text-center">
        <div className="get-tuch"><i className="icon-icons74"></i>
          <ul>
            <li>
              <h4 className="p-font-17">Victoria Hall,</h4>
            </li>
            <li>
              <p className="p-font-15">Idea Homes, australia</p>
            </li>
          </ul>
        </div>
        <div className="get-tech-line"><img src="images/get-tuch-line.png" alt="line"/></div>
      </div>
      <div className="col-md-4 col-sm-4 col-xs-12 text-center">
        <div className="get-tuch"><i className=" icon-icons142"></i>
          <ul>
            <li>
              <h4 className="p-font-17">Email Address</h4>
            </li>
            <li>
              <a href="#."><p className="p-font-15">info@ideahomes.com</p></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
 {/* #/CONTACT */}

{/* FOOTER */}
<footer id="footer" className="footer divider layer-overlay overlay-dark-8">
  <div className="container pt-70 pb-40">
    <div className="row border-bottom">
      <div className="col-sm-6 col-md-3">
        <div className="widget dark"> <img className="mt-5 mb-20" alt="" src="images/logo.png"/>
          <p>203, Name Labs, Behind Alis Steet, Melbourne, City Name.</p>
          <ul className="list-inline mt-5">
            <li className="m-0 pl-10 pr-10"> <i className="fa fa-phone text-theme-color-2 mr-5"></i> <a className="text-gray" href="#.">123-456-789</a> </li>
            <li className="m-0 pl-10 pr-10"> <i className="fa fa-envelope-o text-theme-color-2 mr-5"></i> <a className="text-gray" href="#.">contact@yourdomain.com</a> </li>
            <li className="m-0 pl-10 pr-10"> <i className="fa fa-globe text-theme-color-2 mr-5"></i> <a className="text-gray" href="#.">www.yourdomain.com</a> </li>
          </ul>
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <div className="widget dark">
          <h4 className="widget-title">Quick Links</h4>
          <div className="small-title">
            <div className="line1 background-color-white"></div>
            <div className="line2 background-color-white"></div>
            <div className="clearfix"></div>
          </div>
          <ul className="list angle-double-right list-border">
            <li> <a href="#.">Home </a></li>
            <li> <a href="#.">Services </a></li>
            <li> <a href="#.">Pages</a></li>
            <li> <a href="#.">About Us </a></li>
            <li> <a href="#.">Blogs </a></li>
            <li> <a href="#.">Portfolio </a></li>
            <li> <a href="#.">Contact Us </a></li>
          </ul>
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <div className="widget dark">
          <h4 className="widget-title ">Use Full Links</h4>
          <div className="small-title">
            <div className="line1 background-color-white"></div>
            <div className="line2 background-color-white"></div>
            <div className="clearfix"></div>
          </div>
          <ul className="list list-border">
            <li><a href="#.">About</a></li>
            <li><a href="#.">News</a></li>
            <li><a href="#.">Testimonials</a></li>
            <li><a href="#.">Typography</a></li>
            <li><a href="#.">Services</a></li>
            <li><a href="#.">Careers</a></li>
            <li><a href="#.">Our team</a></li>
          </ul>
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <div className="widget dark">
          <h4 className="widget-title">Opening Hours</h4>
          <div className="small-title">
            <div className="line1 background-color-white"></div>
            <div className="line2 background-color-white"></div>
            <div className="clearfix"></div>
          </div>
          <div className="opening-hourse">
            <ul className="list-border">
              <li className="clearfix"> <span> Mon - Tues : </span>
                <div className="value pull-right"> 6.00 am - 10.00 pm </div>
              </li>
              <li className="clearfix"> <span> Wednes - Thurs :</span>
                <div className="value pull-right"> 8.00 am - 6.00 pm </div>
              </li>
              <li className="clearfix"> <span> Fri : </span>
                <div className="value pull-right"> 3.00 pm - 8.00 pm </div>
              </li>
              <li className="clearfix"> <span> Sun : </span>
                <div className="value pull-right"> Closed </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="row mt-30">
      <div className="col-md-3 col-sm-4">
        <div className="widget dark">
          <h5 className="widget-title mb-10">Call Us Now</h5>
          <div className="text-gray"> +61 3 1234 5678
            +12 3 1234 5678 </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-4">
        <div className="widget dark">
          <h5 className="widget-title mb-10">Connect With Us</h5>
          <ul className="socials">
            <li><a href="#."><i className="fa fa-facebook"></i></a></li>
            <li><a href="#."><i className="fa fa-twitter"></i></a></li>
            <li><a href="#."><i className="fa fa-youtube"></i></a></li>
            <li><a href="#."><i className="fa fa-instagram"></i></a></li>
            <li><a href="#."><i className="fa fa-pinterest"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="col-md-6 col-sm-4 text-right">
        <div className="mb20">
          <form className="padding-top-30">
            <input className="search" placeholder="Enter your Email" type="search"/>
            <a href="#." className="button"><i className="icon-mail-envelope-open"></i></a>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-bottom bg-black-333">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-5">
          <p className="font-11 text-black-777 m-0 copy-right">Copyright: 2018 <a href="#."><span className="color_red">IDEA HOMES</span></a>. All Rights Reserved</p>
        </div>
        <div className="col-md-6 col-sm-7 text-right">
          <div className="widget no-border m-0">
            <ul className="list-inline sm-text-center mt-5 font-12">
              <li> <a href="#.">FAQ</a> </li>
              <li>|</li>
              <li> <a href="#.">Help Desk</a> </li>
              <li>|</li>
              <li> <a href="#.">Support</a> </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
{/* ENDFOOTER */}

{/* MODAL */}
<div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h2 className="modal-title" id="myModalLabel">How can <span className="color_red">we help?</span></h2>
      </div>

      <div className="modal-body">

        <p className="bottom40">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

        <div className="short-msg-tab"> 
          {/* <!-- Nav tabs --> */}
          <ul className="nav nav-tabs" role="tablist">
            <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Suggestion</a></li>
            <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab"><i className="fa fa-question-circle-o" aria-hidden="true"></i> Question</a></li>
            <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab"><i className="fa fa-exclamation-triangle" aria-hidden="true"></i> Problems</a></li>
            <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab"><i className="fa fa-comments-o" aria-hidden="true"></i> Feedback</a></li>
          </ul>

          {/* <!-- Tab panes --> */}
          <div className="tab-content">
            <div role="tabpanel" className="tab-pane active" id="home">
              <div className="row">
                <div className="col-md-12"><h3>Suggestion</h3></div>
                <form className="callus padding-bottom" id="contact-form">
                
                  <div className="col-md-12">
                        <div className="single-query">
                            <input className="keyword-input" placeholder="Name" name="name" id="name" type="text"/>
                        </div>
                  </div>

                   <div className="col-md-12">
                        <div className="single-query">
                            <input className="keyword-input" placeholder="E - mail" name="email" id="email" type="email"/>
                        </div>
                   </div>

                   <div className="col-md-12">
                        <div className="single-query">
                            <textarea name="message" placeholder="Message" id="message"></textarea>
                        </div>
                   </div>
                </form>
              </div>
            </div>
            <div role="tabpanel" className="tab-pane fade" id="profile">
              <div className="row">
                <div className="col-md-12"><h3>Question</h3></div>
                <form className="callus padding-bottom" id="contact-form">
                
                  <div className="col-md-12">
                        <div className="single-query">
                            <input className="keyword-input" placeholder="Name" name="name" id="name" type="text"/>
                        </div>
                  </div>

                   <div className="col-md-12">
                        <div className="single-query">
                            <input className="keyword-input" placeholder="E - mail" name="email" id="email" type="email"/>
                        </div>
                   </div>

                   <div className="col-md-12">
                        <div className="single-query">
                            <textarea name="message" placeholder="Message" id="message"></textarea>
                        </div>
                   </div>
                </form>
              </div>
            </div>
            <div role="tabpanel" className="tab-pane fade" id="messages">
              <div className="row">
                <div className="col-md-12"><h3>Problems</h3></div>
                <form className="callus padding-bottom" id="contact-form">
                
                  <div className="col-md-12">
                        <div className="single-query">
                            <input className="keyword-input" placeholder="Name" name="name" id="name" type="text"/>
                        </div>
                  </div>

                   <div className="col-md-12">
                        <div className="single-query">
                            <input className="keyword-input" placeholder="E - mail" name="email" id="email" type="email"/>
                        </div>
                   </div>

                   <div className="col-md-12">
                        <div className="single-query">
                            <textarea name="message" placeholder="Message" id="message"></textarea>
                        </div>
                   </div>
                </form>
              </div>
            </div>
            <div role="tabpanel" className="tab-pane fade" id="settings">
              <div className="row">
                <div className="col-md-12"><h3>Feedback</h3></div>
                <form className="callus padding-bottom" id="contact-form">
                
                  <div className="col-md-12">
                        <div className="single-query">
                            <input className="keyword-input" placeholder="Name" name="name" id="name" type="text"/>
                        </div>
                  </div>

                   <div className="col-md-12">
                        <div className="single-query">
                            <input className="keyword-input" placeholder="E - mail" name="email" id="email" type="email"/>
                        </div>
                   </div>

                   <div className="col-md-12">
                        <div className="single-query">
                            <textarea name="message" placeholder="Message" id="message"></textarea>
                        </div>
                   </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="dark_border" data-dismiss="modal">Cancel Message</button>
        <button type="button" className="btn_fill">Send Message</button>
      </div>

    </div>
  </div>
</div>
{/* ENDMODAL */}

    </> );
}
 
export default Footer;