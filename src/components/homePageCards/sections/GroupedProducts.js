import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ReactMarkdown from "react-markdown";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
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
import backgroundDerica from "./../../../assets/images/covers/food2.png";
import backgroundPaint from "./../../../assets/images/covers/delivery.png";
import backgroundBulk from "./../../../assets/images/site/andersons/herbs2.jpg";
import backgroundRetail from "./../../../assets/images/covers/delivery.png";

import backgroundProduct from "./../../../assets/images/bacFoods/peppermint2.jpg";
import backgroundGrowth from "./../../../assets/images/bacFoods/Pomegranate_Herbal_Infusion2.jpg";
import backgroundMetrics from "./../../../assets/images/bacFoods/greentea.jpg";

//import softwareEngineering from "./../../../assets/images/project/vip3.webp";
import softwareEngineering from "./../../../assets/images/bacFoods/GingerTumericHerbal.jpg";
import qualityAssurance from "./../../../assets/images/bacFoods/DiaHerb_Herbal_Infusion2.jpg";
import backgroundEvent from "./../../../assets/images/project/event1.webp";
import backgroundTraining from "./../../../assets/images/project/training.webp";
import backgroundDocumentation from "./../../../assets/images/project/documentation2.webp";
import ProductDetails from "../../products/ProductDetails";




import { baseURL } from "../../../apis/util";

