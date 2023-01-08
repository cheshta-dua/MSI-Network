import "./Societies.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import InstagramIcon from '@mui/icons-material/Instagram';

const Societies = () => {
    return (
        <div>
            <h1> What's new?</h1>
            <h3> Stay updated with current MSI news</h3>
            <h2 class="h2-soc"> College Societies</h2>
            <div className="SocCarousel">
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlay
                    autoPlaySpeed={3000}
                    centerMode={false}
                    containerClass="container-with-dots"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 3,
                            partialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 2,
                            partialVisibilityGutter: 30
                        }
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={2}
                    swipeable>
                    <div className="SocCard">
                        <div className="SocLogo">
                            <img src="images/SocLogos/tark.png" alt="logo" />
                        </div>
                        <div className="SocName">Tark</div>
                        <div className="SocDesc">The Literary Society</div>
                        <div className="SocLink">
                            <a href="https://www.instagram.com/tark.msi/" target="_blank"> <InstagramIcon /> </a>
                        </div>
                    </div>
                    <div className="SocCard">
                        <div className="SocLogo">
                            <img src="images/SocLogos/NSS.jpg" alt="logo" />
                        </div>
                        <div className="SocName">NSS</div>
                        <div className="SocDesc">Community</div>
                        <div className="SocLink">
                            <a href="https://www.instagram.com/nss_msi/" target="_blank"> <InstagramIcon /> </a>
                        </div>
                    </div>
                    <div className="SocCard">
                        <div className="SocLogo">
                            <img src="images/SocLogos/meraki.jpg" alt="logo" />
                        </div>
                        <div className="SocName">Meraki</div>
                        <div className="SocDesc">The Art Society</div>
                        <div className="SocLink">
                            <a href="https://www.instagram.com/meraki_msi/" target="_blank"> <InstagramIcon /> </a>
                        </div>
                    </div>
                    <div className="SocCard">
                        <div className="SocLogo">
                            <img src="images/SocLogos/innovision.jpg" alt="logo" />
                        </div>
                        <div className="SocName">Innovision</div>
                        <div className="SocDesc">The Photography Society</div>
                        <div className="SocLink">
                            <a href="https://www.instagram.com/innovision.msi/" target="_blank"> <InstagramIcon /> </a>
                        </div>
                    </div>
                    <div className="SocCard">
                        <div className="SocLogo">
                            <img src="images/SocLogos/natureknocks.jpg" alt="logo" />
                        </div>
                        <div className="SocName">Nature Knocks</div>
                        <div className="SocDesc">The Eco Club</div>
                        <div className="SocLink">
                            <a href="https://www.instagram.com/natureknocks_msi/" target="_blank"> <InstagramIcon /> </a>
                        </div>
                    </div>
                    <div className="SocCard">
                        <div className="SocLogo">
                            <img src="images/SocLogos/sifar.jpg" alt="logo" />
                        </div>
                        <div className="SocName">Sifar</div>
                        <div className="SocDesc">The Drama Society</div>
                        <div className="SocLink">
                            <a href="https://www.instagram.com/msisifar/" target="_blank"> <InstagramIcon /> </a>
                        </div>
                    </div>
                    <div className="SocCard">
                        <div className="SocLogo">
                            <img src="images/SocLogos/ethos.jpg" alt="logo" />
                        </div>
                        <div className="SocName">Ethos</div>
                        <div className="SocDesc">The Fashion Society</div>
                        <div className="SocLink">
                            <a href="https://www.instagram.com/ethosmsi/" target="_blank"> <InstagramIcon /> </a>
                        </div>
                    </div>
                </Carousel>
            </div>
            <h2 class="h2-soc2"> More updates coming soon! </h2>
        </div>
    );
}

export default Societies;