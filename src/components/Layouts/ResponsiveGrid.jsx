import React from 'react';
import { useMediaQuery } from 'react-responsive';

// Buat komponen ResponsiveGrid sebagai pembungkus layout grid
const ResponsiveGrid = ({ children }) =>
{
  // Gunakan react-responsive untuk mengatur kondisi setiap ukuran layar
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  // Tetapkan kelas grid responsif berdasarkan kondisi ukuran layar
  const responsiveClasses = isDesktop
    ? 'grid grid-cols-12 px-20'  // Desktop (1024px ke atas)
    : isTablet
      ? 'grid grid-cols-6 px-10 '   // Tablet (768px - 1023px)
      : 'grid grid-cols-4 px-5';   // Mobile (di bawah 768px)

  return (
    <div className={`${responsiveClasses} mx-auto max-w-[1440px]`}>
      {children}
    </div>
  );
};

export default ResponsiveGrid;