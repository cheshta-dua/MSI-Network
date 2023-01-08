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
    );
}

export default Support;