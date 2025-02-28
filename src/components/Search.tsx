'use client';

import { useRouter } from 'next/navigation';

export default function Search({ placeholder }: { placeholder: string }) {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const search = e.currentTarget.search.value;
    router.push(`?search=${search}`);
  };

  return (
    <form onSubmit={handleSearch} className="mb-8">
      <div className="join">
        <input
          name="search"
          type="text"
          placeholder={placeholder}
          className="input input-bordered join-item"
        />
        <button type="submit" className="btn btn-primary join-item">
          Поиск
        </button>
      </div>
    </form>
  );
} 