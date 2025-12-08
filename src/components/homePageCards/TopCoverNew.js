import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Snackbar from "@material-ui/core/Snackbar";
import herbs from "./../../assets/images/site/andersons/herbs2.jpg";
import beverages from "./../../assets/images/site/andersons/beverages.png";
import medicine from "./../../assets/images/site/andersons/medicines.webp";
import backgroundRetail from "./../../assets/images/covers/delivery.png";
import AssessmentsAndMocksServices from "../AssessmentsAndMocksServices";
import HomeAndPrivateServices from "../HomeAndPrivateServices";
import MentorshipService from "../MentorshipService";

import { baseURL } from "../../apis/util";

import theme from "../ui/Theme";
import { PropaneSharp } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    //height: "100%",
    height: 500,
    width: "100%",

    marginLeft: "10px",
    //borderRadius: 30,
    marginTop: "2em",
    marginBottom: "1em",
    padding: 0,
    // "&:hover": {
    //   //border: "solid",
    //   //borderColor: theme.palette.common.grey,
    // },
  },
  rootMobile: {
    maxWidth: "100%",
    height: 720,
    //height: "100%",
    width: "100%",

    marginLeft: "0px",
    //borderRadius: 30,
    marginTop: "2.5em",
    marginBottom: "0.5em",
    padding: 0,
    backgroundColor: "#FFFFFF",

    "&:hover": {
      //border: "solid",
      //borderColor: theme.palette.common.grey,
    },
  },
  mediaMobile: {
    height: "100%",
    width: "100%",
    // marginLeft: "80px",
  },
  media: {
    height: "100%",
    width: "100%",
    //marginLeft: "80px",
    //marginTop: "80px",
  },

  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    marginTop: "55px",
    marginLeft: "160px",

    border: `2px solid ${theme.palette.common.blue}`,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  instructorsButton: {
    borderRadius: 10,
    height: 40,
    width: 210,
    marginLeft: 50,
    marginTop: 1,
    marginBottom: 20,
    borderRadius: 100,
    color: "white",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.common.green,
    },
  },
  instructorsMobileButton: {
    borderRadius: 10,
    height: 40,
    width: 100,
    marginLeft: 5,
    marginTop: 1,
    marginBottom: 100,
    borderRadius: 50,
    fontSize: 9,
    color: "white",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.common.green,
    },
  },

  assessorsButton: {
    borderRadius: 10,
    height: 40,
    width: 220,
    marginLeft: 70,
    marginTop: 1,
    marginBottom: 20,
    borderRadius: 100,
    color: "white",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.common.green,
    },
  },
  assessorsMobileButton: {
    borderRadius: 10,
    height: 40,
    width: 120,
    marginLeft: 5,
    marginTop: 1,
    marginBottom: 100,
    borderRadius: 50,
    fontSize: 9,
    color: "white",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.common.green,
    },
  },
  mentorsButton: {
    borderRadius: 10,
    height: 40,
    width: 150,
    marginLeft: 120,
    marginTop: 1,
    marginBottom: 20,
    borderRadius: 100,
    color: "white",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.common.green,
    },
  },

  mentorsMobileButton: {
    borderRadius: 10,
    height: 40,
    width: 100,
    marginLeft: 5,
    marginTop: 1,
    marginBottom: 80,
    borderRadius: 50,
    color: "white",
    fontSize: 9,
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.common.green,
    },
  },

  dialog: {
    //maxWidth: 325,
    maxWidth: 500,
    //height: 450,
    marginLeft: "10px",
    borderRadius: 30,
    //marginTop: "10em",
    padding: 0,
    marginTop: -20,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "250px",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  actionButton: {
    borderRadius: 10,
    height: 40,
    width: 180,
    marginLeft: 80,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 100,
    color: "white",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.common.white,
    },
  },
  actionWholesaleButton: {
    borderRadius: 10,
    height: 40,
    width: 220,
    marginLeft: 60,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 100,
    color: "white",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.common.white,
    },
  },
  backgroundDerica: {
    backgroundImage: `url(${herbs})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    //backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "25em",
    width: "83%",
    marginLeft: "8em",
    marginBottom: "2em",
    marginRight: 0,
    borderRadius: 25,
    [theme.breakpoints.down("md")]: {
      // backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit",
    },
  },
  backgroundPaint: {
    backgroundImage: `url(${beverages})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    //backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "25em",
    width: "83%",
    marginLeft: "8em",
    marginBottom: "2em",
    marginRight: 0,
    borderRadius: 25,
    [theme.breakpoints.down("md")]: {
      // backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit",
    },
  },
  backgroundBulk: {
    backgroundImage: `url(${medicine})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    //backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "25em",
    width: "83%",
    marginLeft: "8em",
    marginBottom: "2em",
    marginRight: 0,
    borderRadius: 25,
    [theme.breakpoints.down("md")]: {
      // backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit",
    },
  },
  backgroundRetail: {
    backgroundImage: `url(${backgroundRetail})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    //backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "25em",
    width: "83%",
    marginLeft: "8em",
    marginBottom: "2em",
    marginRight: 0,
    borderRadius: 25,
    [theme.breakpoints.down("md")]: {
      // backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit",
    },
  },
}));

