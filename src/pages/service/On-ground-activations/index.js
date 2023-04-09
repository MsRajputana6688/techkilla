import Header from '@/components/header'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '@/components/footer'
import Benefits from '@/components/service/Benefit'
import SingleCard from '@/components/ProjectSlider/singleCard'
const list = [
    {
        title: "Excitometer",
        them: "/assets/service/500x500/Excitometer.png"
    },
    {
        title: "360* spin booth or photobooth",
        them: "/assets/service/500x500/spin_booth.png"
    },
    {
        title: "Magazine Booth",
        them: "/assets/service/500x500/Magazine_Booth.png"
    },
    {
        title: "Kinect games",
        them: "/assets/service/500x500/Kinect_games.png"
    },
    {
        title: "AR Football",
        them: "/assets/service/500x500/AR_Football.png"
    },
    {
        title: "VR Activities",
        them: "/assets/service/500x500/AR_Activities.png"
    },
    {
        title: "Video feedback booth",
        them: "/assets/service/500x500/Video_fee_back_booth.png"
    },
    {
        title: "Slingshot ",
        them: "/assets/service/500x500/Slingshot.png"
    },
    {
        title: "Digital Photobooth",
        them: "/assets/service/500x500/Digital_Photobooth.png"
    },
    {
        title: "Mosaic wall",
        them: "/assets/service/500x500/Mosaic_wall.png"
    },
    {
        title: "Mosaic wall 2",
        them: "/assets/service/500x500/Mosaic_wall_2.png"
    },
    {
        title: "Green screen or Croma photobooth",
        them: "/assets/service/500x500/Green_screen_or_Croma_photobooth.png"
    },
    
]
const Ongroundactivations = () => {
    return (
        <>
            <Head>
                <title>VR-Solutions</title>
            </Head>
            <Header />
            <main>
                <div className="main">
                    <div className='mainContainer'>
                        <div className="serviceIntro">
                            <div className="backGround">
                                <Image src='/assets/service/web banner_on ground activity 2.jpg' />
                            </div>
                            <div className="introSection">
                                <h1>On-ground activations</h1>
                                <Container>
                                    <Row className='justify-content-center'>
                                        <Col xxl={10} lg={11} md={12} sm={12}>
                                            <div className="introDesc ">
                                                Experience the brand like never before with our innovative experiential marketing strategies.
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        <div className='BenefitsContainer bgWhite'>
                            <h4>Benefits</h4>
                            <div className="Benefits">
                                <Benefits data={['Captures visitors attention quickly', 'Easy database collection', 'Lasting experience', 'Word of mouth promotion', 'Higher engagement', 'Better retention', 'Feedback collection', 'Instant conversion']} />
                            </div>
                        </div>
                        <div className="bgWhite">
                            <Container>
                                <div className="section">
                                    <div className='use_case_heading'>Related projects</div>
                                    <SingleCard list={list} />
                                </div>
                            </Container>
                        </div>
                        <Footer />
                    </div>
                </div>
            </main>

        </>
    )
}

export default Ongroundactivations