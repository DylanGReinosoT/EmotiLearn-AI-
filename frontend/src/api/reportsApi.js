const API_URL = 'http://localhost:8004/api/personas';

// Obtener una persona por su ID
export const obtenerPersonaPorId = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error al obtener la persona con ID ${id}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error al obtener la persona con ID ${id}:`, error);
    throw error;
  }
};