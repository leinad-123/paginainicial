import { NextPage } from "next";
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { init } from "@assets/jss/init";

type RouteType = {
  text: string,
  href: string
}
const routes: RouteType[] = [
  {
    text: "Home",
    href: "#"
  },
  {
    text: "How it Works",
    href: "#"
  },
  {
    text: "Pricing",
    href: "#"
  },
  {
    text: "Blog",
    href: "#"
  },
  {
    text: "Free Ebook",
    href: "#"
  },
]
const useStyles = makeStyles(() => createStyles({
  navbarStyle: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    transition: "all 0.35s ease-in-out 0s",
    padding: "30px 0px",
    WebkitBoxAlign: "center",
    alignItems: "center",
    minHeight: "56px",
    zIndex: 1000
  },
  boxwrapper: {
    boxSizing: "border-box",
    width: "100%",
    display: "flex",
    WebkitBoxAlign: "center",
    alignItems: "center",
    WebkitBoxPack: "justify",
    justifyContent: "space-between"
  },
  menuwrapper: {
    boxSizing: "border-box",
    display: "flex",
    WebkitBoxAlign: "center",
    alignItems: "center"
  },
  menumain: {
    display: "flex",
    margin: 0,
    marginRight: "40px",
    padding: 0,
    "& li": {
      listStyle: "none",
      padding: "0 13px 0 13px"
    },
  },
  menua:{
    padding: "5px",
    fontSize: "1rem",
    fontWeight: 400,
    textDecoration: "none",
    color: "#ffffff",
    transition: "all 0.15s ease-in-out 0s",
    "&:hover": {
      color: "rgb(255, 148, 147)"
    }
  },
  loginbtn: {
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    minWidth: "48px",
    fontWeight: 700,
    textDecoration: "none",
    marginRight: "10px",
    padding: "8px 15px",
    border: "0px rgb(255, 91, 96)",
    transition: "all 0.3s ease 0s",
    color: "#ffffff",
    height: "40px",
    fontSize: "13px",
    backgroundColor: "inherit",
    "& span": {
      letterSpacing: "1px"
    }
  },
  getstartedbtn: {
    borderRadius: "6px",
    display: "inline-flex",
    alignItems: "center",
    backgroundImage: "-webkit-linear-gradient(29deg, rgb(255, 148, 147) 0%, rgb(255, 120, 162) 100%)",
    fontWeight: 700,
    cursor: "pointer",
    textDecoration: "none",
    padding: "8px 15px",
    border: "0px rgb(255, 91, 96)",
    transition: "all 0.3s ease 0s",
    color: "#ffffff",
    backgroundColor: "rgb(255, 91, 96)",
    boxSizing: "border-box",
    height: "40px",
    minHeight: "auto",
    fontSize: "13px",
    "& span": {
      letterSpacing: "1px",
      paddingLeft: "5px",
      paddingRight: "5px"
    }
  }
}));
const Navbar: NextPage = () => {
    const classes = useStyles();
    const {container} = init();
    return (
        <nav className={classes.navbarStyle}>
          <div className={container}>
            <div className={classes.boxwrapper}>
              <img style={{
                maxHeight: "40px"
              }} src="https://d33wubrfki0l68.cloudfront.net/364140bea86af7dfc37d7d376ced4c5d9bb5e559/547b5/static/hero-logo-7f01aa9b54aa19bbe52919707324c7a1.svg" alt="Oddshero Logo" />
              <div className={classes.menuwrapper}>
                <ul className={classes.menumain}>
                  {routes.map((route: RouteType, idx: number) => (
                    <li key={`route_${idx}`}>
                      <a href={route.href} className={classes.menua}>
                        {route.text}
                      </a>
                    </li>
                  ))}
                </ul>
                <a>
                  <button className={classes.loginbtn}>
                    <span>Login</span>
                  </button>
                </a>
                <a>
                  <button className={classes.getstartedbtn}>
                    <span>Get Started</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </nav>
    )
}
export default Navbar;