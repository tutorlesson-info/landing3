import { useState } from 'react';
import { motion } from 'framer-motion';

const FORM_ENDPOINT = 'https://readdy.ai/api/form/dbmranj3fiqeoc7hdmng';

const guidePoints = [
  '학원명과 지역, 담당 선생님 정보를 적어주세요.',
  '지금 겪고 있는 단어 학습의 어려움을 자유롭게 남겨주세요.',
  '내용을 검토한 뒤 특별회원 선정 결과를 개별 안내드립니다.',
];

export default function ApplySection() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');
  const [reasonLength, setReasonLength] = useState(0);
  const [problemLength, setProblemLength] = useState(0);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const guard = String(formData.get('contact_alt') ?? '').trim();
    if (guard) {
      setStatus('success');
      form.reset();
      setReasonLength(0);
      setProblemLength(0);
      return;
    }

    if (!formData.get('privacy_agreed')) {
      setStatus('error');
      setFormError('개인정보 수집 및 이용에 동의해 주세요.');
      return;
    }

    setStatus('submitting');
    setFormError('');

    const payload = new URLSearchParams();
    formData.forEach((value, key) => {
      if (key === 'contact_alt') return;
      if (typeof value === 'string' && value.trim() !== '') {
        payload.append(key, value);
      }
    });

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload.toString(),
      });
      const responseText = await response.text();

      let parsed: {
        code?: string;
        message?: string;
        meta?: { message?: string; detail?: string };
      } | null = null;
      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = null;
      }

      const serverMessage =
        parsed?.meta?.message || parsed?.message || parsed?.meta?.detail || responseText;
      const isSpam = String(serverMessage).toLowerCase().includes('spam');

      if (!response.ok || parsed?.code !== 'OK' || isSpam) {
        setStatus('error');
        setFormError(
          isSpam
            ? '신청서를 전송하지 못했습니다. 입력 내용을 확인한 후 다시 시도해 주세요.'
            : String(serverMessage) || '신청서 전송에 실패했습니다. 잠시 후 다시 시도해 주세요.',
        );
        return;
      }

      setStatus('success');
      form.reset();
      setReasonLength(0);
      setProblemLength(0);
    } catch {
      setStatus('error');
      setFormError('네트워크 오류로 신청서를 보내지 못했습니다. 잠시 후 다시 시도해 주세요.');
    }
  };

  const inputClass =
    'w-full box-border rounded-md border border-background-300 bg-background-50 px-4 py-3 text-sm text-foreground-900 placeholder:text-foreground-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-200 transition-colors';
  const labelClass = 'block text-[12.5px] font-semibold text-foreground-800 mb-1.5';

  return (
    <section id="apply" className="scroll-mt-20 bg-background-100 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2.5">
                <span className="h-px w-8 bg-primary-500" />
                <span className="text-[11px] font-semibold tracking-[0.22em] text-primary-700">APPLY</span>
              </div>
              <h2 className="mt-4 font-heading text-3xl md:text-4xl font-bold text-foreground-950 leading-snug tracking-tight break-keep">
                단어짱 특별회원
                <br />
                신청하기
              </h2>
              <p className="mt-4 text-sm md:text-[15px] leading-relaxed text-foreground-600 break-keep">
                우리 학원의 단어 학습을 어떻게 바꾸고 싶은지 알려주세요. 작성해 주신 내용을 검토한 후 특별회원 선정
                결과를 안내드립니다.
              </p>

              <ul className="mt-6 space-y-3">
                {guidePoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 mt-0.5 shrink-0 flex items-center justify-center rounded-full bg-accent-100 text-accent-700">
                      <i className="ri-check-line text-xs"></i>
                    </span>
                    <span className="text-[13px] leading-relaxed text-foreground-700 break-keep">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 rounded-lg border border-background-300 bg-background-50 p-5">
                <p className="text-[11px] font-semibold tracking-wider text-foreground-500">문의 및 신청 관련 이메일</p>
                <a
                  href="mailto:tutorlesson@naver.com"
                  className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-foreground-950 hover:text-primary-700 transition-colors cursor-pointer"
                >
                  <i className="ri-mail-send-line text-primary-600"></i>
                  tutorlesson@naver.com
                </a>
                <p className="mt-2 text-[12px] leading-relaxed text-foreground-500">
                  신청서 검토는 접수 순서와 무관하게 진행되며, 선정 결과는 개별 연락드립니다.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="rounded-lg border border-background-200 bg-background-50 p-6 md:p-9"
          >
            {status === 'success' ? (
              <div className="py-10 text-center">
                <span className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-accent-100 text-accent-700">
                  <i className="ri-check-double-line text-2xl"></i>
                </span>
                <h3 className="mt-5 font-heading text-2xl font-bold text-foreground-950 tracking-tight break-keep">
                  신청서가 접수되었습니다
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground-600 break-keep">
                  남겨주신 내용을 꼼꼼히 검토한 뒤,
                  <br />
                  특별회원 선정 결과를 이메일로 안내드리겠습니다.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-6 inline-flex items-center gap-1.5 rounded-md border border-background-300 px-5 py-2.5 text-sm font-semibold text-foreground-800 hover:bg-background-100 transition-colors whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-pencil-line"></i>
                  새 신청서 작성하기
                </button>
              </div>
            ) : (
              <form data-readdy-form onSubmit={handleSubmit} noValidate={false}>
                <h3 className="font-heading text-xl font-bold text-foreground-950 tracking-tight">신청서 작성</h3>
                <p className="mt-1.5 text-[12.5px] text-foreground-500">
                  <span className="text-primary-600">*</span> 표시는 필수 입력 항목입니다.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="min-w-0">
                    <label htmlFor="academy_name" className={labelClass}>
                      학원명 <span className="text-primary-600">*</span>
                    </label>
                    <input
                      id="academy_name"
                      name="academy_name"
                      type="text"
                      required
                      placeholder="예) 강남 튜터영어학원"
                      className={inputClass}
                    />
                  </div>

                  <div className="min-w-0">
                    <label htmlFor="operator_name" className={labelClass}>
                      운영자 이름 <span className="text-primary-600">*</span>
                    </label>
                    <input
                      id="operator_name"
                      name="operator_name"
                      type="text"
                      required
                      placeholder="예) 김선생"
                      className={inputClass}
                    />
                  </div>

                  <div className="min-w-0">
                    <label htmlFor="region" className={labelClass}>
                      학원 지역 <span className="text-primary-600">*</span>
                    </label>
                    <input
                      id="region"
                      name="region"
                      type="text"
                      required
                      placeholder="예) 서울 강남구"
                      className={inputClass}
                    />
                  </div>

                  <div className="min-w-0">
                    <label htmlFor="email" className={labelClass}>
                      이메일 주소 <span className="text-primary-600">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="academy@example.com"
                      className={inputClass}
                    />
                  </div>

                  <div className="min-w-0 sm:col-span-2">
                    <label htmlFor="phone" className={labelClass}>
                      연락처 <span className="text-primary-600">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="010-0000-0000"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="mt-4 min-w-0">
                  <label htmlFor="reason" className={labelClass}>
                    단어짱 특별회원에 신청하게 된 이유는 무엇인가요?
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    rows={4}
                    maxLength={500}
                    onChange={(event) => setReasonLength(event.target.value.length)}
                    placeholder="예) 매일 단어 시험지 채점에 1시간 이상 쓰고 있어서, 이 시간을 줄이고 싶습니다."
                    className={`${inputClass} resize-none`}
                  ></textarea>
                  <p className="mt-1 text-right text-[11px] text-foreground-400">{reasonLength} / 500</p>
                </div>

                <div className="mt-2 min-w-0">
                  <label htmlFor="problem" className={labelClass}>
                    단어짱을 통해 꼭 해결하고 싶은 문제는 무엇인가요?
                  </label>
                  <textarea
                    id="problem"
                    name="problem"
                    rows={4}
                    maxLength={500}
                    onChange={(event) => setProblemLength(event.target.value.length)}
                    placeholder="예) 학생마다 교재가 달라서 숙제 확인이 어렵습니다. 학생별 진행 상황을 한눈에 보고 싶어요."
                    className={`${inputClass} resize-none`}
                  ></textarea>
                  <p className="mt-1 text-right text-[11px] text-foreground-400">{problemLength} / 500</p>
                </div>

                <div className="mt-5 rounded-md border border-background-200 bg-background-100 p-4">
                  <p className="text-[12px] font-semibold text-foreground-900">개인정보 수집 및 이용 동의</p>
                  <p className="mt-1.5 text-[11.5px] leading-relaxed text-foreground-600">
                    수집 항목: 학원명, 운영자 이름, 지역, 이메일, 전화번호, 신청 내용. 이용 목적: 특별회원 신청 접수,
                    심사 및 결과 안내. 보유 기간: 목적 달성 후 파기 원칙에 따라 처리합니다.
                  </p>
                  <label
                    htmlFor="privacy_agreed"
                    className="mt-3 flex items-start gap-2 text-[12px] text-foreground-800 cursor-pointer"
                  >
                    <input
                      id="privacy_agreed"
                      name="privacy_agreed"
                      type="checkbox"
                      required
                      value="동의함"
                      className="mt-0.5 h-4 w-4 shrink-0 accent-primary-600 cursor-pointer"
                    />
                    <span>개인정보 수집 및 이용에 동의합니다.</span>
                  </label>
                </div>

                <input
                  type="text"
                  name="contact_alt"
                  className="form-guard"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  readOnly
                />

                {status === 'error' && formError && (
                  <div
                    role="alert"
                    className="mt-4 flex items-start gap-2 rounded-md border border-primary-200 bg-primary-50 px-3.5 py-3"
                  >
                    <i className="ri-error-warning-line text-primary-700 mt-0.5"></i>
                    <span className="text-[12.5px] leading-relaxed text-primary-900">{formError}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary-600 px-6 py-3.5 text-sm font-semibold text-background-50 hover:bg-primary-700 transition-colors whitespace-nowrap cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <i className="ri-loader-4-line animate-spin text-base"></i>
                      신청서 전송 중...
                    </>
                  ) : (
                    <>
                      <i className="ri-send-plane-fill text-base"></i>
                      특별회원 신청 내용 제출하기
                    </>
                  )}
                </button>
                <p className="mt-3 text-center text-[11px] leading-relaxed text-foreground-500">
                  제출하신 내용은 특별회원 선정 목적으로만 사용되며, 결과는 이메일로 안내드립니다.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}