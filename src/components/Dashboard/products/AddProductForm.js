import React, { useState, useEffect } from "react";
import useToken from "../../../custom-hooks/useToken";
import useUserId from "../../../custom-hooks/useUserId";
import { Field, reduxForm } from "redux-form";
import { useDispatch } from "react-redux";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import api from "./../../../apis/local";
import { CREATE_PRODUCT } from "../../../actions/types";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 600,
  },
  formStyles: {
    width: 600,
  },
  submitButton: {
    borderRadius: 10,
    height: 40,
    width: 100,
    marginLeft: 100,
    marginTop: 30,
    color: "white",
    backgroundColor: theme.palette.common.blue,
    "&:hover": {
      backgroundColor: theme.palette.common.blue,
    },
  },
  cancelButton: {
    submitButton: {
      borderRadius: 10,
      height: 40,
      width: 100,
      marginLeft: 5,
      marginTop: 40,
      color: "black",
      backgroundColor: theme.palette.common.grey,
      "&:hover": {
        backgroundColor: theme.palette.common.grey,
      },
    },
  },
}));

const renderSingleLineField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  helperText,
  ...custom
}) => {
  return (
    <TextField
      //error={touched && invalid}
      helperText={helperText}
      variant="outlined"
      label={label}
      id={input.name}
      defaultValue={input.value}
      fullWidth
      //required
      type={type}
      {...custom}
      onChange={input.onChange}
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};




const renderMultiLineField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  helperText,
  ...custom
}) => {
  return (
    <TextField
      error={touched && invalid}
      //placeholder="category description"
      variant="outlined"
      helperText={helperText}
      label={label}
      id={input.name}
      name={input.name}
      defaultValue={input.value}
      fullWidth
      type={type}
      style={{ marginTop: 20 }}
      multiline={true}
      minRows={4}
      {...custom}
      onChange={input.onChange}
    />
  );
};

const renderImageField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  delete input.value;
  return (
    <TextField
      id={input.name}
      variant="outlined"
      type={type}
      fullWidth
      style={{ marginTop: 20 }}
      helperText="Upload Product Image"
      {...custom}
      onChange={input.onChange}
      // inputProps={{
      //   style: {
      //     height: 5,
      //   },
      // }}
    />
  );
};

