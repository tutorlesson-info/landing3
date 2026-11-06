export const appPreviewWords = [
  { word: 'resemble', meaning: '닮다, 비슷하다', status: 'hard' },
  { word: 'generous', meaning: '관대한, 후한', status: 'done' },
  { word: 'postpone', meaning: '연기하다, 미루다', status: 'done' },
  { word: 'evidence', meaning: '증거, 근거', status: 'new' },
  { word: 'reluctant', meaning: '꺼리는, 마지못해 하는', status: 'hard' },
];

export const painPoints = [
  {
    no: '01',
    icon: 'ri-question-answer-line',
    question: '단어 숙제, 제대로 외워 오지 않나요?',
    answer:
      '걱정 없어요. 단어 암기가 쉽게 설계되어 있을 뿐 아니라, 합격할 때까지 학생 스스로 무한으로 테스트를 보게 하세요. 결국 그날 암기할 분량을 다 외우고 갈 수 밖에 없어요.',
  },
  {
    no: '02',
    icon: 'ri-timer-flash-line',
    question: '단어 시험과 채점에 시간을 뺏기나요?',
    answer:
      '학생이 스스로 단어를 등록하고, 암기하고, 시험을 봅니다. 선생님은 각 학생의 점수와 합격 결과, 틀린 단어만 즉시 확인하면 끝. 완전 자동으로 흘러갑니다.',
  },
  {
    no: '03',
    icon: 'ri-book-open-line',
    question: '학생마다 외워야 할 단어가 다 다른가요?',
    answer:
      '어떤 단어책이든, 어떤 지문이든 상관없습니다. 그냥 학생이 직접 사진을 찍으면 그 다음은 자동으로 진행돼요. 처음에 어떤 교재를 얼마나 외울지만 정해주면 됩니다. 원어민 발음도 함께 제공됩니다.',
  },
  {
    no: '04',
    icon: 'ri-loop-left-line',
    question: '외웠다고 해도 금방 잊어버리나요?',
    answer:
      '복습도 아주 쉬워요. 틀린 단어만 모아 다시 암기시키는 구조라, 잊을 수 없는 시스템을 만들어 드립니다.',
  },
  {
    no: '05',
    icon: 'ri-dashboard-3-line',
    question: '단어 학습을 체계적으로 관리하고 싶으신가요?',
    answer:
      '학생 등록, 학생별 단어 학습 여부, 테스트 결과, 어려워하는 단어들 등을 즉시 확인할 수 있어요. 이를 관리하는 선생님 전용 관리 대시보드가 준비되어 있습니다.',
  },
];

export const solutionTabs = [
  {
    id: 'capture',
    label: '교재 촬영',
    step: 'STEP 01',
    title: '어떤 교재도 가능해요. 사용하기 너무 쉬워요.',
    description:
      '사진만 찍으면 단어와 뜻이 자동으로 등록됩니다. 교재 종류를 가리지 않으니 학원에서 쓰는 어떤 교재든 그대로 활용하세요.',
    bullets: [
      '어떤 교재나 프린트를 촬영해도 10초 안에 단어 자동 추출',
      '꼭 필요한 단어만 골라서 추출',
      '큰 글씨·밑줄·동그라미·형광펜 표시 단어만 추출 가능',
      '뜻까지 자동 입력, 따로 타이핑할 필요 없음',
    ],
    image:
      'https://readdy.ai/api/search-image?query=Overhead%20flat%20lay%20of%20an%20open%20English%20vocabulary%20workbook%20page%20on%20a%20warm%20cream%20desk%20with%20a%20smartphone%20scanning%20the%20page%2C%20soft%20natural%20window%20light%2C%20oak%20wood%20surface%2C%20minimal%20editorial%20product%20photography%2C%20warm%20beige%20and%20terracotta%20tones%2C%20clean%20simple%20background%2C%20high%20detail&width=900&height=700&seq=wordjjang-capture&orientation=landscape',
    imageAlt: '영어 단어 교재를 스마트폰으로 촬영해 단어를 등록하는 단어짱 화면',
    badge: '촬영 10초 · 자동 등록',
  },
  {
    id: 'memorize',
    label: '암기',
    step: 'STEP 02',
    title: '단어 정말 잘 외워져요.',
    description:
      '모르는 단어만 골라 집중 반복시키는 가장 효율적인 방법입니다. 아는 단어를 계속 보느라 시간을 쓰지 않아요.',
    bullets: [
      '어려운 단어만 모아서 반복 학습',
      '단어별 원어민 발음 듣기',
      '암기한 단어는 손가락으로 밀어 목록에서 정리',
      '뜻이 떠오르지 않는 단어는 열어 보고 바로 다음으로',
    ],
    image:
      'https://readdy.ai/api/search-image?query=Close%20view%20of%20a%20high%20school%20student%20holding%20a%20smartphone%20while%20studying%20an%20English%20vocabulary%20notebook%20at%20a%20wooden%20desk%2C%20warm%20afternoon%20light%2C%20cream%20walls%2C%20minimal%20study%20space%2C%20soft%20warm%20color%20grading%2C%20editorial%20lifestyle%20photography%2C%20clean%20simple%20background&width=900&height=700&seq=wordjjang-memorize&orientation=landscape',
    imageAlt: '학생이 스마트폰으로 영어 단어를 반복 암기하는 모습',
    badge: '틀린 단어만 반복',
  },
  {
    id: 'test',
    label: '테스트',
    step: 'STEP 03',
    title: '단어 테스트도 자동!',
    description:
      '선생님이 학생들 단어 테스트에 신경 쓸 필요가 전혀 없습니다. 그냥 결과만 확인하면 됩니다.',
    bullets: [
      '등록된 단어로 테스트 자동 진행',
      '테스트 단어 수와 합격 점수 설정',
      '테스트 결과 즉시 확인',
      '합격할 때까지 무한 재시험',
    ],
    image:
      'https://readdy.ai/api/search-image?query=Teacher%20laptop%20on%20a%20clean%20warm%20cream%20desk%20showing%20a%20simple%20student%20score%20dashboard%2C%20notebook%20and%20pen%20beside%20it%2C%20soft%20window%20light%2C%20minimal%20editorial%20product%20photography%2C%20warm%20beige%20and%20terracotta%20palette%2C%20simple%20uncluttered%20composition&width=900&height=700&seq=wordjjang-test&orientation=landscape',
    imageAlt: '선생님이 학생별 단어 테스트 결과를 확인하는 화면',
    badge: '채점 시간 0분',
  },
];

