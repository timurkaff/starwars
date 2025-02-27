import { getPlanet } from '@/lib/swapi';
import Link from 'next/link';

export default async function PlanetPage({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>;
}) {
  const params = await paramsPromise;
  const planet = await getPlanet(params.id);

  return (
    <div className="container mx-auto p-4 flex flex-col gap-5">
      <h1 className="text-3xl font-bold mb-4">{planet.name}</h1>
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <p>Климат: {planet.climate}</p>
          <p>Гравитация: {planet.gravity}</p>
          <p>Терраин: {planet.terrain}</p>
          <p>Население: {planet.population}</p>
        </div>
      </div>
      <div className="mb-4">
        <Link href="/planets" className="btn btn-outline">
          Назад
        </Link>
      </div>
    </div>
  );
} 