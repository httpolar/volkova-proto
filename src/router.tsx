import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "~/error-page.tsx";
import Root from "~/root.tsx";
import SupportView from "~/routes/support.tsx";
import NewObjectView from "~/routes/new-object.tsx";
import HomeView from "~/routes/home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomeView />,
      },
      {
        path: "support",
        element: <SupportView />,
      },
      {
        path: "new-object",
        element: <NewObjectView />,
      },
    ],
  },
]);

export { router };
