import classes from "./Footer.module.css";

import { Box, Container, Typography, Divider } from "@mui/material";

import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const footerMainStyles = {
    backgroundColor: "sailorBlue.main",
    color: "white.main",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: 5,
};

const logoStyles = {
    fontSize: 25,
    marginLeft: "0.5rem",
    marginBottom: "-0.4rem",
};

const socialIconsStyles = {
    display: "flex",
    justifyContent: "center",
};

function Footer() {
    return (
        <>
            <div className={classes.footer}>
                <Box sx={{ ...footerMainStyles }}>
                    <Container sx={{ fontSize: 20 }} maxWidth="xs" gutterBottom>
                        <Typography sx={{ fontSize: 20 }} gutterBottom>
                            Secureye
                            <VisibilityRoundedIcon sx={{ ...logoStyles }} />
                        </Typography>
                        <Typography variant="subtitle2">
                            Vigilance Beyond Borders: Precision Military Object
                            Detection Redefining Security!
                        </Typography>
                    </Container>

                    <Divider orientation="vertical" flexItem color="white" />

                    <Container maxWidth="xs">
                        <Typography
                            align="center"
                            sx={{ fontSize: 20 }}
                            gutterBottom>
                            Contacts
                        </Typography>
                        <Typography align="center">+91-7304159510</Typography>
                        <Typography align="center">+91-9833608849</Typography>
                    </Container>

                    <Divider orientation="vertical" flexItem color="white" />

                    <Container maxWidth="xs">
                        <Typography sx={{ fontSize: 18 }} gutterBottom>
                            © Vidyalankar Institute of Technology - C6
                        </Typography>
                        <Typography sx={{ ...socialIconsStyles }}>
                            <FacebookIcon fontSize="large" sx={{ margin: 1 }} />
                            <InstagramIcon
                                fontSize="large"
                                sx={{ margin: 1 }}
                            />
                            <TwitterIcon fontSize="large" sx={{ margin: 1 }} />
                            <LinkedInIcon fontSize="large" sx={{ margin: 1 }} />
                        </Typography>
                    </Container>
                </Box>
            </div>
        </>
    );
}

export default Footer;
