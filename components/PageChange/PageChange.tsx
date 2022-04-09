import React from "react";

// @material-ui/core components
import { makeStyles, createStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

// core components
import { infoColor, title } from "../../assets/jss/paginainicial";



type PageChangeTypeProps = {
  path: string
}
export default function PageChange(props: PageChangeTypeProps) {
  const useStyles = makeStyles(() =>
    createStyles({
      progress: {
        color: infoColor[0],
        width: "6rem !important",
        height: "6rem !important",
      },
      wrapperDiv: {
        margin: "100px auto",
        padding: "0px",
        maxWidth: "360px",
        textAlign: "center",
        position: "relative",
        zIndex: 9999,
        top: "0",
      },
      iconWrapper: {
        display: "block",
      },
      title: {
        ...title,
        color: "#FFFFFF",
      },
    })
  )
  const classes = useStyles();
  return (
    <div>
      <div className={classes.wrapperDiv}>
        <div className={classes.iconWrapper}>
          <CircularProgress className={classes.progress} />
        </div>
        <h4 className={classes.title}>
          Loading page contents for: {props.path}
        </h4>
      </div>
    </div>
  );
}
