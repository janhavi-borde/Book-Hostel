import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import firebase from '../Config/Config';
import '../App.css'
class Landing extends Component {
    constructor(props) {
        super(props);
        this.ref=firebase.firestore().collection("Products");
        this.unsubscribe=null;
        this.state={
            products : []
        };
    }
    componentDidMount(){
        this.unsubscribe=this.ref.onSnapshot(this.onCollectionUpdate);
    }
  logout(){
      firebase.auth().signOut();
  }
    onCollectionUpdate=(querySnapshot)=>{
        const products=[];
        querySnapshot.forEach((doc)=>{
            const { address,city,name,contact,email,price,url,facilities}=doc.data();
            products.push({
                key:doc.id,
                doc,
                address,
                city,
                name,
                contact,
                email,
                price,
                url,facilities
            });
        });
        this.setState({products});
    }
    render() { 
        return ( 
            <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_navigation" aria-controls="main_navigation" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="main_navigation">
    <a className="navbar-brand" href="/landing"><span className="logo_main">Logo</span><span className="logo_main">Here</span></a>
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="/Landing">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/AddProduct">Add Rooms</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/update-profile-owner">Update Profile</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/Contact">Contact</a>
      </li>
      <li className="nav-item">
        <a className="nav-link logout_btn btn-sm btn btn-danger py-1" onClick={this.logout} href="/">Log Out</a>
      </li>
    </ul>
  </div>
</nav>
      <div className="main_header_section">
          <div className="container-fluid p-0 main_carousel_container">
            <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://d19m59y37dris4.cloudfront.net/directory/1-6/img/photo/photo-1501621965065-c6e1cf6b53e2.jpg" className="d-block w-100"  alt="test"/>
                </div>
                <div className="carousel-item">
                  <img src="https://d19m59y37dris4.cloudfront.net/directory/1-6/img/photo/photo-1519974719765-e6559eac2575.jpg" className="d-block w-100" alt="test"/>
                </div>
                <div className="carousel-item">
                  <img src="https://d19m59y37dris4.cloudfront.net/directory/1-6/img/photo/photo-1490578474895-699cd4e2cf59.jpg" className="d-block w-100" alt="test"/>
                </div>
              </div>
            </div>  
          </div>
          <div className="container main_search_container">
            <h6>THE BEST STYING EXPERIENCE</h6>
            <h3>Stay like a local</h3>
      </div>
    </div>            
      <div className="container">
        <div className="py-4">
          <div className="row">
          {this.state.products.map(product=>(
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 " >
              <div className="card text-center main_product_div">
                <img src={product.url} height="100px" alt="" className="img-fluid"/>
                <div className="card-body">
                  <h5 className="card-title mb-0 text-uppercase">{product.name}</h5>
                  <div className="details_div">
                    <p className="text-muted small">{product.city}</p>
                    <Link to={`/show/${product.key}`} className="btn btn-warning btn-profile py-1 warning_button view_room_button">
                      View Room
                    </Link>
                  </div>
                </div>
              </div>
            </div>
              ))}
          </div>
        </div>
      </div>
            </div>
         );
    }
}
 
export default Landing;
