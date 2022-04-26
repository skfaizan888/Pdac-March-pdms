import React from "react";
import { Link } from "react-router-dom";
import { Grid, TextField, Button } from "@mui/material";

export const EditPatient = () => {
  return (
    <div className="content-addPatient-main">
      <h2>Edit Patient</h2>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <TextField label="First Name" variant="outlined" />
        </Grid>
        <Grid item xs={2}>
          <TextField label="Last Name" variant="outlined" />
        </Grid>
        <Grid item xs={2}>
          <TextField label="Email" variant="outlined" />
        </Grid>
        <Grid item xs={6}></Grid>

        <Grid item xs={2}>
          <TextField label="State" variant="outlined" />
        </Grid>
        <Grid item xs={2}>
          <TextField label="City" variant="outlined" />
        </Grid>
        <Grid item xs={2}>
          <TextField label="Pincode" variant="outlined" />
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={1}>
          <Button className="btn" variant="contained">
            Update
          </Button>
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
