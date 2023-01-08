import { useEffect } from "react";
import "./support.css";
const Support = () => {
    useEffect(() => {
        const rzpPaymentForm = document.getElementById("rzp_payment_form");

        if (!rzpPaymentForm.hasChildNodes()) {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/payment-button.js";
            script.async = true;
            script.dataset.payment_button_id = "pl_L0wwz36jaZZzsT";
            rzpPaymentForm.appendChild(script);
        }

    });

    return (
        <div>
            <h1>Guide MSIans</h1>
            <h3>Interested in talking to current students? Fill the form & we'll follow up</h3>
            <div className="alumniForm">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeNeejk0n33lHjN3XX9o69w25IFFBHBaid3wGFbPmGmqslbSQ/viewform?embedded=true" width="60%" height="910" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
            <div className="supportCard">
                <div className="img">
                    <img src="images/support-illustration.png" alt="support-illustration" />
                </div>
                <div className="content">
                    <h1> Want to thank your alma mater?</h1>
                    <h3> Donate whatever you can! </h3>
                    <form id="rzp_payment_form"></form>
                </div>
            </div>
        </div>
    );
}

export default Support;