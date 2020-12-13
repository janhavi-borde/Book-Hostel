import React, { useState, useEffect, useRef } from 'react'
import SweetAlert from 'react-bootstrap-sweetalert';
function PayWithPayPal (props) {
    const { items, total } = props
    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);
    const paypalRef = useRef();

    useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        intent:'CAPTURE',
                        purchase_units: [{
                            description: `Hostel checkout ${items}`,
                            amount: {
                                currency_code: 'INR',
                                value: total,
                            }
                        }]
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    setPaidFor(true);
                    console.log('ORDER', order);
                },
                onError: err => {
                    setError(err);
                    console.error('ERROR', err);
                },
            })
            .render(paypalRef.current);
    }, [items]);

    if (paidFor) {
        return (
            <div>
                <SweetAlert success title="Payment done" onConfirm={console.log('Hiding alert...')  }>
 Payment done
</SweetAlert>
            </div>
        )
    }

    if (error) {
        return (
            <div>
                Error in processing order. Please Retry again
            </div>
        )
    }
   
    return (
        <div className="container" style={{textAlign:"center"}}>
            
            <div>you need to pay {total} /-RS</div>
            <div ref={paypalRef} />
        </div>
    )
}

export default PayWithPayPal