import { motion } from 'framer-motion';
import { studentResults, teacherFeatures } from '@/mocks/wordjjang';

export default function TeacherMode() {
  return (
    <section id="teacher" className="scroll-mt-20 bg-foreground-950 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-[1fr_0.9fr] gap-6 lg:gap-14 items-end"
        >
          <div>
            <div className="flex items-center gap-2.5">
              <span className="h-px w-8 bg-primary-400" />
              <span className="text-[11px] font-semibold tracking-[0.22em] text-primary-300">TEACHER MODE</span>
            </div>
            <h2 className="mt-4 font-heading text-[1.7rem] sm:text-[1.95rem] md:text-4xl font-bold text-background-50 leading-snug tracking-tight break-keep">
              유능한 영어 선생님을 위한
              <br />
              강력한 도구
            </h2>
          </div>
          <p className="text-sm md:text-[15px] leading-relaxed text-background-200/80 break-keep">
            유능한 선생님은 이미 알고 있습니다. 학생들의 단어 실력이 곧 영어 점수라는 사실을.
            이제 쉽고 편하게 관리하세요.
          </p>
        </motion.div>

        <div className="mt-10 md:mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {teacherFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="rounded-lg border border-background-50/10 bg-background-50/[0.04] p-5 md:p-6"
            >
              <span className="w-10 h-10 flex items-center justify-center rounded-md bg-primary-500/15 text-primary-300">
                <i className={`${feature.icon} text-lg`}></i>
              </span>
              <h3 className="mt-4 font-heading text-base md:text-lg font-bold text-background-50 tracking-tight">
                {feature.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-background-200/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-8 md:mt-10 rounded-lg border border-background-50/10 bg-background-50/[0.04] overflow-hidden"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 px-5 md:px-6 py-4 border-b border-background-50/10">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 flex items-center justify-center rounded-md bg-accent-500/20 text-accent-200">
                <i className="ri-group-line text-sm"></i>
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-background-50">우리 학원 3월 단어 테스트 현황</p>
                <p className="text-[11px] text-background-200/60">선생님 계정 · 실시간 자동 집계</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[11px] text-accent-200">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
              실시간 반영
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left">
              <thead>
                <tr className="text-[11px] text-background-200/60">
                  <th className="px-5 md:px-6 py-3 font-medium">학생</th>
                  <th className="px-4 py-3 font-medium">교재</th>
                  <th className="px-4 py-3 font-medium">회차</th>
                  <th className="px-4 py-3 font-medium">점수</th>
                  <th className="px-4 py-3 font-medium">결과</th>
                  <th className="px-4 py-3 font-medium">어려워하는 단어</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-background-50/10">
                {studentResults.map((row) => (
                  <tr key={row.name} className="text-[12.5px]">
                    <td className="px-5 md:px-6 py-3 font-semibold text-background-50 whitespace-nowrap">{row.name}</td>
                    <td className="px-4 py-3 text-background-200/75 whitespace-nowrap">{row.book}</td>
                    <td className="px-4 py-3 text-background-200/75 whitespace-nowrap">{row.round}</td>
                    <td className="px-4 py-3 font-semibold text-background-50 whitespace-nowrap">{row.score}점</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                          row.passed
                            ? 'bg-accent-500/20 text-accent-200'
                            : 'bg-primary-500/20 text-primary-200'
                        }`}
                      >
                        <i className={row.passed ? 'ri-check-line' : 'ri-refresh-line'}></i>
                        {row.passed ? '합격' : '재시험'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-background-200/60 whitespace-nowrap">{row.weak}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <p className="mt-6 text-center font-heading text-lg md:text-xl text-background-50 tracking-tight">
          선생님 노력은 확 줄이고, 학생 단어 실력은 확 올리고.
        </p>
      </div>
    </section>
  );
}