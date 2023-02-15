import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AR from '../../../public/Assets/service/ar.webp'
import VR from '../../../public/Assets/service/VR.webp'
import AD from '../../../public/Assets/service/ADS.webp'
import Game from '../../../public/Assets/service/Game.webp'
import Image from 'next/image'
import Link from 'next/link'
const ServiceCart = () => {
    return (
        <Container>
            <Row>
                <Col xxl={3} lg={3} md={6} sm={6} className='my-3'>
                    <div className="serviceCart">
                        <div className="iconContainer">
                            <div className="serviceIcon">
                                <Image src={AR} />
                            </div>
                        </div>
                        <div className="cartTitle">
                            Social AR Filters
                        </div>
                        <p>
                            Immersive augmented reality experiences on Facebook, Instagram, and Snapchat lenses
                        </p>
                        <div className="btnSection2">
                            <button>
                                <Link href="/">Read more</Link>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </Col>

                <Col xxl={3} lg={3} md={6} sm={6} className='my-3'>
                    <div className="serviceCart">
                        <div className="iconContainer">
                            <div className="serviceIcon">
                                <Image src={AD} />
                            </div>
                        </div>
                        <div className="cartTitle">
                            Playable Ads
                        </div>
                        <p>
                            Web, mobile applications, and social news streams advertisements for interactive gaming
                        </p>
                        <div className="btnSection2">
                            <button>
                                <Link href="/">Read more</Link>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </Col>

                <Col xxl={3} lg={3} md={6} sm={6} className='my-3'>
                    <div className="serviceCart">
                        <div className="iconContainer">
                            <div className="serviceIcon">
                                <Image src={VR} />
                            </div>
                        </div>
                        <div className="cartTitle">
                            VR Experience
                        </div>
                        <p>
                            360 Virtual excursion, interaction, and gaming that are engaging yet experiencing for all
                        </p>
                        <div className="btnSection2">
                            <button>
                                <Link href="/">Read more</Link>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </Col>


                <Col xxl={3} lg={3} md={6} sm={6} className='my-3'>
                    <div className="serviceCart">
                        <div className="iconContainer">
                            <div className="serviceIcon">
                                <Image src={Game} />
                            </div>
                        </div>
                        <div className="cartTitle">
                            Newsfeed Games
                        </div>
                        <p>
                            Interactive games made specifically for web browsers (Safari, Chrome, or Edge) and social media
                        </p>
                        <div className="btnSection2">
                            <button>
                                <Link href="/">Read more</Link>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ServiceCart
