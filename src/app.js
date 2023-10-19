import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function crearElementos() {
  try {
    const nuevaFuncion = await prisma.function.create({
      data: {
        name: "Nueva Función",
        returnType: "string",
        detail: "Esta es una nueva función",
        status: "activo",
      },
    });

    await prisma.parameter.createMany({
      data: [
        {
          description: "Parámetro 1",
          type: "number",
          defaultValue: "0",
          functionId: nuevaFuncion.id,
        },
        {
          description: "Parámetro 2",
          type: "string",
          defaultValue: "default",
          functionId: nuevaFuncion.id,
        },
      ],
    });

    console.log('Elementos creados con éxito.');
  } catch (error) {
    console.error('Error al crear elementos:', error);
  } finally {

    await prisma.$disconnect();
  }
}

crearElementos();

async function marcarComoEliminadoPorId(id) {
  try {
    const funcion = await prisma.function.findUnique({
      where: {
        id: id,
      },
    });

    if (funcion) {
      await prisma.function.update({
        where: {
          id: id,
        },
        data: {
          status: 'ELIMINADO',
        },
      });

      console.log(`Elemento con ID ${id} marcado como ELIMINADO.`);
    } else {
      console.log(`Elemento con ID ${id} no encontrado.`);
    }
  } catch (error) {
    console.error('Error al marcar como eliminado:', error);
  } finally {
    await prisma.$disconnect();
  }
}

const idAEliminar = 2;
marcarComoEliminadoPorId(idAEliminar);