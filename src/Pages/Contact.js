import React from 'react';
import { Helmet } from 'react-helmet-async';
import "../CSS/contact.css";
import { Form } from "../Components/Contact/Form";

const Contact = ({ loader }) => {
    return (
        <>
            <Helmet>
                <title>
                    Contact Us - ProgrammingWithAAO
                </title>
            </Helmet>

            <Form loader={loader} />
        </>
    )
}

export default Contact;
