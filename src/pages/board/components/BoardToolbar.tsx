type FilterKey = 'all' | 'waiting' | 'answered';

type BoardToolbarProps = {
  filter: FilterKey;
  onFilterChange: (next: FilterKey) => void;
  query: string;
  onQueryChange: (next: string) => void;
  sort: 'latest' | 'oldest';
  onSortChange: (next: 'latest' | 'oldest') => void;
  counts: { all: number; waiting: number; answered: number };
};

const filters: { key: FilterKey; label: string }[] = [
  { key: 'all', label: '전체' },
  { key: 'waiting', label: '답변 대기' },
  { key: 'answered', label: '답변 완료' },
];

export default function BoardToolbar({
  filter,
  onFilterChange,
  query,
  onQueryChange,
  sort,
  onSortChange,
  counts,
}: BoardToolbarProps) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <div className="inline-flex items-center gap-1 rounded-full bg-background-100 p-1 self-start">
        {filters.map((item) => {
          const active = filter === item.key;
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => onFilterChange(item.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                active
                  ? 'bg-background-50 text-foreground-950'
                  : 'text-foreground-600 hover:text-foreground-900'
              }`}
            >
              {item.label}
              <span
                className={`ml-1.5 text-xs tabular-nums ${
                  active ? 'text-primary-700' : 'text-foreground-400'
                }`}
              >
                {counts[item.key]}
              </span>
            </button>
          );
        })}
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center text-foreground-400">
            <i className="ri-search-line text-sm"></i>
          </span>
          <input
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="제목이나 내용으로 검색"
            aria-label="문의 검색"
            className="w-full sm:w-64 pl-9 pr-3 py-2.5 rounded-md border border-background-300 bg-background-50 text-sm text-foreground-900 placeholder:text-foreground-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 box-border"
          />
        </div>

        <div className="relative">
          <select
            value={sort}
            onChange={(event) => onSortChange(event.target.value as 'latest' | 'oldest')}
            aria-label="정렬 기준"
            className="appearance-none w-full sm:w-32 pl-3 pr-8 py-2.5 rounded-md border border-background-300 bg-background-50 text-sm text-foreground-800 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 cursor-pointer box-border"
          >
            <option value="latest">최신순</option>
            <option value="oldest">오래된순</option>
          </select>
          <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center text-foreground-400">
            <i className="ri-arrow-down-s-line text-base"></i>
          </span>
        </div>
      </div>
    </div>
  );
}