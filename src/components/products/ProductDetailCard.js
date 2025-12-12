import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ReactMarkdown from "react-markdown";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
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
import Grid from "@material-ui/core/Grid";

import ButtonArrow from "./../ui/ButtonArrow";
import UserLogin from "./../users/UserLogin";
import LoginForm from "../authForms/LoginForm";
import UserSignUp from "./../users/UserSignUp";
import SignUpForm from "../authForms/SignUpForm";
import UserPasswordReset from "./../users/UserPasswordReset";
import Bookings from "./../Bookings";
import history from "../../history";
import ProductsForCategory from "./../products/ProductsForCategory";
import ProductDetails from "./../products/ProductDetails";
import SendProductToCartForm from "./SendProductToCartForm";
import SendCourseToCheckoutForm from "./SendCourseToCheckoutForm";
//import SendProductToCartForm from "./SendProductToCartForm";
import api from "./../../apis/local";

import { baseURL } from "./../../apis/util";

import theme from "./../ui/Theme";
import { RoomSharp } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 325,
    maxWidth: "100%",
    //height: 440,
    //height: 500,

    //marginLeft: "0.1%",
    borderRadius: 0,
    marginTop: "6em",
    padding: 0,
    // "&:hover": {
    //   border: "solid",
    //   borderColor: theme.palette.common.grey,
    // },
  },
  rootMobile: {
    maxWidth: "100%",
    //height: 440,
    //height: 800,
    width: "100%",

    marginLeft: "0px",
    //borderRadius: 30,
    marginTop: "-2.00em",
    marginBottom: "3em",
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
    //marginLeft: "100px",
  },
  media: {
    height: 400,
    width: 300,
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
  secondRow: {
    marginLeft: "0.7",
    //width: 550,
    width:'45%',
    minWidth:'45%',
    border: "1px dotted",
    padding: 20,
  },
  imageColumn: {
    //marginLeft: 5,
    width: 380,

    border: "1px dotted",
    //padding: 5,
  },
  secondRowMobile: {
    marginLeft: 0,
    marginTop: 50,
    //width: 380,
    width: "100%",
    border: "1px dotted",
    padding: 10,
  },
  footer: {
    width: "100%",
    marginTop: "10rem",
  },
  thirdRow: {
    marginLeft: "0.9%",
    width: '30%',
    border: "1px dotted",
    padding: 20,
  },
  thirdRowMobile: {
    marginLeft: 10,
    marginTop: 30,
    //width: 380,
    width: "100%",
    border: "1px dotted",
    padding: 20,
  },

  secondColumn: {
    marginTop: 50,
    marginBottom: 50,
    border: "1px dotted",
    padding: 20,
    width: "22%",
  },
  secondColumnMobile: {
    marginTop: 50,
    marginBottom: 50,
    border: "1px dotted",
    padding: 10,
    width: "98%",
  },
  thirdColumn: {
    marginTop: 20,
    marginBottom: 50,
    border: "1px dotted",
    padding: 20,
    width: "98%",
  },
  thirdColumnMobile: {
    marginTop: 15,
    marginBottom: 50,
    border: "1px dotted",
    padding: 10,
    width: "98%",
  },
  forthColumn: {
    marginTop: 15,
    marginBottom: 50,
    border: "1px dotted",
    padding: 20,
    width: "98%",
  },
  forthColumnMobile: {
    marginTop: 15,
    marginBottom: 50,
    border: "1px dotted",
    padding: 10,
    width: "98%",
  },
  fifthColumn: {
    marginTop: 20,
    marginBottom: 50,
    border: "1px dotted",
    padding: 20,
    width: "98%",
  },
  fifthColumnMobile: {
    marginTop: 15,
    marginBottom: 50,
    border: "1px dotted",
    padding: 10,
    width: "98%",
  },
  sixthColumn: {
    marginTop: 20,
    marginBottom: 50,
    border: "1px dotted",
    padding: 20,
    width: "98%",
  },
  sixthColumnMobile: {
    marginTop: 15,
    marginBottom: 50,
    border: "1px dotted",
    padding: 10,
    width: "98%",
  },
  seventhColumn: {
    marginTop: 20,
    marginBottom: 50,
    border: "1px dotted",
    padding: 20,
    width: "98%",
  },
  seventhColumnMobile: {
    marginTop: 15,
    marginBottom: 50,
    border: "1px dotted",
    padding: 10,
    width: "98%",
  },
  videoMedia: {
    height: 400,
    width: "100%",
  },
}));

