import { Outlet } from "react-router-dom";
import PublicNavbar from "./PublicNavbar";
import PublicScrollEffects from "./PublicScrollEffects";

const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-cream">
      <PublicNavbar />

      <main>
        <Outlet />
      </main>

      <PublicScrollEffects />
    </div>
  );
};

export default PublicLayout;
