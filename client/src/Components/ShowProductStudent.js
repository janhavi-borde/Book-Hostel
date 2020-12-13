import React from 'react';
import '../App.css';
import firebase from '../Config/Config';
import {Link} from 'react-router-dom';

class ShowProductStudent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            product:[],
            key:''
            
        }
    }

    componentDidMount(){
        const ref=firebase.firestore().collection("Products").doc(this.props.match.params.id);
        ref.get().then((doc)=>{
            if(doc.exists){
                this.setState({
                    product:doc.data(),
                    key:doc.id,
                    isloading:false
                });
            }else{
                console.log("No such documnet is here")
            }
        })
    }
    logout(){
        firebase.auth().signOut();
    }
    delete(id){
        var desertRef=firebase.storage().refFromURL(this.state.product.url)
        firebase.firestore().collection('Products').doc(id).delete().then(()=>{
            console.log("Document is successfully deleted");
            this.props.history.push("/Landing")
        }).catch((error)=>{
            console.log("error:",error)
        });
        desertRef.delete().then(function(){
            console.log("file deleted")
        }).catch(function(error){
            console.log("error while deleting the file")
        })
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
                    <li className="nav-item active">
                        <a className="nav-link" href="/StudentLanding">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/update-profile-student">Update Profile</a>
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
                
        <div class="container py-3">

  <div class="card" style={{padding:"10%"}}>
    <div class="row ">

      <div class="col-md-7 px-3">
        <div class="card-block px-6">
          <h4 class="card-title">{this.state.product.name}</h4>
          <p class="card-text">
          <dt>City:{this.state.product.city}</dt>
          </p>
        <p class="card-text">Addresss: {this.state.product.address}</p>
          <br/>
          <div className="panel-body">
                           <dl>
                                <dt>rent/month:{this.state.product.price +"Rs/month"} </dt>
                                <dt>mail:  {this.state.product.email}</dt>
                                <dt>contact:  {this.state.product.contact}</dt>
                                <dt>description:  {this.state.product.facilities  +  " , "}</dt>
                                 
                            </dl>
                            <div className="row">
                                <div className="col">
                                    <Link to={`/ConfirmRoom/${this.state.key}`} className="btn btn-secondary">Confirm First</Link>
                                </div>
                                <div className="col">
                                
                                    <Link to={`/Paypal/${this.state.key}`} className="btn btn-secondary">pay</Link>
                                </div>
                            </div>
                            
                       </div>
                </div>
                    </div>
                    <div class="col-sm-5">
                        <img class="d-block w-100" src={this.state.product.url} alt=""></img>
                </div>
                </div>
                </div>
            </div>
            </div>
         );
    }
}
 
export default ShowProductStudent;