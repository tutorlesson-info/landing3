import { motion } from 'framer-motion';
import { painPoints } from '@/mocks/wordjjang';

export default function PainPoints() {
  return (
    <section id="problems" className="scroll-mt-20 bg-background-100 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2.5">
            <span className="h-px w-8 bg-primary-500" />
            <span className="text-[11px] font-semibold tracking-[0.22em] text-primary-700">PROBLEM</span>
          </div>
          <h2 className="mt-4 font-heading text-3xl md:text-4xl font-bold text-foreground-950 leading-snug tracking-tight break-keep">
            혹시 이런 고민을 <br className="sm:hidden" />하고 계신가요?
          </h2>
        </motion.div>

        <div className="mt-10 md:mt-14 grid gap-4 md:gap-5 md:grid-cols-2">
          {painPoints.map((item, index) => (
            <motion.article
              key={item.no}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className={`group relative bg-background-50 rounded-lg border border-background-200 p-6 md:p-7 hover:border-primary-300 transition-colors ${
                index === 4 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <span className="w-11 h-11 shrink-0 flex items-center justify-center rounded-md bg-secondary-100 text-secondary-900 group-hover:bg-primary-100 group-hover:text-primary-700 transition-colors">
                  <i className={`${item.icon} text-xl`}></i>
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold tracking-widest text-primary-600">{item.no}</span>
                    <h3 className="font-heading text-lg md:text-xl font-bold text-foreground-950 leading-snug tracking-tight break-keep">
                      {item.question}
                    </h3>
                  </div>
                  <p className="mt-2.5 text-[13.5px] md:text-sm leading-relaxed text-foreground-600 break-keep">
                    {item.answer}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex items-center justify-center gap-2 text-sm text-foreground-700"
        >
          <i className="ri-arrow-down-line text-primary-600"></i>
          <span className="break-keep">이 모든 고민, 단어짱 하나면 해결됩니다.</span>
        </motion.div>
      </div>
    </section>
  );
}