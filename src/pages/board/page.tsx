import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { inquiries } from '@/mocks/board';
import BoardToolbar from './components/BoardToolbar';
import InquiryList from './components/InquiryList';
import BoardSidebar from './components/BoardSidebar';
import { WriteModal, AdminModal } from './components/BoardModals';

type FilterKey = 'all' | 'waiting' | 'answered';

const PAGE_SIZE = 6;

export default function BoardPage() {
  const [filter, setFilter] = useState<FilterKey>('all');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<'latest' | 'oldest'>('latest');
  const [page, setPage] = useState(1);
  const [writeOpen, setWriteOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);

  const counts = useMemo(() => {
    const answered = inquiries.filter((item) => item.status === 'answered').length;
    return {
      all: inquiries.length,
      answered,
      waiting: inquiries.length - answered,
    };
  }, []);

  const filtered = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    const base = inquiries.filter((item) => {
      const matchFilter = filter === 'all' ? true : item.status === filter;
      const matchKeyword =
        keyword.length === 0 ||
        item.title.toLowerCase().includes(keyword) ||
        item.content.toLowerCase().includes(keyword) ||
        item.author.toLowerCase().includes(keyword) ||
        item.category.toLowerCase().includes(keyword);
      return matchFilter && matchKeyword;
    });

    return [...base].sort((a, b) => (sort === 'latest' ? b.id - a.id : a.id - b.id));
  }, [filter, query, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paged = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const handleFilterChange = (next: FilterKey) => {
    setFilter(next);
    setPage(1);
  };

  const handleQueryChange = (next: string) => {
    setQuery(next);
    setPage(1);
  };

  const handleSortChange = (next: 'latest' | 'oldest') => {
    setSort(next);
    setPage(1);
  };

  const answerRate = Math.round((counts.answered / counts.all) * 100);

  return (
    <div className="min-h-screen bg-background-50">
      <header className="sticky top-0 z-50 border-b border-background-200 bg-background-50/95 backdrop-blur">
        <div className="w-full px-4 md:px-6 h-[60px] flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2.5 cursor-pointer shrink-0">
            <span className="w-8 h-8 flex items-center justify-center rounded-md bg-primary-600 text-background-50">
              <i className="ri-book-2-fill text-base"></i>
            </span>
            <span className="font-heading text-lg font-bold text-foreground-950 tracking-tight">단어짱</span>
            <span className="hidden sm:inline-block pl-2.5 ml-1 border-l border-background-300 text-xs font-medium text-foreground-500">
              문의 게시판
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="hidden sm:inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground-700 hover:bg-background-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-arrow-left-line text-base"></i>
              홈으로
            </Link>
            <button
              type="button"
              onClick={() => setWriteOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-background-50 hover:bg-primary-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-edit-line text-base"></i>
              문의 작성
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="border-b border-background-200 bg-background-100">
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-14">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl">
                <p className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-background-50 px-3 py-1 text-[11px] font-semibold text-primary-700">
                  <span className="w-3.5 h-3.5 flex items-center justify-center">
                    <i className="ri-customer-service-2-line text-xs"></i>
                  </span>
                  고객 문의
                </p>
                <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground-950 leading-tight">
                  사용법이 궁금하신가요?
                </h1>
                <p className="mt-3 text-sm md:text-base text-foreground-600 leading-relaxed">
                  로그인 없이 바로 문의를 남겨 주세요. 운영팀이 확인 후 게시판에 답변을 달아 드립니다.
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setWriteOpen(true)}
                    className="inline-flex items-center gap-1.5 rounded-md bg-primary-600 px-5 py-2.5 text-sm font-semibold text-background-50 hover:bg-primary-700 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <i className="ri-edit-line text-base"></i>
                    문의 작성하기
                  </button>
                  <button
                    type="button"
                    onClick={() => setAdminOpen(true)}
                    className="inline-flex items-center gap-1.5 rounded-md border border-background-300 bg-background-50 px-4 py-2.5 text-sm font-medium text-foreground-800 hover:border-secondary-400 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <i className="ri-shield-keyhole-line text-base"></i>
                    관리자 모드
                  </button>
                </div>
              </div>

              <div className="grid w-full grid-cols-3 gap-3 lg:w-[360px] shrink-0">
                <div className="rounded-lg border border-background-200 bg-background-50 px-4 py-4">
                  <p className="text-[11px] text-foreground-500">전체 문의</p>
                  <p className="mt-1 font-heading text-xl font-bold text-foreground-950 tabular-nums">
                    {counts.all}
                    <span className="ml-0.5 text-xs font-medium text-foreground-400">건</span>
                  </p>
                </div>
                <div className="rounded-lg border border-background-200 bg-background-50 px-4 py-4">
                  <p className="text-[11px] text-foreground-500">답변 완료</p>
                  <p className="mt-1 font-heading text-xl font-bold text-accent-700 tabular-nums">
                    {counts.answered}
                    <span className="ml-0.5 text-xs font-medium text-foreground-400">건</span>
                  </p>
                </div>
                <div className="rounded-lg border border-background-200 bg-background-50 px-4 py-4">
                  <p className="text-[11px] text-foreground-500">답변률</p>
                  <p className="mt-1 font-heading text-xl font-bold text-primary-700 tabular-nums">
                    {answerRate}
                    <span className="ml-0.5 text-xs font-medium text-foreground-400">%</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-10">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="min-w-0">
              <BoardToolbar
                filter={filter}
                onFilterChange={handleFilterChange}
                query={query}
                onQueryChange={handleQueryChange}
                sort={sort}
                onSortChange={handleSortChange}
                counts={counts}
              />

              <div className="mt-4 flex items-center justify-between gap-3">
                <p className="text-xs text-foreground-500" aria-live="polite">
                  총 <span className="font-semibold text-foreground-800 tabular-nums">{filtered.length}</span>건
                  {query.trim() && <span> · ‘{query.trim()}’ 검색 결과</span>}
                </p>
                <p className="hidden sm:flex items-center gap-1 text-[11px] text-foreground-400">
                  <span className="w-3.5 h-3.5 flex items-center justify-center">
                    <i className="ri-lock-line text-xs"></i>
                  </span>
                  문의 내용은 비밀번호 확인 후 열람
                </p>
              </div>

              <div className="mt-3">
                <InquiryList items={paged} />
              </div>

              <div className="mt-6 flex items-center justify-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  aria-label="이전 페이지"
                  className="w-9 h-9 flex items-center justify-center rounded-md border border-background-300 text-foreground-600 hover:bg-background-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
                >
                  <i className="ri-arrow-left-s-line text-base"></i>
                </button>

                {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                  <button
                    key={pageNumber}
                    type="button"
                    onClick={() => setPage(pageNumber)}
                    aria-current={pageNumber === currentPage ? 'page' : undefined}
                    className={`w-9 h-9 flex items-center justify-center rounded-md text-sm font-medium tabular-nums transition-colors cursor-pointer ${
                      pageNumber === currentPage
                        ? 'bg-primary-600 text-background-50'
                        : 'border border-background-300 text-foreground-600 hover:bg-background-100'
                    }`}
                  >
                    {pageNumber}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() => setPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  aria-label="다음 페이지"
                  className="w-9 h-9 flex items-center justify-center rounded-md border border-background-300 text-foreground-600 hover:bg-background-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
                >
                  <i className="ri-arrow-right-s-line text-base"></i>
                </button>
              </div>
            </div>

            <BoardSidebar
              onWriteClick={() => setWriteOpen(true)}
              onAdminClick={() => setAdminOpen(true)}
            />
          </div>
        </section>
      </main>

      <footer className="border-t border-background-200 bg-background-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] text-foreground-500">
            단어짱 · 문의 게시판 · 평일 10:00–18:00 답변
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-[11px] font-medium text-foreground-600 hover:text-primary-700 transition-colors whitespace-nowrap cursor-pointer"
          >
            단어짱 홈으로
            <i className="ri-arrow-right-line text-xs"></i>
          </Link>
        </div>
      </footer>

      <WriteModal open={writeOpen} onClose={() => setWriteOpen(false)} />
      <AdminModal open={adminOpen} onClose={() => setAdminOpen(false)} />
    </div>
  );
}