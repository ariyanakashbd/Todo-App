import { FiTrash2 } from "react-icons/fi";

const DeleteModal = ({ onCancel, onConfirm }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">

      <div className="bg-white w-full max-w-md rounded-2xl p-6 text-center">

        <div className="w-14 h-14 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto">
          <FiTrash2 size={26} />
        </div>

        <h3 className="text-xl font-bold text-slate-800 mt-5">
          Delete this task?
        </h3>

        <p className="text-slate-500 mt-2">
          This action cannot be undone. The task will be removed
          permanently.
        </p>

        <div className="flex gap-3 mt-7">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 bg-slate-200 text-slate-700 py-3 rounded-lg hover:bg-slate-300 transition"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onConfirm}
            className="flex-1 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition"
          >
            Delete
          </button>
        </div>

      </div>
    </div>
  );
};

export default DeleteModal;
