// Función para verificar si un hecho está en una lista de hechos
function hechoEnLista(hecho, lista) {
    return lista.includes(hecho);
}

// Función para agregar una regla al conjunto de reglas
function agregarRegla(regla, conjuntoReglas) {
    conjuntoReglas.push(regla);
}

// Función para eliminar una regla del conjunto de reglas
function eliminarRegla(regla, conjuntoReglas) {
    const indice = conjuntoReglas.findIndex(r => r === regla);
    if (indice !== -1) {
        conjuntoReglas.splice(indice, 1);
    }
}

// Función para limpiar las conclusiones duplicadas en una lista de conclusiones
function limpiarConclusionesDuplicadas(conclusiones) {
    return Array.from(new Set(conclusiones));
}
