import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Image from "next/image";
import clsx from "clsx";
import { NextPage } from "next";

const useStyles = makeStyles(() =>
  createStyles({
    tutorialsListed: {
      padding: "18px 0px 17px 18px",
      borderBottom: "1px solid #ebebeb",
      minHeight: 185,
      height: "auto",
      lineHeight: "normal",
      transition: "background 200ms linear !important",
      "&:hover": {
        background: "#F46D4F",
        // transition: "background 200ms linear !important",
        "& a,p": {
          color: "white",
        },
        "& .grayed": {
          transition: "background 200ms linear !important",
          backgroundColor: "#007bd0",
        },
        "& .green": {
          transition: "background 200ms linear !important",
          backgroundColor: "#74c367",
        },
      },
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      "@media(max-width: 570px)": {
        flexDirection: "column",
        padding: "16px",
      },
    },
    left: {
      flex: 3,
      "@media(max-width: 570px)": {
        flex: 1,
      },
    },
    right: {
      flex: 9,
      "@media(max-width: 570px)": {
        flex: 1,
      },
    },
    boxwrapper: {
      marginLeft: "30px",
      marginRight: "30px",
      position: "relative",
    },
    headingtutorial: {
      fontSize: "1.1rem",
      fontFamily: "SinkinSans400",
      marginBottom: "20px",
      color: "#007bd0",
      marginTop: "8px",
    },
    description: {
      margin: "0 0 20px 0",
      letterSpacing: "-.01em",
    },
    btncontrols: {
      display: "flex",
      flexDirection: "row",
      position: "relative",
      "@media(max-width: 700px)": {
        flexDirection: "column",
      },
      "@media(max-width: 570px)": {
        alignItems: "center"
      },
      gap: "10px"
    },
    btn: {
      display: "inline-block",
      minWidth: "100px",
      height: "30px",
      fontSize: "10px",
      fontFamily: "SinkinSans500",
      textAlign: "center",
      border: "2px solid",
      borderRadius: "22px",
      textTransform: "uppercase",
      lineHeight: "25px",
      padding: "0 30px",
      outline: "none",
      background: "none",
      cursor: "pointer",
      whiteSpace: "nowrap",
      fontWeight: 400,
      marginBottom: 0,
      userSelect: "none",
      textDecoration: "none",
      "@media(max-width: 700px)": {
        minWidth: "150px",
      },
    },
    green: {
      color: "#74c367",
      borderColor: "#74c367",
    },
    grayed: {
      color: "#007bd0",
      borderColor: "#007bd0",
    },
    wrapperfree: {
      position: "absolute",
      bottom: 0,
      right: 0,
      "@media(max-width: 570px)": {
        position: "relative",
      },
    },
    free: {
      borderColor: "#bd8cbf",
      backgroundColor: "#bd8cbf",
      color: "white",
      
    },
  })
);

type ItemPropsType = {
  title: string;
  description: string;
  srcimg: string;
};
const Item: NextPage<ItemPropsType> = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.tutorialsListed}>
      <Box className={classes.left}>
        <Image width={200} height={150} src={props.srcimg} alt={props.title} />
      </Box>
      <div className={classes.right}>
        <div className={classes.boxwrapper}>
          <div>
            <div className={classes.headingtutorial}>
              <p>{props.title}</p>
            </div>
            <p className={classes.description}>{props.description}</p>
          </div>
          <div className={classes.btncontrols}>
            <Box>
              <a
                href="#"
                className={clsx("grayed", classes.btn, classes.grayed)}
              >
                Ver oferta
              </a>
            </Box>
            <Box>
              <a href="#" className={clsx("green", classes.btn, classes.green)}>
                Completar
              </a>
            </Box>
            <Box className={classes.wrapperfree}>
              <span className={clsx(classes.btn, classes.free)}>Free</span>
            </Box>
          </div>
        </div>
      </div>
    </Box>
  );
};
export default Item;
