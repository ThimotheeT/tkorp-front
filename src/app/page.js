import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-green-100">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="px-8 py-10 sm:px-12 sm:py-14">
          <div className="flex justify-center mb-8">
            <Image
              src="/patte.png"
              alt="TKorp Logo"
              width={120}
              height={120}
              className="rounded-full shadow-lg"
            />
          </div>
          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 text-center mb-8">
            Bienvenue sur le catalogue TKorp
          </h1>
          <p className="text-lg text-gray-600 text-center mb-10">
            Explorez notre base de donnée
          </p>
          <div className="space-y-6">
            <Link 
              href="/personnes" 
              className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-lg font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Voir la liste des personnes
            </Link>
            <Link 
              href="/animaux" 
              className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-lg font-medium rounded-lg shadow-sm text-white bg-green-600 hover:bg-green-700 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Voir la liste des animaux
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}