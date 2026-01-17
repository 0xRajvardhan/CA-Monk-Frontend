export default function Footer() {
  return (
    <footer className="bg-[#0b0f1a] text-gray-400 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">

        {/* Top section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-white font-semibold text-lg mb-4">
              <span className="bg-white text-black rounded p-1 text-sm">CA</span>
              MONK
            </div>
            <p className="text-sm leading-relaxed">
              Empowering the next generation of financial leaders with tools,
              community, and knowledge.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-medium mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>Blog</li>
              <li>Webinars</li>
              <li>Case Studies</li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-white font-medium mb-3">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li>Job Board</li>
              <li>Practice Tests</li>
              <li>Mentorship</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-medium mb-3">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>LinkedIn</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs gap-4">

          <p>© 2024 CA Monk. All rights reserved.</p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>

        </div>

      </div>
    </footer>
  );
}
