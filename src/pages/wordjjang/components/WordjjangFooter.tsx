import { motion } from 'framer-motion';

const footerLinks = [
  { label: '고민 해결', href: '#problems' },
  { label: '주요 기능', href: '#solution' },
  { label: '선생님 기능', href: '#teacher' },
  { label: '사용법', href: '#start' },
  { label: '특별회원', href: '#membership' },
];

export default function WordjjangFooter() {
  return (
    <footer className="bg-accent-900 text-background-100">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-14 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_1fr]"
        >
          <div>
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 flex items-center justify-center rounded-md bg-background-50 text-accent-900">
                <i className="ri-book-2-fill text-lg"></i>
              </span>
              <span className="font-heading text-xl font-bold text-background-50">단어짱</span>
            </div>
            <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-background-100/70">
              단어 암기는 학생에게, 관리는 선생님에게. 교재 촬영부터 테스트, 결과 관리까지 자동으로 이어지는 학원용 단어
              학습 시스템입니다.
            </p>
            <a
              href="#apply"
              className="mt-5 inline-flex items-center gap-1.5 rounded-md bg-background-50 px-5 py-2.5 text-[13px] font-semibold text-accent-900 hover:bg-background-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              특별회원 신청하기
              <i className="ri-arrow-right-line text-base"></i>
            </a>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.2em] text-background-100/60">바로가기</h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[13px] text-background-100/80 hover:text-background-50 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.2em] text-background-100/60">문의</h4>
            <a
              href="mailto:tutorlesson@naver.com"
              className="mt-4 inline-flex items-center gap-2 text-[13px] font-medium text-background-50 hover:underline cursor-pointer"
            >
              <i className="ri-mail-line"></i>
              tutorlesson@naver.com
            </a>
            <a
              href="https://korean-learning-omega.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2.5 flex items-center gap-2 text-[13px] text-background-100/80 hover:text-background-50 transition-colors cursor-pointer"
            >
              <i className="ri-external-link-line"></i>
              단어짱 앱 열기
            </a>
            <p className="mt-4 text-[11.5px] leading-relaxed text-background-100/60">
              특별회원 30명 모집 중 · 선정 시 12개월 무료 이용
            </p>
          </div>
        </motion.div>

        <div className="mt-12 flex flex-col gap-3 border-t border-background-50/15 pt-6 text-[11.5px] text-background-100/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 단어짱. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <a href="#apply" className="hover:text-background-50 transition-colors cursor-pointer">
              개인정보 처리방침
            </a>
            <span className="hidden sm:inline text-background-50/30">|</span>
            <a href="#apply" className="hover:text-background-50 transition-colors cursor-pointer">
              이용약관
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}