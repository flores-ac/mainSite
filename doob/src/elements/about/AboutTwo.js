import React from 'react';
import Fade from 'react-reveal/Fade';
import {Link} from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";

const AboutTwo = () => {
    return (
        <div className="rwt-about-area about-style-2 rn-section-gap">
            <div className="container">
                <div className="row row--30 align-items-center">
                    <div className="col-lg-5">
                        <div className="thumbnail">
                            <img className="w-100" src="./images/about/about-1.png" alt="About Images" />
                        </div>
                    </div>

                    <div className="col-lg-7 mt_md--30 mt_sm--30">
                        <div className="content">
                            <div className="section-title">

                                <Fade top>
                                    <h4 className="subtitle"><span className="theme-gradient">Corporate About.</span></h4>
                                    <h2 className="title mt--10">About Our Business.</h2>
                                </Fade>

                                <Fade top>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quod autem sequi reprehenderit labore consequuntur excepturi voluptatibus omnis similique qui unde eligendi tempora, ea at, laudantium nostrum minus pariatur quasi!</p>

                                    <ul className="list-icon">
                                        <li><span className="icon"><FiCheck /></span> Track your teams progress with mobile app.</li>
                                        <li><span className="icon"><FiCheck /></span> Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                                        <li><span className="icon"><FiCheck /></span> Ipsum dolor sit amet consectetur adipisicing.</li>
                                        <li><span className="icon"><FiCheck /></span> Your teams progress with mobile app.</li>
                                    </ul>
                                </Fade>
                                <Fade top>
                                    <div className="read-more-btn mt--40">
                                        <Link className="btn-default btn-icon" to="#">More About Us <i className="icon"><FiArrowRight /></i></Link>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default AboutTwo;
