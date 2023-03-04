import { ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DistributionDashboard from "./distribution/pages/distribution-dashboard";
import ReleasePage from "./distribution/pages/release-page";
import { appTheme } from "./theme";
import DistributionForm from "./distribution/pages/distribution-form";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/distribution",
        element: <DistributionDashboard />,
      },
      {
        path: "/pricing",
        element: <div />,
      },
      {
        path: "/mastering",
        element: <div />,
      },
      {
        path: "/distribution/release/:release_id",
        element: <ReleasePage />,
      },
      {
        path: "/distribution/release/edit/:release_id",
        element: <DistributionForm />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <ConfigProvider theme={appTheme}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </DndProvider>
  </React.StrictMode>
);
