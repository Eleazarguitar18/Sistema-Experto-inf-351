// Función para realizar búsqueda en profundidad
export function busquedaProfundidad(hechosIniciales, reglas) {
    let conclusiones = [];
    let stack = [...hechosIniciales];

    while (stack.length > 0) {
        let hechoActual = stack.pop();

        for (let regla of reglas) {
            if (regla.antecedente === hechoActual && !conclusiones.includes(regla.consecuente)) {
                conclusiones.push(regla.consecuente);
                stack.push(regla.consecuente);
            }
        }
    }

    return conclusiones;
}

// Función para aplicar el modus ponens
export function aplicarModusPonens(hechosIniciales, reglas) {
    let conclusiones = [];

    for (let regla of reglas) {
        if (hechosIniciales.includes(regla.antecedente) && !hechosIniciales.includes(regla.consecuente)) {
            conclusiones.push(regla.consecuente);
        }
    }

    return conclusiones;
}

// Función para aplicar el encadenamiento hacia adelante
export function encadenamientoHaciaAdelante(hechosIniciales, reglas) {
    let conclusiones = [...hechosIniciales];
    let nuevasConclusiones = [];

    do {
        nuevasConclusiones = aplicarModusPonens(conclusiones, reglas);
        conclusiones.push(...nuevasConclusiones);
    } while (nuevasConclusiones.length > 0);

    return conclusiones;
}
