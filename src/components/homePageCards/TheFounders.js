import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import CardActionArea from "@material-ui/core/CardActionArea";
import ReactMarkdown from "react-markdown";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Snackbar from "@material-ui/core/Snackbar";
import backgroundDerica from "./../../assets/images/covers/food2.png";
import backgroundPaint from "./../../assets/images/covers/delivery.png";
import backgroundBulk from "./../../assets/images/controlsoft/digital-marketing1.webp";
import backgroundRetail from "./../../assets/images/covers/delivery.png";

import backgroundProduct from "./../../assets/images/controlsoft/image25.webp";
import backgroundGrowth from "./../../assets/images/controlsoft/image24.webp";
import backgroundMetrics from "./../../assets/images/controlsoft/image20.webp";

import softwareEngineering from "./../../assets/images/controlsoft/image2.jpg";
import qualityAssurance from "./../../assets/images/controlsoft/quality-assurance.webp";
import uche from "./../../assets/images/founders/uche.jpg";
import paka from "./../../assets/images/founders/paka.jpg";
import taju from "./../../assets/images/founders/taju.jpg";


import { baseURL } from "../../apis/util";

import theme from "../ui/Theme";
import { PropaneSharp } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    //height: "100%",
    //height: 350,
    width: "100%",

    marginLeft: "10px",
    //borderRadius: 30,
    //marginTop: "2em",
    //marginBottom: "1em",
    padding: 0,
    // "&:hover": {
    //   //border: "solid",
    //   //borderColor: theme.palette.common.grey,
    // },
  },

  uppercard: {
    maxWidth: "100%",
    height: 700,
    //height: 350,
    width: "100%",

    marginLeft: "10px",
    //borderRadius: 30,
    marginTop: "10em",
    marginBottom: "10em",
    padding: 0,
    backgroundColor: "#CDC2A5",
    // "&:hover": {
    //   //border: "solid",
    //   //borderColor: theme.palette.common.grey,
    // },
  },
  uppercardMobile: {
    maxWidth: "100%",
    height: 1000,
    //height: 350,
    width: "100%",

    marginLeft: "10px",
    //borderRadius: 30,
    marginTop: "10em",
    marginBottom: "10em",
    padding: 0,
    backgroundColor: "#CDC2A5",
    // "&:hover": {
    //   //border: "solid",
    //   //borderColor: theme.palette.common.grey,
    // },
  },
  uppercardsec: {
    maxWidth: "100%",
    height: 950,
    //height: 350,
    width: "100%",

    marginLeft: "10px",
    //borderRadius: 30,
    //marginTop: "2em",
    marginBottom: "10em",
    padding: 0,
    // "&:hover": {
    //   //border: "solid",
    //   //borderColor: theme.palette.common.grey,
    // },
  },
  rootMobile: {
    maxWidth: "100%",
    height: 1250,
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
    width: 105,
    marginLeft: 7,
    marginTop: 1,
    marginBottom: 20,
    borderRadius: 100,
    color: "white",
    fontSize: 10,
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.common.white,
    },
  },
  actionPlusButton: {
    borderRadius: 10,
    height: 40,
    width: 220,
    marginLeft: 50,
    marginTop: 1,
    marginBottom: 20,
    borderRadius: 100,
    color: "white",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.common.white,
    },
  },

  actionPlusMobileButton: {
    borderRadius: 10,
    height: 40,
    width: 130,
    marginLeft: 1,
    marginTop: 1,
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
    backgroundImage: `url(${backgroundDerica})`,
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
  softwareEngineering: {
    backgroundImage: `url(${softwareEngineering})`,
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
    backgroundImage: `url(${backgroundPaint})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    //backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "35em",
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

  qualityAssurance: {
    backgroundImage: `url(${qualityAssurance})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    //backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "35em",
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
    backgroundImage: `url(${backgroundBulk})`,
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
  paka: {
    backgroundImage: `url(${paka})`,
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
  uche: {
    backgroundImage: `url(${uche})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    //backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "35em",
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
  taju: {
    backgroundImage: `url(${taju})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    //backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "35em",
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

  backgroundProduct: {
    backgroundImage: `url(${backgroundProduct})`,
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

  backgroundGrowth: {
    backgroundImage: `url(${backgroundGrowth})`,
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
  backgroundMetrics: {
    backgroundImage: `url(${backgroundMetrics})`,
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

export default function TheFounders(props) {
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
  const mustapha="* **Doctor philosophy (PhD. Pharm and Pharm Tech)**\n\n* **Master of Philosophy (M. Phil. Pharm Tech)**\n\n* **Master of Science (M.Sc Pharmaceutics)**\n\n* **Bachelor of Pharmacy Honours (B.Pharm. Hons)**\n\n"

  return (
    <>
      {matchesMDUp ? (
        <>
          <Box className={classes.uppercard} disableRipple={true}>
            {/** place the grid here */}
            <Typography variant="h3" style={{marginLeft:'35%',marginBottom:60, marginTop:20}}>The Management Team</Typography>
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
                
                {/* <Grid
                  container
                  //direction="row"
                  alignItems="center"
                  className={classes.taju}
                  justifyContent={matchesSM ? "center" : "space-between"}
                  direction={matchesSM ? "column" : "row"}
                  item
                  //style={{ height: "35%", marginTop: 0, marginLeft: 50 }}
                  style={{ height: "40%", marginTop: 0, marginLeft: 50 }}
                ></Grid> */}
                
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "20%", marginLeft: "3.5em" }}
                >
                <Typography variant="h5" style={{marginLeft:"10%", marginBottom:20}}> Chief (Dr.) Bright Edom</Typography>
                  <Typography style={{marginLeft:"20%"}}>
                  <strong>CEO</strong><br /><br />
                 
                  </Typography>
                   <Typography style={{marginTop:20, fontSize:11}}>
                      <ReactMarkdown>He obtained both Bachelor & Masters degrees B.Sc(Hons) in Business Administration & Marketing from University of Lagos. He is the Managing Director (MD) of Brightway Group of Companies and also the Chief Executive Officer (CEO) Andersons Pharmaceuticals Limited. He has several other chains of Businesses in Importation, Oil and Gas, Construction, Logistics and Property Development etc. He is a member of the Institute of Directors (IoD) of Nigeria. He belongs to several trade groups such as the Nigerian British Chamber of Commerce, American and Europe Chamber of Commerce. He has a vast Business experience and exploits that spans close to 40 decades. He is also involved in a lot of philanthropic activities through his foundation called Bright Edom Foundation. He is happily married with children.</ReactMarkdown>
                   </Typography>
                </Grid>
                {/* <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "8%", marginLeft: "3.5em", marginTop: '20%'}}
                >
                  <Button
                    variant="contained"
                    component={Link}
                    to="/dealscentral"
                    //onClick={() => <DealHome />}
                    className={classes.actionPlusButton}
                  >
                    Learn More
                  </Button>
                </Grid> */}
              </Grid>
              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "30%", marginTop: 0 }}
              >

                {/* <Grid
                  container
                  //direction="row"
                  alignItems="center"
                  className={classes.uche}
                  justifyContent={matchesSM ? "center" : "space-between"}
                  direction={matchesSM ? "column" : "row"}
                  item
                  // style={{ height: "35%", marginTop: 0, marginLeft: 50 }}
                  style={{ height: "40%", marginTop: 0, marginLeft: 50 }}
                ></Grid> */}
                <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "20%", marginLeft: "3.5em" }}
                >
                <Typography variant="h5" style={{marginLeft:'15%', marginBottom:20}}>Dr Mustapha Musibau Aderibigbe</Typography>
                  <Typography style={{marginLeft:'20%'}}>
                  <strong>Executive Director</strong><br /><br />
                 
                  </Typography>
                  <Typography style={{marginTop:20, fontSize:11}}>
                      <ReactMarkdown>Dr Mustapha Musibau Aderibigbe, (Executive Director) Aged 60yrs was born in Oyo State, Nigeria. He started his early education at Ibadan before he proceeded to Lagos to continue his studies at the Yaba National College where he obtained his West African Examination Certificate; he went to University of Lagos and University of Benin where he obtained  the following academic qualifications and certificates. Listed below are some of his qualifications</ReactMarkdown>
                   </Typography>
                   <Typography style={{marginTop:10, fontSize:11}}>
                      <ReactMarkdown>{mustapha}</ReactMarkdown>
                   </Typography>
                   <Typography style={{marginTop:20, fontSize:11}}>
                      <em><ReactMarkdown>He is married with children and live a life of an accomplished career man.</ReactMarkdown></em>
                   </Typography>

                   
                </Grid>
                {/* <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "8%", marginLeft: "3.5em", marginTop: '20%' }}
                >
                  <Button
                    variant="contained"
                    component={Link}
                    to="/dealscentral"
                    //onClick={() => <DealHome />}
                    className={classes.actionPlusButton}
                  >
                    Learn More
                  </Button>
                </Grid> */}
              </Grid>

              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "30%", marginTop: 0 }}
              >
              
                {/* <Grid
                  container
                  //direction="row"
                  alignItems="center"
                  className={classes.paka}
                  justifyContent={matchesSM ? "center" : "space-between"}
                  direction={matchesSM ? "column" : "row"}
                  item
                  //style={{ height: "35%", marginTop: 0, marginLeft: 50 }}
                  style={{ height: "40%", marginTop: 0, marginLeft: 50 }}
                ></Grid> */}
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "20%", marginLeft: "3.5em" }}
                >
                   <Typography variant="h5" style={{marginLeft:'18%', marginBottom:20}}>Mrs Chinyere Edom</Typography>
                  <Typography style={{marginLeft:'20%'}}>
                  <strong>Executive Director</strong><br /><br />                  
                  </Typography>
                   <Typography style={{marginTop:20, fontSize:11}}>
                      <ReactMarkdown>Mrs Chinyere Edom, (Executive Director). She obtained Bachelor of Science in Business Administration from University of Lagos and has attended several management and leadership courses both home and abroad. She is currently the Director of Neschi Global Bureau De Change and Sky Angels Travel and Tours Limited. She is happily married with Children.</ReactMarkdown>
                   </Typography>
                </Grid>
                {/* <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "8%", marginLeft: "3.5em", marginTop: '20%'}}
                >
                  <Button
                    variant="contained"
                    component={Link}
                    to="/dealscentral"
                    //onClick={() => <DealHome />}
                    className={classes.actionPlusButton}
                  >
                    Learn More
                  </Button>
                </Grid> */}
              </Grid>
            </Grid>
            {/* </CardActionArea> */}
            {/* <Typography variant="h3">For Businesses</Typography> */}
            
            
          </Box>
        </>
      ) : (
        <Box className={classes.uppercardMobile} disableRipple={true}>
            {/** place the grid here */}
            <Typography variant="h3" style={{marginLeft:'20%',marginBottom:60, marginTop:20, fontSize:20}}>The Management Team</Typography>
            <Grid
              container
              direction="row"
              style={{ marginTop: 20, height: "100%", width:"100%" }}
            >
              <Grid
                container
                direction="column"
                style={{ marginLeft: 2, width: "32%", marginTop: 0 }}
              >
                
                {/* <Grid
                  container
                  //direction="row"
                  alignItems="center"
                  className={classes.taju}
                  justifyContent={matchesSM ? "center" : "space-between"}
                  direction={matchesSM ? "column" : "row"}
                  item
                  //style={{ height: "35%", marginTop: 0, marginLeft: 50 }}
                  style={{ height: "30%", marginTop: 0, marginLeft: 10 }}
                ></Grid> */}
                
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "20%", marginLeft: "1em" }}
                >
                <Typography variant="h5" style={{marginLeft:"10%", marginBottom:20}}> Chief (Dr.) Bright Edom</Typography>
                  <Typography style={{marginLeft:"20%"}}>
                  <strong>CEO</strong><br /><br />
                 
                  </Typography>
                  <Typography style={{marginTop:20, fontSize:10}}>
                      <ReactMarkdown>He obtained both Bachelor & Masters degrees B.Sc(Hons) in Business Administration & Marketing from University of Lagos. He is the Managing Director (MD) of Brightway Group of Companies and also the Chief Executive Officer (CEO) Andersons Pharmaceuticals Limited. He has several other chains of Businesses in Importation, Oil and Gas, Construction, Logistics and Property Development etc. He is a member of the Institute of Directors (IoD) of Nigeria. He belongs to several trade groups such as the Nigerian British Chamber of Commerce, American and Europe Chamber of Commerce. He has a vast Business experience and exploits that spans close to 40 decades. He is also involved in a lot of philanthropic activities through his foundation called Bright Edom Foundation. He is happily married with children.</ReactMarkdown>
                   </Typography>
                </Grid>
                {/* <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "8%", marginLeft: "3.5em", marginTop: '20%'}}
                >
                  <Button
                    variant="contained"
                    component={Link}
                    to="/dealscentral"
                    //onClick={() => <DealHome />}
                    className={classes.actionPlusButton}
                  >
                    Learn More
                  </Button>
                </Grid> */}
              </Grid>
              <Grid
                container
                direction="column"
                style={{ marginLeft: 2, width: "32%", marginTop: 0 }}
              >

                {/* <Grid
                  container
                  //direction="row"
                  alignItems="center"
                  className={classes.uche}
                  justifyContent={matchesSM ? "center" : "space-between"}
                  direction={matchesSM ? "column" : "row"}
                  item
                  // style={{ height: "35%", marginTop: 0, marginLeft: 50 }}
                  style={{ height: "30%", marginTop: 0, marginLeft: 10 }}
                ></Grid> */}
                <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "20%", marginLeft:10 }}
                >
                <Typography variant="h5" style={{marginLeft:'15%', marginBottom:20}}>Dr Mustapha Musibau Aderibigbe</Typography>
                  <Typography style={{marginLeft:'10%'}}>
                  <strong>Executive Director</strong><br /><br />
                 
                  </Typography>
                   <Typography style={{marginTop:15, fontSize:10}}>
                      <ReactMarkdown>Dr Mustapha Musibau Aderibigbe, (Executive Director) Aged 60yrs was born in Oyo State, Nigeria. He started his early education at Ibadan before he proceeded to Lagos to continue his studies at the Yaba National College where he obtained his West African Examination Certificate; he went to University of Lagos and University of Benin where he obtained  the following academic qualifications and certificates. Listed below are some of his qualifications</ReactMarkdown>
                   </Typography>
                   <Typography style={{marginTop:10, fontSize:10}}>
                      <ReactMarkdown>{mustapha}</ReactMarkdown>
                   </Typography>
                   <Typography style={{marginTop:20, fontSize:10}}>
                      <em><ReactMarkdown>He is married with children and live a life of an accomplished career man.</ReactMarkdown></em>
                   </Typography>
                </Grid>
                {/* <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "8%", marginLeft: "3.5em", marginTop: '20%' }}
                >
                  <Button
                    variant="contained"
                    component={Link}
                    to="/dealscentral"
                    //onClick={() => <DealHome />}
                    className={classes.actionPlusButton}
                  >
                    Learn More
                  </Button>
                </Grid> */}
              </Grid>

              <Grid
                container
                direction="column"
                style={{ marginLeft: 2, width: "32%", marginTop: 0 }}
              >
              
                {/* <Grid
                  container
                  //direction="row"
                  alignItems="center"
                  className={classes.paka}
                  justifyContent={matchesSM ? "center" : "space-between"}
                  direction={matchesSM ? "column" : "row"}
                  item
                  //style={{ height: "35%", marginTop: 0, marginLeft: 50 }}
                  style={{ height: "30%", marginTop: 0, marginLeft: 10 }}
                ></Grid> */}
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "20%", marginLeft: "10px" }}
                >
                   <Typography variant="h5" style={{marginLeft:'10%', marginBottom:20}}>Mrs Chinyere Edom</Typography>
                  <Typography style={{marginLeft:'10%'}}>
                  <strong>Executive Director</strong><br /><br />

                  
                  </Typography>
                   <Typography style={{marginTop:15, fontSize:10}}>
                      <ReactMarkdown>Mrs Chinyere Edom, (Executive Director). She obtained Bachelor of Science in Business Administration from University of Lagos and has attended several management and leadership courses both home and abroad. She is currently the Director of Neschi Global Bureau De Change and Sky Angels Travel and Tours Limited. She is happily married with Children.</ReactMarkdown>
                   </Typography>
                </Grid>
                {/* <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "8%", marginLeft: "3.5em", marginTop: '20%'}}
                >
                  <Button
                    variant="contained"
                    component={Link}
                    to="/dealscentral"
                    //onClick={() => <DealHome />}
                    className={classes.actionPlusButton}
                  >
                    Learn More
                  </Button>
                </Grid> */}
              </Grid>
            </Grid>
            {/* </CardActionArea> */}
            {/* <Typography variant="h3">For Businesses</Typography> */}
            
            
          </Box>
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
