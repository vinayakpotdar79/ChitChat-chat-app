import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('searched..')
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full backdrop-blur-md"
    >
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent outline-none text-white w-full placeholder-gray-300"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        type="submit"
        className="bg-sky-500 hover:bg-sky-600 p-2 rounded-full transition"
      >
        <IoSearchSharp className="text-white w-5 h-5" />
      </button>
    </form>
  );
};

export default SearchInput;
