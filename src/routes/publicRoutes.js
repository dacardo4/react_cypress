import Login from "../pages/login";
import Register from "../pages/register";

const publicRoutesList = [
    {
      id: "empty",
      key: "empty",
      path: "/",
      component: () => <Login />,
    //   component: () => <div>LOGIN</div>,
    },
    {
      id: "register",
      key: "register",
      path: "/register",
      component: () => <Register />,
    //   component: () => <div>REGISTER</div>,
    }
  ];
  
  export default publicRoutesList;