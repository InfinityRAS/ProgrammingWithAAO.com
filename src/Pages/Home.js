import React from 'react'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { Introsection } from "../Components/Home/introsection";
import { HowmuchlangSection } from "../Components/Home/HowmuchlangSection";
import { Specification } from "../Components/Home/Specification";
import { Whytotakesection } from "../Components/Home/Whytotakesection";
import { Sponsers } from "../Components/Home/Sponsers";
import { Buttons } from "../Components/Home/Buttons";
import "../CSS/home.css"

export const Home = ({loader}) => {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Learn Programming for Free, Free Programming Videos, Courses & more - ProgrammingWithAAO</title>
                </Helmet>
            </HelmetProvider>

            <Introsection />       
            <HowmuchlangSection />
            <Specification />
            <Whytotakesection />
            <Sponsers />
            <Buttons loader={loader} />
        </>
    )
}
