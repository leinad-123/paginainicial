import type { NextPage } from 'next'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import { init } from "@assets/jss/init";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => createStyles({
    bannerwrapper: {
        position: "relative",
        paddingTop: "210px",
        paddingBottom: "400px",
        backgroundImage: "url(https://d33wubrfki0l68.cloudfront.net/fc71b1a3ee9bda14763aa644b8c0a43636308ab2/d1f93/static/main_bg-2d2737163f32285521bd465419128ac1.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        display: "flex",
        WebkitBoxPack: "center",
        justifyContent: "center",
        WebkitBoxAlign: "center",
        alignItems: "center",
        "@media (max-width: 1440px)": {
            paddingBottom: "305px"
        }
    },
    bannerimg: {
        position: "absolute",
        left: 0,
        width: "100%",
        bottom: 0,
        "& img": {
            width: "100%",
            height: "auto",
            display: "block",
            margin: "-2px 0",
            maxWidth: "100%",
            boxSizing: "border-box"
        }
    },
    griditem: {
        boxSizing: "border-box",
        width: "100%",
        "@media (min-width: 575px)": {
            width: "100%"
        },
        "@media (min-width: 768px)": {
            width: "100%"
        },
        "@media (min-width: 990px)": {
            width: "60%"
        },
    },
    title: {
        fontWeight: 700,
        color: "#fff",
        marginTop: 0,
        marginBottom: "20px",
        boxSizing: "border-box",
        lineHeight: "1.31",
        letterSpacing: "-0.025em",
        "@media (min-width: 575px)": {
            marginBottom: "25px",
            fontSize: "34px"
        },
        "@media (min-width: 990px)": {
            fontSize: "42px"
        }
    },
    subtitle: {
        boxSizing: "border-box",
        marginBottom: 0,
        marginTop: 0,
        maxWidth: "550px",
        fontSize: "14px",
        color: "#fff",
        lineHeight: "30px",
        "@media (min-width: 575px)": {
            fontSize: "16px"
        },
        "@media (min-width: 990px)": {
            fontSize: "18px"
        }
    },
    menubtns: {
        marginTop: "40px",
        "& a": {
            textDecoration: "none"
        }
    },
    getstartedbtn: {
        marginRight: "30px",
        transition: "all 0.3s ease 0s",
        borderRadius: "6px",
        cursor: "pointer",
        display: "inline-flex",
        WebkitBoxAlign: "center",
        alignItems: "center",
        WebkitBoxPack: "center",
        justifyContent: "center",
        minHeight: "46px",
        fontWeight: 500,
        textDecoration: "none",
        textTransform: "capitalize",
        padding: "8px 15px",
        border: "0px rgb(255, 91, 96)",
        color: "#fff",
        backgroundColor: "rgb(255, 91, 96)",
        boxSizing: "border-box",
        minWidth: "120px",
        fontSize: "15px",
        "& span": {
            paddingLeft: "5px",
            paddingRight: "5px"
        }
    },
    seeworkbtn: {
        cursor: "pointer",
        display: "inline-flex",
        WebkitBoxAlign: "center",
        alignItems: "center",
        WebkitBoxPack: "center",
        justifyContent: "center",
        minHeight: "46px",
        borderRadius: "6px",
        fontWeight: 500,
        textDecoration: "none",
        textTransform: "capitalize",
        border: "0px",
        height: "auto",
        backgroundColor: "transparent",
        boxSizing: "border-box",
        padding: "5px 10px",
        minWidth: "130px",
        fontSize: "16px",
        color: "#fff",
        "@media (min-width: 575px)": {
            minWidth: "156px"
        }
    },
}));

const Banner: NextPage = () => {
    const classes = useStyles();
    const { container } = init();
    return (
        <>
            <section className={classes.bannerwrapper}>
                <div className={classes.bannerimg}>
                    <img src='https://d33wubrfki0l68.cloudfront.net/1586ffd5cca8d5819f76375b6e38e82d116275cd/40ba7/static/white_bg1-50832a485a5ef09cec0b77e980bf9f09.svg' alt='banner-background' />
                </div>
                <div className={container}>
                    <Grid container>
                        <Grid item >
                            <div className={classes.griditem}>
                                <h1 className={classes.title}>
                                    MAKE MONEY ONLINE WITH MATCHED BETTING
                                </h1>
                                <p className={classes.subtitle}>
                                    Oddshero applies the proven method of Matched Betting to help you profit from bookmaker bonus offers. You can earn your first 1.000 EUR in less than a month!
                                </p>
                                <div className={classes.menubtns}>
                                    <a href='#'>
                                        <button className={classes.getstartedbtn}>
                                            <span>Get Started Now - For Free</span>
                                        </button>
                                    </a>
                                    <a href='#'>
                                        <button className={classes.seeworkbtn}>
                                            <span>See how it Works</span>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </section>
        </>
    )
}

export default Banner
