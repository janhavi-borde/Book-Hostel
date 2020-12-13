import React from 'react'
import PayWithPayPal from './PayWithPayPal';
import firebase from '../Config/Config';
class Paypal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            product:[],
            key:'',
            isCheckout: false,
            currDate:new Date().toLocaleDateString()
        }
    }
   addMonths(date, months) {
        var d = date.getDate();
        date.setMonth(date.getMonth() + +months);
        if (date.getDate() !== d) {
          date.setDate(0);
        }
        return date;
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

    render () {
        const { isCheckout } = this.state

        if (isCheckout) {
            return (
                <PayWithPayPal
                    total={this.state.product.price}
                    items={this.state.key}
                />
            )
        }
        return (
            <React.Fragment>
                <div className="home-container">
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                    <div className="brand">hostel:  {this.state.product.name}</div>
                    <div className="checkout">
                        <div className="checkout-total" >Total: Rs. {this.state.product.price}/-</div>
                        <button
                            className="btn btn-success btn-sm"
                            onClick={() => {
                                if (this.state.product.price > 0) {
                                    this.setState({ isCheckout: true })
                                }
                            }}
                        >
                            Proceed to pay 
                        </button>
                        <p>
                            you are paying for  {this.state.currDate}  to {this.addMonths(new Date(this.state.currDate),1).toLocaleDateString()}
                        </p>
                    </div>
                    </div>
                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}

export default Paypal;