import React from 'react';
import { Form } from 'react-bootstrap';

/**
* @author
* @function Input
**/

const Input = (props) => {
    return (
        <Form.Group> {/* removing formController to avoid getting non-unique id warnings in UI */}
            <Form.Label>{props.label}</Form.Label>
            <Form.Control
                type={props.label}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
            <Form.Text className="text-muted">
                {props.errorMessage}
            </Form.Text>
        </Form.Group>
    )

}

export default Input;