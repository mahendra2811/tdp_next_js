'use client';

import { useState } from 'react';
import DeleteConfirmationModal from './DeleteConfirmationModal';

/**
 * Example component demonstrating how to use the DeleteConfirmationModal
 * This can be used as a reference for implementing delete confirmation in any admin page
 */
export default function DeleteModalExample() {
  // State to control the visibility of the delete confirmation modal
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  
  // State to store the ID of the item to be deleted
  const [itemToDeleteId, setItemToDeleteId] = useState<string | null>(null);
  
  // Example items
  const items = [
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
  ];

  // Function to open the delete confirmation modal
  const openDeleteModal = (id: string) => {
    setItemToDeleteId(id);
    setIsDeleteModalOpen(true);
  };

  // Function to handle the delete confirmation
  const handleDeleteConfirm = () => {
    if (!itemToDeleteId) return;
    
    // Here you would typically call your API to delete the item
    console.log(`Deleting item with ID: ${itemToDeleteId}`);
    
    // In a real application, you would update your state after successful deletion
    // For example:
    // const updatedItems = items.filter(item => item.id !== itemToDeleteId);
    // setItems(updatedItems);
    
    // Reset the delete state
    setItemToDeleteId(null);
  };

  // Find the name of the item to delete for the confirmation modal
  const itemToDeleteName = itemToDeleteId 
    ? items.find(item => item.id === itemToDeleteId)?.name || 'this item'
    : '';

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Delete Modal Example</h1>
      
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {items.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {item.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => openDeleteModal(item.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation Modal */}
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
        itemName={itemToDeleteName}
        title="Delete Item"
      />
    </div>
  );
}