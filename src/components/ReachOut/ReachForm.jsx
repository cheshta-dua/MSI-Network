import "./form.css";
const ReachForm = () => {
    return (
        <div id="ReachOut">
            <h1>Reach Out</h1>
            <h3>Have a feedback for us? Don’t hesitate to drop it down & we’ll be in touch!</h3>
            {/* Google Form */}
            <div className="form">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScJu385FEBf50-vQtci2ZvMMVmw13lWi8iKQUVg05bX-OsXkA/viewform?embedded=true" width="60%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
        </div>
    )
}

export default ReachForm;