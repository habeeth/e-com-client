import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createCategory, getAllCategories } from '../../actions';
import Layout from '../../components/Layouts/Index'
import Input from '../../components/UI/Input/Index';

/**
* @author
* @function Category
**/

const Category = (props) => {
    const dispatch = useDispatch();
    const category = useSelector(state => state.category);
    const [categoryName, setCategoryName] = useState('');
    const [parentCategoryId, setParentCategoryId] = useState('');
    const [categoryImage, setCategoryImage] = useState('');
    const [show, setShow] = useState(false);


    useEffect(() => {
        dispatch(getAllCategories())
    }, [])

    const handleClose = () => {
        const form = new FormData();
        // const newCategory = {
        //     categoryName,
        //     parentCategoryId,
        //     categoryImage
        // }
        form.append('name', categoryName);
        form.append('parentId', parentCategoryId);
        form.append('catPictures', categoryImage);
        dispatch(createCategory(form));
        setShow(false);
        // console.log("cat.js", newCategory);
    }
    const handleShow = () => setShow(true);

    const handlecategoryImage = (e) => {
        setCategoryImage(e.target.files[0])
    }

    const renderCategories = (categories) => {
        let myCats = [];
        console.log("typeof categories", typeof categories);
        for (let cat of categories) {
            myCats.push(
                <li key={cat.name}>
                    {cat.name}
                    {cat.children.length > 0 ? (<ul> {renderCategories(cat.children)}</ul>) : null}
                </li >
            )
        }
        return myCats;
    }

    const linearCategories = (categories, options = []) => {
        console.log("categories", categories);

        for (let cat of categories) {
            console.log("cat", cat);
            options.push(
                {
                    value: cat._id,
                    name: cat.name
                });
            if (cat.children.length > 0) {
                linearCategories(cat.children, options);
            }
        }
        return options;
    }

    if (category.loading) return "Loading...";

    return (
        <Layout sidebar>
            <Container>
                <Row>
                    <Col md={12}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h3>Categry</h3>
                            <Button variant='info' onClick={handleShow}>Add</Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div>
                            <ul>
                                {renderCategories(category.categories)}
                                {/* {JSON.stringify(linearCategories(category.categories, []))} */}
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header >
                        <Modal.Title>Add Categories</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Input
                            // type={}
                            placeholder={"Category Name"}
                            value={categoryName}
                            onChange={e => setCategoryName(e.target.value)}
                        />
                        <select className='form-control' onChange={e => setParentCategoryId(e.target.value)}>
                            <option>--- SELECT ---</option>
                            {
                                linearCategories(category.categories).map(m =>
                                    <option key={m.value} value={m.value} >{m.name}</option>
                                )
                            }
                        </select>

                        <input className='form-control'
                            type='file'
                            name="categoryImage"
                            onChange={handlecategoryImage}
                        />

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='warning' onClick={handleClose}>Save Changes</Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </Layout>

    )

}

export default Category;