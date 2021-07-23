import { Helmet } from "react-helmet-async"
import React from 'react';
import "../CSS/notFound.css"

const NotFound = () => {
    return (
        <>
            <Helmet>
                <title>Error 404! Page Not Found</title>
            </Helmet>
            <div id="notfound">
                <img src="Img/logo_circle.ico" alt="programmingwithaao.com" id="logo" />
                <div id="div">
                    <ins>The requested url ({window.location.href}) was not found on the server</ins>
                    <p>That's all we know</p>
                </div>
            </div>
        </>
    )
}

export default NotFound