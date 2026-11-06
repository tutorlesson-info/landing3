import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: '고민 해결', href: '#problems' },
  { label: '주요 기능', href: '#solution' },
  { label: '선생님 기능', href: '#teacher' },
  { label: '사용법', href: '#start' },
  { label: '특별회원', href: '#membership' },
];

export default function WordjjangNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background-50/95 backdrop-blur border-b border-background-200'
          : 'bg-background-50/60 backdrop-blur-sm'
      }`}
    >
      <nav className="w-full px-4 md:px-8">
        <div className="h-[68px] flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-2.5 cursor-pointer">
            <span className="w-9 h-9 flex items-center justify-center rounded-md bg-primary-600 text-background-50">
              <i className="ri-book-2-fill text-lg"></i>
            </span>
            <span className="font-heading text-xl font-bold text-foreground-950 tracking-tight">단어짱</span>
            <span className="hidden sm:inline-block text-[10px] font-medium tracking-[0.18em] text-foreground-500 pt-1">
              WORDJJANG
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground-700 hover:text-primary-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/board"
              className="text-sm font-medium text-foreground-700 hover:text-primary-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              문의 게시판
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#apply"
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-md bg-primary-600 text-background-50 text-sm font-semibold hover:bg-primary-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              특별회원 신청
              <i className="ri-arrow-right-line text-base"></i>
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="메뉴 열기"
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-md border border-background-300 text-foreground-800 cursor-pointer"
            >
              <i className={`${menuOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl`}></i>
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="lg:hidden bg-background-50 border-t border-background-200 px-4 pb-5 pt-3">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-sm font-medium text-foreground-800 border-b border-background-200 last:border-b-0 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/board"
              onClick={() => setMenuOpen(false)}
              className="py-3 text-sm font-medium text-foreground-800 border-b border-background-200 cursor-pointer"
            >
              문의 게시판
            </Link>
            <a
              href="#apply"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-md bg-primary-600 text-background-50 text-sm font-semibold cursor-pointer"
            >
              특별회원 신청하기
              <i className="ri-arrow-right-line text-base"></i>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}