import React, { useState } from "react";
import { Image, Row, Col, Tabs, Tab, Button,Carousel } from "react-bootstrap";
import questionmark from "../questionmark.svg";
import frame from "../frame.svg";
import plus from "../plus.svg";
import leftarrow from "../leftarrow.svg";
import rightarrow from "../rightarrow.svg";
import galleryimg1 from "../galleryimg.svg";

const Home = () => {
    const [carouselImages, setCarouselImages] = useState([galleryimg1, galleryimg1, galleryimg1]);

    // Function to split images into chunks of 3
    const chunkArray = (arr, size) => {
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    };

    const carouselChunks = chunkArray(carouselImages, 3);

    // Function to handle adding a new image
    const handleAddImage = () => {
        setCarouselImages([...carouselImages, galleryimg1]); // Add a new image (galleryimg1) to the carousel
    };
    
    return (
        <div className="container-fluid mt96 mb110 pr86">
            <Row className="">
                <Col md={12} xl={5} xxl={6}  lg={12} xs={12} sm={12} className="col-xxxl-7" style={{paddingLeft:"29px",paddingRight:"57px"}}>
                    <div className=" ht639  mb-3">

                    </div>
                </Col>
                <Col md={12} xl={7} xxl={6}  lg={12} xs={12} sm={12} className="col-xxxl-5">
                    <div className="card2 pad2" id="scroll">
                        <div className="d-flex">
                            <div className="dmflex">
                                <div><Image src={questionmark} alt="" /></div>
                                <div><Image src={frame} alt="" /></div>
                            </div>
                            <div className=" ps-3">
                                <Tabs defaultActiveKey="home" id="pills-tab" className="tabs1">
                                    <Tab eventKey="home" title="About Me">
                                        <div className="tab-pane-content">
                                            <div className="mt35">
                                                <p className="f20">
                                                    Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
                                                </p>
                                                <p className="f20">
                                                    I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
                                                </p>
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="profile" title="Experiences">
                                        <div className="tab-pane-content">
                                            <div className="mt35">
                                                <p className="f20">
                                                    Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
                                                </p>
                                                <p className="f20">
                                                    I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
                                                </p>
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="contact" title="Recommended">
                                        <div className="tab-pane-content">
                                            <div className="mt35">
                                                <p className="f20">
                                                    Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
                                                </p>
                                                <p className="f20">
                                                    I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
                                                </p>
                                            </div>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                    <div className="mt21">
                        <div className="rect1"></div>
                    </div>
                    <div className="card2 pad2">
                        <div className="d-flex">
                            <div className="dmflex">
                                <div><Image src={questionmark} alt="" /></div>
                                <div><Image src={frame} alt="" /></div>
                            </div>
                            <div className=" ps-3 w-100">
                                <div className="d-flex">
                                    <Col md={6} lg={5} xl={5}>
                                        <div className="gallerybg">Gallery</div>
                                    </Col>
                                    <Col md={6} lg={7} xl={7} className="text-end">
                                        <div className="d-flex justify-content-end">
                                            <div>
                                                <Button className="btn1 addimage d-flex align-items-center justify-content-center" onClick={handleAddImage}> <Image src={plus} className="pe-1" /> Add Image</Button>
                                            </div>
                                            <div className="d-flex align-items-center mt22 ">
                                                <Image src={rightarrow} className="ps-3 pe-0 tstrans" width={110} height={100} />
                                                <Image src={leftarrow} className="ps-0 pe-0 tstrans" width={84} height={100} />
                                            </div>
                                        </div>
                                    </Col>
                                </div>
                                <Row className="mt212">
                                    <Carousel interval={1000}>
                                        {carouselChunks.map((chunk, idx) => (
                                            <Carousel.Item key={idx}>
                                                <Row>
                                                    {chunk.map((img, index) => (
                                                        <Col key={index} md={4} sm={4} xs={12}>
                                                            <Image src={img} alt={`Slide ${idx * 3 + index + 1}`} className="d-block w-100" />
                                                        </Col>
                                                    ))}
                                                </Row>
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                </Row>
                            </div>
                        </div>

                    </div>
                    <div className="mt21">
                        <div className="rect1"></div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
export default Home;