import {
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import SingleCart from "../elements/SingleCart";

const drawerWidth = 320;

const useStyles = makeStyles(() => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    width: drawerWidth,
    overflow: "auto",
    marginTop: "80px",
  },
  cartHeader: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 10px",
  },
  order: {
    position: "fixed",
    bottom: 0,
    right: 25,
    textAlign: "center",
    backgroundColor: "white",
    width: drawerWidth,
  },
}));

export default function CartDrawer(props) {
  const classes = useStyles();

  const { cart } = useSelector((state) => state.user.userInfos);

  return (
    <Drawer variant="persistent" open={props.cartOpen} anchor="right">
      <div className={classes.drawerContainer} />
      <Typography variant="body1" className={classes.cartHeader}>
        <b>Cart</b>
        <b>Items</b>
      </Typography>
      <Divider />
      <List>
        {cart &&
          cart.map((product, key) => (
            <ListItem key={key}>
              <SingleCart {...product} />
            </ListItem>
          ))}
      </List>

      {/* ss */}
      <div className={classes.order}>
        <h4>Subtotal: {}</h4>
        <Button variant="contained" color="secondary">
          Checkout
        </Button>
      </div>
    </Drawer>
  );
}
