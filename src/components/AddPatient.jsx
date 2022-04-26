import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { Grid, TextField, Button } from "@mui/material";

export const AddPatient = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [states, setStates] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState(0);
  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")

      .required("Email is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (value) => {
      // handle submit
    },
  });
  const handleAdd = async () => {
    const urlAdd = `https://c0ri699qs5.execute-api.us-east-1.amazonaws.com/v1/add?param1=${email}&param2=${fname}&param3=${lname}&param4=${pincode}&param5=${city}&param6=${states}`;
    await axios.get(urlAdd);
  };
  return (
    <div className="content-addPatient-main">
      <h2>Add Patient</h2>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <TextField
            label="First Name"
            variant="outlined"
            onChange={(e) => setFname(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="Last Name"
            variant="outlined"
            onChange={(e) => setLname(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
            // onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={email}
            error={email && Boolean(formik.errors.email)}
            helperText={email && formik.errors.email}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={6}></Grid>

        <Grid item xs={2}>
          <TextField
            label="State"
            variant="outlined"
            onChange={(e) => setStates(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="City"
            variant="outlined"
            onChange={(e) => setCity(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="Pincode"
            variant="outlined"
            onChange={(e) => setPincode(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={4}></Grid>
        <Grid item>
          <Link to="/">
            <Button className="btn" variant="contained" onClick={handleAdd}>
              Add
            </Button>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/">
            <Button className="btn" variant="outlined" color="error">
              Cancel
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};
