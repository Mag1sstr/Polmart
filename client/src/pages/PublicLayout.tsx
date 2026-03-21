import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import WhatsappBtn from "../components/ui/WhatsappBtn";
import CompareBtn from "../components/ui/CompareBtn";

function PublicLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <WhatsappBtn />
      <CompareBtn />

      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default PublicLayout;
