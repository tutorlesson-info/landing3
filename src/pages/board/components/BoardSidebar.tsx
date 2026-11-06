type BoardSidebarProps = {
  onWriteClick: () => void;
  onAdminClick: () => void;
};

const steps = [
  {
    no: '1',
    title: '문의 남기기',
    description: '로그인 없이 이름과 비밀번호만 입력하면 바로 등록됩니다.',
  },
  {
    no: '2',
    title: '답변 확인',
    description: '보통 영업일 기준 1일 이내에 운영팀이 답변을 남깁니다.',
  },
  {
    no: '3',
    title: '본인 글 관리',
    description: '비밀번호를 입력하면 내 문의 내용을 다시 확인할 수 있습니다.',
  },
];

export default function BoardSidebar({ onWriteClick, onAdminClick }: BoardSidebarProps) {
  return (
    <aside className="flex flex-col gap-4">
      <div className="rounded-lg border border-background-200 bg-background-50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-8 h-8 flex items-center justify-center rounded-md bg-primary-100 text-primary-700">
            <i className="ri-question-answer-line text-base"></i>
          </span>
          <h3 className="font-heading text-sm font-bold text-foreground-950">이용 안내</h3>
        </div>
        <ol className="flex flex-col gap-4">
          {steps.map((step) => (
            <li key={step.no} className="flex gap-3">
              <span className="mt-0.5 w-6 h-6 flex items-center justify-center rounded-full bg-primary-500 text-background-50 text-[11px] font-bold shrink-0">
                {step.no}
              </span>
              <div>
                <p className="text-xs font-semibold text-foreground-900">{step.title}</p>
                <p className="mt-1 text-[11px] text-foreground-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <button
          type="button"
          onClick={onWriteClick}
          className="mt-5 w-full inline-flex items-center justify-center gap-1.5 rounded-md bg-primary-600 px-4 py-2.5 text-sm font-semibold text-background-50 hover:bg-primary-700 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-edit-line text-base"></i>
          문의 작성하기
        </button>
      </div>

      <div className="rounded-lg border border-background-200 bg-background-100 p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-8 h-8 flex items-center justify-center rounded-md bg-secondary-200 text-secondary-900">
            <i className="ri-shield-keyhole-line text-base"></i>
          </span>
          <h3 className="font-heading text-sm font-bold text-foreground-950">관리자이신가요?</h3>
        </div>
        <p className="text-[11px] text-foreground-600 leading-relaxed">
          관리자 비밀번호를 입력하시면 답변을 등록하고 문의 상태를 바꾸실 수 있습니다.
        </p>
        <button
          type="button"
          onClick={onAdminClick}
          className="mt-3 w-full inline-flex items-center justify-center gap-1.5 rounded-md border border-background-300 bg-background-50 px-4 py-2.5 text-sm font-medium text-foreground-800 hover:border-secondary-400 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-lock-unlock-line text-base"></i>
          관리자 모드
        </button>
      </div>

      <div className="rounded-lg border border-background-200 bg-background-50 p-5">
        <h3 className="mb-3 font-heading text-sm font-bold text-foreground-950">운영 시간</h3>
        <dl className="flex flex-col gap-2 text-[11px]">
          <div className="flex items-center justify-between gap-3">
            <dt className="text-foreground-500">답변 가능 시간</dt>
            <dd className="font-medium text-foreground-800">평일 10:00 – 18:00</dd>
          </div>
          <div className="flex items-center justify-between gap-3">
            <dt className="text-foreground-500">점심 시간</dt>
            <dd className="font-medium text-foreground-800">12:30 – 13:30</dd>
          </div>
          <div className="flex items-center justify-between gap-3">
            <dt className="text-foreground-500">주말·공휴일</dt>
            <dd className="font-medium text-foreground-800">답변 휴무</dd>
          </div>
        </dl>
        <p className="mt-3 pt-3 border-t border-background-200 text-[11px] text-foreground-500 leading-relaxed">
          급한 문의는 특별회원 신청서의 연락처로 남겨 주시면 더 빠르게 확인합니다.
        </p>
      </div>
    </aside>
  );
}