import React, { Component } from "react";
import NewOfferPage from "./CreateOffer";
import OfferList from "./OfferList";
import { Grid, Button, ButtonGroup, Typography } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

function Home(props) {
  return(
        <Grid container spacing={3}>
          <Grid item xs={12} align="center">
            <Typography variant="h3" compact="h3">
              Coffee Plattform
            </Typography>
          </Grid>
          <Grid item xs={12} align="center">
            <ButtonGroup disableElevation variant="contained" color="primary">
              <Button color="primary" to="/create" component={Link}>
                Create Offer
              </Button>
              <Button color="secondary" to="/offers" component={Link}>
                Search Offers
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
  );
}

export default function HomePage(props)  {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create" component = {NewOfferPage} />
          <Route path="/offers" component = {OfferList} />
        </Switch>
      </Router>
    );
  }