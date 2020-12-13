import React, { Component } from 'react';
import axios from 'axios';
import firebase from '../Config/Config';
class ConfirmRoom extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            product:[],
            key:'',
            name:'',
            emailowner:'',
            email:'',
            message:'',
            sent:false
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
    handleName=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    handleEmail=(e)=>{
        this.setState({
            email:e.target.value
        })
    }
    handleMessage=(e)=>{
        this.setState({
            message:e.target.value
        })
    }
    logout(){
        firebase.auth().signOut();
    }
    formSubmit=(e)=>{
        e.preventDefault();
        let data={
            name:this.state.name,
            email:this.state.email,
            message:this.state.message,
            emailowner:this.state.product.email
        }
        axios.post('/api/forma',data)
        .then(res=>{
            this.setState({
                sent:true,
            },this.resetForm())
        })
        .catch(()=>{
            console.log('message not send ')
        })

    }
    resetForm=()=>{
        this.setState({
            name:'',
            email:'',
            message:''
        })
        setTimeout(() => {
            this.setState({
                sent:false,
            })
        }, 3000);
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
                        <a className="nav-link" href="/ContactStudent">Contact</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link logout_btn btn-sm btn btn-danger py-1" onClick={this.logout} href="/">Log Out</a>
                    </li>
                    </ul>
                </div>
            </nav>
                <div className="container register">
                <div className="row">
                    <div className="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <h3>Connect with us </h3>
                        <p>Confirm your booking. Let us know if any quries you have?</p>
                    </div>
                    <div className="col-md-9 register-right">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="register-heading">Welcome Student</h3>
                                <div className=" register-form">
                                   
                                    <form onSubmit={this.formSubmit}>
                                            <div className="form-group">
                                                <label htmlFor="name">NAME</label>
                                                <input type="text" 
                                                name="name" 
                                                placeholder="NAME....." 
                                                onChange={this.handleName} 
                                                value={this.state.name}
                                                className="form-control" required
                                                ></input>
                                            </div>
                                            <div class-Name="form-group">
                                                <label htmlFor="email">OWNER EMAIL</label>
                                                <input type="text"
                                                 name="emailowner"
                                                  placeholder="EMAIL....." 
                                                  className="form-control" 
                                                  value={this.state.product.email}></input>
                                            </div>
                                            <div class-Name="form-group">
                                                <label htmlFor="email">YOUR EMAIL</label>
                                                <input type="text"
                                                 name="email"
                                                  placeholder="YOUR EMAIL....." 
                                                  className="form-control" 
                                                   onChange={this.handleEmail}
                                                    value={this.state.email} required></input>
                                            </div>
                                            <div className="form-group textArea">
                                                <label htmlFor="message">MESSAGE</label>
                                                <textarea type="text" name="message" placeholder="MESSAGE-QURIES" className="form-control" onChange={this.handleMessage}
                                                rows="2" cols="10"
                                                value={this.state.message} required
                                                ></textarea>
                                            </div>
                                            <div className={this.state.sent?'msg msgAppear':'msg'}>
                                                message has been sent
                                            </div>
                                            <button className="btn btn-primary primary_button w-100" type="submit">submit</button>
                                        </form>
                                    </div>
                                    
                            
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </div>
         );
    }
}
 
export default ConfirmRoom;