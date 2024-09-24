import Link from 'next/link';
import Pagination from '@/components/Pagination';
import { fetchPersons } from '@/utils/dataFetcher';

export default async function Personnes({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  const limit = 10;
  const persons = await fetchPersons();
  const start = (page - 1) * limit;
  const end = start + limit;
  const paginatedPersons = persons.slice(start, end);
  const totalPages = Math.ceil(persons.length / limit);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Liste des personnes</h1>
      <ul className="bg-white shadow overflow-hidden sm:rounded-md">
        {paginatedPersons.map((person) => (
          <li key={person.id} className="border-b border-gray-200 last:border-b-0">
            <Link 
              href={`/personnes/${person.id}`}
              className="block hover:bg-gray-50 transition duration-150 ease-in-out"
            >
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-indigo-600 truncate">
                    {person.firstName} {person.lastName}
                  </p>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Voir détails
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      ID: {person.id}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Pagination currentPage={page} totalPages={totalPages} basePath="/personnes" />
      </div>
    </div>
  );
}