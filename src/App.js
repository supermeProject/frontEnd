import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Error from "./pages/Error";
import Main from "./pages/Main";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import My from "./pages/My";
import Modify from "./pages/Modify";
import AllProducts from "./pages/AllProducts";
import ProductDetail from "./pages/ProductDetail";
import Payment from "./pages/Payment";
import Registration from "./pages/Registration";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import PaypalButton from "./common/PaypalButton";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Main /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/my", element: <My /> },
      { path: "/my/modify", element: <Modify /> },
      { path: "/products/:category", element: <AllProducts /> },
      { path: "/products/detail/:id", element: <ProductDetail /> },
      { path: "/payment", element: <Payment /> },
      { path: "/products/registration", element: <Registration /> },
    ],
  },
]);

//Paypal options
const initialOptions = {
  "client-id": `${process.env.REACT_APP_PAYPAL_CLIENT_ID}`,
  currency: "USD",
  intent: "capture",
};

function App() {
  return (
    <PayPalScriptProvider options={initialOptions}>
      <RouterProvider router={router}>
        <PaypalButton />
      </RouterProvider>
    </PayPalScriptProvider>
  );
}

export default App;
