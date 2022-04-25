import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Grid, TextField, Button } from "@mui/material";

export const AddPatient = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [states, setStates] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState(0);

  const handleAdd = async () => {
    const urlAdd = `https://c0ri699qs5.execute-api.us-east-1.amazonaws.com/v1/add?param1=${email}&param2=${fname}&param3=${lname}&param4=${pincode}&param5=${city}&param6=${states}`;
    await axios.get(urlAdd);
  };
  return (
    <div>
      <h2>Add Patients</h2>
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
        <Grid item xs={1}>
          <Link to="/">
            <Button className="btn" variant="contained" onClick={handleAdd}>
              Add
            </Button>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/">
            <Button className="btn" variant="contained">
              Cancel
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};
