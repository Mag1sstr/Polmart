import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import WhatsappBtn from "../components/ui/WhatsappBtn";
import CompareBtn from "../components/ui/CompareBtn";

function PublicLayout() {
  return (
    <div>
      <WhatsappBtn />
      <CompareBtn />

      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default PublicLayout;
