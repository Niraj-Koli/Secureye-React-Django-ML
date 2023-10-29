import { Box, CardMedia, Grid, Paper, Typography } from "@mui/material";

import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";

import Footer from "components/UI/Footer/Footer";

import about1 from "./img/about1.jpeg";
import about2 from "./img/about2.jpeg";

const logoStyles = {
    fontSize: 45,
    marginRight: "0.5rem",
    marginBottom: "-0.7rem",
};

const aboutHeadingStyles = {
    display: "flex",
    justifyContent: "center",
};

const paperStyles = {
    marginTop: 7,
    fontSize: 20,
    fontWeight: "700",
    padding: 5,
    textAlign: "center",
    width: "40%",
};

const aboutBodyStyles = {
    display: "flex",
    justifyContent: "center",
};

const paperAboutStyles = {
    marginTop: 7,
    fontSize: 20,
    fontWeight: "600",
    padding: 5,
    textAlign: "center",
};

const aboutSubtitleStyles = {
    textAlign: "left",
    marginLeft: 5,
    marginRight: 5,
};

const aboutImagesStyles = {
    marginTop: 7,
    padding: 2,
};

function About() {
    return (
        <>
            <Box sx={{ marginBottom: "5rem" }}>
                <Box sx={{ ...aboutHeadingStyles }}>
                    <Paper elevation={1} sx={{ ...paperStyles }}>
                        <Typography variant="h4" gutterBottom>
                            Keeping an{" "}
                            <VisibilityRoundedIcon sx={{ ...logoStyles }} />
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            "Vigilance Beyond Borders: Precision Military Object
                            Detection Redefining Security!"
                        </Typography>
                    </Paper>
                </Box>

                <Box>
                    <Grid
                        container
                        spacing={5}
                        columns={21}
                        sx={{ ...aboutBodyStyles }}>
                        <Grid item xs={8}>
                            <Paper
                                elevation={2}
                                square={false}
                                sx={{ ...paperAboutStyles }}>
                                <Typography variant="h4" gutterBottom>
                                    Our Vision
                                </Typography>

                                <Typography
                                    variant="subtitle1"
                                    sx={{ ...aboutSubtitleStyles }}
                                    gutterBottom>
                                    Inspired to learn about our passionate
                                    pursuit in the realm of defence and military
                                    security. Our commitment to enhancing
                                    surveillance systems for the swift and
                                    precise detection of potential threats, such
                                    as weapons and military vehicles, speaks
                                    volumes about your dedication to ensuring
                                    safety and security in sensitive areas.
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={8}>
                            <Paper
                                elevation={2}
                                square={false}
                                sx={{ ...aboutImagesStyles }}>
                                <CardMedia
                                    component="img"
                                    image={about1}
                                    sx={{ height: "333px" }}
                                />
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>

                <Box>
                    <Grid
                        container
                        spacing={5}
                        columns={21}
                        sx={{ ...aboutBodyStyles }}>
                        <Grid item xs={8}>
                            <Paper
                                elevation={2}
                                square={false}
                                sx={{ ...aboutImagesStyles }}>
                                <CardMedia
                                    component="img"
                                    image={about2}
                                    sx={{ height: "359px" }}
                                />
                            </Paper>
                        </Grid>
                        <Grid item xs={8}>
                            <Paper
                                elevation={2}
                                square={false}
                                sx={{ ...paperAboutStyles }}>
                                <Typography variant="h4" gutterBottom>
                                    Our Focus
                                </Typography>

                                <Typography
                                    variant="subtitle1"
                                    sx={{ ...aboutSubtitleStyles }}
                                    gutterBottom>
                                    Delving deep through into machine learning
                                    and computer vision, our goal is to make a
                                    best security product out there. By
                                    empowering computers to achieve higher
                                    levels of intelligence, we are indeed paving
                                    the way for innovative solutions. Our
                                    tailored approach is to address unique
                                    security challenges acknowledges the
                                    complexity of the task at hand.
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            <Footer />
        </>
    );
}

export default About;
