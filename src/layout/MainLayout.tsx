import { Outlet } from "react-router";
import Header from "./Header";

export default function MainLayout() {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-[url(../assets/portfolioMain.jpg)] bg-cover bg-fixed bg-center bg-no-repeat">
        <Header />
        <Outlet />
      </div>
    </>
  );
}
