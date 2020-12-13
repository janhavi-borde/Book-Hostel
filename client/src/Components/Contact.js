import React,{Component} from "react";
import firebase from '../Config/Config';
class Contact extends Component {
  logout(){
    firebase.auth().signOut();
}

  render() {
    return (
       <div>
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_navigation" aria-controls="main_navigation" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="main_navigation">
                    <a className="navbar-brand" href="/landing"><span className="logo_main">Logo</span><span className="logo_main">Here</span></a>
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="/Landing">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/update-profile-owner">Update Profile</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/Contact">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link logout_btn btn-sm btn btn-danger py-1" onClick={this.logout} href="/">Log Out</a>
                    </li>
                    </ul>
                </div>
            </nav>
        <div className="container-fluid p-0 w-100">
            <div className="contact_banner_div">
                <div className="content_div">
                    <h6><a href="/Home">Home</a> - Contact</h6>
                    <h2>How can we help you today?</h2>
                </div>
            </div>
                
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-2 col-12">
                        <div className="card_box_main card">
                            <div className="icon_div">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Address</h5>
                                <p class="card-text">Pimpary Chinchwad College of engineering, Akurdi , Pune</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-2 col-12">
                        <div className="card_box_main card">
                            <div className="icon_div">
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Contact</h5>
                                <p class="card-text">123456789 <br/>                     +9176487367</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-2 col-12">
                        <div className="card_box_main card">
                            <div className="icon_div">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Mail</h5>
                                <p class="card-text">abc23@gmail.com<br/></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className="contact-us">
      <div className="contact-infomation">
       	
		<iframe  src="assets/images/map.png" width='100%' height="550" frameborder="0" allowFullScreen='' style={{border:"0"}} title="map"></iframe>
        <div className="azir-container">
          <div className="infomation-box_wrapper">
            <div className="infomation-box">
              <h5 className="mb-20 h5">Infomation</h5>
              <ul className="ul-16">
                <li> <i className="fas fa-phone-alt"></i>+91 8668988406 </li>
                <li> <i className="fas fa-map-marker-alt"></i> Jawahar Nagar, India</li>
                <li> <i className="fas fa-envelope"></i>abc@gmail.com</li>
              </ul>
              <h5 className="mb-20 h5">Opening Hours</h5>
              <ul className="opening-hours">
                <li>Monday - Friday<span>11:00 - 22:00</span></li>
                <li>Saturday<span>11:00 - 20:00</span></li>
                <li>Sunday<span>11:00 - 20:00</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-content">
        <div className="container">
          <div className="layout-2col-ti">
            <div className="row align-items-center">
              <div className="col-12 col-md-6">
                <div className="layout-2col-ti_left">
                  <div className="contact-content_left">
                    <div className="section-header-style-2">
                      <h1 className="h1">Let me help you</h1>
                      <p className="p-16">If you have any questions, please fill in the box below, We will reply to you as soon as possible</p>
                      <form>
                        <input className="input-form" type="text" placeholder="Name"/>
                        <input className="input-form" type="text" placeholder="Phone"/>
                        <input className="input-form" type="text" placeholder="Subject"/>
                        <textarea className="textarea-form" name="" cols="30" rows="5" placeholder="Message"></textarea>
                         <a className="btn btn-warning" type="button" href="///">Submit</a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="layout-2col-ti_right">
                  <div className="contact-content_right"><img className="img-fluid" src="assets/images/hostelrent.svg" alt="conact"/></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    );
  }
}

export default Contact;