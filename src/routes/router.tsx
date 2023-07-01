import { createBrowserRouter } from "react-router-dom";
import App from "App";
import { Layout } from "components";
import { Dashboard, Product, ProductEdit } from "pages";

const ROUTES = [
  { path: "/", element: <Dashboard /> },
  { path: "/product/:id", element: <Product /> },
  { path: "/product/:id/edit", element: <ProductEdit /> },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <Layout />,
        children: ROUTES,
      },
    ],
  },
]);
