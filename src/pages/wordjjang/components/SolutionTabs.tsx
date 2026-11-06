import { useState } from 'react';
import { motion } from 'framer-motion';
import { solutionTabs } from '@/mocks/wordjjang';

export default function SolutionTabs() {
  const [active, setActive] = useState(0);
  const tab = solutionTabs[active];

  return (
    <section id="solution" className="scroll-mt-20 bg-background-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2.5">
            <span className="h-px w-8 bg-primary-500" />
            <span className="text-[11px] font-semibold tracking-[0.22em] text-primary-700">THE SOLUTION</span>
            <span className="h-px w-8 bg-primary-500" />
          </div>
          <h2 className="mt-4 font-heading text-3xl md:text-4xl font-bold text-foreground-950 leading-snug tracking-tight break-keep">
            골치 아픈 영단어,{' '}
            <br className="sm:hidden" /> 이제 우리만의 경쟁력이 돼요.
          </h2>
          <p className="mt-4 text-sm md:text-[15px] text-foreground-600 leading-relaxed break-keep">
            복잡한 건 싫어요. 세 단계면 충분합니다. 그러나 효과는 강력해요.
          </p>
        </motion.div>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-1 rounded-full bg-background-200/70 p-1">
            {solutionTabs.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(index)}
                className={`px-4 md:px-6 py-2 rounded-full text-[13px] md:text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                  active === index
                    ? 'bg-background-50 text-foreground-950 border border-background-300'
                    : 'text-foreground-600 hover:text-foreground-900'
                }`}
              >
                {index + 1}. {item.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={tab.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-10 md:mt-12 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          <div className="order-2 lg:order-1">
            <span className="inline-block text-[11px] font-semibold tracking-[0.2em] text-accent-700 bg-accent-100 px-2.5 py-1 rounded-md">
              {tab.step}
            </span>
            <h3 className="mt-4 font-heading text-2xl md:text-[1.9rem] font-bold text-foreground-950 leading-snug tracking-tight break-keep">
              {tab.title}
            </h3>
            <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-foreground-600 break-keep">
              {tab.description}
            </p>

            <ul className="mt-6 space-y-3">
              {tab.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 mt-0.5 shrink-0 flex items-center justify-center rounded-full bg-accent-100 text-accent-700">
                    <i className="ri-check-line text-xs"></i>
                  </span>
                  <span className="text-[13.5px] md:text-sm text-foreground-700 leading-relaxed break-keep">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full h-[250px] md:h-[340px] rounded-lg overflow-hidden border border-background-200 bg-background-100">
              <img
                src={tab.image}
                alt={tab.imageAlt}
                title={`단어짱 ${tab.label} 기능`}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 left-4 md:left-6 inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-background-50 border border-background-200">
              <span className="w-5 h-5 flex items-center justify-center rounded-full bg-primary-600 text-background-50">
                <i className="ri-flashlight-fill text-[10px]"></i>
              </span>
              <span className="text-xs font-semibold text-foreground-900">{tab.badge}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}