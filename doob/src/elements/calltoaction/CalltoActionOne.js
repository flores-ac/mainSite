import React from 'react';
import Fade from 'react-reveal/Fade';

const callToActionData = {
    title: "Ready to start creating a standard website?",
    subtitle: "Finest choice for your home & office",
    btnText: "Purchase Doob",
}

const CalltoActionOne = () => {
    return (
        <div className="rn-callto-action clltoaction-style-default bg_image bg_image_fixed"  style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/bg-image-1.jpg)`}} data-black-overlay="7">
            <div className="container">
                <div className="row">
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
                                    <div className="call-to-btn">
                                        <a className="btn-default" href="#">{callToActionData.btnText}</a>
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
export default CalltoActionOne;