import React,{Component} from 'react';
import '../App.css';
import firebase from '../Config/Config';
class EditProduct extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            key:'',
            address:'',
            city:'',
            name:'',
            contact:'',
            email:'',
            price:'',
            url:'',
            image:null,
            facilities:[]
         }
    }
    componentDidMount(){
        const ref=firebase.firestore().collection("Products").doc(this.props.match.params.id);
        ref.get().then((doc)=>{
            if(doc.exists){
                const documnet=doc.data();
                this.setState({
                   key:doc.id,
                   address:documnet.address,
                   city:documnet.city,
                   name:documnet.name,
                   contact:documnet.contact,
                   email:documnet.email,
                   price:documnet.price,
                   url:documnet.url,
                   facilities:documnet.facilities
                });
            }else{
                console.log("No such documnet is here")
            }
        })
    }
    logout(){
        firebase.auth().signOut();
    }
    handleInputChange(event) {
        const facilities = this.state.facilities
        const target = event.target;
        var value = String(target.value);
        
        if(target.checked){
            facilities.push(value)
        }else{
            this.state.facilities.splice(value, 1);
        }
        this.setState({ facilities:facilities })
        
    }
    handleChange=(e)=>{
        if(e.target.files[0]){
            this.setState({
                image:e.target.files[0]
            })
        }
        console.log(e.target.files[0])
    }
    handleUplaod=()=>{
        const {image,url}=this.state;
        var desertRef=firebase.storage().refFromURL(url)
        const uploadTask=firebase.storage().ref(`images/${image.name}`).put(this.state.image)
        uploadTask.on('state_changed',(snapshot)=>{console.log('snapshot')},
        (error)=>{console.log(error);},
        ()=>{firebase.storage().ref('images').child(image.name).getDownloadURL().then(url=>this.setState({url}))})
        desertRef.delete().then(function(){
            console.log("file deleted")
        }).catch(function(error){
            console.log("error while deleting the file")
        })
    }
    onChange=(e)=>{
        const state=this.state;
        state[e.target.name]=e.target.value;
        this.setState({document:state});
    }
    onSubmit=(e)=>{
        e.preventDefault();
        const{address,city,name,contact,email,price,facilities,url}=this.state;
        const updateRef=firebase.firestore().collection('Products').doc(this.state.key);
        updateRef.set({
            address,
            city,
            name,
            contact,
            email,
            price,
            facilities,
            url
           
        }).then((docRef)=>{
            this.setState({
                key:'',
                address:'',
                city:'',
                name:'',
                contact:'',
                email:'',
                price:'',
                url:'',facilities:[]

            });
            this.props.history.push("/show/"+this.props.match.params.id)
        })
        .catch((error)=>{
            console.error("Error editing the document :",error);
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
        <a className="nav-link" href="/Landing">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/AddProduct">Add Rooms</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link" href="/update-profile-owner">Update Profile</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link" href="/Contact">Contact</a>
    </li>
      <li className="nav-item">
        <a className="nav-link logout_btn btn-sm btn btn-danger py-1" onClick={this.logout} href="/">Log Out</a>
      </li>
    </ul>
  </div>
</nav>

<div class="container my-4">
    <div className="row py-4 edit_hostel_main_row">
        <div className="col-md-3 main_left_column">
            <div class="contact-info my-4">
                <img src={this.state.url} alt="hostel_image" className="img-fluid main_present_hostel_image"/>
            </div>
            <div className="upload_new_image_div my-4">
                <h5>Upload New Image</h5>
                <label className="new_file_upload_btn">
                    <input type="file" className="change_image" onChange={this.handleChange} accept="image/jpeg, image/jpg, image/png, image/svg, image/webp"/>
                    <span>Select New Image</span>
                </label>
            </div>
            <div className="button_div my-4 text-center">
                <button className="submit-button btn btn-light" onClick={this.handleUplaod}>Upload Image First</button>
            </div>
        </div>

        <div className="col-md-9 main_right_column">
            <div className="contact-form main_right_group">
                    <h4 className="text-center">Edit Hostel Details</h4>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label className="control-label" for="fname">Hostel Name: </label>       
                            <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onChange} placeholder="please enter name"></input>
                        </div>
                        <div className="form-group">
                            <label className="control-label" for="fname">Hostel Email:</label>        
                            <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.onChange} placeholder="please enter name"></input>
                        </div>
                        <div className="major_form_group d-flex">
                            <div className="form-group w-50 px-1">
                                <label className="control-label" for="fname">Hostel Contact:</label>
                                <input type="text" className="form-control" name="contact" value={this.state.contact} onChange={this.onChange} placeholder="please enter name"></input>
                            </div>
                            <div className="form-group w-50 px-1">
                                <label className="control-label" for="fname">City:</label>         
                                <input type="text" className="form-control" name="city" value={this.state.city} onChange={this.onChange} placeholder="please enter name"></input>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label" for="fname">Hostel Address:</label>         
                            <input type="text" className="form-control" name="address" value={this.state.address} onChange={this.onChange} placeholder="please enter name"></input>
                        </div>
                        <div className="form-group">
                            <label className="control-label" for="fname">Hostel Price:</label>         
                            <input type="text" className="form-control" name="pricd" value={this.state.price} onChange={this.onChange} placeholder="please enter name"></input>
                        </div>
                        <div class="form-group">
                            <label className="control-label">Facilites :</label><br />
                            <textarea type="text" class="form-control" name="behaviour" value={this.state.facilities} onChange={this.onChange} placeholder="Insert details"/>
                        </div>
                    <button type="submit" className="btn btn-primary primary_button w-100">submit</button>
                </form>
            </div>
        </div>
    </div>
</div>
</div>

                
        );
    }
}
 
export default EditProduct;