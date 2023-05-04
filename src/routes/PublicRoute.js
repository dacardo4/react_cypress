import { Route } from "react-router-dom";

const env = process.env.REACT_APP_ENV;

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        // authed === false ? (
          <Component {...props} />
        // ) : (
        //   <Redirect
        //     to={{  pathname: "/dashboard", state: { from: props.location } }}
        //   />
        // )
      }
    />
  );
};

export default PublicRoute;
