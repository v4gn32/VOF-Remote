export const calcularIMC = (peso, altura) => {
  const alturaEmMetros = altura / 100;
  return (peso / (alturaEmMetros * alturaEmMetros)).toFixed(2);
};

export const calcularPesoIdeal = (altura, sexo) => {
  let pesoIdealCalculado;
  if (sexo === 'masculino') {
    pesoIdealCalculado = 50 + 0.91 * (altura - 152.4);
  } else if (sexo === 'feminino') {
    pesoIdealCalculado = 45.5 + 0.91 * (altura - 152.4);
  }
  return pesoIdealCalculado.toFixed(2);
};

export const getIMCCategoria = (imc) => {
  if (imc < 18.5) {
    return 'Abaixo do peso';
  } else if (imc >= 18.5 && imc < 24.9) {
    return 'Peso normal';
  } else if (imc >= 25 && imc < 29.9) {
    return 'Sobrepeso';
  } else {
    return 'Obesidade';
  }
};