import Footer from '@/components/footer'
import Header from '@/components/header'
import Head from 'next/head';
import React from 'react'
import ContactFrom from './ContactForm';
<<<<<<< HEAD
// import Comp from '../../../public/Assets/contact/Comp.mov'
import ColLeft from '@/components/home/section2/left';
=======
import Comp from '../../../public/Assets/contact/Comp.mov'
>>>>>>> 187a4d6181c551b274dbe0f9df58daf6f22551ef
const Contact = () => {
    return (
        <>
            <Head>
                <title>Contact Us</title>
            </Head>
            <Header />
            <main>
                <div className="main">
                    <div className='mainContainer'>
                        <div className="contact container-fluid">
                            <div className="row">
                                <div className="col-lg-6  home-image px-0">
                                    <div className="hero ">
                                        {/* <video autoPlay={true} playsInline loop={true} muted={true}>
                                            <source
                                                src={Comp}
                                                type="video/mov"
                                            />
                                            <source src="/Hero_Desk_alpha.mp4" type="video/mp4" />
                                        </video> */}
                                        <ColLeft />
                                    </div>

                                </div>
                                <div className="col-lg-6 contact-form">
                                    <ContactFrom />
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </main>

        </>
    )
}

export default Contact
