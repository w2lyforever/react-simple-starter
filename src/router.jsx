import { createBrowserRouter } from "react-router-dom";

import Root from "./views/root";
import Team from "./views/team";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "team",
        element: <Team />,
      },
    ],
  },
]);