export const teacherFeatures = [
  {
    icon: 'ri-user-add-line',
    title: '학생 등록 및 관리',
    description:
      '선생님 계정으로 학생들을 등록하고 학원 학생들의 단어 학습을 한곳에서 관리할 수 있습니다.',
  },
  {
    icon: 'ri-bookmark-3-line',
    title: '학생별 단어 학습 관리',
    description:
      '학생마다 필요한 교재와 분량을 지정하고, 각자의 학습 진행 상황을 확인할 수 있습니다.',
  },
  {
    icon: 'ri-file-list-3-line',
    title: '단어 테스트 관리',
    description:
      '학생들의 단어 테스트를 진행하고, 테스트 단어 수와 합격 기준을 손쉽게 설정합니다.',
  },
  {
    icon: 'ri-bar-chart-box-line',
    title: '학생별 테스트 결과 확인',
    description:
      '학생별 결과와 부족한 단어를 확인해 다음 수업과 보충 학습에 바로 활용할 수 있습니다.',
  },
];

export const studentResults = [
  { name: '김민준', book: '능률VOCA 고1', round: '3회차', score: 98, passed: true, weak: 'resemble' },
  { name: '이서연', book: '워드마스터 수능2000', round: '2회차', score: 86, passed: true, weak: 'reluctant' },
  { name: '박지훈', book: '능률VOCA 고1', round: '1회차', score: 72, passed: false, weak: 'evidence, postpone' },
  { name: '최유진', book: '중학 영단어 1800', round: '4회차', score: 100, passed: true, weak: '-' },
  { name: '정하윤', book: '수능 필수 어휘', round: '2회차', score: 78, passed: false, weak: 'generous, resemble' },
];

export const startSteps = [
  {
    no: '1',
    icon: 'ri-smartphone-line',
    title: '앱 열기',
    description:
      '주소로 접속하면 바로 사용할 수 있습니다. 더 편하게 쓰려면 회원가입 후 단어짱을 시작하세요.',
  },
  {
    no: '2',
    icon: 'ri-camera-line',
    title: '교재나 프린트 촬영하기',
    description: '암기할 단어가 있는 페이지를 촬영하세요. 어떤 교재든 상관없습니다.',
  },
  {
    no: '3',
    icon: 'ri-checkbox-multiple-line',
    title: '단어 확인하고 저장하기',
    description: '추출된 단어와 뜻을 확인한 뒤 나만의 단어장에 저장하세요.',
  },
  {
    no: '4',
    icon: 'ri-refresh-line',
    title: '암기하고 테스트하기',
    description:
      '암기한 단어는 밀어서 지우고, 어려운 단어는 따로 표시하세요. 반복하면 못 외운 단어만 계속 보게 됩니다.',
  },
  {
    no: '5',
    icon: 'ri-shield-user-line',
    title: '선생님 관리 기능 사용하기',
    description:
      '회원가입 후 내 계정에서 선생님 회원으로 변경하면 학생 등록과 결과 확인이 바로 가능합니다.',
  },
];

export const startChips = [
  { icon: 'ri-smartphone-line', text: '스마트폰만 있으면 바로' },
  { icon: 'ri-book-2-line', text: '어떤 교재든 상관없이' },
  { icon: 'ri-flashlight-line', text: '학생·선생님 즉시 이용' },
  { icon: 'ri-gift-line', text: '무료로 사용 가능' },
];

export const membershipBenefits = [
  {
    icon: 'ri-calendar-check-line',
    title: '1년 무료 이용',
    description: '특별회원 선정 시 12개월간 단어짱의 모든 기능을 무료로 사용합니다.',
  },
  {
    icon: 'ri-share-forward-line',
    title: '사용 경험 · 자료 공유',
    description: '다른 원장님, 선생님들과 수업에 바로 쓰는 노하우와 자료를 나눕니다.',
  },
  {
    icon: 'ri-lightbulb-flash-line',
    title: '기능 · 개선안 직접 제안',
    description: '필요한 기능과 개선 방안을 직접 제안하고, 개발 우선순위에 반영됩니다.',
  },
  {
    icon: 'ri-team-line',
    title: '특별회원 커뮤니티',
    description: '더 나은 영어 학습 프로그램을 함께 만들어 갈 파트너로 활동합니다.',
  },
];