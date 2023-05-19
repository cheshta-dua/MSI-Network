import "./footer.css";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = () => {
    return (
        <div class="pageFooter">
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2834302490496!2d77.08987431500881!3d28.62126628242223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04af60c0483d%3A0xf4ac6ff1e2ac8232!2sMaharaja%20Surajmal%20Institute!5e0!3m2!1sen!2sin!4v1672926677017!5m2!1sen!2sin" width="98%" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <p>© 2023</p>
            <a href="mailto:maharajasurajmalinstitute.net@gmail.com">
                <EmailIcon />
            </a>
            <a href="https://github.com/cheshta-dua/MSI-Network" target="_blank">
                <GitHubIcon />
            </a>
        </div>
    )
}

export default Footer;