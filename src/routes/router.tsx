import { createBrowserRouter } from "react-router-dom";
import App from "App";
import { Layout } from "components";
import { Dashboard, Product, ProductEdit } from "pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <Layout />,
        children: [
          { path: "/", element: <Dashboard /> },
          { path: "/product/:productId", element: <Product /> },
          { path: "/product/:productId/edit", element: <ProductEdit /> },
        ],
      },
    ],
  },
]);

export default router;
