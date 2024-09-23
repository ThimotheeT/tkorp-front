import { loadData } from '@/utils/dataLoader';
import Link from 'next/link';

export default function PersonneDetails({ params }) {
  const data = loadData();
  const person = data.persons.find((p) => p.id.toString() === params.id);

  if (!person) return <div className="text-center py-10 text-red-600">Personne non trouvée</div>;

  const animauxPossedes = data.animals.filter(animal => animal.personId === person.id);
  const nombreAnimaux = animauxPossedes.length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h1 className="text-3xl font-bold text-gray-900">{person.firstName} {person.lastName}</h1>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Détails personnels</p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Email</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{person.email}</dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Téléphone</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{person.phoneNumber}</dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Nombre d'animaux</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{nombreAnimaux}</dd>
            </div>
          </dl>
        </div>
      </div>

      {nombreAnimaux > 0 && (
        <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900">Animaux possédés</h2>
          </div>
          <ul className="divide-y divide-gray-200">
            {animauxPossedes.map(animal => (
              <li key={animal.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                <Link href={`/animaux/${animal.id}`} className="flex items-center space-x-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-indigo-600 truncate">{animal.name}</p>
                    <p className="text-sm text-gray-500 truncate">{animal.species}</p>
                  </div>
                  <div>
                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-6">
        <Link 
          href="/personnes" 
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Retour à la liste des personnes
        </Link>
      </div>
    </div>
  );
}