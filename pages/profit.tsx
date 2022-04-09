import type { NextPage } from "next";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { init } from "@assets/jss/init";
import { ListItem } from "@material-ui/core";
import Item from "@components/List/Item";

const styles = makeStyles(() =>
  createStyles({
    tutorialsBrowse: {
      border: "1px solid #ebebeb",
      borderRadius: "5px",
      marginTop: "30px",
      maxWidth: "800px",
    },
    tutorialsCategory: {
      fontSize: "14px",
      color: "#f46d4f",
      borderBottom: "1px solid red",
      "&:hover": {
        color: "#f46d4f",
        backgroundColor: "transparent",
      },
    },
    tutorialCat: {
      color: "#f46d4f",
      padding: "20px 0 20px 48px",
      display: "block",
      borderBottom: "1px solid #f46d4f",
      fontSize: "1rem",
    },
  })
);

const profit: NextPage = () => {
  const classes = styles();
  const { container } = init();
  return (
    <>
      <div className={container}>
        <Grid container direction="column" className={classes.tutorialsBrowse}>
          <Grid item className={classes.tutorialsCategory}>
            <span className={classes.tutorialCat}>Academy</span>
          </Grid>
          <Item
            srcimg="https://psweb.s3-eu-west-1.amazonaws.com/tutorials/000/000/265/200x150/1556899530_cqKVE_Betfair-logo-1.33ar.jpg"
            title="Start Here - 1st Steps to Profit !"
            description="Follow along and get ready to make your first profit. "
          />
          <Item
            srcimg="https://psweb.s3-eu-west-1.amazonaws.com/tutorials/000/000/266/200x150/1556899643_rZRpj_William-Hill-logo-1.33ar.jpg"
            title="Step 2 - Time to Qualify"
            description="So far so good, now it's time to complete your preparation. "
          />
          <Item
            srcimg="https://psweb.s3-eu-west-1.amazonaws.com/tutorials/000/000/267/200x150/1556899876_RKSyK_Oddsmatcher---match-detail-2-1.33ar.jpg"
            title="Step 3 - Unlock Your Profit"
            description="This is where the fun begins! "
          />
          <Item
            srcimg="https://psweb.s3-eu-west-1.amazonaws.com/tutorials/000/000/430/200x150/1612787609_IyhXk_your-profits-blue-1.33ar.jpg"
            title="Final Step - Cash Out Your Profit"
            description="Now the guaranteed profits are yours! "
          />
          <Item
            srcimg="https://psweb.s3-eu-west-1.amazonaws.com/tutorials/000/000/230/200x150/1533824172_cj4uo_Info-from-PS-in-Offers-section.png"
            title="Unleash Your Potential !"
            description="It's time to unlock at least £600 risk-free profits. Plus a small gift from me to you!.. "
          />
        </Grid>
      </div>
    </>
  );
};
export default profit;
