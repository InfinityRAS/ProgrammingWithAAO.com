import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Introsection } from "../Components/Home/introsection";
import { HowmuchlangSection } from "../Components/Home/HowmuchlangSection";
import { Specification } from "../Components/Home/Specification";
import { Whytotakesection } from "../Components/Home/Whytotakesection";
import { Sponsers } from "../Components/Home/Sponsers";
import { Buttons } from "../Components/Home/Buttons";
import "../CSS/home.css"

export const Home = ({ loader }) => {
    return (
        <>
            <Helmet>
                <title>Learn Programming for Free, Free Programming Videos, Courses & more - ProgrammingWithAAO</title>
                {/* <link rel="stylesheet" href="../../CSS/home.css" /> */}
            </Helmet>

            <Introsection />
            <HowmuchlangSection />
            <Specification />
            <Whytotakesection />
            <Sponsers />
            <Buttons loader={loader} />
        </>
    )
}
