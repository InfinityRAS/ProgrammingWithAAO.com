import React from 'react'
import Image from 'next/image'

const Sponsers = () => {
    return (
        <section id="sponsers-section">
            <h1 id="heading-sponsers-section">
                Our Sponsers
            </h1>
            <Image src="/Img/logo1.png" width={45} height={45} alt="" id="logo1" className="logos" />
            <Image src="/Img/logo2.png" width={45} height={45} alt="" id="logo2" className="logos" />
            <Image src="/Img/logo3.png" width={45} height={45} alt="" id="logo3" className="logos" />
            <Image src="/Img/logo4.png" width={45} height={45} alt="" id="logo4" className="logos" />
        </section>
    )
}

export default Sponsers