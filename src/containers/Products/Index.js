import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct } from '../../actions';
import Layout from '../../components/Layouts/Index'
import Input from '../../components/UI/Input/Index';
import Modal from '../../components/UI/Modal/Index';
/**
* @author
* @function Products
**/

const Products = (props) => {
    const dispatch = useDispatch();
    const category = useSelector(state => state.category);
    const product = useSelector(state => state.product)
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [quantity, setQuantity] = useState('');
    const [productPicture, setProductPicture] = useState([]);

    const [show, setShow] = useState(false);

    useEffect(() => {
        // dispatch(getAllCategories())
    }, [])

    const handleClose = () => {
        if (name != '' && category != '') {
            let form = new FormData();
            form.append('name', name);
            form.append('price', price);
            form.append('description', description);
            form.append('category', categoryId);
            form.append('quantity', quantity);
            for (let pic of productPicture) {
                form.append('productPicture', pic);
            }
            dispatch(createProduct(form));
        }
        setShow(false);
    }
    const handleShow = () => setShow(true);

    const linearCategoriesList = (categories, options = []) => {
        // console.log("categories", categories);

        for (let cat of categories) {
            // console.log("cat", cat);
            options.push(
                {
                    value: cat._id,
                    name: cat.name
                });
            if (cat.children.length > 0) {
                linearCategoriesList(cat.children, options);
            }
        }
        return options;
    }
    const handleProductPictures = (e) => {
        //array of images
        console.log('handleProductPictures', e.target.files);
        setProductPicture([
            ...productPicture,
            e.target.files[0]
        ])
    }
    const renderProducts = () => {
        return (
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Description</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.products.length > 0 ?
                            product.products.map(i =>
                                <tr key={i.slug}>
                                    <td>#</td>
                                    <td>{i.name}</td>
                                    <td>{i.price}</td>
                                    <td>{i.quantity}</td>
                                    <td>{i.description}</td>
                                    <td>{i.category}</td>
                                </tr>
                            )
                            : null
                    }

                </tbody>
            </Table>
        )
    }
    console.log('Products/Index.js', productPicture);
    return (
        <Layout sidebar>
            <Container>
                <Row>
                    <Col md={12}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h3>Products</h3>
                            <Button variant='info' onClick={handleShow}>Add</Button>
                        </div>
                    </Col>
                </Row>
                <Modal show={show} handleClose={handleClose} title={'Add Product'}>
                    {/* --- Product Name --- */}
                    <Input className="form-control"
                        label={"Product Name"}
                        placeholder={"Product Name"}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    {/* --- Price --- */}
                    <Input className="form-control"
                        label={"Price"}
                        placeholder={"Price of the product"}
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    />
                    {/* --- Description --- */}
                    <Input className="form-control"
                        label={"Description"}
                        placeholder={"Description"}
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    {/* Categories in Linear Order */}
                    <select
                        className='form-control'
                        value={categoryId}
                        onChange={e => setCategoryId(e.target.value)}>
                        <option>--- SELECT ---</option>
                        {
                            linearCategoriesList(category.categories).map(m =>
                                <option key={m.value} value={m.value} >{m.name}</option>
                            )
                        }
                    </select>
                    {/* --- Quantity --- */}
                    <Input className="form-control"
                        label={"Quantity"}
                        placeholder={"Quantity"}
                        value={quantity}
                        onChange={e => setQuantity(e.target.value)}
                    />
                    {/* See the List of Product Picture */}
                    {
                        productPicture.length > 0 ?
                            productPicture.map((pic, index) => { <div key={index}>{pic.name}</div> })
                            : null
                    }
                    {/* Product Picture */}
                    <input className='form-control'
                        type='file'
                        name="productPicture"
                        onChange={handleProductPictures}
                    />

                </Modal>
                <Row>
                    <Col>
                        {renderProducts()}
                    </Col>
                </Row>
            </Container>
        </Layout>

    )

}

export default Products;