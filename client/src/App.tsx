import AppRouter from "./components/layout/AppRouter";
import CompareBtn from "./components/ui/CompareBtn";
import WhatsappBtn from "./components/ui/WhatsappBtn";

function App() {
  return (
    <>
      <AppRouter />
      <WhatsappBtn />
      <CompareBtn />
      <div className="wrp"></div>
    </>
  );
}

export default App;
