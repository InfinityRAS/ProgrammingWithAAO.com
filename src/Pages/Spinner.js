import React from 'react';
import "../CSS/spinner.css";
import { Helmet } from "react-helmet-async"

const Spinner = () => {
    return (
        <>
        <Helmet>
            <title>
                ProgrammingWithAAO.com
            </title>
        </Helmet>
            <div className="spin-container-p" >
                <div className="spin-container">
                    <div className="spin" id="loader"></div>
                    <div className="spin" id="loader2"></div>
                    <div className="spin" id="loader3"></div>
                    <div className="spin" id="loader4"></div>
                    <span id="text">LOADING...</span>
                </div>
            </div>
        </>
    )
}

export default Spinner
