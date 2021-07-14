import React from 'react';
import { Helmet } from 'react-helmet-async';
import "../CSS/enroll.css";
import { Form } from "../Components/Enroll/Form";

export const Enroll = ({ loader }) => {
    return (
        <>
            <Helmet>
                <title>Enroll - ProgrammingWithAAO.com</title>
            </Helmet>

            <Form loader={loader} />
        </>
    )
}
