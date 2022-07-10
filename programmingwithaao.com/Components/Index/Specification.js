import React from 'react'
import Image from 'next/image'

const Specification = () => {
    return (
        <section id="specification">
            <h1 id="specification-section-heading">
                Our Specifications
            </h1>
            <div id="specification-section">
                <div id="specification-section">
                    <div className="spect-div">
                        <div className="specification-section-div" id="specification-section-div1">
                            <Image src="/Img/img1.jpg" alt="www.programmingwithaao.com" width={45} height={45} id="img1" className="specification-section-img" />
                            <h1 id="specification-section-heading-1" className="specification-section-heading">
                                Learn to become an Expert
                            </h1>
                        </div>
                        <div className="specification-section-div" id="specification-section-div2">
                            <Image src="/Img/img2.jpg" alt="www.programmingwithaao.com" width={45} height={45} className="specification-section-img" id="img2" />
                            <h1 id="specification-section-heading-2" className="specification-section-heading">
                                Expert Teachers and Excellent Teaching
                            </h1>
                        </div>
                    </div>
                    <div className="spect-div">
                        <div className="specification-section-div" id="specification-section-div3">
                            <Image src="/Img/img3.jpg" width={45} height={45} alt="www.programmingwithaao.com" className="specification-section-img" id="img3" />
                            <h1 id="specification-section-heading-3" className="specification-section-heading">
                                Coding Perfection
                            </h1>
                        </div>
                        <div className="specification-section-div" id="specification-section-div4">
                            <Image src="/Img/img4.jpg" width={45} height={45} alt="www.programmingwithaao.com" className="specification-section-img" id="img4" />
                            <h1 id="specification-section-heading-4" className="specification-section-heading">
                                Every Question has an Answer and More..
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Specification