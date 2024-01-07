import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/Image'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeFromCart } from '../slices/CartSlice';

const Cart = () => {
    const carts =  useSelector(state =>state.cart)
    const dispatch = useDispatch()

    const total = carts.reduce((acc , items ) =>{
        acc+= items.price * items.quantity
        return acc
    },0)
    return (
        <Container style={{marginTop:"70px"}}>
            <h1 style={{ textAlign:"center"}}>YOUR CART SHOPPING</h1>
            <Button  variant='danger' onClick={()=>dispatch(clearCart())} className='mt-5'>Clear Cart</Button>
            <h2 style={{marginTop:"10px"}}>Total Price : $  {total.toFixed(2)} </h2>

            <Table className='mt-5' striped bordered hover>
                <thead>
                    <tr style={{textAlign:"center"}}>
                        <th>NUmber</th>
                        <th>Product</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {carts.map((cart) =>(
                    <tr style={{textAlign:"center"}} key={cart.id}>
                        <td>{cart.id}</td>
                        <td> <Image src={cart.image} alt={cart.image} style={{width:"100px",height:"100px"}}/> </td>
                        <td >{cart.title} </td>
                        <td>{cart.description}</td>
                        <td>{cart.price}$</td>
                        <td>{cart.quantity}</td>
                        <td>
                            <Button variant='danger' onClick={()=>dispatch(removeFromCart(cart))}>Delete</Button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default Cart;
