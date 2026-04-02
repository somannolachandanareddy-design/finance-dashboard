import { useState } from "react";
import Navbar from "./components/navbar.jsx";
import Home from "./pages/home.jsx";

function App() {
  const [role, setRole] = useState("Viewer");

  return (
    <>
      <Navbar role={role} setRole={setRole} />
      <Home role={role} />
    </>
  );
}

export default App;