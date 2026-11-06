import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { boardCategories } from '@/mocks/board';

type ModalShellProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  icon: string;
  children: ReactNode;
};

function ModalShell({ open, onClose, title, description, icon, children }: ModalShellProps) {
  useEffect(() => {
    if (!open) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end md:items-center justify-center px-0 md:px-4">
      <button
        type="button"
        aria-label="닫기"
        onClick={onClose}
        className="absolute inset-0 bg-foreground-950/45 cursor-pointer"
      ></button>
      <div className="relative w-full md:max-w-lg rounded-t-lg md:rounded-lg border border-background-200 bg-background-50 max-h-[92vh] overflow-y-auto">
        <div className="flex items-start justify-between gap-3 border-b border-background-200 px-5 py-4">
          <div className="flex items-start gap-3">
            <span className="w-9 h-9 flex items-center justify-center rounded-md bg-primary-100 text-primary-700 shrink-0">
              <i className={`${icon} text-base`}></i>
            </span>
            <div>
              <h2 className="font-heading text-base font-bold text-foreground-950">{title}</h2>
              <p className="mt-0.5 text-[11px] text-foreground-500 leading-relaxed">{description}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="닫기"
            className="w-8 h-8 flex items-center justify-center rounded-md text-foreground-500 hover:bg-background-100 cursor-pointer shrink-0"
          >
            <i className="ri-close-line text-lg"></i>
          </button>
        </div>
        <div className="px-5 py-5">{children}</div>
      </div>
    </div>
  );
}

function Notice({ text }: { text: string }) {
  return (
    <div className="mt-4 flex items-start gap-2 rounded-md border border-secondary-200 bg-secondary-100/70 px-3 py-2.5">
      <span className="w-4 h-4 flex items-center justify-center text-secondary-700 mt-0.5">
        <i className="ri-information-line text-sm"></i>
      </span>
      <p className="text-[11px] text-secondary-900 leading-relaxed">{text}</p>
    </div>
  );
}

const inputClass =
  'w-full rounded-md border border-background-300 bg-background-50 px-3 py-2.5 text-sm text-foreground-900 placeholder:text-foreground-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 box-border';
const labelClass = 'mb-1.5 block text-xs font-semibold text-foreground-800';

type WriteModalProps = {
  open: boolean;
  onClose: () => void;
};

export function WriteModal({ open, onClose }: WriteModalProps) {
  const [content, setContent] = useState('');
  const [notice, setNotice] = useState('');

  useEffect(() => {
    if (!open) {
      setContent('');
      setNotice('');
    }
  }, [open]);

  return (
    <ModalShell
      open={open}
      onClose={onClose}
      title="문의 작성"
      description="로그인 없이 이름과 비밀번호만으로 남길 수 있습니다."
      icon="ri-edit-line"
    >
      <div className="flex flex-col gap-4">
        <div>
          <label className={labelClass} htmlFor="inquiry-category">
            문의 분류
          </label>
          <div className="relative">
            <select id="inquiry-category" name="category" className={`${inputClass} appearance-none pr-9 cursor-pointer`}>
              {boardCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center text-foreground-400">
              <i className="ri-arrow-down-s-line text-base"></i>
            </span>
          </div>
        </div>

        <div>
          <label className={labelClass} htmlFor="inquiry-title">
            제목
          </label>
          <input
            id="inquiry-title"
            name="title"
            type="text"
            maxLength={80}
            placeholder="궁금한 점을 한 줄로 적어 주세요"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="min-w-0 flex-1">
            <label className={labelClass} htmlFor="inquiry-author">
              작성자
            </label>
            <input
              id="inquiry-author"
              name="author"
              type="text"
              maxLength={20}
              placeholder="홍길동"
              className={inputClass}
            />
          </div>
          <div className="min-w-0 flex-1">
            <label className={labelClass} htmlFor="inquiry-password">
              비밀번호
            </label>
            <input
              id="inquiry-password"
              name="password"
              type="password"
              maxLength={20}
              placeholder="4자 이상"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label className={labelClass} htmlFor="inquiry-content">
            문의 내용
          </label>
          <textarea
            id="inquiry-content"
            name="content"
            rows={5}
            maxLength={500}
            value={content}
            onChange={(event) => setContent(event.target.value)}
            placeholder="사용 중 궁금한 점이나 상황을 자세히 적어 주시면 더 정확히 답변드릴 수 있어요."
            className={`${inputClass} resize-none leading-relaxed`}
          ></textarea>
          <p className="mt-1 text-right text-[11px] text-foreground-400 tabular-nums">
            {content.length} / 500
          </p>
        </div>

        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            name="agree"
            className="mt-0.5 w-4 h-4 accent-primary-600 cursor-pointer"
          />
          <span className="text-[11px] text-foreground-600 leading-relaxed">
            답변 확인을 위해 작성자 이름과 문의 내용이 게시판에 표시되는 것에 동의합니다.
          </span>
        </label>

        <div className="flex items-center gap-2 pt-1">
          <button
            type="button"
            onClick={() =>
              setNotice('지금은 화면 시안 단계입니다. 게시판 저장 공간을 연결하면 이 버튼으로 실제 등록됩니다.')
            }
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-md bg-primary-600 px-4 py-2.5 text-sm font-semibold text-background-50 hover:bg-primary-700 transition-colors whitespace-nowrap cursor-pointer"
          >
            <i className="ri-send-plane-line text-base"></i>
            문의 등록하기
          </button>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-md border border-background-300 px-4 py-2.5 text-sm font-medium text-foreground-700 hover:bg-background-100 transition-colors whitespace-nowrap cursor-pointer"
          >
            취소
          </button>
        </div>

        {notice && <Notice text={notice} />}
      </div>
    </ModalShell>
  );
}

type AdminModalProps = {
  open: boolean;
  onClose: () => void;
};

export function AdminModal({ open, onClose }: AdminModalProps) {
  const [visible, setVisible] = useState(false);
  const [notice, setNotice] = useState('');

  useEffect(() => {
    if (!open) {
      setVisible(false);
      setNotice('');
    }
  }, [open]);

  return (
    <ModalShell
      open={open}
      onClose={onClose}
      title="관리자 모드"
      description="관리자 비밀번호를 입력하면 답변을 등록할 수 있습니다."
      icon="ri-shield-keyhole-line"
    >
      <div className="flex flex-col gap-4">
        <div>
          <label className={labelClass} htmlFor="admin-password">
            관리자 비밀번호
          </label>
          <div className="relative">
            <input
              id="admin-password"
              name="admin_password"
              type={visible ? 'text' : 'password'}
              placeholder="비밀번호를 입력해 주세요"
              className={`${inputClass} pr-11`}
            />
            <button
              type="button"
              onClick={() => setVisible((prev) => !prev)}
              aria-label="비밀번호 표시 전환"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded text-foreground-400 hover:text-foreground-700 cursor-pointer"
            >
              <i className={`${visible ? 'ri-eye-off-line' : 'ri-eye-line'} text-base`}></i>
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={() =>
            setNotice('관리자 인증은 게시판 저장 공간을 연결한 뒤 사용할 수 있습니다. 인증 후 이 화면에서 바로 답변을 작성하실 수 있어요.')
          }
          className="w-full inline-flex items-center justify-center gap-1.5 rounded-md bg-foreground-900 px-4 py-2.5 text-sm font-semibold text-background-50 hover:bg-foreground-950 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-lock-unlock-line text-base"></i>
          관리자로 들어가기
        </button>

        {notice && <Notice text={notice} />}
      </div>
    </ModalShell>
  );
}