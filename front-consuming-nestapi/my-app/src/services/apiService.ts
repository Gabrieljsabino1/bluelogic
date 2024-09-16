import axios from "axios";

const API_URL = "http://localhost:8000/items";

export const createItem = async (itemData: {
  name: string;
  description: string;
}) => {
  try {
    const response = await axios.post(API_URL, itemData);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar item:", error);
    throw error;
  }
};

export const getItemById = async (id: number) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter item:", error);
    throw error;
  }
};

export const updateItem = async (
  id: number,
  itemData: { name: string; description: string }
) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, itemData);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar item:", error);
    throw error;
  }
};

export const deleteItem = async (id: number) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Erro ao deletar item:", error);
    throw error;
  }
};

export const listItems = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Erro ao listar itens:", error);
    throw error;
  }
};
