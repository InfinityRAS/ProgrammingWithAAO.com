import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import "../CSS/contact.css";
import { Form } from "../Components/Contact/Form";

export const Contact = ({ loader }) => {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>
                        Contact Us - ProgrammingWithAAO
                    </title>
                </Helmet>
            </HelmetProvider>

            <Form loader={loader} />
        </>
    )
}
