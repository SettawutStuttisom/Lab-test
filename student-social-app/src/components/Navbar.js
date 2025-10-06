export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <span className="font-semibold text-lg">🎓 Student Social</span>
        <button className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100">
          Logout
        </button>
      </div>
    </nav>
  );
}
