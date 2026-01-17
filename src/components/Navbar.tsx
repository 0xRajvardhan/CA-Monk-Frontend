export default function Navbar() {
  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-xl text-indigo-600">CA MONK</div>

        <nav className="flex gap-6 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-indigo-600">Tools</a>
          <a href="#" className="hover:text-indigo-600">Practice</a>
          <a href="#" className="hover:text-indigo-600">Events</a>
          <a href="#" className="hover:text-indigo-600">Job Board</a>
          <a href="#" className="hover:text-indigo-600">Points</a>
        </nav>

        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm">
          Profile
        </button>
      </div>
    </header>
  );
}