function AddProductForm(props) {
  const classes = useStyles();
  const [categoryList, setCategoryList] = useState([]);
  const [category, setCategory] = useState("");
  const [refNumber, setRefNumber] = useState("Product" + "-" + Math.floor(Math.random() * 100000000) + "-" + "REF")
  

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();


    const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };



  useEffect(() => {
      const fetchData = async () => {
        let allData = [];
        api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
        const response = await api.get(`/categories`);
        const workingData = response.data.data.data;
        workingData.map((category) => {
          allData.push({ id: category._id, name: category.name });
        });
        setCategoryList(allData);
      };
  
      //call the function
  
      fetchData().catch(console.error);
    }, []);


    
  //get the vendor list
  const renderCategoryList = () => {
    return categoryList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };


      const renderCategoryField = ({
          input,
          label,
          meta: { touched, error, invalid },
          type,
          id,
          ...custom
        }) => {
          return (
            <Box>
              <FormControl variant="outlined">
                {/* <InputLabel id="vendor_city">City</InputLabel> */}
                <Select
                  labelId="category"
                  id="category"
                  value={category}
                  onChange={handleCategoryChange}
                  label="Category"
                  style={{ marginTop: 0, width: 300, height: 38, marginLeft: 0 }}
                  //{...input}
                >
                  {renderCategoryList()}
                </Select>
                <FormHelperText style={{marginBottom:10}}>Product Category</FormHelperText>
              </FormControl>
            </Box>
          );
        };

  const buttonContent = () => {
    return <React.Fragment> Submit</React.Fragment>;
  };

  
  const onSubmit = (formValues) => {
    setLoading(true);

    if (
      !formValues["name"] ||
      formValues["name"].replace(/\s/g, "").length === 0
    ) {
      props.handleFailedSnackbar("The Product name field cannot be empty");
      setLoading(false);
      return;
    }

   const slug  = formValues.name.replace(/ /g, "-").toLowerCase()

   console.log("slug is:",slug)
   console.log('image values are:',formValues.image[0])
  console.log('image array  is:',formValues.image)

    const Str = require("@supercharge/strings");

    const form = new FormData();
    form.append("name", formValues.name);
    form.append("category", category);
    form.append("slug", slug);
    form.append("refNumber", refNumber);    
    form.append("shortDescription", formValues.shortDescription);
    form.append("fullDescription", formValues.fullDescription);
    form.append("pricePerUnit", formValues.pricePerUnit);
    form.append("minimumOrderQuantity", formValues.minimumOrderQuantity);
    

    form.append("createdBy", props.userId);
    if (formValues.image) {
      form.append("imageCover", formValues.image[0]);
    }

    if (formValues) {
      const createForm = async () => {
        api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
        const response = await api.post(`/products`, form);

        if (response.data.status === "success") {
          dispatch({
            type: CREATE_PRODUCT,
            payload: response.data.data.data,
          });

          props.handleSuccessfulCreateSnackbar(
            `${response.data.data.data.name} Product is Added Successfully!!!`
          );
          props.renderProductUpdateCounter();
          props.handleDialogOpenStatus();
          setLoading(false);
        } else {
          props.handleFailedSnackbar(
            "Something went wrong, please try again!!!"
          );
        }
      };
      createForm().catch((err) => {
        props.handleFailedSnackbar("Something went wrong, please try again!!!");
        console.log("err:", err.message);
      });
    } else {
      props.handleFailedSnackbar("Something went wrong, please try again!!!");
    }
  };

  return (
    <form id="addProductForm">
      <Box
        // component="form"
        // id="categoryForm"
        // onSubmit={onSubmit}
        sx={{
          width: 300,
          //height: 430,
        }}
        noValidate
        autoComplete="off"
      >
        <Grid
          item
          container
          style={{ marginTop: 1, marginBottom: 2 }}
          justifyContent="center"
        >
          <CancelRoundedIcon
            style={{
              marginLeft: 300,
              fontSize: 30,
              marginTop: "-10px",
              cursor: "pointer",
            }}
            onClick={() => [props.handleDialogOpenStatus()]}
          />
        </Grid>
        <Grid
          item
          container
          style={{ marginTop: 10, marginBottom: 10 }}
          justifyContent="center"
        >
          <FormLabel
            style={{ color: "grey", fontSize: "1.2em" }}
            component="legend"
          >
            Add Product
          </FormLabel>
        </Grid>


      <Field
          label=""
          id="category"
          name="category"
          type="text"
          helperText="Category"
          component={renderCategoryField}
        />
        
        <Field
          label=""
          id="name"
          name="name"
          type="text"
          helperText="Name"
          component={renderSingleLineField}
        />

        <Field
          label=""
          id="shortDescription"
          name="shortDescription"
          type="text"
          helperText="Short Description"
          minRows={5}
          component={renderMultiLineField}
          style={{marginTop:10}}

        />
         <Field
          label=""
          id="fullDescription"
          name="fullDescription"
          type="text"
          helperText="Full Description"
          minRows={15}
          component={renderMultiLineField}
           style={{marginTop:10}}

        />
        <Field
          label=""
          id="pricePerUnit"
          name="pricePerUnit"
          type="number"
          helperText="Price Per Unit"
          component={renderSingleLineField}
           style={{marginTop:10}}
        />
        <Field
          label=""
          id="minimumOrderQuantity"
          name="minimumOrderQuantity"
          type="number"
          helperText="Minimum Order Quantity"
          component={renderSingleLineField}
           style={{marginTop:10}}
        />

        <Field
          label=""
          id="configuration"
          name="configuration"
          type="text"
          helperText="Configuration"
          component={renderSingleLineField}
           style={{marginTop:10}}
        />
   

        <Field
          id="image"
          name="image"
          type="file"
          accept="image/*"
          component={renderImageField}
          floatingLabelText={"Upload Image"}
          fullWidth={true}
        />
        <Button
          variant="contained"
          className={classes.submitButton}
          onClick={props.handleSubmit(onSubmit)}
        >
          {loading ? (
            <CircularProgress size={30} color="inherit" />
          ) : (
            buttonContent()
          )}
        </Button>
      </Box>
    </form>
  );
}

export default reduxForm({
  form: "addProductForm",
})(AddProductForm);
