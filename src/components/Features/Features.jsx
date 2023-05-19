// this is the timeline thingy. not to be deleted rn. might be useful somewhere else later. 

// import { Chrono } from "react-chrono";
// const Features = () => {
//     return (
//         <>
//             <div className="timeline">
//                 <h1>What's for you?</h1>
//                 <div style={{ width: '800px', height: '1000px' }}>
//                     <Chrono
//                         mode="VERTICAL_ALTERNATING"
//                         hideControls
//                         disableClickOnCircle
//                         borderLessCards
//                         theme={{
//                             primary: '#d4d4d4',
//                             secondary: '#d4d4d4',
//                             cardBgColor: '#f1f1f1',
//                             cardDetailedTextColor: 'yellow',
//                             cardSubtitleColor: 'var(--blue)',
//                         }}>
//                         <div>
//                             <img src="<url to  a nice image" />
//                             <p>Upload your professional details</p>
//                         </div>
//                     </Chrono>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default Features;


import "./Features.css";
import { Slide } from "react-awesome-reveal";

const Features = () => {
    return (
        <>
            <Slide direction='up' triggerOnce cascade damping={0.9} duration={1000}>
                <h1>Why join us?</h1>
                <div className="features">
                    <div className="feature-card">
                        <div className="feature-card-txt">
                            <h3>
                                Lifelong Connections
                            </h3>
                            <p>
                                Build valuable relationships with fellow alumni and faculty members
                            </p>
                        </div>
                        <div className="feature-card-img">
                            <img src="images/connection-illustration.png" alt="connection-illustration" />
                        </div>
                    </div>

                    <div className="feature-card">
                        <div className="feature-card-img">
                            <img src="images/career-img.png" alt="illustration" />
                        </div>
                        <div className="feature-card-txt">
                            <h3>
                                Exclusive Resources
                            </h3>
                            <p>
                                Access the exclusive job opportunities, mentorship programs and events
                            </p>
                        </div>
                    </div>

                    <div className="feature-card">
                        <div className="feature-card-txt">
                            <h3>
                                Give Back
                            </h3>
                            <p>
                                Contribute to the community through mentoring, donating and supporting current students
                            </p>
                        </div>
                        <div className="feature-card-img">
                            <img src="images/help.png" alt="illustration" />
                        </div>
                    </div>

                    <div className="feature-card">
                        <div className="feature-card-img">
                            <img src="images/updated.png" alt="illustration" />
                        </div>
                        <div className="feature-card-txt">
                            <h3>
                                Stay Updated
                            </h3>
                            <p>
                                Keep up with the current news, events and societies of college
                            </p>
                        </div>
                    </div>

                </div >
            </Slide>
        </>
    )
}
export default Features;