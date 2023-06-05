import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "~/error-page.tsx";
import Root from "~/root.tsx";
import SupportView from "~/routes/support.tsx";
import ReservationsView from "~/routes/reservations.tsx";
import HomeView from "~/routes/home.tsx";
import SettingsView from "~/routes/settings.tsx";

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
        path: "reservations",
        element: <ReservationsView />,
      },
      {
        path: "settings",
        element: <SettingsView />,
      },
    ],
  },
]);

export { router };
