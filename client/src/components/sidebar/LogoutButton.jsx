import { FiLogOut } from "react-icons/fi";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const LogoutButton = () => {
  const {logout}=useContext(AuthContext)
  return (
    <button onClick={logout}
      className="
        mt-4 flex items-center gap-2
        text-red-400 hover:text-red-500
        transition
      "
    >
      <FiLogOut size={20} />
      Logout
    </button>
  );
};

export default LogoutButton;
