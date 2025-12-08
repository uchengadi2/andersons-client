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
import backgroundBulk from "./../../../assets/images/andersons/tropicalslimzerodietsticks2.jpg";
import backgroundRetail from "./../../../assets/images/covers/delivery.png";

import backgroundProduct from "./../../../assets/images/andersons/andeglim.jpg";
import backgroundGrowth from "./../../../assets/images/andersons/stropicanasteviasweetener2.jpg";
import backgroundMetrics from "./../../../assets/images/andersons/andermal2.jpg";

//import softwareEngineering from "./../../../assets/images/project/vip3.webp";
import softwareEngineering from "./../../../assets/images/andersons/Tropicana_slim_vanilla_cappuccino_coffee_mix_front.png";
import qualityAssurance from "./../../../assets/images/andersons/tropicana_slim_low_calorie_25.png";
import backgroundEvent from "./../../../assets/images/project/event1.webp";
import backgroundTraining from "./../../../assets/images/project/training.webp";
import backgroundDocumentation from "./../../../assets/images/project/documentation2.webp";




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
    height: 7600,
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

export default function GroupedAndersonsProducts(props) {
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

  const vvipServices = "* **Personalized Reception**: A professional protocol officer greets guests personally at the aircraft door, arrival gate, or at a designated VIP meeting point inside the terminal.\n\n* **Fast-Track Processing**: Priority assistance through immigration, customs, and security clearances — bypassing regular passenger queues for faster processing.\n\n* **Porter Assistance**: Dedicated porters collect, handle, and deliver guests’ luggage through priority channels to their vehicle or next destination.\n\n* **Escort to Lounge or Transport**: Clients are personally escorted to VIP lounges or their awaiting ground transportation, ensuring they never navigate the airport alone.\n\n* **Language Assistance**: Multilingual protocol officers available to overcome language barriers during arrivals and departures.\n\n* **Concierge Support**: Optional on-site concierge services such as arranging hotel bookings, flight rebookings, or airport shopping assistance.\n\n";
  const diplomaticServices = "* **Advance Coordination**: Prior arrangement with airport authorities, customs, immigration, and diplomatic security services to ensure a smooth arrival or departure.\n\n* **Secure Diplomatic Lounge Access**: Use of diplomatic lounges for privacy and comfort while formalities are handled discreetly.\n\n* **Special Clearance Processing**: Rapid immigration, customs, and visa processing through diplomatic channels without waiting in public areas.\n\n* **Embassy & Consulate Liaison**: Coordinating with consular staff or embassy officials to facilitate meetings, document clearances, or secure handovers.\n\n* **Private Airside Vehicle Transfers**: Where permitted, arranging for official vehicles to pick up or drop off guests directly at the aircraft.";
  const corporateServices = "* **Executive Meet & Greet**: Professional, discreet protocol officers to assist at check-in, immigration, and baggage claim.\n\n* **Check-in & Boarding**: Dedicated counters or pre-arranged check-in services to minimize waiting times.\n\n* **Luggage Handling**: Luggage tags, porter services, and baggage delivery directly to waiting vehicles or hotel reception.\n\n* **Executive Lounge Coordination**: Fast escort and guaranteed entry to business lounges, where guests can work or relax before flights.\n\n* **Business Travel Concierge**: On-ground assistance with rebooking, upgrades, meeting room arrangements, or connecting ground transport.\n\n* **Customizable Packages**: Tailored services based on the specific needs of corporate clients, including group travel arrangements.";
  const medicalServices = "* **Emergency Airport Clearances**: Rapid clearance procedures for medical evacuation flights, ambulances, and emergency arrivals.\n\n* **Ambulance Coordination**: Pre-arranged ambulance or medical staff at airside gates or aircraft doors.\n\n* **Patient Escort**: Protocol officers accompany patients through immigration and customs, ensuring safety and comfort.\n\n* **Medical Equipment Handling**: Special assistance for the transport of wheelchairs, stretchers, oxygen tanks, or life-saving devices.\n\n* **Hospital Liaison**: Coordination with receiving hospitals, arranging medical records handovers, and transportation.\n\n* **Travel Insurance Liaison**: Coordination with travel insurance providers for claims and coverage during the trip.";  
  const airlineCrewServices = "* **Crew Meet & Greet**: Protocol officers welcome arriving or departing crew members, ensuring a smooth and timely transition.\n\n* **Accommodation & Transfers**: Booking and coordinating layover hotels, airport shuttles, and crew transportation.\n\n* **Visa & Immigration Facilitation**: Assistance with crew visa-on-arrival, temporary passes, or transit clearances.\n\n* **Lost Baggage Support**: Handling reports and coordination with airlines for missing or delayed crew baggage.\n\n* **Flight Operations Coordination**: Liaising with ground handling agents, flight dispatchers, and airport authorities to ensure timely departures.\n\n* **Crew Lounge Access**: Arranging rest areas or lounges while waiting for connecting flights or ground transportation.";
  const privateServices = "* **FBO Terminal Coordination**: Pre-arrangement of private Fixed Base Operator (FBO) terminal services for privacy and security.\n\n* **Airside Vehicle Access**: Direct vehicle-to-aircraft transfers for arrivals and departures, bypassing the public terminal.\n\n* **Dedicated Protocol Officer**: Personal escort for every step of the arrival or departure process, from immigration to luggage collection.\n\n* **Customs & Security Clearance**: Seamless processing of documentation, luggage, and permits through VIP or private channels.\n\n* **Ground Concierge Services**: Booking luxury vehicles, private chefs, hotel suites, or personal security teams on request.\n\n* **Flight Coordination**: Assistance with flight changes, upgrades, or charter arrangements.";
  const specialEventServices = "* **Exclusive Arrivals & Departures**: Private entry and exit points arranged with airport security for ultimate privacy.\n\n* **Temporary Protocol Stations**: Deployment of mobile protocol stations, dedicated protocol staff, and security support.\n\n* **Crowd Control & Privacy Management**: Coordinating with airport authorities and security to manage fans, media, and public attention.\n\n* **Group Logistics Management**: Coordinating large or simultaneous arrivals, including charter or private jet logistics, hotel transfers, and luggage management.\n\n* **On-site Event Coordination**: Real-time management of arrivals, transport, schedules, and briefings.\n\n* **Media Management**: Coordination with media teams for press conferences, interviews, or public appearances.";
  const trainingServices = "* **Multilingual Protocol Staff**: Officers fluent in major international languages for guest assistance.\n\n* **Specialized Training**: Cultural sensitivity, etiquette, VIP handling, and emergency management training.\n\n* **Crisis Handling Training**: Preparing staff to handle medical emergencies, last-minute flight changes, and sensitive situations.\n\n* **On-call Staffing**: Rapid deployment of protocol officers for temporary or urgent events, group arrivals, or unplanned scenarios.\n\n* **Uniformed Professionalism**: Clean, presentable, and well-trained officers representing your brand impeccably.\n\n* **Customizable Training Modules**: Tailored training solutions based on specific client needs or industry requirements.";  
  const documentationServices = "* **Visa-on-Arrival & E-visa Processing**: Handling paperwork, payments, and approvals for immediate or digital visas.\n\n* **Transit Visa Facilitation**: Arranging transit permits for travelers with layovers or multi-airport transfers.\n\n* **Customs Declarations**: Support with declarations for luxury goods, special equipment, or sensitive cargo.\n\n* **Immigration Forms**: Assistance with completing and submitting arrival, departure, and health forms.\n\n* **Real-time Clearance Updates**: Constant communication with travelers, families, or corporate travel managers on progress.\n\n* **Special Permits & Clearances**: Arranging special permissions for high-profile guests, media teams, or sensitive cargo.";
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
                <Typography variant="h3" style={{marginLeft:100, marginBottom:20, fontSize:20}}> Tropicana Slim – Vanilla Cappuccino Coffee</Typography>
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
                     {/* <Typography variant="h3" style={{marginLeft:'0%',marginBottom:30}}> Tropicana Slim – Vanilla Cappuccino Coffee</Typography> */}
                    <Typography style={{marginTop:0, padding: 0,fontSize:14}}>
                          <strong><ReactMarkdown>Indulge in the Art of Guilt-Free Luxury</ReactMarkdown></strong>
                    </Typography>
                    <Typography style={{marginTop:20, fontSize:11}}>
                          <ReactMarkdown>Discover the irresistible charm of Tropicana Slim Vanilla Cappuccino Coffee — a sophisticated blend crafted for those who crave sweetness without compromise. Each sip delights your senses with velvety, creamy froth and the smooth aroma of premium vanilla. </ReactMarkdown>
                    </Typography>
                    <Typography style={{marginTop:10, fontSize:11}}>
                          <ReactMarkdown>Perfect for every special occasion or your everyday moment of bliss, this indulgent coffee offers a taste of pure satisfaction — rich, creamy, and beautifully balanced.</ReactMarkdown>
                    </Typography>
                    <Typography style={{marginTop:10, fontSize:11}}>
                          <strong><em><ReactMarkdown>Savor the sweetness of wellness.</ReactMarkdown></em></strong>
                    </Typography>
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
                    to="/dealscentral"
                    //onClick={() => <DealHome />}
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
                <Typography variant="h3" style={{marginLeft:60, marginBottom:20, fontSize:20}}>Tropicana Slim – Low Calorie Sweetener</Typography>
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
                   {/* <Typography variant="h3" style={{marginLeft:'0%',marginBottom:30}}>Tropicana Slim – Low Calorie Sweetener</Typography> */}
                                    <Typography style={{marginTop:0, padding: 0,fontSize:14}}>
                                          <strong><ReactMarkdown>The Smarter Way to Sweeten Your Life</ReactMarkdown></strong>
                                    </Typography>
                                    <Typography style={{marginTop:20, fontSize:11}}>
                                          <ReactMarkdown>Enjoy the sweetness you love — without the extra calories. Tropicana Slim (Low Calorie) is a healthy sugar substitute designed to sweeten all kinds of foods and beverages, giving you delicious taste with balanced nutrition. </ReactMarkdown>
                                    </Typography>
                                    <Typography style={{marginTop:10, fontSize:11}}>
                                          <ReactMarkdown>Made from sorbitol derived from corn, this naturally inspired formula contains low calories, no bitter aftertaste, and does not cause a rapid rise in blood sugar — making it suitable for both children and adults.</ReactMarkdown>
                                    </Typography>
                                    <Typography style={{marginTop:10, fontSize:11}}>
                                          <em><ReactMarkdown>Perfect for those who value wellness without compromise.</ReactMarkdown></em>
                                    </Typography>
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
                    to="/dealscentral"
                    //onClick={() => <DealHome />}
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
              <Typography variant="h3" style={{marginLeft:80, marginBottom:0, fontSize:20}}>Tropicana Slim – Zero Calorie Sweetener</Typography>
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
                 {/* <Typography variant="h3" style={{marginLeft:'0%',marginBottom:30}}>Tropicana Slim – Zero Calorie Sweetener</Typography> */}
                                    <Typography style={{marginTop:0, padding: 0,fontSize:14}}>
                                          <strong><ReactMarkdown>Pure Sweetness. Zero Compromise.</ReactMarkdown></strong>
                                    </Typography>
                                    <Typography style={{marginTop:20, fontSize:11}}>
                                          <ReactMarkdown>Enjoy the taste of sweetness — without the calories. Tropicana Slim (Zero Calorie) is a healthy sugar substitute crafted to sweeten all your favorite foods and beverages while supporting a balanced lifestyle.</ReactMarkdown>
                                    </Typography>
                                    <Typography style={{marginTop:10, fontSize:11}}>
                                          <ReactMarkdown>Formulated from sorbitol derived from corn, it contains zero calories, has no bitter aftertaste, and does not cause a rapid rise in blood sugar — making it ideal for children, adults, and especially diabetic individuals seeking a healthier alternative.</ReactMarkdown>
                                    </Typography>
                                    <Typography style={{marginTop:10, fontSize:11}}>
                                          <em><ReactMarkdown>Deliciously sweet. Perfectly healthy.</ReactMarkdown></em>
                                    </Typography>
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
                    to="/dealscentral"
                    //onClick={() => <DealHome />}
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
                 <Typography variant="h3" style={{marginLeft:80, marginBottom:20, fontSize:20}}>Andeglim</Typography>
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
                 {/* <Typography variant="h3" style={{marginLeft:'0%',marginBottom:30}}>Andeglim</Typography> */}
                    <Typography style={{marginTop:0, padding: 0,fontSize:14}}>
                          <strong><ReactMarkdown>Dual Action for Better Blood Sugar Control</ReactMarkdown></strong>
                    </Typography>
                    <Typography style={{marginTop:20, fontSize:11}}>
                          <ReactMarkdown>Andeglim is a powerful combination therapy designed to help manage blood glucose levels in individuals with Type 2 diabetes. It is recommended when diet, exercise, and treatment with either Metformin or a Sulfonylurea alone are not sufficient to maintain optimal blood sugar control. </ReactMarkdown>
                    </Typography>
                    <Typography style={{marginTop:10, fontSize:11}}>
                          <ReactMarkdown>Containing two proven active ingredients — Metformin Hydrochloride and Glibenclamide — Andeglim offers effective, balanced glucose regulation by targeting insulin resistance and promoting improved insulin secretion.</ReactMarkdown>
                    </Typography>
                    <Typography style={{marginTop:10, fontSize:11}}>
                          <em><ReactMarkdown>Andeglim — advanced care for confident diabetes management.</ReactMarkdown></em>
                    </Typography>
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
                    to="/dealscentral"
                    //onClick={() => <DealHome />}
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
                 <Typography variant="h3" style={{marginLeft:80, marginBottom:35,fontSize:20}}>Andermal Tablets</Typography>
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
                  {/* <Typography variant="h3" style={{marginLeft:'0%',marginBottom:30}}>Andermal Tablets</Typography> */}
                     <Typography style={{marginTop:0, padding: 0,fontSize:14}}>
                          <strong><ReactMarkdown>Effective Relief. Trusted Protection.</ReactMarkdown></strong>
                    </Typography>
                      <Typography style={{marginTop:10, fontSize:11}}>
                            <ReactMarkdown>Andermal is formulated for the treatment of acute and uncomplicated malaria infections caused by Plasmodium falciparum in patients weighing 35 kg and above.</ReactMarkdown>
                      </Typography>
                      <Typography style={{marginTop:10, fontSize:11}}>
                          <ReactMarkdown>Developed with precision and backed by clinical expertise, Andermal offers reliable, fast-acting relief to help restore your health and well-being.</ReactMarkdown>
                    </Typography>
                      <Typography style={{marginTop:10, fontSize:11}}>
                    </Typography>
                          <strong><em><ReactMarkdown>Your health deserves proven protection.</ReactMarkdown></em></strong>
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
                    to="/dealscentral"
                    //onClick={() => <DealHome />}
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
                 <Typography variant="h3" style={{marginLeft:80, marginBottom:20, fontSize:20}}>Tropicana Slim – Stevia Sweetener</Typography> <br />
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
                
                    {/* <Typography variant="h3" style={{marginLeft:'0%',marginBottom:30}}>Tropicana Slim – Stevia Sweetener</Typography> */}
                     <Typography style={{marginTop:0, padding: 0,fontSize:14}}>
                          <strong><ReactMarkdown>Naturally Sweet. Perfectly Healthy.</ReactMarkdown></strong>
                    </Typography>
                      <Typography style={{marginTop:10, fontSize:11}}>
                            <ReactMarkdown>Experience pure sweetness from nature with Tropicana Slim (Stevia Sweetener) — a plant-based sugar substitute made from Stevia leaves. Safe, healthy, and naturally derived, it’s the ideal choice for those seeking a wholesome way to enjoy sweetness without guilt.</ReactMarkdown>
                      </Typography>
                      <Typography style={{marginTop:10, fontSize:11}}>
                          <ReactMarkdown>Formulated to reduce calorie intake, lower blood sugar levels, and support healthy cholesterol, Stevia Sweetener is great for diabetic individuals and anyone pursuing a balanced lifestyle. Plus, it helps lower the risk of cavities and tooth decay, making it a smart choice for the whole family.</ReactMarkdown>
                    </Typography>
                      <Typography style={{marginTop:10, fontSize:11}}>
                          <em><ReactMarkdown>The sweetness of nature, redefined.</ReactMarkdown></em>
                    </Typography>
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
                    to="/dealscentral"
                    //onClick={() => <DealHome />}
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
            style={{ marginTop: 15, height: "33%" }}
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
                style={{ height: "65%", marginLeft: 10 }}
              >
                {/* <Typography style={{ fontSize: 11 }}>
                <ReactMarkdown>**Designed for high-profile travelers, executives, celebrities, and families seeking a seamless, stress-free airport experience.**</ReactMarkdown>
                </Typography> */}
                {/* <Typography variant="h5" style={{marginLeft:'0%',marginBottom:30}}> Ginger, Turmeric, Garlic & Honey Tea</Typography> */}
                     <Typography style={{marginTop:0, padding: 0,fontSize:12}}>
                          <strong><ReactMarkdown>Nature’s Powerhouse for Immunity and Vitality.</ReactMarkdown></strong>
                    </Typography>
                      <Typography style={{marginTop:10, fontSize:11}}>
                            <ReactMarkdown>Embrace the healing synergy of Ginger, Turmeric, Garlic, and Honey — a time-honored blend crafted to strengthen your immune system, restore balance, and promote lifelong wellness.</ReactMarkdown>
                      </Typography>
                      <Typography style={{marginTop:10, fontSize:11}}>
                          <ReactMarkdown>Rich in natural antioxidants and anti-inflammatory compounds, this potent fusion helps ease arthritis and joint pain, build stronger bones, and support joint and muscle health. It also aids in relieving colds, flu, and nasal congestion, while helping to normalize blood sugar levels and protect against bacterial infections.</ReactMarkdown>
                    </Typography>
                    <Typography style={{marginTop:10, fontSize:11}}>
                          <ReactMarkdown>With regular use, it promotes heart health, supports healthy aging, and helps your body fight oxidative stress and disease naturally.</ReactMarkdown>
                    </Typography>
                      <Typography style={{marginTop:10, fontSize:11}}>
                          <em><ReactMarkdown>Pure. Potent. Naturally restorative.</ReactMarkdown></em>
                    </Typography>
              </Grid>
              {/* <Grid
                item
                alignItems="center"
                // style={{ height: "60%", marginLeft: "3.5em" }}
                style={{ height: "20%", marginLeft: "0.5em" }}
              >
                <Button
                  variant="contained"
                  component={Link}
                  to="/dealscentral"
                  //onClick={() => <DealHome />}
                  className={classes.actionButton}
                >
                  Send Errand
                </Button>
              </Grid> */}
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
                style={{ height: "55%", marginLeft: 25 }}
              >
                 {/* <Typography variant="h5" style={{marginLeft:'0%',marginBottom:30}}> DiaHerbs Herbal Tea</Typography> */}
                                      <Typography style={{marginTop:0, padding: 0,fontSize:12}}>
                                            <strong><ReactMarkdown>Natural Support for Balanced Blood Sugar and Lasting Vitality.</ReactMarkdown></strong>
                                      </Typography>
                                      <Typography style={{marginTop:10, fontSize:11}}>
                                            <ReactMarkdown>Discover the power of nature’s finest herbs with DiaHerbs Herbal Tea — a potent blend of natural anti-hyperglycemics, antioxidants, insulin sensitizers, and metabolic boosters carefully formulated to promote healthy blood sugar balance and overall wellness. </ReactMarkdown>
                                      </Typography>
                                      <Typography style={{marginTop:10, fontSize:11}}>
                                            <ReactMarkdown>This revitalizing herbal infusion helps lower elevated blood sugar levels, reduce abnormally high serum insulin, and enhance glucose utilization by body cells. Its antioxidant properties also help mitigate oxidative stress, premature aging, and the harmful effects of free radicals on your system.</ReactMarkdown>
                                      </Typography>
                                      <Typography style={{marginTop:10, fontSize:11}}>
                                            <ReactMarkdown>DiaHerbs Herbal Tea keeps you energized while helping maintain blood sugar within normal limits, and may help reduce or delay the progression to Type 2 diabetes. It also provides excellent support alongside your prescribed diabetes medication to promote balanced, natural wellness.</ReactMarkdown>
                                      </Typography>
                                      <Typography style={{marginTop:10, fontSize:11}}>
                                            <em><ReactMarkdown>Balance your energy. Empower your health — naturally.</ReactMarkdown></em>
                                      </Typography>
              </Grid>
              {/* <Grid
                item
                alignItems="center"
                // style={{ height: "60%", marginLeft: "3.5em" }}
                style={{ height: "20%", marginLeft: "0.5em" }}
              >
                <Button
                  variant="contained"
                  component={Link}
                  to="/dealscentral"
                  //onClick={() => <DealHome />}
                  className={classes.actionButton}
                >
                  Send Errand
                </Button>
              </Grid> */}
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
                style={{ height: "65%", marginLeft: 25 }}
              >
                {/* <Typography variant="h5" style={{marginLeft:'0%',marginBottom:30}}>Ginger, Lemon & Moringa Herbal Tea</Typography> */}
                                      <Typography style={{marginTop:0, padding: 0,fontSize:12}}>
                                           <strong><ReactMarkdown>The Miracle Tea for Detox, Energy & Balance.</ReactMarkdown></strong>
                                     </Typography>
                                       <Typography style={{marginTop:10, fontSize:11}}>
                                             <ReactMarkdown>Experience the perfect harmony of Ginger, Lemon, and Moringa — a revitalizing blend crafted to refresh your body, cleanse your system, and energize your day. Naturally rich in vitamins, minerals, and amino acids, this powerful herbal infusion supports complete well-being from within.</ReactMarkdown>
                                       </Typography>
                                       <Typography style={{marginTop:10, fontSize:11}}>
                                           <ReactMarkdown>Ginger, Lemon & Moringa Herbal Tea helps boost metabolism, burn calories, and reduce body fat accumulation, making it an excellent choice for weight management. It also promotes kidney detoxification, lowers blood sugar levels, and helps prevent the build-up of kidney stones while protecting against chronic kidney diseases.</ReactMarkdown>
                                     </Typography>
                                     <Typography style={{marginTop:10, fontSize:11}}>
                                           <ReactMarkdown>Packed with antioxidants, this tea helps fight inflammation and oxidative stress, supporting your body’s natural defense system and vitality.</ReactMarkdown>
                                     </Typography>
                                       <Typography style={{marginTop:10, fontSize:11}}>
                                           <em><ReactMarkdown>Cleanse. Refresh. Thrive — naturally.</ReactMarkdown></em>
                                     </Typography>
              </Grid>

              {/* <Grid
                item
                alignItems="center"
                // style={{ height: "60%", marginLeft: "3.5em" }}
                style={{ height: "20%", marginLeft: "0.5em" }}
              >
                <Button
                  variant="contained"
                  component={Link}
                  to="/dealscentral"
                  //onClick={() => <DealHome />}
                  className={classes.actionButton}
                >
                  Request Escrow
                </Button>
              </Grid> */}
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            style={{ marginTop: 5, height: "33%" }}
          >
            <Grid
              container
              direction="column"
              style={{ marginLeft: 10, width: "100%", marginTop: 0 }}
            >
              <Typography variant="h5" style={{marginLeft:10, marginBottom:10}}>Peppermint Herbal Tea</Typography>
              <Grid
                container
                //direction="row"
                alignItems="center"
                className={classes.backgroundProduct}
                justifyContent={matchesSM ? "center" : "space-between"}
                direction={matchesSM ? "column" : "row"}
                item
                style={{ height: "25%", marginTop: 10, marginLeft: 10 }}
              ></Grid>
              <Grid
                item
                alignItems="center"
                style={{ height: "65%", marginLeft: 10 }}
              >
                <Typography style={{marginTop:0, padding: 0,fontSize:12}}>
                                                           <strong><ReactMarkdown>Refresh Your Senses. Restore Your Balance.</ReactMarkdown></strong>
                                                     </Typography>
                                                     <Typography style={{marginTop:20, fontSize:11}}>
                                                           <ReactMarkdown>Experience the cool, calming essence of Peppermint Herbal Tea — a rejuvenating blend that supports both mind and body. Crafted from pure peppermint leaves, this aromatic infusion delivers natural relief, relaxation, and daily wellness in every cup.</ReactMarkdown>
                                                     </Typography>
                                                     <Typography style={{marginTop:10, fontSize:10}}>
                                                           <ReactMarkdown>Known for its wide range of health benefits, Peppermint Herbal Tea helps improve sleep quality, regulate blood pressure, and fight infections with its natural antibacterial properties. It also acts as a gentle immune booster, helps relieve menstrual cramps and headaches, and supports cardio-metabolic health.</ReactMarkdown>
                                                     </Typography>
                                                     <Typography style={{marginTop:10, fontSize:10}}>
                                                           <ReactMarkdown>Perfect after meals, it aids digestion by easing gas, bloating, sore throat, and nasal congestion, while also supporting healthy weight management.</ReactMarkdown>
                                                     </Typography>
                                                     <Typography style={{marginTop:10, fontSize:10}}>
                                                           <em><ReactMarkdown>Breathe easy. Sip deeply. Live well.</ReactMarkdown></em>
                                                     </Typography>
              </Grid>
              {/* <Grid
                item
                alignItems="center"
                // style={{ height: "60%", marginLeft: "3.5em" }}
                style={{ height: "10%", marginLeft: "0.3em", marginTop: 10 }}
              >
                <Button
                  variant="contained"
                  component={Link}
                  to="/dealscentral"
                  //onClick={() => <DealHome />}
                  className={classes.actionButton}
                >
                  List Products
                </Button>
              </Grid> */}
            </Grid>
            <Grid
              container
              direction="column"
              style={{ marginLeft: 0, width: "100%", marginTop: 0 }}
            >
              <Typography variant="h5" style={{marginLeft:10, marginBottom:25}}>Airline Crew & Layover Services</Typography> <br />
              <Grid
                container
                //direction="row"
                alignItems="center"
                className={classes.backgroundGrowth}
                justifyContent={matchesSM ? "center" : "space-between"}
                direction={matchesSM ? "column" : "row"}
                item
                style={{ height: "25%", marginTop: 0, marginLeft: 20 }}
              ></Grid>
              <Grid
                item
                alignItems="center"
                style={{ height: "63%", marginLeft: 25 }}
              >
                <Typography><ReactMarkdown>**Dedicated services to support airline crew members, including pilots, cabin crew, and ground staff on duty.**</ReactMarkdown></Typography>
                  <Typography>   
                  <br /><strong>Services Include:</strong><br />               
                  <ReactMarkdown>{airlineCrewServices}</ReactMarkdown>
                  </Typography>
              </Grid>
              {/* <Grid
                item
                alignItems="center"
                // style={{ height: "60%", marginLeft: "3.5em" }}
                style={{ height: "10%", marginLeft: "0.7em", marginTop: 10 }}
              >
                <Button
                  variant="contained"
                  component={Link}
                  to="/dealscentral"
                  //onClick={() => <DealHome />}
                  className={classes.actionButton}
                >
                  Boost Visibility
                </Button>
              </Grid> */}
            </Grid>

            <Grid
              container
              direction="column"
              style={{ marginLeft: 0, width: "100%", marginTop: 0 }}
            >
               <Typography variant="h5" style={{marginLeft:10, marginBottom:20}}>Private Jet / Charter Flight Protocol Services</Typography>
              <Grid
                container
                //direction="row"
                alignItems="center"
                className={classes.backgroundMetrics}
                justifyContent={matchesSM ? "center" : "space-between"}
                direction={matchesSM ? "column" : "row"}
                item
                style={{ height: "25%", marginTop: 0, marginLeft: "1.2em" }}
              ></Grid>
              <Grid
                item
                alignItems="center"
                style={{ height: "63%", marginLeft: 25 }}
              >
                 <Typography><ReactMarkdown>**Luxury protocol services tailored for private aircraft passengers and VIP charters.**</ReactMarkdown></Typography>
                  <Typography>   
                  <br /><strong>Services Include:</strong><br />               
                  <ReactMarkdown>{privateServices}</ReactMarkdown>
                  </Typography>
              </Grid>

              {/* <Grid
                item
                alignItems="center"
                // style={{ height: "60%", marginLeft: "3.5em" }}
                style={{ height: "10%", marginLeft: "0.7em", marginTop: 10 }}
              >
                <Button
                  variant="contained"
                  component={Link}
                  to="/dealscentral"
                  //onClick={() => <DealHome />}
                  className={classes.actionButton}
                >
                  Market Metrics
                </Button>
              </Grid> */}
            </Grid>
          </Grid>
          {/**This is the last lap */}
          <Grid
            container
            direction="row"
            style={{ marginTop: 5, height: "33%" }}
          >
            <Grid
              container
              direction="column"
              style={{ marginLeft: 10, width: "100%", marginTop: 0 }}
            >
              <Typography variant="h5" style={{marginLeft:10, marginBottom:20}}>Special Event Protocol Management Service</Typography>
              <Grid
                container
                //direction="row"
                alignItems="center"
                className={classes.backgroundEvent}
                justifyContent={matchesSM ? "center" : "space-between"}
                direction={matchesSM ? "column" : "row"}
                item
                style={{ height: "25%", marginTop: 10, marginLeft: 10 }}
              ></Grid>
              <Grid
                item
                alignItems="center"
                style={{ height: "60%", marginLeft: 10 }}
              >
                 <Typography><ReactMarkdown>**Specialized services for celebrities, sports teams, film crews, or diplomatic delegations during high-profile events.**</ReactMarkdown></Typography>
                  <Typography>   
                  <br /><strong>Services Include:</strong><br />               
                  <ReactMarkdown>{specialEventServices}</ReactMarkdown>
                  </Typography>
              </Grid>
              {/* <Grid
                item
                alignItems="center"
                // style={{ height: "60%", marginLeft: "3.5em" }}
                style={{ height: "10%", marginLeft: "0.3em", marginTop: 10 }}
              >
                <Button
                  variant="contained"
                  component={Link}
                  to="/dealscentral"
                  //onClick={() => <DealHome />}
                  className={classes.actionButton}
                >
                  List Products
                </Button>
              </Grid> */}
            </Grid>
            <Grid
              container
              direction="column"
              style={{ marginLeft: 0, width: "100%", marginTop: 10 }}
            >
               <Typography variant="h5" style={{marginLeft:10, marginBottom:20}}>Protocol Officer Staffing & Training Service</Typography>
              <Grid
                container
                //direction="row"
                alignItems="center"
                className={classes.backgroundTraining}
                justifyContent={matchesSM ? "center" : "space-between"}
                direction={matchesSM ? "column" : "row"}
                item
                style={{ height: "25%", marginTop: 0, marginLeft: 20 }}
              ></Grid>
              <Grid
                item
                alignItems="center"
                style={{ height: "63%", marginLeft: 25 }}
              >
                <Typography><ReactMarkdown>**Recruitment, training, and provision of professional protocol officers for airports, airlines, or special projects.**</ReactMarkdown></Typography>
                  <Typography>   
                  <br /><strong>Services Include:</strong><br />               
                  <ReactMarkdown>{trainingServices}</ReactMarkdown>
                  </Typography>
              </Grid>
              {/* <Grid
                item
                alignItems="center"
                // style={{ height: "60%", marginLeft: "3.5em" }}
                style={{ height: "10%", marginLeft: "0.7em", marginTop: 10 }}
              >
                <Button
                  variant="contained"
                  component={Link}
                  to="/dealscentral"
                  //onClick={() => <DealHome />}
                  className={classes.actionButton}
                >
                  Boost Visibility
                </Button>
              </Grid> */}
            </Grid>

            <Grid
              container
              direction="column"
              style={{ marginLeft: 0, width: "100%", marginTop: 0 }}
            >
                <Typography variant="h5" style={{marginLeft:10, marginBottom:20}}>Documentation & Clearance Assistance Service</Typography>
              <Grid
                container
                //direction="row"
                alignItems="center"
                className={classes.backgroundDocumentation}
                justifyContent={matchesSM ? "center" : "space-between"}
                direction={matchesSM ? "column" : "row"}
                item
                style={{ height: "25%", marginTop: 0, marginLeft: "1.2em" }}
              ></Grid>
              <Grid
                item
                alignItems="center"
                style={{ height: "63%", marginLeft: 25 }}
              >
                <Typography><ReactMarkdown>**Expert support with all essential travel documentation, immigration, and customs formalities.**</ReactMarkdown></Typography>
                  <Typography>   
                  <br /><strong>Services Include:</strong><br />               
                  <ReactMarkdown>{documentationServices}</ReactMarkdown>
                  </Typography>
              </Grid>

              {/* <Grid
                item
                alignItems="center"
                // style={{ height: "60%", marginLeft: "3.5em" }}
                style={{ height: "10%", marginLeft: "0.7em", marginTop: 10 }}
              >
                <Button
                  variant="contained"
                  component={Link}
                  to="/dealscentral"
                  //onClick={() => <DealHome />}
                  className={classes.actionButton}
                >
                  Market Metrics
                </Button>
              </Grid> */}
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
