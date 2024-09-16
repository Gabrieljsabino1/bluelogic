import React, { useEffect, useState } from "react";
import { listItems, deleteItem } from "../services/apiService";

interface Item {
  id: number;
  name: string;
  description: string;
}

const ProductList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await listItems();
        setItems(data);
      } catch (error) {
        console.error("Erro ao listar itens:", error);
        setError("Erro ao carregar itens. Por favor, tente novamente.");
      }
    };

    fetchItems();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await deleteItem(id);
      setItems(items.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Erro ao deletar item:", error);
      setError("Erro ao deletar item. Por favor, tente novamente.");
    }
  };

  return (
    <div>
      {error && <p className="text-red-500">{error}</p>}
      <ul className="list-none p-0">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between mb-2 p-2 border-b border-gray-300"
          >
            <div className="flex-1 flex items-center">
              <strong className="mr-2">{item.name}</strong>: {item.description}
            </div>
            <button
              onClick={() => handleDelete(item.id)}
              className="text-red-500 hover:text-red-700 ml-4"
              aria-label="Delete item"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