export default function TopCoverNew(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openLoginForm, setOpenLoginForm] = useState(false);
  const [openSignUpForm, setOpenSignUpForm] = useState(false);
  const [openForgotPasswordForm, setOpenForgotPasswordForm] = useState(false);

  const [currencyName, setCurrencyName] = useState("naira");
  const [countryName, setCountryName] = useState();
  const [stateName, setStateName] = useState();
  const [product, setProduct] = useState({});
  const [vendorName, setVendorName] = useState();
  const [minLearnerSlot, setMinLearnerSlot] = useState(1);

  // const { token, setToken } = useToken();
  // const { userId, setUserId } = useUserId();
  const [expanded, setExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState();
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMDUp = useMediaQuery(theme.breakpoints.up("md"));

  let imageUrl = "";
  if (product) {
    imageUrl = `${baseURL}/images/courses/${product.imageCover}`;
  }

  const Str = require("@supercharge/strings");

  const instructorSection = () => {
    // return <React.Fragment>Learn More About Instructors</React.Fragment>;
    return <React.Fragment>Get a Home Instructor</React.Fragment>;
  };
  const assessorsSection = () => {
    return (
      // <React.Fragment>Learn More About Assessments & Mocks</React.Fragment>
      <React.Fragment>Take Assessments & Mocks</React.Fragment>
    );
  };
  const mentorsSection = () => {
    // return <React.Fragment>Learn More About Mentorship</React.Fragment>;
    return <React.Fragment>Seek Mentorship</React.Fragment>;
  };

  const instructorMobileSection = () => {
    return <React.Fragment>Get Home Instructor</React.Fragment>;
  };
  const assessorsMobileSection = () => {
    return <React.Fragment>Take Assessment & Mock</React.Fragment>;
  };
  const mentorsMobileSection = () => {
    return <React.Fragment>Seek Mentorship</React.Fragment>;
  };
  return (
    <>
      {matchesMDUp ? (
        <Card className={classes.root} disableRipple={true}>
          {/** place the grid here */}
        <Typography variant="h3" style={{marginLeft:'40%',marginBottom:30}}>Our Offerings</Typography>
          <Grid
            container
            direction="row"
            style={{ marginTop: 20, height: "100%" }}
          >
            
            <Grid
              container
              direction="column"
              style={{ marginLeft: 20, width: "30%", marginTop: 0 }}
            >
              <Typography variant="h5" style={{marginLeft:100, marginBottom:20}}> Herbal Supplements</Typography>
              <Grid
                container
                //direction="row"
                alignItems="center"
                className={classes.backgroundDerica}
                justifyContent={matchesSM ? "center" : "space-between"}
                direction={matchesSM ? "column" : "row"}
                item
                style={{ height: "35%", marginTop: 0, marginLeft: 50 }}
              ></Grid>
              <Grid
                item
                alignItems="center"
                style={{ height: "45%", marginLeft: "3.5em" }}
              >
                <Typography>
                  Immerse yourself in the purity of nature’s finest herbs, masterfully blended to nourish your body and restore inner balance. Our premium herbal supplements are crafted with precision, elegance, and care — combining ancient botanical wisdom with modern wellness science.

Each capsule embodies sophistication and vitality, offering you more than just health — a daily ritual of luxurious well-being.
                </Typography>
                <br />
                {/* <Typography style={{ marginTop: 0 }}>
                  With Nextchamp’s Private Home Instructors, you gain direct
                  access to expertise and personalized guidance that accelerates
                  learning and enhances results. Explore this service to unlock
                  a highly effective, convenient, and customized path to your
                  educational success.
                </Typography> */}
              </Grid>
              {/* <Grid
                item
                alignItems="center"
                style={{ height: "10%", marginLeft: "1.5em" }}
              >
                <Button
                  variant="text"
                  className={classes.instructorsButton}
                  component={Link}
                  // to="/mobileapps"
                  // to={`/categories/${categoryId}/${productId}`}
                  to={`/services/privateservices`}
                  varaint="outlined"
                  onClick={() => <HomeAndPrivateServices />}
                >
                  {isLoading ? (
                    <CircularProgress size={30} color="inherit" />
                  ) : (
                    instructorSection()
                  )}
                </Button>
              </Grid> */}
            </Grid>
            <Grid
              container
              direction="column"
              style={{ marginLeft: 20, width: "30%", marginTop: 0 }}
            >
              <Typography variant="h5" style={{marginLeft:100, marginBottom:20}}> Wellness Beverages</Typography>
              <Grid
                container
                //direction="row"
                alignItems="center"
                className={classes.backgroundPaint}
                justifyContent={matchesSM ? "center" : "space-between"}
                direction={matchesSM ? "column" : "row"}
                item
                style={{ height: "35%", marginTop: 0, marginLeft: 50 }}
              ></Grid>
              <Grid
                item
                alignItems="center"
                style={{ height: "45%", marginLeft: "3.5em" }}
              >
                <Typography>
                  Savor the essence of wellness in every sip. Our exquisite collection of wellness beverages is thoughtfully crafted from nature’s finest ingredients to rejuvenate your body, refresh your mind, and elevate your everyday rituals.

Each blend is a harmony of purity and elegance — a luxurious infusion of nourishment and serenity designed for those who believe wellness should taste as beautiful as it feels.
                </Typography>
                <br />
                {/* <Typography style={{ marginTop: 0 }}>
                  Explore the Assessments and Mocks service on Nextchamp to
                  strengthen your readiness and accelerate your journey toward
                  expertise. With practice, feedback, and targeted improvement,
                  success is within reach.
                </Typography> */}
              </Grid>
              {/* <Grid
                item
                alignItems="center"
                style={{ height: "10%", marginLeft: "1.5em" }}
              >
                <Button
                  variant="text"
                  className={classes.assessorsButton}
                  component={Link}
                  // to="/mobileapps"
                  // to={`/categories/${categoryId}/${productId}`}
                  to={`/services/assessments`}
                  varaint="outlined"
                  onClick={() => <AssessmentsAndMocksServices />}
                >
                  {isLoading ? (
                    <CircularProgress size={30} color="inherit" />
                  ) : (
                    assessorsSection()
                  )}
                </Button>
              </Grid> */}
            </Grid>

            <Grid
              container
              direction="column"
              style={{ marginLeft: 20, width: "30%", marginTop: 0 }}
            >
              <Typography variant="h5" style={{marginLeft:100, marginBottom:20}}> Natural Medicines</Typography>
              <Grid
                container
                //direction="row"
                alignItems="center"
                className={classes.backgroundBulk}
                justifyContent={matchesSM ? "center" : "space-between"}
                direction={matchesSM ? "column" : "row"}
                item
                style={{ height: "35%", marginTop: 0, marginLeft: 50 }}
              ></Grid>
              <Grid
                item
                alignItems="center"
                style={{ height: "45%", marginLeft: "3.5em" }}
              >
                <Typography>
                  Restore balance and vitality through the timeless power of nature. Our premium natural medicines are meticulously formulated from potent botanical extracts and ancient healing traditions, designed to support your body’s innate harmony and resilience.

Each formulation embodies purity, precision, and elegance — offering a wellness experience that unites modern science with the grace of natural healing.
                </Typography>
                <br />
                {/* <Typography style={{ marginTop: 0 }}>
                  With Nextchamp’s Mentorship Service, you’ll have a trusted
                  advisor who’s invested in your success. Explore the Mentorship
                  page to find a mentor who aligns with your aspirations and
                  take your learning journey to the next level. Together, we’ll
                  turn your potential into proven expertise.
                </Typography> */}
              </Grid>
              {/* <Grid
                item
                alignItems="center"
                style={{ height: "10%", marginLeft: "1.5em" }}
              >
                <Button
                  variant="text"
                  className={classes.mentorsButton}
                  component={Link}
                  // to="/mobileapps"
                  // to={`/categories/${categoryId}/${productId}`}
                  to={`/services/mentorships`}
                  varaint="outlined"
                  onClick={() => <MentorshipService />}
                >
                  {isLoading ? (
                    <CircularProgress size={30} color="inherit" />
                  ) : (
                    mentorsSection()
                  )}
                </Button>
              </Grid> */}
            </Grid>
          </Grid>
          {/* </CardActionArea> */}
        </Card>
      ) : (
        <Card className={classes.rootMobile} disableRipple>
          <Grid
            container
            direction="row"
            style={{ marginTop: 15, height: 380 }}
          >
            <Grid
              container
              direction="column"
              style={{ marginLeft: 10, width: "30%", marginTop: 0 }}
            >
              <CardActionArea></CardActionArea>
              <Grid
                container
                //direction="row"
                alignItems="center"
                className={classes.backgroundDerica}
                justifyContent={matchesSM ? "center" : "space-between"}
                direction={matchesSM ? "column" : "row"}
                item
                style={{ height: "15%", marginTop: 0, marginLeft: 10 }}
              ></Grid>
              <Grid
                item
                alignItems="center"
                style={{ height: "60%", marginLeft: 10 }}
              >
                <Typography style={{ fontSize: 11 }}>
                  Immerse yourself in the purity of nature’s finest herbs, masterfully blended to nourish your body and restore inner balance. Our premium herbal supplements are crafted with precision, elegance, and care — combining ancient botanical wisdom with modern wellness science.

Each capsule embodies sophistication and vitality, offering you more than just health — a daily ritual of luxurious well-being.
                </Typography>
                <br />
                {/* <Typography style={{ marginTop: 0, fontSize: 11 }}>
                  With Nextchamp’s Private Home Instructors, you gain direct
                  access to expertise and personalized guidance that accelerates
                  learning and enhances results. Explore this service to unlock
                  a highly effective, convenient, and customized path to your
                  educational success.
                </Typography> */}
              </Grid>
              {/* <Grid
                item
                alignItems="center"
                style={{ height: "15%", marginLeft: "0.5em", marginTop: 40 }}
              >
                <Button
                  variant="text"
                  className={classes.instructorsMobileButton}
                  component={Link}
                  // to="/mobileapps"
                  // to={`/categories/${categoryId}/${productId}`}
                  to={`/services/privateservices`}
                  varaint="outlined"
                  onClick={() => <HomeAndPrivateServices />}
                >
                  {isLoading ? (
                    <CircularProgress size={30} color="inherit" />
                  ) : (
                    instructorMobileSection()
                  )}
                </Button>
              </Grid> */}
            </Grid>
            <Grid
              container
              direction="column"
              style={{ marginLeft: 0, width: "30%", marginTop: 0 }}
            >
              <Grid
                container
                //direction="row"
                alignItems="center"
                className={classes.backgroundPaint}
                justifyContent={matchesSM ? "center" : "space-between"}
                direction={matchesSM ? "column" : "row"}
                item
                style={{ height: "15%", marginTop: 0, marginLeft: 20 }}
              ></Grid>
              <Grid
                item
                alignItems="center"
                style={{ height: "60%", marginLeft: 25 }}
              >
                <Typography style={{ fontSize: 11 }}>
                  Savor the essence of wellness in every sip. Our exquisite collection of wellness beverages is thoughtfully crafted from nature’s finest ingredients to rejuvenate your body, refresh your mind, and elevate your everyday rituals.

Each blend is a harmony of purity and elegance — a luxurious infusion of nourishment and serenity designed for those who believe wellness should taste as beautiful as it feels.
                </Typography>
                <br />
                {/* <Typography style={{ marginTop: 0, fontSize: 11 }}>
                  Explore the Assessments and Mocks service on Nextchamp to
                  strengthen your readiness and accelerate your journey toward
                  expertise. With practice, feedback, and targeted improvement,
                  success is within reach.
                </Typography> */}
              </Grid>
              {/* <Grid
                item
                alignItems="center"
                style={{ height: "15%", marginLeft: "0.5em", marginTop: 40 }}
              >
                <Button
                  variant="text"
                  className={classes.assessorsMobileButton}
                  component={Link}
                  // to="/mobileapps"
                  // to={`/categories/${categoryId}/${productId}`}
                  to={`/services/assessments`}
                  varaint="outlined"
                  onClick={() => <AssessmentsAndMocksServices />}
                >
                  {isLoading ? (
                    <CircularProgress size={30} color="inherit" />
                  ) : (
                    assessorsMobileSection()
                  )}
                </Button>
              </Grid> */}
            </Grid>

            <Grid
              container
              direction="column"
              style={{ marginLeft: 0, width: "30%", marginTop: 0 }}
            >
              <Grid
                container
                //direction="row"
                alignItems="center"
                className={classes.backgroundBulk}
                justifyContent={matchesSM ? "center" : "space-between"}
                direction={matchesSM ? "column" : "row"}
                item
                style={{ height: "15%", marginTop: 0, marginLeft: 20 }}
              ></Grid>
              <Grid
                item
                alignItems="center"
                style={{ height: "60%", marginLeft: 25 }}
              >
                <Typography style={{ fontSize: 11 }}>
                  Restore balance and vitality through the timeless power of nature. Our premium natural medicines are meticulously formulated from potent botanical extracts and ancient healing traditions, designed to support your body’s innate harmony and resilience.

Each formulation embodies purity, precision, and elegance — offering a wellness experience that unites modern science with the grace of natural healing.
                </Typography>
                <br />
                {/* <Typography style={{ marginTop: 0, fontSize: 11 }}>
                  With Nextchamp’s Mentorship Service, you’ll have a trusted
                  advisor who’s invested in your success. Explore the Mentorship
                  page to find a mentor who aligns with your aspirations and
                  take your learning journey to the next level. Together, we’ll
                  turn your potential into proven expertise.
                </Typography> */}
              </Grid>
              {/* <Grid
                item
                alignItems="center"
                style={{ height: "15%", marginLeft: "1.5em", marginTop: 40 }}
              >
                <Button
                  variant="text"
                  className={classes.mentorsMobileButton}
                  component={Link}
                  // to="/mobileapps"
                  // to={`/categories/${categoryId}/${productId}`}
                  to={`/services/mentorships`}
                  varaint="outlined"
                  onClick={() => <MentorshipService />}
                >
                  {isLoading ? (
                    <CircularProgress size={30} color="inherit" />
                  ) : (
                    mentorsMobileSection()
                  )}
                </Button>
              </Grid> */}
            </Grid>
            {/* <Grid
              container
              direction="column"
              style={{ marginLeft: 0, width: "22%", marginTop: 0 }}
            ></Grid> */}
          </Grid>
        </Card>
      )}
      <Dialog
        //style={{ zIndex: 1302 }}
        fullScreen={matchesXS}
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? "1em" : "3em",
            marginTop: 110,
            height: 540,
            paddingBottom: "3em",
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? "3em"
              : matchesMD
              ? "10em"
              : "2em",
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? "5em"
              : matchesMD
              ? "10em"
              : "2em",
          },
        }}
      >
        <DialogContent>
          <Card className={classes.dialog}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                component="img"
                alt={product.name}
                image={imageUrl}
                crossOrigin="anonymous"
              />
            </CardActionArea>
          </Card>
        </DialogContent>
      </Dialog>

      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{
          style: { backgroundColor: alert.backgroundColor },
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      />
    </>
  );
}
