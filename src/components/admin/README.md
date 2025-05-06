# Admin Components

This directory contains reusable components specifically designed for the admin panel.

## DeleteConfirmationModal

A reusable modal dialog for confirming deletion actions in the admin panel. This component provides a consistent user experience for delete confirmations across all admin pages.

### Features

- Customizable title and message
- Consistent styling with the rest of the admin UI
- Keyboard support (Escape key to close)
- Backdrop click to dismiss
- Accessible design

### Usage

```tsx
import { useState } from 'react';
import DeleteConfirmationModal from '@/components/admin/DeleteConfirmationModal';

export default function YourAdminPage() {
  // State to control the visibility of the delete confirmation modal
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  
  // State to store the ID of the item to be deleted
  const [itemToDeleteId, setItemToDeleteId] = useState<string | null>(null);

  // Function to open the delete confirmation modal
  const openDeleteModal = (id: string) => {
    setItemToDeleteId(id);
    setIsDeleteModalOpen(true);
  };

  // Function to handle the delete confirmation
  const handleDeleteConfirm = async () => {
    if (!itemToDeleteId) return;
    
    try {
      // Call your API to delete the item
      await yourApi.deleteItem(itemToDeleteId);
      
      // Update your state after successful deletion
      const updatedItems = items.filter(item => item.id !== itemToDeleteId);
      setItems(updatedItems);
      
      // Show success message if needed
      // ...
    } catch (error) {
      // Handle error
      console.error('Error deleting item:', error);
      // Show error message if needed
      // ...
    } finally {
      // Reset the delete state
      setItemToDeleteId(null);
    }
  };

  return (
    <div>
      {/* Your page content */}
      
      {/* Example delete button */}
      <button 
        onClick={() => openDeleteModal('item-123')}
        className="text-red-600 hover:text-red-900"
      >
        Delete
      </button>
      
      {/* Delete Confirmation Modal */}
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
        itemName="Item Name" // Optional: Provide the name of the item being deleted
        title="Delete Item" // Optional: Custom title
      />
    </div>
  );
}
```

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `isOpen` | boolean | Yes | - | Controls the visibility of the modal |
| `onClose` | function | Yes | - | Function to call when the modal is closed |
| `onConfirm` | function | Yes | - | Function to call when deletion is confirmed |
| `itemName` | string | No | "this item" | Name of the item being deleted |
| `title` | string | No | "Confirm Deletion" | Title of the modal |

### Examples

For a complete example of how to use this component, see:

1. `src/app/admin/bookings/page-with-delete-modal.tsx` - Example implementation in the Bookings page
2. `src/components/admin/DeleteModalExample.tsx` - Standalone example component

### Best Practices

1. Always reset the item ID state after the deletion operation completes (whether successful or not)
2. Provide meaningful item names in the confirmation dialog to help users understand what they're deleting
3. Handle API errors gracefully and provide feedback to the user
4. Consider disabling the delete button while the deletion operation is in progress