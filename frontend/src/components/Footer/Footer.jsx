import styles from "./Footer.module.css";

import { NavLink } from "react-router-dom";

import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import LaunchSharpIcon from "@mui/icons-material/LaunchSharp";

const logoStyles = {
    fontSize: 35,
    marginRight: "0.5rem",
    marginBottom: "-1rem",
};

const iconsStyles = {
    fontSize: 30,
};

const footerIconStyles = {
    fontSize: 15,
    marginRight: "0.5rem",
    marginBottom: "-0.2rem",
};

function Footer() {
    return (
        <>
            <section className={styles.footer}>
                <div className={styles.footerContainer}>
                    <div className={styles.box}>
                        <NavLink to="/" className={styles.heading}>
                            <VisibilityRoundedIcon sx={{ ...logoStyles }} />
                            <span>Secureye</span>
                        </NavLink>

                        <p className={styles.desc}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer elementum ipsum nec enim posuere
                            molestie.
                        </p>

                        <div className={styles.socials}>
                            <NavLink to="" className={styles.icons}>
                                <LinkedInIcon sx={{ ...iconsStyles }} />
                            </NavLink>
                            <NavLink to="" className={styles.icons}>
                                <TwitterIcon sx={{ ...iconsStyles }} />
                            </NavLink>
                            <NavLink to="" className={styles.icons}>
                                <InstagramIcon sx={{ ...iconsStyles }} />
                            </NavLink>
                        </div>
                    </div>

                    <div className={styles.contacts}>
                        <h1 className={styles.heading}>Contacts</h1>
                        <div className={styles.links}>
                            <LocalPhoneRoundedIcon
                                sx={{ ...footerIconStyles }}
                            />
                            +91-9786543210
                        </div>
                        <div className={styles.links}>
                            <EmailRoundedIcon sx={{ ...footerIconStyles }} />
                            mail@secureye.com
                        </div>
                        <div className={styles.links}>
                            <LocationOnRoundedIcon
                                sx={{ ...footerIconStyles }}
                            />
                            Secureye HQ, Vidyalankar Institute of Technology,
                            Wadala, Mumbai - 400074
                        </div>
                    </div>

                    <div className={styles.navigation}>
                        <h1 className={styles.heading}>Navigate</h1>
                        <NavLink to="/image" className={styles.links}>
                            <LaunchSharpIcon sx={{ ...footerIconStyles }} />
                            Image
                        </NavLink>
                        <NavLink to="/video" className={styles.links}>
                            <LaunchSharpIcon sx={{ ...footerIconStyles }} />
                            Video
                        </NavLink>
                        <NavLink to="/webcam" className={styles.links}>
                            <LaunchSharpIcon sx={{ ...footerIconStyles }} />
                            WebCam
                        </NavLink>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footer;
