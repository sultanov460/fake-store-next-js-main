import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-[var(--color-pastel-blue)] py-4 px-3">
      <div className="text-2xl text-[var(--color-midnight-purple)]">
        <span className="p-2 font-medium bg-[var(--color-midnight-purple)] text-[var(--color-pastel-blue)] rounded-lg">
          FAKE
        </span>
        STORE
      </div>
      <button className="p-3 rounded-full text-[var(--color-pastel-blue)] bg-[var(--color-midnight-purple)] cursor-pointer border-2 border-[var(--color-midnight-purple)] hover:bg-transparent hover:text-[var(--color-midnight-purple)] transition-all duration-300]">
        <FaShoppingCart size={30} />
      </button>
    </div>
  );
};

export default Navbar;
