import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/Term";
import RefundPolicy from "./pages/return";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "books", element: <Books /> },
      { path: "login", element: <Login /> },
      {path: "privacy-policy",element: <PrivacyPolicy/>},
      {path: "terms-and-conditions", element: <TermsAndConditions/>},
      {path: "/return-refund-policy", element: <RefundPolicy/>},
      { path: "*", element: <NotFound /> },
    ],
  },
]);
