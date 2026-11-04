import { FiLogOut } from "react-icons/fi";

const Navbar = ({ onLogout }) => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">
          Todo<span className="text-slate-800">App</span>
        </h1>

        <button
          onClick={onLogout}
          className="flex items-center gap-2 text-red-500 hover:text-red-700 font-medium"
        >
          <FiLogOut />
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