export default function ProductDetailCard(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openLoginForm, setOpenLoginForm] = useState(false);
  const [openSignUpForm, setOpenSignUpForm] = useState(false);
  const [openForgotPasswordForm, setOpenForgotPasswordForm] = useState(false);
  const [currencyName, setCurrencyName] = useState('naira');
  const [countryName, setCountryName] = useState();
  const [stateName, setStateName] = useState();
  const [price, setPrice] = useState();
  const [minQuantity, setMinQuantity] = useState();

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

  //const imageUrl = `${baseURL}/images/categories/${props.image}`;
  const imageUrl = `${baseURL}/images/products/${props.product.imageCover}`;

  const Str = require("@supercharge/strings");

  // console.log(
  //   "this is description trim:",
  //   Str(props.description).limit(100, "...").get()
  // );

 

  useEffect(() => {
    setPrice(props.product.pricePerUnit);
  }, [props.product]);

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     let allData = [];
  //     api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
  //     const response = await api.get(`/currencies/${props.course.currency}`);
  //     const item = response.data.data.data;
  //     //workingData.map((vendor) => {
  //     allData.push({ name: item.name });
  //     //});

  //     console.log("currency name is :", allData[0].name);
  //     setCurrencyName(allData[0].name);
  //   };

  //   //call the function

  //   fetchData().catch(console.error);
  // }, [props.course.currency]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleBookingsOpenDialogStatus = () => {
    setOpen(false);
  };
  const handleLoginDialogOpenStatus = () => {
    // history.push("/categories/new");
    setOpenLoginForm(false);
  };

  const handleLoginDialogCloseStatus = () => {
    // history.push("/categories/new");
    setOpenLoginForm(false);
  };

  const handleSuccessfulLoginDialogOpenStatusWithSnackbar = () => {
    // history.push("/categories/new");
    setOpenLoginForm(false);
    setAlert({
      open: true,
      message: "You have successfully logged in",
      backgroundColor: "#4BB543",
    });
  };

  const handleSuccessfulCreateSnackbar = (message) => {
    // history.push("/categories/new");
    setOpen({ open: false });
    setAlert({
      open: true,
      message: message,
      backgroundColor: "#4BB543",
    });
  };

  const handleFailedSnackbar = (message) => {
    setAlert({
      open: true,
      message,
      backgroundColor: "#FF3232",
    });
    setOpen({ open: false });
  };
  const handleFailedLoginDialogOpenStatusWithSnackbar = (message) => {
    // history.push("/categories/new");
    setAlert({
      open: true,
      message: message,

      backgroundColor: "#FF3232",
    });
    setOpenLoginForm(true);
  };

  const handleSuccessfulSignUpDialogOpenStatusWithSnackbar = () => {
    // history.push("/categories/new");
    setOpenSignUpForm(false);
    setAlert({
      open: true,
      message: "You have successfully signed up",
      backgroundColor: "#4BB543",
    });
  };

  const handleFailedSignUpDialogOpenStatusWithSnackbar = (message) => {
    // history.push("/categories/new");
    setAlert({
      open: true,
      message: message,

      backgroundColor: "#FF3232",
    });
    setOpenSignUpForm(true);
  };

  const handleMakeOpenLoginFormDialogStatus = () => {
    // history.push("/categories/new");
    setOpenSignUpForm(false);
    setOpenLoginForm(true);
  };
  const handleMakeOpenForgotPasswordFormDialogStatus = () => {
    // history.push("/categories/new");
    setOpenForgotPasswordForm(true);
    setOpenLoginForm(false);
  };
  const handleMakeCloseForgotPasswordFormDialogStatus = () => {
    // history.push("/categories/new");
    setOpenForgotPasswordForm(false);
    setOpenLoginForm(false);
  };
  const handleMakeOpenSignUpDialogStatus = () => {
    // history.push("/categories/new");
    setOpenSignUpForm(true);
    setOpenLoginForm(false);
  };

  const handleMakeCloseSignUpDialogStatus = () => {
    // history.push("/categories/new");
    setOpenSignUpForm(false);
  };

  // const handleLogOutDialogOpenStatus = () => {
  //   // history.push("/categories/new");
  //   setOpenLogOut(false);
  // };
  const renderLoginForm = () => {
    return (
      <Dialog
        //style={{ zIndex: 1302 }}
        fullScreen={matchesXS}
        open={openLoginForm}
        //onClose={() => [setOpenLoginForm(false), history.push("/")]}
        onClose={() => [setOpenLoginForm(false)]}
      >
        <DialogContent>
          <LoginForm
            handleLoginDialogOpenStatus={handleLoginDialogOpenStatus}
            handleMakeOpenSignUpDialogStatus={handleMakeOpenSignUpDialogStatus}
            handleMakeCloseSignUpDialogStatus={
              handleMakeCloseSignUpDialogStatus
            }
            handleLoginDialogCloseStatus={handleLoginDialogCloseStatus}
            handleMakeOpenForgotPasswordFormDialogStatus={
              handleMakeOpenForgotPasswordFormDialogStatus
            }
            handleSuccessfulLoginDialogOpenStatusWithSnackbar={
              handleSuccessfulLoginDialogOpenStatusWithSnackbar
            }
            handleFailedLoginDialogOpenStatusWithSnackbar={
              handleFailedLoginDialogOpenStatusWithSnackbar
            }
            handleFailedSignUpDialogOpenStatusWithSnackbar={
              handleFailedSignUpDialogOpenStatusWithSnackbar
            }
            setToken={props.setToken}
            setUserId={props.setUserId}
          />
        </DialogContent>
      </Dialog>
    );
  };

  const renderSignUpForm = () => {
    return (
      <Dialog
        //style={{ zIndex: 1302 }}
        fullScreen={matchesXS}
        open={openSignUpForm}
        //onClose={() => [setOpenSignUpForm(false), history.push("/")]}\
        onClose={() => [setOpenSignUpForm(false)]}
      >
        <DialogContent>
          <UserSignUp
            token={props.token}
            handleMakeOpenSignUpDialogStatus={handleMakeOpenSignUpDialogStatus}
            handleMakeCloseSignUpDialogStatus={
              handleMakeCloseSignUpDialogStatus
            }
            handleMakeOpenLoginFormDialogStatus={
              handleMakeOpenLoginFormDialogStatus
            }
            handleSuccessfulSignUpDialogOpenStatusWithSnackbar={
              handleSuccessfulSignUpDialogOpenStatusWithSnackbar
            }
            handleFailedSignUpDialogOpenStatusWithSnackbar={
              handleFailedSignUpDialogOpenStatusWithSnackbar
            }
            setToken={props.setToken}
            setUserId={props.setUserId}
          />
        </DialogContent>
      </Dialog>
    );
  };

  const renderForgotPasswordForm = () => {
    return (
      <Dialog
        //style={{ zIndex: 1302 }}
        fullScreen={matchesXS}
        open={openForgotPasswordForm}
        //onClose={() => [setOpenForgotPasswordForm(false), history.push("/")]}
        onClose={() => [setOpenForgotPasswordForm(false)]}
      >
        <DialogContent>
          <UserPasswordReset
            token={props.token}
            userId={props.userId}
            handleMakeOpenSignUpDialogStatus={handleMakeOpenSignUpDialogStatus}
            handleMakeCloseSignUpDialogStatus={
              handleMakeCloseSignUpDialogStatus
            }
            handleMakeOpenLoginFormDialogStatus={
              handleMakeOpenLoginFormDialogStatus
            }
            handleMakeCloseForgotPasswordFormDialogStatus={
              handleMakeCloseForgotPasswordFormDialogStatus
            }
          />
        </DialogContent>
      </Dialog>
    );
  };

  const getCurrencyCode = () => {
    if (currencyName) {
      if (currencyName.toLowerCase() === "naira") {
        return <span>&#8358;</span>;
      } else {
        return;
      }
    }
  };

  return (
    <>
      {matchesMDUp ? (
        <Grid container direction="column" className={classes.root}>
          <Grid item container direction="row">
            <Grid item>
              <Card>
                <CardMedia
                  className={classes.media}
                  component="img"
                  alt={props.product.name}
                  image={imageUrl}
                  //   title={props.name}
                  crossOrigin="anonymous"
                />
              </Card>
            </Grid>
            <Grid item className={classes.secondRow}>
              <Box>
                {props.product.hasSeries ? (
                  <Typography variant="h4" color="textSecondary" component="p">
                    {props.product.name}
                    <span style={{ fontSize: 16, fontWeight: 700 }}>
                      <em> ({props.product.series})</em>
                    </span>
                  </Typography>
                ) : (
                  <Typography variant="h4" color="textSecondary" component="p">
                    {props.product.name}
                  </Typography>
                )}
                <Typography variant="h4" style={{ marginTop: 10 }}>
                  {getCurrencyCode()}
                  {price
                    ? price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
                    : 0}
                  <span style={{ fontSize: 12, marginLeft: 0 }}>per {props.product.unit}</span>
                </Typography>
                {props.product.priceLabel !== undefined && (
                  <Typography
                    variant="h5"
                    style={{
                      color: "black",
                      fontSize: 15,
                      color: "red",
                      marginLeft: 20,
                    }}
                  >
                    {props.product.priceLabel}
                  </Typography>
                )}
                <Typography
                  variant="h5"
                  style={{
                    color: "black",
                    marginTop: 20,
                    marginBottom: 20,
                    justifyContent: "center",
                  }}
                >
                  <ReactMarkdown>{props.product.shortDescription}</ReactMarkdown>
                </Typography>
                {props.product.refNumber !== undefined && (
                  <Typography
                    variant="h5"
                    style={{ color: "black", fontSize: 15 }}
                  >
                    <span style={{ marginRight: 20 }}>
                      {" "}
                      <strong>Reference Number:</strong>
                    </span>
                    {props.product.refNumber}
                  </Typography>
                )}
                {props.product.minimumOrderQuantity !== undefined && (
                  <Typography
                    variant="h5"
                    style={{ color: "black", fontSize: 15 }}
                  >
                    <span style={{ marginRight: 20 }}>
                      {" "}
                      <strong>Minimum Order Quantity:</strong>
                    </span>
                    {props.product.minimumOrderQuantity}<span style={{ fontSize: 12, marginLeft: 0 }}> {props.product.unit}s</span>
                  </Typography>
                )}
                
                
              </Box>
            </Grid>
            <Grid item className={classes.thirdRow}>
              <Box>
                <SendProductToCartForm
                  price={price}
                  currency={props.product.currency}
                  productId={props.product.id}
                  product={props.product}
                  token={props.token}
                  userId={props.userId}
                  minimumQuantity={props.product.minimumOrderQuantity}
                  handleMakeOpenSignUpDialogStatus={
                    handleMakeOpenSignUpDialogStatus
                  }
                  handleMakeCloseSignUpDialogStatus={
                    handleMakeCloseSignUpDialogStatus
                  }
                  handleMakeOpenLoginFormDialogStatus={
                    handleMakeOpenLoginFormDialogStatus
                  }
                  handleMakeCloseForgotPasswordFormDialogStatus={
                    handleMakeCloseForgotPasswordFormDialogStatus
                  }
                  handleSuccessfulCreateSnackbar={
                    props.handleSuccessfulCreateSnackbar
                  }
                  handleFailedSnackbar={props.handleFailedSnackbar}
                  handleFailedSignUpDialogOpenStatusWithSnackbar={
                    handleFailedSignUpDialogOpenStatusWithSnackbar
                  }
                  cartCounterHandler={props.cartCounterHandler}
                />
              </Box>
            </Grid>
          </Grid>
          {/*  */}
          <Grid item className={classes.thirdColumn}>
            <Box>
              <Typography>
                <strong>Product Description:</strong>
              </Typography>
              <Typography
                variant="h5"
                style={{
                  color: "black",
                  marginTop: 20,
                  marginBottom: 20,
                  justifyContent: "center",
                }}
              >
                <ReactMarkdown>{props.product.fullDescription}</ReactMarkdown>
              </Typography>
            </Box>
          </Grid>
         
          {/* {props.product.previewVideoId &&
            props.product.previewVideoId !== "null" && (
              <Typography
                variant="h5"
                style={{ color: "black", fontSize: 15, marginLeft: 30 }}
              >
                <strong>`"{props.product.name}" Course Preview`</strong>
              </Typography>
            )} */}
         
              <Grid item className={classes.seventhColumn}>
                <Card>
                  <Typography variant="h5" style={{marginLeft:100}}>Customer Testimonials</Typography>
                  <CardMedia
                    className={classes.videoMedia}
                    component="iframe"
                    alt={props.product.name}
                    height="140"
                    src={`https://www.youtube.com/embed/${props.product.previewVideoId}`}
                    //allow="autoPlay"
                    allowfullscreen="allowfullscreen"
                    controls
                  />
                </Card>
              </Grid>
            
        </Grid>
      ) : (
        <Grid container direction="column" className={classes.rootMobile}>
          <Grid item container direction="column">
            <Grid item style={{ width: "100%" }}>
              <Card>
                <CardMedia
                  className={classes.mediaMobile}
                  component="img"
                  alt={props.product.name}
                  image={imageUrl}
                  //   title={props.name}
                  crossOrigin="anonymous"
                />
              </Card>
            </Grid>
            <Grid item className={classes.secondRowMobile}>
              <Box>
               
                  <Typography variant="h4" color="textSecondary" component="p">
                    {props.product.name}
                    <span style={{ fontSize: 16, fontWeight: 700 }}>
                     
                    </span>
                  </Typography>
               
                <Typography variant="h5">
                  {getCurrencyCode()}
                  {price
                    ? price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
                    : 0}
                  <span style={{ fontSize: 12, marginLeft: 0 }}></span>
                </Typography>
                
                <Typography
                  variant="h5"
                  style={{
                    color: "black",
                    marginTop: 20,
                    marginBottom: 20,
                    justifyContent: "center",
                  }}
                >
                  {props.product.shortDescription}
                </Typography>
                {props.product.refNumber !== "undefined" && (
                  <Typography
                    variant="h5"
                    style={{ color: "black", fontSize: 15 }}
                  >
                    <span style={{ marginRight: 10 }}>
                      {" "}
                      <strong>Reference Number:</strong>
                    </span>
                    {props.product.refNumber}
                  </Typography>
                )}
                 {props.product.minimumOrderQuantity !== "undefined" && (
                  <Typography
                    variant="h5"
                    style={{ color: "black", fontSize: 15 }}
                  >
                    <span style={{ marginRight: 10 }}>
                      {" "}
                      <strong>Minimum Order Quantity:</strong>
                    </span>
                    {props.product.minimumOrderQuantity}
                  </Typography>
                )}
                
              </Box>
            </Grid>
            <Grid item className={classes.thirdRowMobile}>
              <Box>
                <SendProductToCartForm
                  price={price}
                  currency={props.product.currency}
                  productId={props.product.id}
                  product={props.product}
                  token={props.token}
                  userId={props.userId}
                  minimumQuantity={props.product.minimumOrderQuantity}
                  handleMakeOpenSignUpDialogStatus={
                    handleMakeOpenSignUpDialogStatus
                  }
                  handleMakeCloseSignUpDialogStatus={
                    handleMakeCloseSignUpDialogStatus
                  }
                  handleMakeOpenLoginFormDialogStatus={
                    handleMakeOpenLoginFormDialogStatus
                  }
                  handleMakeCloseForgotPasswordFormDialogStatus={
                    handleMakeCloseForgotPasswordFormDialogStatus
                  }
                  handleSuccessfulCreateSnackbar={
                    props.handleSuccessfulCreateSnackbar
                  }
                  handleFailedSnackbar={props.handleFailedSnackbar}
                  handleFailedSignUpDialogOpenStatusWithSnackbar={
                    handleFailedSignUpDialogOpenStatusWithSnackbar
                  }
                  cartCounterHandler={props.cartCounterHandler}
                />
              </Box>
            </Grid>
          </Grid>
          
          <Grid item className={classes.thirdColumnMobile}>
            <Box>
              <Typography>
                <strong>Product Description:</strong>
              </Typography>
              <Typography
                variant="h5"
                style={{
                  color: "black",
                  marginTop: 20,
                  marginBottom: 20,
                  justifyContent: "center",
                }}
              >
                <ReactMarkdown>{props.product.fullDescription}</ReactMarkdown>
              </Typography>
            </Box>
          </Grid>
          
          {/* {props.product.previewVideoId &&
            props.product.previewVideoId !== "null" && (
              <Typography
                variant="h5"
                style={{ color: "black", fontSize: 15, marginLeft: 30 }}
              >
                <strong>`"{props.product.name}" Course Preview`</strong>
              </Typography>
            )} */}
      
              <Grid item className={classes.seventhColumn}>
                <Card>
                  <CardMedia
                    className={classes.videoMedia}
                    component="iframe"
                    alt={props.product.name}
                    height="140"
                    src={`https://www.youtube.com/embed/${props.product.previewVideoId}`}
                    //allow="autoPlay"
                    allowfullscreen="allowfullscreen"
                    controls
                  />
                </Card>
              </Grid>
            

          {/* </Grid> */}
        </Grid>
      )}
      {renderLoginForm()}
      {renderSignUpForm()}
      {renderForgotPasswordForm()}
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
