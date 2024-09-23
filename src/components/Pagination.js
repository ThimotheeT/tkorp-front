import Link from 'next/link';

export default function Pagination({ currentPage, totalPages, basePath }) {
  return (
    <nav className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6" aria-label="Pagination">
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700">
          Affichage de la page <span className="font-medium">{currentPage}</span> sur <span className="font-medium">{totalPages}</span>
        </p>
      </div>
      <div className="flex-1 flex justify-between sm:justify-end">
        {currentPage > 1 ? (
          <Link
            href={`${basePath}?page=${currentPage - 1}`}
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Précédent
          </Link>
        ) : (
          <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-400 bg-gray-100 cursor-not-allowed">
            Précédent
          </span>
        )}
        {currentPage < totalPages ? (
          <Link
            href={`${basePath}?page=${currentPage + 1}`}
            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Suivant
          </Link>
        ) : (
          <span className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-400 bg-gray-100 cursor-not-allowed">
            Suivant
          </span>
        )}
      </div>
    </nav>
  );
}