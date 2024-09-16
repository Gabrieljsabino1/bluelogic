import React from "react";
import { deleteItem } from "../services/apiService";

interface ItemDeleteProps {
  itemId: number;
}

const ItemDelete: React.FC<ItemDeleteProps> = ({ itemId }) => {
  const handleDelete = async () => {
    try {
      await deleteItem(itemId);
    } catch (error) {
      console.error("Erro ao deletar item:", error);
    }
  };

  return <button onClick={handleDelete}>Delete Item</button>;
};

export default ItemDelete;
