import "./Path.css";
import { Slide } from "react-awesome-reveal";

const Path = () => {
    return (
        <>
            <Slide direction='up' triggerOnce duration={1000}>
                <div className="path" id="Path">
                    <h1> How to join us? </h1>
                    <div id="wrapper">
                        <div class="step-div">
                            <img src="images/create.png" alt="illustration" />
                            <h3> Create </h3>
                            <p> Upload your basic information to create a profile </p>
                        </div>
                        <div class="line-top"></div>
                        <div class="step-div">
                            <img src="images/wait.png" alt="illustration" />
                            <h3> Wait </h3>
                            <p> Wait for a few hours to get your profile verified </p>
                        </div>
                        <div class="line-bottom"></div>
                        <div class="step-div">
                            <img src="images/celebrate.png" alt="illustration" />
                            <h3> Celebrate </h3>
                            <p> And you're done! Access job opportunities, communities, events and what not </p>
                        </div>
                    </div>
                </div>
            </Slide>
        </>
    )
}
export default Path;