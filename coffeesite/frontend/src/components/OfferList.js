import React, { Component, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularIndeterminate from './Loading';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

export default class OfferList extends Component {
    constructor(props) {
        super(props);
        this.classes = makeStyles();
        this.state = {
            products : null,
        };
    }

    async componentDidMount() {
        fetch("/api/offers")
        .then(response => response.json())
        .then((json) => {
            this.setState({
                products : json
            });
        });
    }

    buildList = () => {
        console.log(this.state.products)
        const listProducts = this.state.products.map((p) =>
            <Card className={this.classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={this.classes.media}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title={p.code}
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    {p.type}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Example
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary">
                    Buy
                </Button>
                <Button size="small" color="primary">
                    See offers
                </Button>
                </CardActions>
            </Card>
        );
        return listProducts
    };
    
    render() {
        return (
            this.state.products ? (<div>{this.buildList()}</div>) : (<CircularIndeterminate />)
        );
    };
}