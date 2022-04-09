import { makeStyles, createStyles } from "@material-ui/core/styles";

export const init = makeStyles(() => createStyles({
    container: {
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "30px",
        paddingRight: "30px",
        "@media (min-width: 768px)": {
            maxWidth: "750px",
            width: "100%"
        },
        "@media (min-width: 992px)": {
            maxWidth: "970px",
            width: "100%"
        },
        "@media (min-width: 1220px)": {
            maxWidth: "1170px",
            width: "100%"
        },

    },
    containerbanner: {
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "0px",
        paddingRight: "0px",
        "@media (min-width: 768px)": {
            maxWidth: "750px",
            width: "100%"
        },
        "@media (min-width: 992px)": {
            maxWidth: "970px",
            width: "100%"
        },
        "@media (min-width: 1220px)": {
            maxWidth: "1170px",
            width: "100%"
        }, 
    }
}));
