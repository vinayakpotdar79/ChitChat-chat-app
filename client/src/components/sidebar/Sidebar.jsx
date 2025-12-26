import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import Searchbar from "./Searchbar";

const Sidebar = () => {
  return (
    <div className="
      w-80 h-screen
      border-r border-white/20
      bg-white/10 backdrop-blur-xl
      p-4 flex flex-col
    ">
      <Searchbar />

      <div className="my-3 border-t border-white/20" />
      <Conversations/>
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
