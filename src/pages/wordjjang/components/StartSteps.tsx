import { motion } from 'framer-motion';
import { startChips, startSteps } from '@/mocks/wordjjang';

export default function StartSteps() {
  return (
    <section id="start" className="scroll-mt-20 bg-background-100 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14">
          <div className="lg:sticky lg:top-24 self-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2.5">
                <span className="h-px w-8 bg-primary-500" />
                <span className="text-[11px] font-semibold tracking-[0.22em] text-primary-700">EASY TO START</span>
              </div>
              <h2 className="mt-4 font-heading text-3xl md:text-4xl font-bold text-foreground-950 leading-snug tracking-tight break-keep">
                사용법, 놀라울 만큼
                <br />
                간단해요.
              </h2>
              <p className="mt-4 text-sm md:text-[15px] leading-relaxed text-foreground-600 break-keep">
                복잡한 프로그램 설치도, 어려운 사용법도, 결제도 필요 없습니다. 스마트폰만 있으면 바로 시작할 수 있어요.
              </p>

              <div className="mt-6 rounded-lg border border-background-300 bg-background-50 p-5">
                <div className="flex items-center gap-2 text-[11px] font-semibold tracking-wider text-foreground-500">
                  <i className="ri-link"></i>
                  앱 주소
                </div>
                <p className="mt-2 break-all text-[13px] font-medium text-foreground-900">
                  korean-learning-omega.vercel.app
                </p>
                <a
                  href="https://korean-learning-omega.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary-600 px-5 py-3 text-sm font-semibold text-background-50 hover:bg-primary-700 transition-colors whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-arrow-right-up-line text-base"></i>
                  단어짱 열어보기
                </a>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {startChips.map((chip) => (
                  <span
                    key={chip.text}
                    className="inline-flex items-center gap-1.5 rounded-full border border-background-300 bg-background-50 px-3 py-1.5 text-[11.5px] font-medium text-foreground-700"
                  >
                    <i className={`${chip.icon} text-primary-600 text-xs`}></i>
                    {chip.text}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <ol className="relative">
            <span className="absolute left-[19px] top-4 bottom-6 w-px bg-background-300" />
            {startSteps.map((step, index) => (
              <motion.li
                key={step.no}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="relative flex gap-4 pb-7 last:pb-0"
              >
                <span className="relative z-10 w-10 h-10 shrink-0 flex items-center justify-center rounded-full bg-background-50 border border-background-300 text-sm font-bold text-primary-700">
                  {step.no}
                </span>
                <div className="pt-0.5">
                  <div className="flex items-center gap-2">
                    <i className={`${step.icon} text-sm text-accent-700`}></i>
                    <h3 className="font-heading text-base md:text-lg font-bold text-foreground-950 tracking-tight break-keep">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-foreground-600 break-keep">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}