import { createContext, useCallback, useContext, useState } from "react";
import { FiAlertCircle, FiCheckCircle, FiInfo, FiX } from "react-icons/fi";

const ToastContext = createContext(null);

export const useToast = () => useContext(ToastContext);

const VARIANTS = {
  success: {
    icon: FiCheckCircle,
    accent: "border-l-green-500",
    iconColor: "text-green-600",
  },
  error: {
    icon: FiAlertCircle,
    accent: "border-l-red-500",
    iconColor: "text-red-600",
  },
  info: {
    icon: FiInfo,
    accent: "border-l-blue-500",
    iconColor: "text-blue-600",
  },
};

let toastId = 0;

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback(
    (message, type = "info") => {
      const id = ++toastId;

      setToasts((prev) => [...prev, { id, message, type }]);

      setTimeout(() => removeToast(id), 3500);
    },
    [removeToast]
  );

  const toast = {
    success: (message) => showToast(message, "success"),
    error: (message) => showToast(message, "error"),
    info: (message) => showToast(message, "info"),
  };

  return (
    <ToastContext.Provider value={toast}>
      {children}

      <div className="fixed top-5 right-5 z-50 flex w-[calc(100%-2.5rem)] max-w-sm flex-col gap-3">
        {toasts.map(({ id, message, type }) => {
          const variant = VARIANTS[type] || VARIANTS.info;
          const Icon = variant.icon;

          return (
            <div
              key={id}
              style={{ animation: "toast-in 0.25s ease-out" }}
              className={`flex items-start gap-3 rounded-xl border border-slate-200 border-l-4 bg-white px-4 py-3 shadow-lg ${variant.accent}`}
            >
              <Icon
                size={20}
                className={`mt-0.5 shrink-0 ${variant.iconColor}`}
              />

              <p className="flex-1 text-sm font-medium text-slate-700">
                {message}
              </p>

              <button
                type="button"
                onClick={() => removeToast(id)}
                className="text-slate-400 transition hover:text-slate-600"
                aria-label="Close notification"
              >
                <FiX size={18} />
              </button>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}

export default ToastProvider;
