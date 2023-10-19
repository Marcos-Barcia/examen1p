import {IFunction} from './interfaces/IFunction'

const functions: IFunction[] = [
    {
        id: 1,
        name: "funcion1",
        returnType: "string",
        detail: "Esta es la función 1",
        status: "activo",
        parameters: [
            {
                id: 1,
                description: "Parámetro 1",
                type: "number",
                defaultValue: "0",
                functionId: 1
            },
            {
                id: 2,
                description: "Parámetro 2",
                type: "string",
                defaultValue: "default",
                functionId: 1
            }
        ]
    },
    {
        id: 2,
        name: "funcion2",
        returnType: "boolean",
        detail: "Esta es la función 2",
        status: "inactivo",
        parameters: [
            {
                id: 3,
                description: "Parámetro 1",
                type: "string",
                defaultValue: "",
                functionId: 2
            }
        ]
    },
    {
        id: 3,
        name: "funcion3",
        returnType: "number",
        detail: "Esta es la función 3",
        status: "activo",
        parameters: []
    }
];

console.log(functions);

function eliminarElementoPorId(arreglo: IFunction[], idAEliminar: number): void {
    const elementoAEliminar = arreglo.find((elemento) => elemento.id === idAEliminar);
    
    if (elementoAEliminar) {
        elementoAEliminar.status = "eliminado";
        console.log(`Elemento con ID ${idAEliminar} marcado como eliminado lógicamente.`);
    } else {
        console.log(`Elemento con ID ${idAEliminar} no encontrado en el arreglo.`);
    }
}

eliminarElementoPorId(functions, 2);

console.log(functions);
