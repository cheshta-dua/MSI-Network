import "./footer.css";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = () => {
    return (
        <div class="pageFooter">
            <p>© 2022-23.</p>
            <a href="mailto:maharajasurajmalinstitute.net@gmail.com">
                <EmailIcon />
            </a>
            {/* update github later */}
            <a href="" target="_blank">
                <GitHubIcon />
            </a>
        </div>
    )
}

export default Footer;