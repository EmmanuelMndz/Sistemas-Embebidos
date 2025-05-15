import { useState, useEffect } from "react";
import axios from "axios";

export default function LightControl() {
  const [lightOn, setLightOn] = useState(false);

  useEffect(() => {
    axios.get("/api/status").then(res => setLightOn(res.data.lightOn));
  }, []);

  const toggle = () => {
    axios.post("/api/toggle").then(() => setLightOn(prev => !prev));
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Control de Iluminación</h1>
      <p>Estado actual: {lightOn ? "Encendido" : "Apagado"}</p>
      <button onClick={toggle} className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
        Cambiar Estado
      </button>
    </div>
  );
}