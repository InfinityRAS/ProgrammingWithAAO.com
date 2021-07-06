import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import "../CSS/enroll.css";
import { Form } from "../Components/Enroll/Form";

export const Enroll = ({loader}) => {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Enroll - ProgrammingWithAAO.com</title>
                </Helmet>
            </HelmetProvider>

            <Form loader={loader} />
        </>
    )
}
