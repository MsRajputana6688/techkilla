import Footer from '@/components/footer'
import Header from '@/components/header'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import bg from '../../../../public/Assets/service/web banner_micro site.jpg'
import serive from '../../../../public/Assets/service/miro-service.gif'
import UseCase from '@/components/service/UseCase'
import Benefits from '@/components/service/Benefit'
import ProjectSlider from '@/components/ProjectSlider/ProjectSlider'
const baseUrl = 'http://localhost:3000'

const MicrositeDesign = () => {
    const css = { maxWidth: '100%', height: 'auto' }
    return (
        <>
            <Head>
                <title>Microsite design</title>
            </Head>
            <Header />
            <main>
                <div className="main">
                    <div className='mainContainer'>
                        <div className="serviceIntro">
                            <div className="backGround">
                                <Image src={bg} />
                            </div>
                            <div className="introSection">
                                <h1><span>M</span>icrosite <span>D</span>esign</h1>
                                <Container>
                                    <Row className='justify-content-center'>
                                        <Col xxl={10} lg={11} md={12} sm={12}>
                                            <div className="introDesc ">
                                                Crafting Engaging and Impactful Microsite Designs for Your Business
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        <div className="desc pb-5">
                            <h2 className='text-center py-5'>What are microsites?</h2>
                            <Container>
                                <Row>
                                    <Col xxl={6} xl={6} md={6} sm={12}>
                                        <div className="serviceContainer">
                                            <p>
                                                A microsite is a website (or a single web page) that is dedicated to a single brand and is utilized by businesses in order to promote special events, products, or campaigns.
                                            </p>
                                            <p>
                                                Typically, they are websites that do not focus on application development. They would not have capabilities for eCommerce, which is something that most of Shopify's competitors provide, nor would they have a complex sales funnel.
                                            </p>
                                            <p>
                                                Instead, they are information-heavy websites with the goal of attracting the greatest number of users feasible. The material that can be found on their website (or websites) is almost always humorous and encourages users to participate. Because of this, their brand is better able to engage with users.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} md={6} sm={12}>
                                        <Image src={serive} style={css} />
                                    </Col>
                                </Row>
                            </Container>
                            <div className="use_case">
                                <div id="use_case">
                                    <Container>
                                        <div className='use_case_heading'>Use cases</div>
                                        <Row>
                                            <UseCase img={`${baseUrl}/Assets/service/product launch-01-01.png`} title={'Product launch'} />
                                            <UseCase img={`${baseUrl}/Assets/service/Targeting prospects-01-01.png`} title={'Targeting prospects'} />
                                            <UseCase img={`${baseUrl}/Assets/service/Geotargeting market-01-01.png`} title={'Geotargeting market'} />
                                            <UseCase img={`${baseUrl}/Assets/service/distinguishing the corporate-01-01.png`} title={'distinguishing the corporate brand'} />
                                            <UseCase img={`${baseUrl}/Assets/service/product launch-01-01.png`} title={'promoting events'} />
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                            <div className='BenefitsContainer'>
                                <h4>Benefits of launching your own microsite</h4>
                                <div className="Benefits">
                                    <Benefits data={['Specifically aimed campaigns', 'The production of leads', 'Awareness of the brand', 'SEO with virality potential for specialized keywords', ' Easy to manage']} />
                                </div>
                            </div>
                        </div>
                        <Container>
                            <div className="section">
                                <h3>Related projects</h3>
                                <ul>
                                    <li><Link href='/'>  DOW packaging and supplies                 </Link> </li>
                                    <li><Link href='/'>  NHRD QR verification and instant print     </Link> </li>
                                    <li><Link href='/'>  HDFC Inquizitive family                    </Link> </li>
                                    <li><Link href='/'>  HDFC Analytiq 1.0                          </Link> </li>
                                    <li><Link href='/'>  HDFC Analytiq 2.                           </Link> </li>
                                    <li><Link href='/'>  HDFC Analytiq 3.                           </Link> </li>
                                    <li><Link href='/'>  Microsoft Hackathon                        </Link> </li>
                                    <li><Link href='/'>  Tata International E-Marathon              </Link> </li>
                                    <li><Link href='/'>  Tuborg super over                          </Link> </li>
                                    <li><Link href='/'>  TVS Motors digital tambola                 </Link> </li>
                                    <li><Link href='/'>  Concentrix got talent                      </Link> </li>
                                    <li><Link href='/'>  Multitv Quiz Game                          </Link> </li>
                                    <li><Link href='/'>  Total energies virtual talent hunt show    </Link> </li>
                                    <li><Link href='/'>  Nutella - Ramadan video quiz game          </Link> </li>
                                    <li><Link href='/'>  Cipla cycle meet                           </Link> </li>
                                    <li><Link href='/'>  Colgate swashbuckers day                   </Link> </li>
                                    <li><Link href='/'>  World cloud photobooth                     </Link> </li>
                                    <li><Link href='/'>  Colgate - IPL                              </Link> </li>
                                    <li><Link href='/'>  Cera - Quiz game                           </Link> </li>
                                    <li><Link href='/'>  Cipla Urology quiz game                    </Link> </li>
                                    <li><Link href='/'>  Loreal dreamlength launch                  </Link> </li>
                                    <li><Link href='/'>  Total Oil - talent hun                     </Link> </li>
                                </ul>
                            </div>
                        </Container>

                        {/* //the new design  vewed qudra */}
                        <Container>
                            <ProjectSlider />
                        </Container>
                        <Footer />
                    </div>
                </div>
            </main>

        </>
    )
}

export default MicrositeDesign