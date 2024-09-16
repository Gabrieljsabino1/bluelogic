import React, { useState } from "react";
import { createItem, updateItem } from "../services/apiService";

interface ItemFormProps {
  itemId?: number;
  existingItem?: { name: string; description: string };
}

const ItemForm: React.FC<ItemFormProps> = ({ itemId, existingItem }) => {
  const [name, setName] = useState(existingItem?.name || "");
  const [description, setDescription] = useState(
    existingItem?.description || ""
  );
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (itemId) {
        await updateItem(itemId, { name, description });
        setSuccess("Item atualizado com sucesso!");
      } else {
        await createItem({ name, description });
        setSuccess("Item criado com sucesso!");
      }
      setName("");
      setDescription("");
    } catch (error) {
      console.error("Erro ao salvar item:", error);
      setError("Erro ao salvar item. Por favor, tente novamente.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="ml-2 p-2 border border-gray-300 rounded"
          />
        </label>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="ml-2 p-2 border border-gray-300 rounded"
          />
        </label>
      </div>
      {success && <p className="text-green-500">{success}</p>}
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        {itemId ? "Update" : "Create"} Item
      </button>
    </form>
  );
};

export default ItemForm;
