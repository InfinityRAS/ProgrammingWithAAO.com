import Head from 'next/head'
import React from 'react'
import Spinner from "../Components/Spinner"
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Form = dynamic(() => import('../Components/Contact/Form'), {
    suspense: true,
})

const contact = () => {
    return (
        <>
            <Head>
                <title>Contact Us - ProgrammingWithAAO.com</title>
            </Head>

            <Suspense fallback={<Spinner />}>
                <Form />
            </Suspense>
        </>
    )
}

export default contact