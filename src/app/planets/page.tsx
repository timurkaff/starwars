import { getPlanets } from '@/lib/swapi';
import Pagination from '@/components/Pagination';
import Search from '@/components/Search';
import Link from 'next/link';

export default async function Page({
  searchParams: searchParamsPromise,
}: {
  searchParams: Promise<{ page?: string; search?: string }>;
}) {
  // Дожидаемся разрешения параметров запроса
  const searchParams = await searchParamsPromise;

  const page = Number(searchParams?.page) || 1;
  const search = searchParams?.search || '';
  
  const { results, count } = await getPlanets(page, search);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Планеты</h1>
      <Search placeholder="Поиск планет..." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map(planet => (
          <div key={planet.name} className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{planet.name}</h2>
              <div className="card-actions justify-end">
                <Link 
                  href={`/planets/${planet.url.split('/').slice(-2, -1)}`} 
                  className="btn btn-primary"
                >
                  Подробнее
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center'>
        <Pagination currentPage={page} totalPages={Math.ceil(count / 10)} />
      </div>
    </div>
  );
} 