import theme from "../../ui/Theme";
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
    height: 2000,
    //height: 350,
    width: "100%",

    marginLeft: "10px",
    //borderRadius: 30,
    marginTop: "10em",
    marginBottom: "3em",
    padding: 0,
    // "&:hover": {
    //   //border: "solid",
    //   //borderColor: theme.palette.common.grey,
    // },
  },
  uppercardMobile: {
    maxWidth: "100%",
    height: 3400,
    //height: 350,
    width: "100%",

    marginLeft: "10px",
    //borderRadius: 30,
    marginTop: "10em",
    marginBottom: "10em",
    padding: 0,
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

  actionMobileButton: {
    borderRadius: 10,
    height: 40,
    width: 135,
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

  actionMobileDownButton: {
    borderRadius: 10,
    //height: 40,
    width: 100,
    marginLeft: 7,
    marginTop: 1,
    marginBottom: 20,
    borderRadius: 100,
    color: "white",
    fontSize: 8,
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

  backgroundEvent: {
    backgroundImage: `url(${backgroundEvent})`,
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

   backgroundTraining: {
    backgroundImage: `url(${backgroundTraining})`,
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

   backgroundDocumentation: {
    backgroundImage: `url(${backgroundDocumentation})`,
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

export default function GroupedProducts(props) {
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


  const categorySlug = 'herbal-tea';
  const slug1 = 'ginger-turmeric-garlic-and-honey-tea';
  const slug2 = 'diaherbs-herbal-tea';
  const slug3 = 'ginger-lemon-and-moringa-herbal-tea';
  const slug4 = 'peppermint-herbal-tea';
  const slug5 = 'pomegranate-herbal-tea';
  const slug6 = 'green-tea';

  const Str = require("@supercharge/strings");

  const gingerTumeric = "* **Natural Immune Booster**\n\n* **Ease Arthritis and helps build strong bones**:\n\n* **Relieves Pain, Cold, Flu and other Nasal Congestion**\n\n* **Helps in normalizing diabetes**\n\n* **Fights against bacteria infections and other diseases. Supports overall Well-Being and promotes healthy aging**\n\n* **Fights against Cancer**\n\n* **Reduces the buildup of heart diseases**\n\n* **Improves pain linked to Osteoarthritis and rheumatoid arthritis**\n\n* **Supports Joint and Muscle Health**\n\n";
  const diaherbHerbal = "* **A potent blend of natural anti-hyperglycemic, antioxidants, beta-cell, insulin sensitizers and metabolic boosters**\n\n* **Lowers elevated blood sugar levels**:\n\n* **Reduces abnormally raised levels of Serum Insulin**\n\n* **Mitigate oxidizing, premature aging and hazardous impact in the system**\n\n* **Supports proper utilization of glucose by the cells**\n\n* **Keeps one energetic while keeping blood sugar levels within normal limits**\n\n* **Reduces or delay the chances of progressing to Type-2 Diabetes**\n\n* **Supports with your medication to normalize diabetes**\n\n";
  const gingerLemon = "* **Boost Metabolism that aids weight management**\n\n* **Reduces the chances of build up and causes of Kidney Stone**\n\n* **Lowers blood sugar levels in the body**\n\n* **Helps in Kidney detoxifying**\n\n* **Reduces body fat accumulation, burn calories**\n\n* **Helps fight inflammation and oxidative stress**\n\n* **Helps against chronic kidney diseases**\n\n* **Known as Miracle Tea, rich in Vitamins, Minerals and Amino Acid**\n\n";
  const peppemintHerbal = "* **Improves quality of sleep**\n\n* **Helps to regulate blood pressure**\n\n* **Has Anti-bacteria action that fight infections**\n\n* **Acts as Natural Immune Booster**\n\n* **Helps in relieving menstrual cramps**\n\n* **Aids Weight Loss**\n\n* **Relieves Headache and Pains**\n\n* **Supports Cardio metabolic Health**\n\n* **Relieves digestives symptoms such as gas, bloating, sore throat and nasal congestion**\n\n";
  const pomegranateHerbal = "* **Reduces Cellular Damage caused by Free Radicals**\n\n* **Protect against heart diseases**\n\n* **Fights the buildup of bad cholesterol and triglycerides**\n\n* **Helps to normalize blood pressure**\n\n* **Supports in Arthritis and Gout issues**\n\n* **Supports Cardiovascular health by enabling healthy blood circulation**\n\n* **Reduces oxidative stress on the heart**\n\n* **Helps naturally guard prostrate health**\n\n* **The Flavourful herbal tea supports gut health and  digestion**\n\n";
  const greenTeaHerbal = "* **Lowers bad cholesterol levels in the body**\n\n* **Contains Antioxidants that fights Cancer**\n\n* **Helps Cardiovascular health and blood circulation**\n\n* **Lowers or normalizes blood sugar levels in the body**\n\n* **Prevent DNA damaged caused by Free Radicals, then stops cancer from growing**\n\n* **Stops Stroke**\n\n* **Lowers or stabilizes blood pressure levels**\n\n* **Improves longevity**\n\n* **Alleviates anxiety and stress related disorders**\n\n* **Supports bone and muscle health**\n\n* **Aids in body weight**\n\n";
  
  return (
    <>
      {matchesMDUp ? (
        <>
          <Box className={classes.uppercard} disableRipple={true}>
            {/** place the grid here */}
            {/* <Typography variant="h3" style={{marginLeft:'40%',marginBottom:30}}>Our Protocol Services</Typography> */}
            <Grid
              container
              direction="row"
              style={{ marginTop: 20, height: "47%" }}
            >
              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "30%", marginTop: 0 }}
              >
                <Typography variant="h3" style={{marginLeft:100, marginBottom:20, fontSize:20}}> Ginger, Turmeric, Garlic & Honey Tea</Typography>
                <Grid
                  container
                  //direction="row"
                  alignItems="center"
                  className={classes.softwareEngineering}
                  justifyContent={matchesSM ? "center" : "space-between"}
                  direction={matchesSM ? "column" : "row"}
                  item
                  //style={{ height: "35%", marginTop: 0, marginLeft: 50 }}
                  style={{ height: "22%", marginTop: 0, marginLeft: 50 }}
                ></Grid>
                
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "35%", marginLeft: "3.5em" }}
                >
                  {/* <Typography variant="h3" style={{marginLeft:'0%',marginBottom:30}}> Ginger, Turmeric, Garlic & Honey Tea</Typography> */}
                     <Typography style={{marginTop:0, padding: 0,fontSize:14}}>
                          <strong><ReactMarkdown>Natural Immune Booster, Ease Arthritis & Strong Bones</ReactMarkdown></strong>
                    </Typography>
                      <Typography style={{marginTop:10, fontSize:12}}>
                            <ReactMarkdown>{gingerTumeric}</ReactMarkdown>
                      </Typography>
                      {/* <Typography style={{marginTop:10, fontSize:12}}>
                          <ReactMarkdown>Rich in natural antioxidants and anti-inflammatory compounds, this potent fusion helps ease arthritis and joint pain, build stronger bones, and support joint and muscle health. It also aids in relieving colds, flu, and nasal congestion, while helping to normalize blood sugar levels and protect against bacterial infections.</ReactMarkdown>
                    </Typography>
                    <Typography style={{marginTop:10, fontSize:12}}>
                          <ReactMarkdown>With regular use, it promotes heart health, supports healthy aging, and helps your body fight oxidative stress and disease naturally.</ReactMarkdown>
                    </Typography>
                      <Typography style={{marginTop:10, fontSize:12}}>
                          <em><ReactMarkdown>Pure. Potent. Naturally restorative.</ReactMarkdown></em>
                    </Typography> */}
                </Grid>
                <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "15%", marginLeft: "3.5em", marginTop: '20%'}}
                >
                  <Button
                    variant="contained"
                    component={Link}
                    to={`/products/${categorySlug}/${slug1}`}
                    onClick={() => <ProductDetails />}
                    className={classes.actionPlusButton}
                  >
                    View Details
                  </Button>
                </Grid>
              </Grid>
              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "30%", marginTop: 0 }}
              >
                <Typography variant="h3" style={{marginLeft:60, marginBottom:40, fontSize:20}}>DiaHerbs Herbal Tea</Typography>
                <Grid
                  container
                  //direction="row"
                  alignItems="center"
                  className={classes.qualityAssurance}
                  justifyContent={matchesSM ? "center" : "space-between"}
                  direction={matchesSM ? "column" : "row"}
                  item
                  // style={{ height: "35%", marginTop: 0, marginLeft: 50 }}
                  style={{ height: "22%", marginTop: 0, marginLeft: 50 }}
                ></Grid>
                <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "35%", marginLeft: "3.5em" }}
                >
                   {/* <Typography variant="h3" style={{marginLeft:'0%',marginBottom:30}}> DiaHerbs Herbal Tea</Typography> */}
                                      <Typography style={{marginTop:0, padding: 0,fontSize:14}}>
                                            <strong><ReactMarkdown>Immune Booster, Blood Sugar Control</ReactMarkdown></strong>
                                      </Typography>
                                      <Typography style={{marginTop:10, fontSize:12}}>
                                          <ReactMarkdown>{diaherbHerbal}</ReactMarkdown>
                                     </Typography>
                                      {/* <Typography style={{marginTop:10, fontSize:12}}>
                                            <ReactMarkdown>This revitalizing herbal infusion helps lower elevated blood sugar levels, reduce abnormally high serum insulin, and enhance glucose utilization by body cells. Its antioxidant properties also help mitigate oxidative stress, premature aging, and the harmful effects of free radicals on your system.</ReactMarkdown>
                                      </Typography>
                                      <Typography style={{marginTop:10, fontSize:12}}>
                                            <ReactMarkdown>DiaHerbs Herbal Tea keeps you energized while helping maintain blood sugar within normal limits, and may help reduce or delay the progression to Type 2 diabetes. It also provides excellent support alongside your prescribed diabetes medication to promote balanced, natural wellness.</ReactMarkdown>
                                      </Typography>
                                      <Typography style={{marginTop:10, fontSize:12}}>
                                            <em><ReactMarkdown>Balance your energy. Empower your health — naturally.</ReactMarkdown></em>
                                      </Typography> */}
                </Grid>
                <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "18%", marginLeft: "3.5em", marginTop: '20%' }}
                >
                  <Button
                    variant="contained"
                    component={Link}
                   to={`/products/${categorySlug}/${slug2}`}
                    onClick={() => <ProductDetails />}
                    className={classes.actionPlusButton}
                  >
                    View Details
                  </Button>
                </Grid>
              </Grid>

              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "30%", marginTop: 0 }}
              >
              <Typography variant="h3" style={{marginLeft:80, marginBottom:0, fontSize:20}}>Ginger, Lemon & Moringa Herbal Tea</Typography>
                <Grid
                  container
                  //direction="row"
                  alignItems="center"
                  className={classes.backgroundBulk}
                  justifyContent={matchesSM ? "center" : "space-between"}
                  direction={matchesSM ? "column" : "row"}
                  item
                  //style={{ height: "35%", marginTop: 0, marginLeft: 50 }}
                  style={{ height: "22%", marginTop: 20, marginLeft: 50 }}
                ></Grid>
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "35%", marginLeft: "3.5em" }}
                >
                 {/* <Typography variant="h3" style={{marginLeft:'0%',marginBottom:30}}>Ginger, Lemon & Moringa Herbal Tea</Typography> */}
                                      <Typography style={{marginTop:0, padding: 0,fontSize:14}}>
                                           <strong><ReactMarkdown>Slimming Kidney Cleanser and Reduces Inflammation</ReactMarkdown></strong>
                                     </Typography>
                                       <Typography style={{marginTop:10, fontSize:12}}>
                                             <ReactMarkdown>{gingerLemon}</ReactMarkdown>
                                       </Typography>
                                       {/* <Typography style={{marginTop:10, fontSize:12}}>
                                           <ReactMarkdown>Ginger, Lemon & Moringa Herbal Tea helps boost metabolism, burn calories, and reduce body fat accumulation, making it an excellent choice for weight management. It also promotes kidney detoxification, lowers blood sugar levels, and helps prevent the build-up of kidney stones while protecting against chronic kidney diseases.</ReactMarkdown>
                                     </Typography>
                                     <Typography style={{marginTop:10, fontSize:12}}>
                                           <ReactMarkdown>Packed with antioxidants, this tea helps fight inflammation and oxidative stress, supporting your body’s natural defense system and vitality.</ReactMarkdown>
                                     </Typography>
                                       <Typography style={{marginTop:10, fontSize:12}}>
                                           <em><ReactMarkdown>Cleanse. Refresh. Thrive — naturally.</ReactMarkdown></em>
                                     </Typography> */}
                </Grid>
                <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "15%", marginLeft: "3.5em", marginTop: '20%'}}
                >
                  <Button
                    variant="contained"
                    component={Link}
                    to={`/products/${categorySlug}/${slug3}`}
                    onClick={() => <ProductDetails />}
                    className={classes.actionPlusButton}
                  >
                    View Details
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            {/* </CardActionArea> */}
            {/* <Typography variant="h3">For Businesses</Typography> */}
            <Grid
              container
              direction="row"
              style={{ marginTop: 30, marginBottom: 20, height: "47%" }}
            >
              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "30%", marginTop: 0 }}
              >
                 <Typography variant="h3" style={{marginLeft:80, marginBottom:20, fontSize:20}}>Peppermint Herbal Tea</Typography>
                <Grid
                  container
                  //direction="row"
                  alignItems="center"
                  className={classes.backgroundProduct}
                  justifyContent={matchesSM ? "center" : "space-between"}
                  direction={matchesSM ? "column" : "row"}
                  item
                  //style={{ height: "35%", marginTop: 0, marginLeft: 50 }}
                  style={{ height: "22%", marginTop: 20, marginLeft: 50 }}
                ></Grid>
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "35%", marginLeft: "3.5em" }}
                >
                  {/* <Typography><ReactMarkdown>**Essential services for patients, medical evacuation (medevac) flights, or travelers requiring medical assistance.**</ReactMarkdown></Typography> */}
                 <Typography style={{marginTop:0, padding: 0,fontSize:14}}>
                                                           <strong><ReactMarkdown>Blood Pressure Control, Fights Bacteria Infections, Improves Sleep and Menstrual Cramps</ReactMarkdown></strong>
                                                     </Typography>
                                                     <Typography style={{marginTop:20, fontSize:12}}>
                                                           <ReactMarkdown>{peppemintHerbal}</ReactMarkdown>
                                                     </Typography>
                                                     {/* <Typography style={{marginTop:10, fontSize:11}}>
                                                           <ReactMarkdown>Known for its wide range of health benefits, Peppermint Herbal Tea helps improve sleep quality, regulate blood pressure, and fight infections with its natural antibacterial properties. It also acts as a gentle immune booster, helps relieve menstrual cramps and headaches, and supports cardio-metabolic health.</ReactMarkdown>
                                                     </Typography>
                                                     <Typography style={{marginTop:10, fontSize:11}}>
                                                           <ReactMarkdown>Perfect after meals, it aids digestion by easing gas, bloating, sore throat, and nasal congestion, while also supporting healthy weight management.</ReactMarkdown>
                                                     </Typography>
                                                     <Typography style={{marginTop:10, fontSize:11}}>
                                                           <em><ReactMarkdown>Breathe easy. Sip deeply. Live well.</ReactMarkdown></em>
                                                     </Typography> */}
                </Grid>
                <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "15%", marginLeft: "3.5em", marginTop: '20%' }}
                >
                  <Button
                    variant="contained"
                    component={Link}
                   to={`/products/${categorySlug}/${slug4}`}
                    onClick={() => <ProductDetails />}
                    className={classes.actionPlusButton}
                  >
                    View Details
                  </Button>
                </Grid>
              </Grid>
              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "30%", marginTop: 0 }}
              >
                 <Typography variant="h3" style={{marginLeft:80, marginBottom:20, fontSize:20}}>Pomegranate Herbal Tea</Typography> <br />
                <Grid
                  container
                  //direction="row"
                  alignItems="center"
                  className={classes.backgroundGrowth}
                  justifyContent={matchesSM ? "center" : "space-between"}
                  direction={matchesSM ? "column" : "row"}
                  item
                  //style={{ height: "35%", marginTop: 0, marginLeft: 50 }}
                  style={{ height: "22%", marginTop: 0, marginLeft: 50 }}
                ></Grid>
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "35%", marginLeft: "3.5em" }}
                >
                 {/* <Typography variant="h3" style={{marginLeft:'0%',marginBottom:30}}> Pomegranate Herbal Tea</Typography> */}
                    <Typography style={{marginTop:0, padding: 0,fontSize:14}}>
                          <strong><ReactMarkdown>High Cholesterol Control & Healthy Heart Support</ReactMarkdown></strong>
                    </Typography>
                    <Typography style={{marginTop:20, fontSize:11}}>
                          <ReactMarkdown>{pomegranateHerbal}</ReactMarkdown>
                    </Typography>
                    {/* <Typography style={{marginTop:10, fontSize:11}}>
                          <ReactMarkdown>Rich in natural antioxidants, this refreshing herbal tea helps reduce cellular damage caused by free radicals, protects against heart disease, and supports healthy blood circulation. It also aids in normalizing blood pressure, reducing cholesterol and triglyceride buildup, and provides natural support for arthritis, gout, and prostate health.</ReactMarkdown>
                    </Typography>
                    <Typography style={{marginTop:10, fontSize:11}}>
                          <ReactMarkdown>Every sip promotes gut health and smooth digestion, making it both a soothing and revitalizing daily ritual.</ReactMarkdown>
                    </Typography>
                    <Typography style={{marginTop:10, fontSize:11}}>
                          <em><ReactMarkdown>Pure vitality in every cup.</ReactMarkdown></em>
                    </Typography> */}
                </Grid>
                <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "15%", marginLeft: "3.5em", marginTop: '20%' }}
                >
                  <Button
                    variant="contained"
                    component={Link}
                   to={`/products/${categorySlug}/${slug5}`}
                    onClick={() => <ProductDetails />}
                    className={classes.actionPlusButton}
                  >
                    View Details
                  </Button>
                </Grid>
              </Grid>

              <Grid
                container
                direction="column"
                style={{ marginLeft: 20, width: "30%", marginTop: 0 }}
              >
                 <Typography variant="h3" style={{marginLeft:80, marginBottom:35,fontSize:20}}>Green Tea</Typography>
                <Grid
                  container
                  //direction="row"
                  alignItems="center"
                  className={classes.backgroundMetrics}
                  justifyContent={matchesSM ? "center" : "space-between"}
                  direction={matchesSM ? "column" : "row"}
                  item
                  //style={{ height: "35%", marginTop: 0, marginLeft: 50 }}
                  style={{ height: "22%", marginTop: 0, marginLeft: 50 }}
                ></Grid>
                <Grid
                  item
                  alignItems="center"
                  //style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "35%", marginLeft: "3.5em" }}
                >
                  {/* <Typography variant="h3" style={{marginLeft:'0%',marginBottom:30}}> Green Tea</Typography> */}
                     <Typography style={{marginTop:0, padding: 0,fontSize:14}}>
                          <strong><ReactMarkdown>Anti-Cancer and Stroke, General Antioxidant and Metabolic Booster</ReactMarkdown></strong>
                    </Typography>
                      <Typography style={{marginTop:10, fontSize:11}}>
                            <ReactMarkdown>{greenTeaHerbal}</ReactMarkdown>
                      </Typography>
                      {/* <Typography style={{marginTop:10, fontSize:11}}>
                          <ReactMarkdown>Rich in polyphenols and natural antioxidants, Green Tea helps lower bad cholesterol, support cardiovascular health, and improve blood circulation. It also aids in normalizing blood sugar and blood pressure levels, reducing stroke risk, and protecting DNA from damage caused by free radicals, helping to prevent cancer growth.</ReactMarkdown>
                    </Typography>
                    <Typography style={{marginTop:10, fontSize:11}}>
                          <ReactMarkdown>Beyond its physical benefits, Green Tea helps alleviate stress and anxiety, supports bone and muscle health, and aids in healthy weight management — all while promoting long-term wellness and vitality.</ReactMarkdown>
                    </Typography>
                      <Typography style={{marginTop:10, fontSize:11}}>
                          <em><ReactMarkdown>Sip your way to a healthier, longer, and calmer life.</ReactMarkdown></em>
                    </Typography> */}
                </Grid>
                <Grid
                  item
                  alignItems="center"
                  // style={{ height: "60%", marginLeft: "3.5em" }}
                  style={{ height: "15%", marginLeft: "3.5em", marginTop: '20%' }}
                >
                  <Button
                    variant="contained"
                    component={Link}
                   to={`/products/${categorySlug}/${slug6}`}
                    onClick={() => <ProductDetails />}
                    className={classes.actionPlusButton}
                  >
                    View Details
                  </Button>
                </Grid>
              </Grid>
            </Grid>
           
            
          </Box>
        </>
      ) : (
        <Box className={classes.uppercardMobile} disableRipple>
          {/* <Typography variant="h3" style={{marginLeft:'15%',marginBottom:30, fontSize:25}}>Our Protocol Services</Typography> */}
          <Grid
            container
            direction="row"
            style={{ marginTop: 15, height: "68%" }}
          >
            <Grid
              container
              direction="column"
              style={{ marginLeft: 10, width: "100%", marginTop: 0 }}
            >
              <Typography variant="h3" style={{marginLeft:10, marginBottom:15, fontSize:16}}> Ginger, Turmeric, Garlic & Honey Tea</Typography>
              <Grid
                container
                //direction="row"
                alignItems="center"
                className={classes.softwareEngineering}
                justifyContent={matchesSM ? "center" : "space-between"}
                direction={matchesSM ? "column" : "row"}
                item
                style={{ height: "25%", marginTop: 0, marginLeft: 10 }}
              ></Grid>
              <Grid
                item
                alignItems="center"
                style={{ height: "35%", marginLeft: 10 }}
              >
                {/* <Typography style={{ fontSize: 11 }}>
                <ReactMarkdown>**Designed for high-profile travelers, executives, celebrities, and families seeking a seamless, stress-free airport experience.**</ReactMarkdown>
                </Typography> */}
                {/* <Typography variant="h5" style={{marginLeft:'0%',marginBottom:30}}> Ginger, Turmeric, Garlic & Honey Tea</Typography> */}
                     <Typography style={{marginTop:0, padding: 0,fontSize:12}}>
                          <strong><ReactMarkdown>Natural Immune Booster, Ease Arthritis & Strong Bones</ReactMarkdown></strong>
                    </Typography>
                      <Typography style={{marginTop:10, fontSize:11}}>
                            <ReactMarkdown>{gingerTumeric}</ReactMarkdown>
                      </Typography>
                      {/* <Typography style={{marginTop:10, fontSize:11}}>
                          <ReactMarkdown>Rich in natural antioxidants and anti-inflammatory compounds, this potent fusion helps ease arthritis and joint pain, build stronger bones, and support joint and muscle health. It also aids in relieving colds, flu, and nasal congestion, while helping to normalize blood sugar levels and protect against bacterial infections.</ReactMarkdown>
                    </Typography>
                    <Typography style={{marginTop:10, fontSize:11}}>
                          <ReactMarkdown>With regular use, it promotes heart health, supports healthy aging, and helps your body fight oxidative stress and disease naturally.</ReactMarkdown>
                    </Typography>
                      <Typography style={{marginTop:10, fontSize:11}}>
                          <em><ReactMarkdown>Pure. Potent. Naturally restorative.</ReactMarkdown></em>
                    </Typography> */}
              </Grid>
              <Grid
                item
                alignItems="center"
                // style={{ height: "60%", marginLeft: "3.5em" }}
                style={{ height: "20%", marginLeft: "0.5em" }}
              >
                <Button
                  variant="contained"
                  component={Link}
                  to={`/products/${categorySlug}/${slug1}`}
                    onClick={() => <ProductDetails />}
                  className={classes.actionMobileButton}
                >
                  View Details
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              direction="column"
              style={{ marginLeft: 0, width: "100%", marginTop: 0 }}
            >
               <Typography variant="h3" style={{marginLeft:10, marginBottom:15, fontSize:16}}> DiaHerbs Herbal Tea</Typography>
              <Grid
                container
                //direction="row"
                alignItems="center"
                className={classes.qualityAssurance}
                justifyContent={matchesSM ? "center" : "space-between"}
                direction={matchesSM ? "column" : "row"}
                item
                style={{ height: "25%", marginTop: 10, marginLeft: 20 }}
              ></Grid>
              {/* <Typography variant="h5" style={{marginLeft:10, marginBottom:10}}> DiaHerbs Herbal Tea</Typography> */}

              <Grid
                item
                alignItems="center"
                style={{ height: "35%", marginLeft: 25 }}
              >
                 {/* <Typography variant="h5" style={{marginLeft:'0%',marginBottom:30}}> DiaHerbs Herbal Tea</Typography> */}
                                      <Typography style={{marginTop:0, padding: 0,fontSize:12}}>
                                            <strong><ReactMarkdown>Immune Booster, Blood Sugar Control</ReactMarkdown></strong>
                                      </Typography>
                                       <Typography style={{marginTop:10, fontSize:11}}>
                                          <ReactMarkdown>{diaherbHerbal}</ReactMarkdown>
                                     </Typography>
                                      {/* <Typography style={{marginTop:10, fontSize:11}}>
                                            <ReactMarkdown>This revitalizing herbal infusion helps lower elevated blood sugar levels, reduce abnormally high serum insulin, and enhance glucose utilization by body cells. Its antioxidant properties also help mitigate oxidative stress, premature aging, and the harmful effects of free radicals on your system.</ReactMarkdown>
                                      </Typography>
                                      <Typography style={{marginTop:10, fontSize:11}}>
                                            <ReactMarkdown>DiaHerbs Herbal Tea keeps you energized while helping maintain blood sugar within normal limits, and may help reduce or delay the progression to Type 2 diabetes. It also provides excellent support alongside your prescribed diabetes medication to promote balanced, natural wellness.</ReactMarkdown>
                                      </Typography>
                                      <Typography style={{marginTop:10, fontSize:11}}>
                                            <em><ReactMarkdown>Balance your energy. Empower your health — naturally.</ReactMarkdown></em>
                                      </Typography> */}
              </Grid>
              <Grid
                item
                alignItems="center"
                // style={{ height: "60%", marginLeft: "3.5em" }}
                style={{ height: "20%", marginLeft: "0.5em" }}
              >
                <Button
                  variant="contained"
                  component={Link}
                  to={`/products/${categorySlug}/${slug2}`}
                  onClick={() => <ProductDetails />}
                  className={classes.actionMobileButton}
                >
                  View Details
                </Button>
              </Grid>
            </Grid>

            <Grid
              container
              direction="column"
              style={{ marginLeft: 0, width: "100%", marginTop: 0 }}
            >
              <Typography variant="h3" style={{marginLeft:10, marginBottom:15, fontSize:16}}>Ginger, Lemon & Moringa Herbal Tea</Typography>
              <Grid
                container
                //direction="row"
                alignItems="center"
                className={classes.backgroundBulk}
                justifyContent={matchesSM ? "center" : "space-between"}
                direction={matchesSM ? "column" : "row"}
                item
                style={{ height: "25%", marginTop: 10, marginLeft: 20 }}
              ></Grid>
              <Grid
                item
                alignItems="center"
                style={{ height: "35%", marginLeft: 25 }}
              >
                {/* <Typography variant="h5" style={{marginLeft:'0%',marginBottom:30}}>Ginger, Lemon & Moringa Herbal Tea</Typography> */}
                                      <Typography style={{marginTop:0, padding: 0,fontSize:12}}>
                                           <strong><ReactMarkdown>Slimming Kidney Cleanser and Reduces Inflammation</ReactMarkdown></strong>
                                     </Typography>
                                       <Typography style={{marginTop:10, fontSize:11}}>
                                             <ReactMarkdown>{gingerLemon}</ReactMarkdown>
                                       </Typography>
                                       {/* <Typography style={{marginTop:10, fontSize:11}}>
                                           <ReactMarkdown>Ginger, Lemon & Moringa Herbal Tea helps boost metabolism, burn calories, and reduce body fat accumulation, making it an excellent choice for weight management. It also promotes kidney detoxification, lowers blood sugar levels, and helps prevent the build-up of kidney stones while protecting against chronic kidney diseases.</ReactMarkdown>
                                     </Typography>
                                     <Typography style={{marginTop:10, fontSize:11}}>
                                           <ReactMarkdown>Packed with antioxidants, this tea helps fight inflammation and oxidative stress, supporting your body’s natural defense system and vitality.</ReactMarkdown>
                                     </Typography>
                                       <Typography style={{marginTop:10, fontSize:11}}>
                                           <em><ReactMarkdown>Cleanse. Refresh. Thrive — naturally.</ReactMarkdown></em>
                                     </Typography> */}
              </Grid>

              <Grid
                item
                alignItems="center"
                // style={{ height: "60%", marginLeft: "3.5em" }}
                style={{ height: "20%", marginLeft: "0.5em" }}
              >
                <Button
                  variant="contained"
                  component={Link}
                  to={`/products/${categorySlug}/${slug3}`}
                  onClick={() => <ProductDetails />}
                  className={classes.actionMobileButton}
                >
                  View Details
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            style={{ marginTop: 5, height: "32%" }}
          >
            <Grid
              container
              direction="column"
              style={{ marginLeft: 0, width: "32%", marginTop: 0 }}
            >
              <Typography variant="h5" style={{marginLeft:0, marginBottom:2, fontSize:12}}>Peppermint Herbal Tea</Typography>
              <Grid
                container
                //direction="row"
                alignItems="center"
                className={classes.backgroundProduct}
                justifyContent={matchesSM ? "center" : "space-between"}
                direction={matchesSM ? "column" : "row"}
                item
                style={{ height: "10%", marginTop: 10, marginLeft: 5 }}
              ></Grid>
              <Grid
                item
                alignItems="center"
                style={{ height: "70%", marginLeft: 10 }}
              >
                <Typography style={{marginTop:0, padding: 0,fontSize:12}}>
                                                           <strong><ReactMarkdown>Blood Pressure Control, Fights Bacteria Infections, Improves Sleep and Menstrual Cramps</ReactMarkdown></strong>
                                                     </Typography>
                                                     <Typography style={{marginTop:20, fontSize:11}}>
                                                           <ReactMarkdown>{peppemintHerbal}</ReactMarkdown>
                                                     </Typography>
                                                     {/* <Typography style={{marginTop:10, fontSize:10}}>
                                                           <ReactMarkdown>Known for its wide range of health benefits, Peppermint Herbal Tea helps improve sleep quality, regulate blood pressure, and fight infections with its natural antibacterial properties. It also acts as a gentle immune booster, helps relieve menstrual cramps and headaches, and supports cardio-metabolic health.</ReactMarkdown>
                                                     </Typography>
                                                     <Typography style={{marginTop:10, fontSize:10}}>
                                                           <ReactMarkdown>Perfect after meals, it aids digestion by easing gas, bloating, sore throat, and nasal congestion, while also supporting healthy weight management.</ReactMarkdown>
                                                     </Typography>
                                                     <Typography style={{marginTop:10, fontSize:10}}>
                                                           <em><ReactMarkdown>Breathe easy. Sip deeply. Live well.</ReactMarkdown></em>
                                                     </Typography> */}
              </Grid>
              <Grid
                item
                alignItems="center"
                // style={{ height: "60%", marginLeft: "3.5em" }}
                style={{ height: "5%", marginLeft: "0.3em", marginTop: 10 }}
              >
                <Button
                  variant="contained"
                  component={Link}
                   to={`/products/${categorySlug}/${slug4}`}
                    onClick={() => <ProductDetails />}
                  className={classes.actionMobileDownButton}
                   style={{marginLeft:3}}
                >
                 View Details
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              direction="column"
              style={{ marginLeft: 7, width: "32%", marginTop: 0 }}
            >
              <Typography variant="h5" style={{marginLeft:35, marginBottom:2,fontSize:12}}>Pomegranate Herbal Tea</Typography> <br />
              
              <Grid
                container
                //direction="row"
                alignItems="center"
                className={classes.backgroundGrowth}
                justifyContent={matchesSM ? "center" : "space-between"}
                direction={matchesSM ? "column" : "row"}
                item
                style={{ height: "10%", marginTop: 0, marginLeft: 20 }}
              ></Grid>
              <Grid
                item
                alignItems="center"
                style={{ height: "65%", marginLeft: 25 }}
              >
                <Typography style={{marginTop:0, padding: 0,fontSize:12}}>
                          <strong><ReactMarkdown>High Cholesterol Control & Healthy Heart Support</ReactMarkdown></strong>
                    </Typography>
                    <Typography style={{marginTop:20, fontSize:11}}>
                          <ReactMarkdown>{pomegranateHerbal}</ReactMarkdown>
                    </Typography>
                    {/* <Typography style={{marginTop:10, fontSize:10}}>
                          <ReactMarkdown>Rich in natural antioxidants, this refreshing herbal tea helps reduce cellular damage caused by free radicals, protects against heart disease, and supports healthy blood circulation. It also aids in normalizing blood pressure, reducing cholesterol and triglyceride buildup, and provides natural support for arthritis, gout, and prostate health.</ReactMarkdown>
                    </Typography>
                    <Typography style={{marginTop:10, fontSize:10}}>
                          <ReactMarkdown>Every sip promotes gut health and smooth digestion, making it both a soothing and revitalizing daily ritual.</ReactMarkdown>
                    </Typography>
                    <Typography style={{marginTop:10, fontSize:10}}>
                          <em><ReactMarkdown>Pure vitality in every cup.</ReactMarkdown></em>
                    </Typography> */}
              </Grid>
              <Grid
                item
                alignItems="center"
                // style={{ height: "60%", marginLeft: "3.5em" }}
                style={{ height: "10%", marginLeft: "0.7em", marginTop: 10 }}
              >
                <Button
                  variant="contained"
                  component={Link}
                  to={`/products/${categorySlug}/${slug5}`}
                    onClick={() => <ProductDetails />}
                  className={classes.actionMobileDownButton}
                   style={{marginLeft:20}}
                >
                 View Details
                </Button>
              </Grid>
            </Grid>

            <Grid
              container
              direction="column"
              style={{ marginLeft: 7, width: "32%", marginTop: 0 }}
            >
               <Typography variant="h5" style={{marginLeft:45, marginBottom:30, fontSize:12}}>Green Tea</Typography>
              <Grid
                container
                //direction="row"
                alignItems="center"
                className={classes.backgroundMetrics}
                justifyContent={matchesSM ? "center" : "space-between"}
                direction={matchesSM ? "column" : "row"}
                item
                style={{ height: "10%", marginTop: 0, marginLeft: "1.2em" }}
              ></Grid>
              <Grid
                item
                alignItems="center"
                style={{ height: "65%", marginLeft: 25 }}
              >
                  <Typography style={{marginTop:0, padding: 0,fontSize:12}}>
                          <strong><ReactMarkdown>Anti-Cancer and Stroke, General Antioxidant and Metabolic Booster</ReactMarkdown></strong>
                    </Typography>
                      <Typography style={{marginTop:10, fontSize:10}}>
                            <ReactMarkdown>{greenTeaHerbal}</ReactMarkdown>
                      </Typography>
                      {/* <Typography style={{marginTop:10, fontSize:10}}>
                          <ReactMarkdown>Rich in polyphenols and natural antioxidants, Green Tea helps lower bad cholesterol, support cardiovascular health, and improve blood circulation. It also aids in normalizing blood sugar and blood pressure levels, reducing stroke risk, and protecting DNA from damage caused by free radicals, helping to prevent cancer growth.</ReactMarkdown>
                    </Typography>
                    <Typography style={{marginTop:10, fontSize:10}}>
                          <ReactMarkdown>Beyond its physical benefits, Green Tea helps alleviate stress and anxiety, supports bone and muscle health, and aids in healthy weight management — all while promoting long-term wellness and vitality.</ReactMarkdown>
                    </Typography>
                      <Typography style={{marginTop:10, fontSize:10}}>
                          <em><ReactMarkdown>Sip your way to a healthier, longer, and calmer life.</ReactMarkdown></em>
                    </Typography> */}
              </Grid>

              <Grid
                item
                alignItems="center"
                // style={{ height: "60%", marginLeft: "3.5em" }}
                style={{ height: "10%", marginLeft: "0.7em", marginTop: 10 }}
              >
                <Button
                  variant="contained"
                  component={Link}
                  to={`/products/${categorySlug}/${slug6}`}
                  onClick={() => <ProductDetails />}
                  className={classes.actionMobileDownButton}
                  style={{marginLeft:20}}
                >
                 View Details
                </Button>
              </Grid>
            </Grid>
          </Grid>
          
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
