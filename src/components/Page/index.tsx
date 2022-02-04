import React, { useState } from "react";

import { Container, AreaInput } from "./styles";

const Page: React.FC = () => {
  const [peso, setPeso] = useState<string>("");
  const [altura, setAltura] = useState<string>("");

  const [message, setMessage] = useState<string>("");

  function calcularIMC() {
    const alt = parseFloat(altura) / 100;
    const imc = parseFloat(peso) / (alt * alt);

    if (imc < 18.6) {
      setMessage("Abaixo do peso, imc = " + imc.toFixed(2));
    } else if (imc >= 18.6 && imc < 24.9) {
      setMessage("Peso ideal, imc = " + imc.toFixed(2));
    } else if (imc >= 24.9 && imc < 34.9) {
      setMessage("Levemente acima do peso, imc = " + imc.toFixed(2));
    } else if (imc >= 34.9) {
      setMessage("Obeso, imc = " + imc.toFixed(2));
    }
  }

  return (
    <Container>
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC</span>

      <AreaInput>
        <input
          type="text"
          placeholder="Peso em (kg) Ex: 90"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <input
          type="text"
          placeholder="Altura em (cm) Ex: 180"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
        <button onClick={calcularIMC}>Calcular</button>
      </AreaInput>

      <h2>{message}</h2>
    </Container>
  );
};

export default Page;
