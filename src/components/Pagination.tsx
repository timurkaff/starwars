'use client';

import Link from 'next/link';

export default function Pagination({ currentPage, totalPages }) {
  return (
    <div className="join mt-8">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
        <Link
          key={page}
          href={`?page=${page}`}
          className={`join-item btn ${page === Number(currentPage) ? 'btn-active' : ''}`}
        >
          {page}
        </Link>
      ))}
    </div>
  );
} 