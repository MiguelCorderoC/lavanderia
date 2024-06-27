import { Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import VentaAgregarView from "./views/VentaAgregarView";
import VentaEditarView from "./views/VentaEditarView";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/ventas/agregar" element={<VentaAgregarView />} />
        <Route path="/ventas/:id/editar" element={<VentaEditarView />} />
      </Routes>
    </>
  );
}

export default App;
