import { Dialog } from "../ui/Dialog";
import Button from "../ui/Button";

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  itemName?: string;
  title?: string;
}

/**
 * A modal dialog for confirming deletion of items in the admin panel
 */
export default function DeleteConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  itemName = "this item",
  title = "Confirm Deletion"
}: DeleteConfirmationModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">
            Are you sure you want to delete {itemName}? This action cannot be undone.
          </p>
          
          <div className="flex justify-end space-x-3">
            <Button 
              className="bg-gray-200 text-gray-800 hover:bg-gray-300" 
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button 
              className="bg-red-600 hover:bg-red-700" 
              onClick={() => {
                onConfirm();
                onClose();
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}