import type { NextPage } from "next";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Image from "next/image";
const useStyles = makeStyles(() =>
  createStyles({
    featureWrapper: {
      maxWidth: "280px",
      display: "flex",
      marginBottom: "30px"
    },
    reactReveal: {
      animationFillMode: "both",
      animationDuration: "1000ms",
      animationDelay: "0ms",
      animationIterationCount: "1",
      opacity: 1,
    },
    wrapimg: {
      margin: "0px",
      boxSizing: "border-box",
    },
    img: {
      objectFit: "contain",
      borderWidth: "2px",
      borderColor: "rgb(233, 227, 254)",
      borderRadius: "10px",
      backgroundColor: "rgb(243, 242, 250)",
      maxWidth: "100%",
      display: "block",
    },
    boxwrapper: {
      marginLeft: "15px",
      boxSizing: "border-box",
    },
    title: {
      boxSizing: "border-box",
      marginBottom: "10px",
      marginTop: "0px",
      fontSize: "18px",
      color: "rgb(50, 50, 93)",
      fontWeight: 500,
      lineHeight: 1,
      letterSpacing: "-0.01em",
      "@media (min-width: 575px)": {
        fontSize: "18px",
        lineHeight: 1,
      },
      "@media (min-width: 768px)": {
        fontSize: "20px",
        lineHeight: 1,
      },
    },
    description: {
      boxSizing: "border-box",
      marginBottom: "1rem",
      marginTop: "0px",
      fontSize: "16px",
      color: "rgb(82, 95, 127)",
      fontWeight: 400,
      lineHeight: "27px",
    },
  })
);
type OnePropsType = {
  src: string;
  title: string;
  description: string;
};
const One: NextPage<OnePropsType> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.featureWrapper}>
      <div className={classes.reactReveal}>
        <div className={classes.wrapimg}>
          <Image
            src={props.src}
            alt={props.title}
            className={classes.img}
            width={50}
            height={50}
          />
        </div>
      </div>
      <div className={classes.reactReveal}>
        <div className={classes.boxwrapper}>
          <h3 className={classes.title}>{props.title}</h3>
          <p className={classes.description}>{props.description}</p>
        </div>
      </div>
    </div>
  );
};
export default One;
