import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "~/error-page.tsx";
import Root from "~/root.tsx";
import SupportView from "~/routes/support.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "support",
        element: <SupportView />,
      },
    ],
  },
]);

export { router };
