import { useState } from 'react';
import type { Inquiry } from '@/mocks/board';

type InquiryListProps = {
  items: Inquiry[];
};

function StatusBadge({ status }: { status: Inquiry['status'] }) {
  const answered = status === 'answered';
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold whitespace-nowrap ${
        answered
          ? 'bg-accent-100 text-accent-900'
          : 'bg-secondary-100 text-secondary-900'
      }`}
    >
      <span className="w-3 h-3 flex items-center justify-center">
        <i className={`${answered ? 'ri-check-line' : 'ri-time-line'} text-[11px]`}></i>
      </span>
      {answered ? '답변 완료' : '답변 대기'}
    </span>
  );
}

function AnswerBlock({ inquiry }: { inquiry: Inquiry }) {
  if (inquiry.status === 'waiting') {
    return (
      <div className="mt-4 rounded-lg border border-background-200 bg-background-100 px-4 py-3">
        <p className="flex items-start gap-2 text-xs text-foreground-600 leading-relaxed">
          <span className="w-4 h-4 flex items-center justify-center text-secondary-600 mt-0.5">
            <i className="ri-hourglass-line text-sm"></i>
          </span>
          아직 답변이 등록되지 않았어요. 영업일 기준 1일 이내에 답변드릴게요.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-4 rounded-lg border border-accent-100 bg-accent-50 px-4 py-4">
      <div className="flex items-center justify-between gap-3 mb-2">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-accent-900">
          <span className="w-4 h-4 flex items-center justify-center">
            <i className="ri-chat-check-line text-base"></i>
          </span>
          단어짱 운영팀 답변
        </span>
        <span className="text-[11px] text-foreground-500">{inquiry.answeredAt}</span>
      </div>
      <p className="text-xs md:text-sm text-foreground-800 leading-relaxed">{inquiry.answer}</p>
    </div>
  );
}

export default function InquiryList({ items }: InquiryListProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  if (items.length === 0) {
    return (
      <div className="rounded-lg border border-background-200 bg-background-50 px-6 py-16 text-center">
        <span className="mx-auto mb-3 w-12 h-12 flex items-center justify-center rounded-full bg-background-100 text-foreground-400">
          <i className="ri-inbox-line text-2xl"></i>
        </span>
        <p className="text-sm font-medium text-foreground-800">조건에 맞는 문의가 없습니다</p>
        <p className="mt-1 text-xs text-foreground-500">검색어를 바꾸거나 필터를 전체로 되돌려 보세요.</p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-background-200 bg-background-50 overflow-hidden">
      <div className="hidden md:grid grid-cols-[64px_100px_minmax(0,1fr)_88px_104px_92px] items-center gap-3 px-5 py-3 bg-background-100 border-b border-background-200">
        {['번호', '분류', '제목', '작성자', '작성일', '상태'].map((label) => (
          <span key={label} className="text-[11px] font-semibold text-foreground-500 tracking-wide">
            {label}
          </span>
        ))}
      </div>

      <ul>
        {items.map((inquiry) => {
          const expanded = expandedId === inquiry.id;
          return (
            <li
              key={inquiry.id}
              className="border-b border-background-200 last:border-b-0"
            >
              <button
                type="button"
                onClick={() => toggle(inquiry.id)}
                aria-expanded={expanded}
                className={`w-full text-left px-5 py-4 transition-colors cursor-pointer ${
                  expanded ? 'bg-primary-50/60' : 'hover:bg-background-100/70'
                }`}
              >
                <div className="hidden md:grid grid-cols-[64px_100px_minmax(0,1fr)_88px_104px_92px] items-center gap-3">
                  <span className="text-xs text-foreground-400 tabular-nums">{inquiry.id}</span>
                  <span className="text-[11px] font-medium text-secondary-900 bg-secondary-100 rounded px-2 py-1 text-center whitespace-nowrap">
                    {inquiry.category}
                  </span>
                  <span className="min-w-0">
                    <span className="flex items-center gap-1.5">
                      <i
                        className={`text-xs text-foreground-400 transition-transform ${
                          expanded ? 'ri-arrow-up-s-line' : 'ri-lock-line'
                        }`}
                      ></i>
                      <span className="truncate text-sm font-medium text-foreground-900">
                        {inquiry.title}
                      </span>
                    </span>
                    {inquiry.status === 'answered' && (
                      <span className="mt-1 flex items-center gap-1 text-[11px] text-foreground-500 truncate">
                        <i className="ri-corner-down-right-line text-xs"></i>
                        {inquiry.answer}
                      </span>
                    )}
                  </span>
                  <span className="text-xs text-foreground-600 truncate">{inquiry.author}</span>
                  <span className="text-xs text-foreground-500 tabular-nums">{inquiry.createdAt}</span>
                  <span>
                    <StatusBadge status={inquiry.status} />
                  </span>
                </div>

                <div className="md:hidden">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[11px] font-medium text-secondary-900 bg-secondary-100 rounded px-2 py-0.5">
                      {inquiry.category}
                    </span>
                    <StatusBadge status={inquiry.status} />
                  </div>
                  <p className="flex items-start gap-1.5 text-sm font-medium text-foreground-900 leading-snug">
                    <span className="w-4 h-4 flex items-center justify-center text-foreground-400 mt-0.5 shrink-0">
                      <i className="ri-lock-line text-xs"></i>
                    </span>
                    <span>{inquiry.title}</span>
                  </p>
                  <p className="mt-1.5 flex items-center gap-2 text-[11px] text-foreground-500">
                    <span>{inquiry.author}</span>
                    <span className="w-1 h-1 rounded-full bg-foreground-300"></span>
                    <span className="tabular-nums">{inquiry.createdAt}</span>
                    <span className="w-1 h-1 rounded-full bg-foreground-300"></span>
                    <span className="tabular-nums">No.{inquiry.id}</span>
                  </p>
                </div>
              </button>

              {expanded && (
                <div className="px-5 pb-5 bg-background-50">
                  <div className="rounded-lg border border-background-200 bg-background-100/70 px-4 py-4">
                    <p className="mb-2 text-[11px] font-semibold text-foreground-500">문의 내용</p>
                    <p className="text-xs md:text-sm text-foreground-800 leading-relaxed">
                      {inquiry.content}
                    </p>
                  </div>
                  <AnswerBlock inquiry={inquiry} />
                  <p className="mt-3 flex items-center gap-1.5 text-[11px] text-foreground-400">
                    <span className="w-3.5 h-3.5 flex items-center justify-center">
                      <i className="ri-information-line text-xs"></i>
                    </span>
                    문의 내용 수정·삭제는 작성 시 입력한 비밀번호 확인 후 가능합니다.
                  </p>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}