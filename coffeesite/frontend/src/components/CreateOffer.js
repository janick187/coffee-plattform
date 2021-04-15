import React, { Component, useState} from "react";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import * as mui from "@material-ui/core";
import * as rrd from "react-router-dom";

function saveOffer(type, quantity, props) {
    
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: type,
        quantity: quantity,
      }),
    };

    fetch("/api/create-offer", requestOptions)
      .then((response) => console.log(response.json())) 
      .then((data) => props.history.push("/"));
  }

function CreateOffer(probs) {
    const [type, setType] = useState("Arabica");
    const [quantity, setQuantity] = useState("1");
    return (
        <div>
            <mui.Grid container spacing={1} align="center">
                <mui.Grid item xs={12}>
                    <mui.Typography component="h4" variant="h4">
                        Create a New Coffee Offer
                    </mui.Typography>
                </mui.Grid>
                <mui.Grid item xs={12}>
                    <mui.FormControl component="fieldset">
                        <mui.FormHelperText>
                            <div align="center">Name of Coffee</div>
                        </mui.FormHelperText>
                        <mui.RadioGroup row defaultValue="Arabica" onChange={(e) => {setType(e.target.value);}}> 
                            <mui.FormControlLabel
                                value="Arabica"
                                control={<mui.Radio color="primary" />}
                                label="Arabica"
                                labelPlacement="bottom"
                            />
                            <mui.FormControlLabel
                                value="Canephora"
                                control={<mui.Radio color="primary" />}
                                label="Canephora"
                                labelPlacement="bottom"
                            />
                        </mui.RadioGroup>
                    </mui.FormControl>
                </mui.Grid>
                <mui.Grid item xs={12}>
                    <mui.FormControl>
                        <mui.TextField required={true} type="number" defaultValue="1" onChange={(e) => {setQuantity(e.target.value);}} inputProps={{min: 1, style: { textAlign: "center" },}}/>
                        <mui.FormHelperText>
                            <div align="center">Quantity (in kg)</div>
                        </mui.FormHelperText>
                    </mui.FormControl>
                </mui.Grid>
            </mui.Grid>
            <mui.Grid container spacing={1} align="center">
            <mui.Grid item xs={12}>
            <mui.Button color="primary" variant="contained" onClick={() => saveOffer(type, quantity, probs)}>
                Create Offer
            </mui.Button>
            </mui.Grid>
            <mui.Grid item xs={12}>
            <mui.Button color="secondary" variant="contained" to="/" component={rrd.Link}>
                Back
            </mui.Button>
            </mui.Grid>
        </mui.Grid>
      </div>
    );
};

export default CreateOffer;