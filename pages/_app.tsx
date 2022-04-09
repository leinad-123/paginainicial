
import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import { CssBaseline } from "@material-ui/core";
import PageChange from "@components/PageChange/PageChange";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition") as Element);
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition") as Element);
  document.body.classList.remove("body-page-transition");
});

export default class MyApp extends App {
  componentDidMount() {
    let comment = document.createComment(`
    ==============
      INVERTIBET
    ==============
    `);
    document.insertBefore(comment, document.documentElement);
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      //@ts-ignore
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }
  static async getInitialProps({ Component, router, ctx }: any) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;

    // @ts-ignore
    const Layout = Component.layout || (({ children }) => <>{children}</>);

    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="shortcut icon" href="img/favicon.png" />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="img/apple-icon.png"
          />
          <title>Invertibet</title>
        </Head>
        <Layout>
          <CssBaseline />
          <Component {...pageProps} />
        </Layout>
      </React.Fragment>
    );
  }
}
