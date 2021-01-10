import React, {useEffect, useState} from "react";

import './Orders.css'

function Orders(){
    /*const [orders, setOrders] = useState([]);

    useEffect(()=>{
        database.collection('user')
            .doc(user?._id)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot(snapshot =>(
                setOrders(snapshot.docs.map(doc =>({
                id:doc_id,
                data:doc.data()
                })))
            ))
            }else{
                setOrders(])
                }
    },[])
*/
    return (
        <div className={'orders'}>
            <h1>Your Orders</h1>
        </div>
    )
}
export default Orders;