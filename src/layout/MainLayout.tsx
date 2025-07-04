import { Outlet, useLocation } from "react-router";
import Header from "./Header";

export default function MainLayout() {
  const location = useLocation();

  const getBackground = () => {
    if (location.pathname.startsWith("/about"))
      return {
        backgroundColor: "var(--color-background)",
      };
    return {
      backgroundImage: "url(/portfolioMain.jpg)",
    };
  };
  return (
    <>
      <div
        className="flex min-h-screen flex-col bg-cover bg-fixed bg-center bg-no-repeat"
        style={getBackground()}
      >
        <Header />
        <Outlet />
      </div>
    </>
  );
}
