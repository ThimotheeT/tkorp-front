import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-8 w-8 filter invert" src="/patte.png" alt="Logo" />
            </div>
            <div>
            <div className="ml-4 sm:ml-10 flex items-baseline">
                <Link 
                  href="/" 
                  className="text-white font-semibold hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base sm:text-lg md:text-xl lg:text-2xl transition-all duration-200"
                >
                  Accueil
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}