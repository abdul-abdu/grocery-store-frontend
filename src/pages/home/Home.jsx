import useAuth from "../../hooks/useAuth";
import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/actions/productsActions";
import { Container, Paper } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },

  categoryBox: {
    display: "flex",
    justifyContent: "space-around",
  },
  wrapper: {
    backgroundColor: "white",
    width: `${100 / 3}%`,
    border: "1px solid #f5f5f5",
  },
}));

export default function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state.products);
  useAuth();

  useEffect(() => {
    if (data.length < 1) {
      dispatch(fetchProducts());
    }
  }, [dispatch, data.length]);

  return (
    <Grid container className={classes.root}>
      {error ? (
        <Alert severity="error">
          {error.message} please try to refresh the page.
        </Alert>
      ) : (
        <Container>
          <Carousel>
            <div>
              <img
                alt="sssssssss"
                src={
                  "https://res.cloudinary.com/duq2fqsvm/image/upload/c_fill,g_auto,h_300,w_1000/b_rgb:000000,y_-0.50/c_scale,co_rgb:ffffff,y_0.18/v1617082157/amazon/cat2_lj49vw.jpg"
                }
              />{" "}
              <p className="legend">Buy now</p>
            </div>
            <div>
              <img
                alt="sssssssss"
                src={
                  "https://res.cloudinary.com/duq2fqsvm/image/upload/c_fill,g_auto,h_300,w_1000/b_rgb:000000,y_-0.50/c_scale,co_rgb:ffffff,y_0.18/v1617082173/amazon/cat3_hbfwxd.jpg"
                }
              />
              <p className="legend">Lorem, ipsum dolor.</p>
            </div>
            <div>
              <img
                alt="sssssssss"
                src={
                  "https://res.cloudinary.com/duq2fqsvm/image/upload/c_fill,g_auto,h_300,w_1000/b_rgb:000000,y_-0.50/c_scale,co_rgb:ffffff,y_0.18/v1617082181/amazon/katalog1_ohyecx.jpg"
                }
              />{" "}
              <p className="legend">Lorem, ipsum dolor.</p>
            </div>
          </Carousel>

          <Grid item xs={12}>
            <Paper style={{ backgroundColor: "#f5f5f5" }}>
              <div className={classes.categoryBox}>
                <div className={classes.wrapper}>
                  <div>Pickup or delivery</div>
                  <img
                    src="https://res.cloudinary.com/duq2fqsvm/image/upload/w_200,h_200,c_limit,e_blur:100,o_90,b_black/l_text:arial_80:®,ar_1:1,c_lfill,o_60,co_rgb:ffffff,b_rgb:000000,r_max/v1617626798/GROCERY/jeshoots-com-eCktzGjC-iU-unsplash_cfdgs1.jpg"
                    alt="ooo"
                  />
                </div>

                <div className={classes.wrapper}>
                  <div>Earn 3% cash back</div>
                  <img
                    src="https://res.cloudinary.com/duq2fqsvm/image/upload/w_200,h_200,c_limit,e_blur:100,o_90,b_black/l_text:arial_80:®,ar_1:1,c_lfill,o_60,co_rgb:ffffff,b_rgb:000000,r_max/v1617626798/GROCERY/jeshoots-com-eCktzGjC-iU-unsplash_cfdgs1.jpg"
                    alt="ooo"
                  />
                </div>

                <div className={classes.wrapper}>
                  <div>No order minimum shipping</div>
                  <img
                    src="https://res.cloudinary.com/duq2fqsvm/image/upload/w_200,h_200,c_limit,e_blur:100,o_90,b_black/l_text:arial_80:®,ar_1:1,c_lfill,o_60,co_rgb:ffffff,b_rgb:000000,r_max/v1617626798/GROCERY/jeshoots-com-eCktzGjC-iU-unsplash_cfdgs1.jpg"
                    alt="ooo"
                  />
                </div>
              </div>
            </Paper>
          </Grid>
        </Container>
      )}
    </Grid>
  );
}
