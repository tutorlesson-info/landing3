import { motion } from 'framer-motion';
import { appPreviewWords } from '@/mocks/wordjjang';

const heroMeta = [
  { icon: 'ri-gift-line', text: '특별회원 1년 무료' },
  { icon: 'ri-user-star-line', text: '선착순 아닌 30명 선정' },
  { icon: 'ri-bank-card-line', text: '카드 등록 없음' },
];

const statusIcon = (status: string) => {
  if (status === 'done') return { icon: 'ri-check-line', color: 'text-accent-600' };
  if (status === 'hard') return { icon: 'ri-flag-2-fill', color: 'text-primary-600' };
  return { icon: 'ri-circle-line', color: 'text-foreground-300' };
};

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-background-50 pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="pointer-events-none absolute -top-40 right-[-15%] w-[620px] h-[620px] rounded-full bg-primary-200/50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-25%] left-[-12%] w-[480px] h-[480px] rounded-full bg-accent-200/40 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-10 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-100 border border-accent-200"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent-600" />
              <span className="text-xs font-medium text-accent-900 tracking-tight">
                학원 원장님 · 영어 선생님을 위한 꿀팁
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-6 font-heading text-[1.9rem] leading-[1.35] sm:text-5xl sm:leading-[1.3] lg:text-[3.4rem] font-bold text-foreground-950 tracking-tight break-keep"
            >
              단어 암기, 과제, 테스트
              <br />
              <span className="text-primary-700">선생님 고민 완전 해결!</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-5 text-[15px] md:text-base leading-relaxed text-foreground-700 max-w-xl break-keep"
            >
              어떤 교재든 상관없어요. 쉬워요. 무료로 사용해요.
              <br className="hidden sm:block" />
              단어 등록부터 암기, 과제, 테스트, 학생별 테스트 결과 관리까지 이제 그냥 알아서 돌아가요.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#apply"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-primary-600 text-background-50 text-sm font-semibold hover:bg-primary-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                특별회원 신청하기
                <i className="ri-arrow-right-line text-base"></i>
              </a>
              <a
                href="https://korean-learning-omega.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md border border-foreground-300 text-foreground-900 text-sm font-semibold hover:border-foreground-800 hover:bg-background-100 transition-colors whitespace-nowrap cursor-pointer"
              >
                <i className="ri-external-link-line text-base"></i>
                지금 무료로 시작하기
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.34 }}
              className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2.5"
            >
              {heroMeta.map((meta) => (
                <span key={meta.text} className="inline-flex items-center gap-1.5 text-xs text-foreground-600">
                  <i className={`${meta.icon} text-primary-600 text-sm`}></i>
                  {meta.text}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-[286px] sm:w-[308px]">
              <div className="rounded-[2.6rem] bg-foreground-950 p-2.5">
                <div className="rounded-[2.1rem] bg-background-50 overflow-hidden">
                  <div className="px-5 pt-5 pb-4 bg-primary-600 text-background-50">
                    <div className="flex items-center justify-between text-[10px] text-background-50/80">
                      <span className="inline-flex items-center gap-1">
                        <i className="ri-book-2-line"></i>
                        나의 단어장
                      </span>
                      <span>능률VOCA 12과</span>
                    </div>
                    <p className="mt-2 font-heading text-lg font-bold">오늘의 암기 32 / 40</p>
                    <div className="mt-3 h-1.5 rounded-full bg-background-50/25">
                      <div className="h-full w-4/5 rounded-full bg-background-50" />
                    </div>
                  </div>

                  <div className="divide-y divide-background-200">
                    {appPreviewWords.map((item) => {
                      const badge = statusIcon(item.status);
                      return (
                        <div key={item.word} className="flex items-center justify-between px-4 py-2.5">
                          <div className="min-w-0">
                            <p className="text-[13px] font-semibold text-foreground-950 truncate">{item.word}</p>
                            <p className="text-[11px] text-foreground-500 truncate">{item.meaning}</p>
                          </div>
                          <span className={`w-6 h-6 flex items-center justify-center ${badge.color}`}>
                            <i className={`${badge.icon} text-sm`}></i>
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="p-4 pt-3">
                    <div className="h-10 rounded-md bg-foreground-950 text-background-50 text-xs font-semibold flex items-center justify-center gap-1.5">
                      <i className="ri-play-fill text-sm"></i>
                      테스트 시작하기
                    </div>
                    <p className="mt-2 text-center text-[10px] text-foreground-500">
                      합격할 때까지 무한 재시험
                    </p>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="hidden md:flex absolute -left-16 top-16 items-center gap-2 px-3 py-2 rounded-md bg-background-50 border border-background-200"
              >
                <span className="w-7 h-7 flex items-center justify-center rounded-md bg-accent-100 text-accent-800">
                  <i className="ri-checkbox-circle-line text-sm"></i>
                </span>
                <div className="leading-tight">
                  <p className="text-[11px] text-foreground-500">오늘 테스트 합격</p>
                  <p className="text-xs font-semibold text-foreground-950">12명 / 14명</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.75 }}
                className="hidden md:flex absolute -right-14 bottom-24 items-center gap-2 px-3 py-2 rounded-md bg-background-50 border border-background-200"
              >
                <span className="w-7 h-7 flex items-center justify-center rounded-md bg-primary-100 text-primary-700">
                  <i className="ri-timer-line text-sm"></i>
                </span>
                <div className="leading-tight">
                  <p className="text-[11px] text-foreground-500">선생님 채점 시간</p>
                  <p className="text-xs font-semibold text-foreground-950">0분</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}