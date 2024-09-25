import Link from 'next/link';
import { fetchAnimalById, fetchPersonById } from '@/utils/dataFetcher';

function calculateAge(dateOfBirth) {
  const birthDate = new Date(dateOfBirth);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export default async function AnimalDetails({ params }) {
  const animal = await fetchAnimalById(params.id);

  if (!animal) return <div className="text-center py-10 text-red-600">Animal non trouvé</div>;

  const age = calculateAge(animal.dateOfBirth);
  
  let owner = null;
  let ownerName = "Propriétaire inconnu";

  if (animal.owner) {
    owner = animal.owner;
    ownerName = `${owner.firstName} ${owner.lastName}`;
  } else if (animal.ownerId) {
    owner = await fetchPersonById(animal.ownerId);
    if (owner) {
      ownerName = `${owner.firstName} ${owner.lastName}`;
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h1 className="text-3xl font-bold text-gray-900">{animal.name}</h1>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">{animal.species} - {animal.breed}</p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Espèce</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{animal.species}</dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Race</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{animal.breed}</dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Couleur</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{animal.color}</dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Date de naissance</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {new Date(animal.dateOfBirth).toISOString().split('T')[0]} (Age: {age} ans)
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Poids</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {(animal.weight / 1000).toFixed(2)} kg
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Propriétaire</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {owner ? (
                  <Link href={`/personnes/${owner.id}`} className="text-indigo-600 hover:text-indigo-900">
                    {ownerName}
                  </Link>
                ) : (
                  ownerName
                )}
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="mt-6">
        <Link 
          href="/animaux" 
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Retour à la liste des animaux
        </Link>
      </div>
    </div>
  );
}