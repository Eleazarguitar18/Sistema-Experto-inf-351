// Definir hechos iniciales y reglas de ejemplo
const hechosIniciales = ["se está elaborando una prenda deportiva"];
const reglas = [
    { antecedente: "se está elaborando una prenda deportiva", consecuente: "se prefiere usar telas como poliéster, nylon, Lycra, entre otras" },
    { antecedente: "se está elaborando una prenda deportiva", consecuente: "se necesita una tela de aproximadamente 2.5 metros para una talla M" }
];

// Ejecutar búsqueda en profundidad
const conclusionesProfundidad = busquedaProfundidad(hechosIniciales, reglas);
console.log("Conclusiones (Búsqueda en Profundidad):", conclusionesProfundidad);

// Ejecutar encadenamiento hacia adelante
const conclusionesAdelante = encadenamientoHaciaAdelante(hechosIniciales, reglas);
console.log("Conclusiones (Encadenamiento hacia Adelante):", conclusionesAdelante);
