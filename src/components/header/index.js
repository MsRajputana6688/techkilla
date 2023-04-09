import React, { useState, useEffect } from 'react'
import logo from '&'
import { CgMenuRightAlt } from 'react-icons/cg'
import { IoCloseSharp } from 'react-icons/io5'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Form, Modal, Row } from 'react-bootstrap'
import Button from '../button/Button'
const Header = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        windowSize.width > 966 ? setIsMobile(true) : setIsMobile(false)
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const [show, setShow] = useState(false)
    if (windowSize.width > 966) {
        return (
            <nav>
                <div className="navbar">
                    <Link href='/' className="logo">
                        <Image src='assets/logo/logoOne.png' alt='teckkilla' width={80} height={80} />
                    </Link>
                    <div className="nav">
                        <Link className='navlink' href='/'>Home</Link>
                        <Link className='navlink' href='/about'>About</Link>
                        <Link className='navlink' href='/service'>Service</Link>
                        <Link className='navlink' href="/case-studies">Case Studies</Link>
                        <button className='navlink' onClick={() => setShow(true)}> Careers</button>
                    </div >
                </div >
                <div className="navButton">
                    <Link href='https://calendly.com/techkilla/meeting' target='_blank'>
                        <button>Book A Demo</button>
                    </Link>
                    <Link href='/contact' >
                        <button>Contact Us</button>
                    </Link >
                </div >
                <Modal size="xl" centered show={show} onHide={() => setShow(false)}>
                    <Modal.Header className='mb-4' closeButton>
                        <Modal.Title>Careers Form</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form className='px-5 pb-4'>
                            <Row>
                                <Col>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control />
                                </Col>
                                <Col>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Label>Phone Number*</Form.Label>
                                    <Form.Control />
                                </Col>
                                <Col>
                                    <Form.Label>Opportunity Looking For*    </Form.Label>
                                    <Form.Control />
                                </Col>
                            </Row>
                            <Form.Group className="my-3 mb-4 pb-4" controlId="formGridAddress2">
                                <Form.Label>How did you hear about us?</Form.Label>
                                <Form.Control />
                            </Form.Group>
                            <button onClick={() => {
                                setShow(false)
                            }}>
                                <Button target='' title='Send Massage'></Button>
                            </button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </nav >
        )
    } else {
        return <nav>
            <div className="navbar">
                <Link href='/' className="logo">
                    <Image src='assets/logo/logoOne.png' width={60} height={60} />
                </Link>
            </div>
            <div className='toggle-secction'>
                <button className='toggle' onClick={() => setIsMobile(!isMobile)}>
                    {isMobile ? <IoCloseSharp /> : <CgMenuRightAlt />}
                    <span id='toggle'></span>
                </button>
            </div>
            {
                <div className={isMobile ? "active mobile-container" : "mobile-container "} id='hideMobileNave'>
                    <div className={isMobile ? "mobile-nav active" : "mobile-nav"}>
                        <div className='mobileMenuContaienr'>
                            <div className='listMenu' onClick={() => setIsMobile(false)}>
                                <Link href='/'>Home</Link>
                            </div>
                            <div className='listMenu' onClick={() => setIsMobile(false)}>
                                <Link href='/about'>About</Link>
                            </div>
                            <div className='listMenu' onClick={() => setIsMobile(false)}>
                                <Link href='/service'>Service</Link>
                            </div>
                            <div className='listMenu' onClick={() => setIsMobile(false)}>
                                <Link href="/case-studies">Case Studies</Link>
                            </div>
                        </div >
                        <div className="MobileNavBtn">
                            <Link href='https://calendly.com/ensights-meeting/' target='_blank'>
                                <button onClick={() => setIsMobile(false)}>Book A Demo</button>
                            </Link>
                            <Link href='/contact' >
                                <button onClick={() => setIsMobile(false)}>Contect Us</button>
                            </Link >
                        </div >
                    </div >
                </div >
            }
        </nav >
    }
}

export default Header