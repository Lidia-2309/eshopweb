import { RouteObject } from "react-router-dom";
import OrderPage from "../views/OrderPage";

const routes: RouteObject[] = [
  {
    path: "/",
    children: [
      {
        path: "",
        element: <OrderPage />,
      },
      {
        path: "*",
        element: <OrderPage />,
      },
    ],
  },
];

export default routes;