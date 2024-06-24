import { Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import VentaAgregarView from "./views/VentaAgregarView";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/ventas/agregar" element={<VentaAgregarView />}></Route>
      </Routes>
    </>
  );
}

export default App;
