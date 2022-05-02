import "bootstrap/dist/css/bootstrap.css";
import "../style/style.css";
import buidClient from "../api/build-client";
import Header from "../components/header";

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser} />
      <Component {...pageProps} />
    </div>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  //   console.log(Object.keys(appContext.ctx.req.headers));
  const client = buidClient(appContext.ctx);
  const { data } = await client.get("/api/users/currentuser");

  let pageProps;
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }
  const returnData = data
    ? {
        pageProps,
        ...data,
      }
    : { pageProps };
  //console.log(pageProps);

  //console.log(data);

  return returnData;
};

export default AppComponent;
