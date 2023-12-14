import DashboardNavbar from "../components/DashboardNavbar/DashboardNavbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <main>
      <DashboardNavbar />
      <section className="max-w-screen-xl mx-auto p-2">
        <Outlet />
      </section>
    </main>
  );
};

export default DashboardLayout;
