import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Grid,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Button,
} from "@mui/material";

export const Dashboard = () => {
  const [patdata, setPatdata] = useState([]);
  const handleDelete = async (email) => {
    const urlDelete = `https://k6j938wg66.execute-api.us-east-1.amazonaws.com/v1/delete?param1=${email}`;
    await axios.get(urlDelete);
    getData();
  };
  const getData = async () => {
    const result = await axios.get(
      "https://j5ej5u32gg.execute-api.us-east-1.amazonaws.com/v1/fetch"
    );
    console.log(result.data.data);
    setPatdata(result.data.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12}>
          <Link to="/add">
            <Button className="btnadd" variant="text">
              + Add Patient
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Table>
            <TableHead className="header">
              <TableRow>
                <TableCell className="headeritem">#</TableCell>
                <TableCell className="headeritem">First Name</TableCell>
                <TableCell className="headeritem">Last Name</TableCell>
                <TableCell className="headeritem">Email</TableCell>
                <TableCell className="headeritem">State</TableCell>
                <TableCell className="headeritem">City</TableCell>
                <TableCell className="headeritem">Pincode</TableCell>
                <TableCell className="headeritem" colSpan={2} align="center">
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {patdata.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.first_name}</TableCell>
                  <TableCell>{item.last_name}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.states}</TableCell>
                  <TableCell>{item.city}</TableCell>
                  <TableCell>{item.pincode}</TableCell>
                  <TableCell>
                    <Link to="/edit">
                      <Button className="btn" variant="contained">
                        Edit
                      </Button>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Button
                      className="btn"
                      color="error"
                      variant="contained"
                      onClick={() => handleDelete(item.email)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
