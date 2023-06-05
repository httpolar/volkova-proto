import { Outlet } from "react-router-dom";
import { Header } from "~/components/header.tsx";
import { Footer } from "~/components/footer.tsx";

export default function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
