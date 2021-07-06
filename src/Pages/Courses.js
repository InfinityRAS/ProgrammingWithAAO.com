import React from 'react'
import { HelmetProvider, Helmet } from 'react-helmet-async'

export const Courses = () => {
    return (
<>
        <HelmetProvider>
            <Helmet>
                <title>
                    Beowse video
                </title>
            </Helmet>
        </HelmetProvider>
</>
    )
}
