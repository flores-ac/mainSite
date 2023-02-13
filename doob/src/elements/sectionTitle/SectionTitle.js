import React from 'react';
import Fade from 'react-reveal/Fade';


const SectionTitle = ({subtitle, title, description, textAlign, radiusRounded}) => {
    return (
        <div className={`section-title ${textAlign}`}>
           <Fade top>
                <h4 className={`subtitle ${radiusRounded}`}><span className="theme-gradient" dangerouslySetInnerHTML={{__html: subtitle}}></span></h4>
            </Fade>
            
           <Fade top>
                <h2 className="title w-600 mb--20" dangerouslySetInnerHTML={{__html: title}}></h2>
            </Fade>

           <Fade top>
                <p className="description b1" dangerouslySetInnerHTML={{__html: description}}></p>
            </Fade>
        </div>
    )
}
export default SectionTitle;