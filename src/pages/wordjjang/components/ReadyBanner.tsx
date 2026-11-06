import { motion } from 'framer-motion';

const bannerChips = ['스마트폰만 있어도', '어떤 교재든', '학생·선생님 즉시 이용', '무료'];

export default function ReadyBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Bright%20small%20Korean%20English%20academy%20classroom%20with%20wooden%20desks%20and%20warm%20afternoon%20sunlight%20streaming%20through%20windows%2C%20cream%20and%20terracotta%20interior%20palette%2C%20minimal%20clean%20design%2C%20no%20people%2C%20editorial%20interior%20photography%2C%20soft%20shadows%2C%20calm%20inviting%20atmosphere&width=1600&height=600&seq=wordjjang-classroom-banner&orientation=landscape"
          alt="단어짱을 활용하는 영어 학원 교실"
          title="단어짱 학원용 단어 학습 시스템"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-foreground-950/90 via-foreground-950/75 to-foreground-950/40"></div>

      <div className="relative max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <span className="text-[11px] font-semibold tracking-[0.22em] text-primary-300">FREE TO START</span>
          <h2 className="mt-3 font-heading text-2xl md:text-4xl font-bold text-background-50 leading-snug tracking-tight break-keep">
            복잡한 준비 없이,
            <br />
            지금 바로 시작하세요.
          </h2>
          <p className="mt-3 text-[13.5px] md:text-sm leading-relaxed text-background-100/80 break-keep">
            회원가입도, 설치도, 결제도 필요 없습니다. 스마트폰으로 지금 열어서 확인해 보세요.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {bannerChips.map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-1.5 rounded-full border border-background-50/25 bg-background-50/10 px-3 py-1.5 text-[11.5px] font-medium text-background-50"
              >
                <i className="ri-check-line text-primary-300"></i>
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a
              href="https://korean-learning-omega.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-background-50 px-6 py-3 text-sm font-semibold text-foreground-950 hover:bg-background-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              무료로 시작하기
              <i className="ri-arrow-right-up-line text-base"></i>
            </a>
            <a
              href="#apply"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-background-50/40 px-6 py-3 text-sm font-semibold text-background-50 hover:bg-background-50/10 transition-colors whitespace-nowrap cursor-pointer"
            >
              특별회원 신청
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}