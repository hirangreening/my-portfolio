import { cacheLife } from 'next/cache';

async function getCopyrightYear() {
  'use cache';
  cacheLife('max');
  return new Date().getFullYear();
}

export default async function Footer() {
  const currentYear = await getCopyrightYear();

  return (
    <footer className="max-w-3xl mx-auto w-full border-t border-gray-700 pt-8 pb-4 text-center mt-auto">
      <p className="text-gray-500 text-sm">
        &copy; {currentYear} Hiran Greening. Built with Next.js & Tailwind.
      </p>
    </footer>
  );
}