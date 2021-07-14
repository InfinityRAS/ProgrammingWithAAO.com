import React from 'react'
import "../CSS/notFound.css";
import { Helmet } from "react-helmet-async";

export const NotFound = () => {
    return (
        <>
            <Helmet>
                <title>
                    Page not found! : {window.location.href}
                </title>
            </Helmet>
            <div className="div-adget">
                <div id="div-adget">
                    <a href="/">
                        <img src="Img/logo_circle.ico" alt="programmingwithaao.com" id="logo" />
                    </a>
                    <p>
                        <b>404</b>
                        <ins>That's an Error</ins>
                    </p>
                    <p>
                        The requested URL ({window.location.href}) was not found on the server
                        <br />
                        <ins>That's all we know</ins>
                    </p>
                </div>
            </div>
        </>
    )
}
