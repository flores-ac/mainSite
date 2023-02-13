import React from 'react';
import Fade from 'react-reveal/Fade';
import { FiArrowRight } from "react-icons/fi";

const callToActionData = {
    title: "Ready to start creating a standard website?",
    subtitle: "Finest choice for your home & office",
    btnText: "Purchase Doob",
}

const CalltoActionFive = () => {
    return (
        <div className="rn-callto-action clltoaction-style-default style-5">
            <div className="container">
                <div className="row row--0 align-items-center content-wrapper theme-shape">
                    <div className="col-lg-12">
                        <div className="inner">
                            <div className="content text-center">
                                <Fade top>
                                    <h2 className="title">{callToActionData.title}</h2>
                                </Fade>
                                <Fade top>
                                    <h6 className="subtitle">{callToActionData.subtitle}</h6>
                                </Fade>

                                <Fade top>
                                    <div className="call-to-btn text-center">
                                        <a className="btn-default btn-icon" href="#">{callToActionData.btnText} <i className="icon"><FiArrowRight /></i></a>
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
export default CalltoActionFive;