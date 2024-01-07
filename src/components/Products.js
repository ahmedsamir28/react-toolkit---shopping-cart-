import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from '../slices/ProductsSlice';
import { addToCart } from '../slices/CartSlice';

const Products = () => {
    const products = useSelector((state) => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    return (
        <Container style={{marginTop:"100px"}} >
            <Row className='mt-5'  >
                {Array.isArray(products) &&
                    products.map((product) => (
                        <React.Fragment key={product.id}>
                            <Col>
                                <Card style={{ width: "15rem", marginBottom:"25px" }}>
                                    <Card.Img style={{padding:"10px"}} variant="top" src={product.image} width="250px" height="250" />
                                    <Card.Body>
                                        <Card.Title>{product.title.substring(0,15)}</Card.Title>
                                        <Card.Text>
                                            {product.price.toLocaleString("en-US", {
                                                style: "currency",
                                                currency: "USD",
                                            })}
                                        </Card.Text>
                                        <Button variant="primary" onClick={()=>dispatch(addToCart(product))}>Add To Cart</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </React.Fragment>
                    ))}
            </Row>
        </Container>

    );
}

export default Products;
