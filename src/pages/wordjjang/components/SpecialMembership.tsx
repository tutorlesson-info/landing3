import { motion } from 'framer-motion';
import { membershipBenefits } from '@/mocks/wordjjang';

const membershipStats = [
  { label: '모집 인원', value: '30명' },
  { label: '이용 기간', value: '12개월' },
  { label: '이용 비용', value: '0원' },
];

export default function SpecialMembership() {
  return (
    <section id="membership" className="scroll-mt-20 bg-background-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2.5">
            <span className="h-px w-8 bg-primary-500" />
            <span className="text-[11px] font-semibold tracking-[0.22em] text-primary-700">SPECIAL MEMBERSHIP</span>
            <span className="h-px w-8 bg-primary-500" />
          </div>
          <h2 className="mt-4 font-heading text-3xl md:text-4xl font-bold text-foreground-950 leading-snug tracking-tight break-keep">
            단어짱 특별회원 <br className="sm:hidden" />30명을 모집합니다!
          </h2>
          <p className="mt-4 text-sm md:text-[15px] leading-relaxed text-foreground-600 break-keep">
            선착순이 아닌, 함께 만들어 갈 30명의 선생님 회원을 찾습니다.
            실제 학원 수업과 학생 관리에 활용하며 더 좋은 서비스를 함께 만들어 가요.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-10 md:mt-12 rounded-lg overflow-hidden bg-foreground-950 grid lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="p-7 md:p-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-500/15 px-3 py-1 text-[11px] font-semibold text-primary-300">
              <i className="ri-vip-crown-line"></i>
              선정 시 1년 무료
            </span>
            <h3 className="mt-5 font-heading text-2xl md:text-3xl font-bold text-background-50 leading-snug tracking-tight break-keep">
              1년 동안 단어짱의
              <br />
              모든 기능을 무료로.
            </h3>
            <p className="mt-3 text-[13.5px] md:text-sm leading-relaxed text-background-200/75 max-w-md break-keep">
              단어짱을 실제 학원 수업과 학생 관리에 활용하면서, 더 좋은 서비스를 함께 만들어 갈 특별회원을 모집합니다.
              필요한 기능은 직접 제안하고 개발 우선순위에 반영하세요.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href="#apply"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary-500 px-6 py-3 text-sm font-semibold text-foreground-950 hover:bg-primary-400 transition-colors whitespace-nowrap cursor-pointer"
              >
                특별회원 신청하기
                <i className="ri-arrow-right-line text-base"></i>
              </a>
              <a
                href="mailto:tutorlesson@naver.com"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-background-50/25 px-6 py-3 text-sm font-semibold text-background-50 hover:bg-background-50/10 transition-colors whitespace-nowrap cursor-pointer"
              >
                <i className="ri-mail-line text-base"></i>
                문의하기
              </a>
            </div>
          </div>

          <div className="p-7 md:p-10 border-t lg:border-t-0 lg:border-l border-background-50/10 bg-background-50/[0.04] flex flex-col justify-center">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-background-200/60">RECRUITING NOW</p>
            <div className="mt-2 flex items-end gap-2">
              <span className="font-heading text-6xl md:text-7xl font-bold leading-none text-primary-400">30</span>
              <span className="pb-1 text-lg text-background-100">명</span>
            </div>
            <p className="mt-3 text-[13px] text-background-200/70">함께 만들어 갈 선생님 회원</p>

            <div className="mt-6 space-y-2.5">
              {membershipStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center justify-between rounded-md border border-background-50/10 px-3.5 py-2.5"
                >
                  <span className="text-[12.5px] text-background-200/70">{stat.label}</span>
                  <span className="text-[13px] font-semibold text-background-50">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {membershipBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-lg border border-background-200 bg-background-100 p-5"
            >
              <span className="w-9 h-9 flex items-center justify-center rounded-md bg-background-50 border border-background-200 text-accent-700">
                <i className={`${benefit.icon} text-base`}></i>
              </span>
              <h4 className="mt-3.5 font-heading text-[15px] font-bold text-foreground-950 tracking-tight break-keep">
                {benefit.title}
              </h4>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-foreground-600 break-keep">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 text-center text-[12.5px] text-foreground-500">
          모집 인원 30명 · 선정된 특별회원은 1년 무료 · 심사 후 개별 안내
        </p>
      </div>
    </section>
  );
}