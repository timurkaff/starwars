import { getPerson } from '@/lib/swapi';
import Link from 'next/link';

export default async function PersonPage({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>;
}) {
  const params = await paramsPromise;
  const person = await getPerson(params.id);

  return (
    <div className="container mx-auto p-4 flex flex-col gap-5">
      <h1 className="text-3xl font-bold mb-4">{person.name}</h1>
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <p>Рост: {person.height}</p>
          <p>Вес: {person.mass}</p>
          <p>Цвет волос: {person.hair_color}</p>
          <p>Цвет кожи: {person.skin_color}</p>
          <p>Год рождения: {person.birth_year}</p>
        </div>
      </div>
      <div className="mb-4">
        <Link href="/people" className="btn btn-outline">
          Назад
        </Link>
      </div>
    </div>
  );
} 