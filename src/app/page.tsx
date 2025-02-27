import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      <div className="text-center z-10">
        <h1 className="text-6xl md:text-8xl text-yellow-400 mb-12">
          STAR WARS 
        </h1>
        <div className="flex gap-8 justify-center">
          <Link 
            href="/planets" 
            className="btn btn-lg btn-outline btn-warning transform  transition ease-in hover:scale-110"
          >
            Планеты
          </Link>
          <Link 
            href="/people" 
            className="btn btn-lg btn-outline btn-warning transform transition ease-in hover:scale-110"
          >
            Персонажи
          </Link>
        </div>
      </div>
    </div>
  );
}
