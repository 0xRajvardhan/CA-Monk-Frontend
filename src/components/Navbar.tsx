export default function Navbar() {
  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="font-bold text-lg sm:text-xl text-indigo-600">
          CA MONK
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-indigo-600">Tools</a>
          <a href="#" className="hover:text-indigo-600">Practice</a>
          <a href="#" className="hover:text-indigo-600">Events</a>
          <a href="#" className="hover:text-indigo-600">Job Board</a>
          <a href="#" className="hover:text-indigo-600">Points</a>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">

          {/* Profile button (desktop) */}
          <button className="hidden sm:inline-block bg-indigo-600 text-white px-4 py-2 rounded-md text-sm">
            Profile
          </button>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-700 text-xl">
            ☰
          </button>

        </div>

      </div>
    </header>
  );
}
