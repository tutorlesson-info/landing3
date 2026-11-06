export type InquiryStatus = 'answered' | 'waiting';

export type Inquiry = {
  id: number;
  category: string;
  title: string;
  author: string;
  createdAt: string;
  status: InquiryStatus;
  content: string;
  answer?: string;
  answeredAt?: string;
};

export const boardCategories = [
  '이용 방법',
  '기능 문의',
  '계정·회원',
  '요금·회원권',
  '오류 신고',
];

export const inquiries: Inquiry[] = [
  {
    id: 128,
    category: '이용 방법',
    title: '교재 사진을 찍었는데 단어가 일부만 인식됩니다',
    author: '김서*',
    createdAt: '2026.11.05',
    status: 'answered',
    content:
      '능률VOCA 고1 교재 32쪽을 촬영했는데 20개 중 12개만 인식되었습니다. 나머지 단어는 직접 추가해야 하나요?',
    answer:
      '촬영하실 때 페이지 전체가 화면 안에 들어오도록 하고, 그림자가 지지 않게 밝은 곳에서 다시 촬영해 주세요. 그래도 누락되는 단어는 촬영 후 목록에서 직접 추가하실 수 있으며, 추가한 단어도 테스트에 그대로 반영됩니다.',
    answeredAt: '2026.11.05',
  },
  {
    id: 127,
    category: '계정·회원',
    title: '학생 계정과 선생님 계정을 하나로 같이 쓸 수 있나요?',
    author: '박지*',
    createdAt: '2026.11.05',
    status: 'answered',
    content:
      '학원에서 학생으로도 쓰고 선생님으로도 쓰고 싶습니다. 계정을 두 개 만들어야 하는지 궁금합니다.',
    answer:
      '하나의 계정에서 선생님 회원으로 전환하시면 학생 관리 기능까지 함께 사용하실 수 있습니다. 내 계정 설정에서 회원 유형을 변경하시면 되고, 기존 단어장과 학습 기록은 그대로 유지됩니다.',
    answeredAt: '2026.11.05',
  },
  {
    id: 126,
    category: '기능 문의',
    title: '테스트 합격 점수를 90점으로 바꾸고 싶어요',
    author: '이서*',
    createdAt: '2026.11.04',
    status: 'answered',
    content:
      '학생마다 합격 기준을 다르게 설정할 수 있는지, 가능하다면 어디서 바꾸는지 알고 싶습니다.',
    answer:
      '학생별로 테스트 단어 수와 합격 점수를 각각 설정하실 수 있습니다. 선생님 모드의 학생 관리에서 해당 학생을 선택한 뒤 테스트 설정을 열어 주세요.',
    answeredAt: '2026.11.04',
  },
  {
    id: 125,
    category: '이용 방법',
    title: '처음 사용하는데 특별회원과 일반 회원 차이가 궁금합니다',
    author: '최유*',
    createdAt: '2026.11.04',
    status: 'answered',
    content: '무료로 쓸 수 있다고 들었는데 특별회원은 어떤 점이 다른가요?',
    answer:
      '기본 기능은 누구나 무료로 사용하실 수 있습니다. 특별회원은 1년간 모든 기능을 무료로 사용하시면서 기능 개선 제안과 자료 공유에 참여하실 수 있는 과정입니다.',
    answeredAt: '2026.11.04',
  },
  {
    id: 124,
    category: '오류 신고',
    title: '발음 재생 버튼을 눌러도 소리가 나지 않습니다',
    author: '정하*',
    createdAt: '2026.11.03',
    status: 'waiting',
    content:
      '아이폰 사파리에서 사용 중인데 원어민 발음이 재생되지 않습니다. 무음 모드와는 상관없는 것 같아요.',
  },
  {
    id: 123,
    category: '기능 문의',
    title: '틀린 단어만 모아서 다시 시험 볼 수 있나요?',
    author: '한지*',
    createdAt: '2026.11.03',
    status: 'answered',
    content:
      '1회차에서 틀린 단어만 따로 뽑아 재시험을 보고 싶습니다. 방법이 있을까요?',
    answer:
      '테스트 결과 화면에서 틀린 단어만 다시 학습하기를 누르시면, 해당 단어만 모인 단어장이 만들어집니다. 그 단어장으로 바로 재시험을 진행하실 수 있습니다.',
    answeredAt: '2026.11.03',
  },
  {
    id: 122,
    category: '계정·회원',
    title: '학생을 잘못 등록했는데 삭제가 안 됩니다',
    author: '오민*',
    createdAt: '2026.11.02',
    status: 'waiting',
    content:
      '같은 학생이 두 번 등록되어 있습니다. 학습 기록이 있는 학생은 삭제할 수 없는 건가요?',
  },
  {
    id: 121,
    category: '요금·회원권',
    title: '특별회원 신청 후 언제부터 사용할 수 있나요?',
    author: '윤재*',
    createdAt: '2026.11.02',
    status: 'answered',
    content:
      '신청서를 제출했습니다. 선정 결과와 이용 시작 시점이 궁금합니다.',
    answer:
      '신청서 검토 후 영업일 기준 3일 이내에 신청하신 연락처로 안내드립니다. 선정되신 경우 안내드린 날짜부터 1년간 이용하실 수 있습니다.',
    answeredAt: '2026.11.02',
  },
  {
    id: 120,
    category: '이용 방법',
    title: '교재에 없는 단어를 직접 추가할 수 있나요?',
    author: '강도*',
    createdAt: '2026.11.01',
    status: 'answered',
    content:
      '수업 중에 나온 표현을 단어장에 넣고 싶습니다. 직접 입력하는 기능이 있는지요?',
    answer:
      '단어장 화면 오른쪽 아래의 추가 버튼으로 단어와 뜻을 직접 입력하실 수 있습니다. 입력한 단어도 발음과 테스트가 동일하게 지원됩니다.',
    answeredAt: '2026.11.01',
  },
  {
    id: 119,
    category: '기능 문의',
    title: '학생이 제출한 테스트 결과를 학부모에게 보낼 수 있나요?',
    author: '서지*',
    createdAt: '2026.10.31',
    status: 'answered',
    content:
      '결과 화면을 캡처해서 보내고 있는데, 한 번에 정리해서 보낼 수 있는 방법이 있으면 좋겠습니다.',
    answer:
      '결과 화면의 공유 버튼을 누르면 학생별 요약 이미지가 만들어집니다. 현재는 이미지 공유까지 지원하고 있으며, 문자 발송 기능은 다음 업데이트에서 준비 중입니다.',
    answeredAt: '2026.11.01',
  },
  {
    id: 118,
    category: '오류 신고',
    title: '촬영한 사진이 등록 중에서 멈춰 있습니다',
    author: '문채*',
    createdAt: '2026.10.30',
    status: 'waiting',
    content:
      '인식 중 화면이 5분째 그대로입니다. 앱을 껐다 켜도 같은 곳에서 멈춥니다.',
  },
  {
    id: 117,
    category: '계정·회원',
    title: '비밀번호를 잊어버렸습니다',
    author: '임소*',
    createdAt: '2026.10.29',
    status: 'answered',
    content: '가입할 때 쓴 비밀번호가 기억나지 않습니다. 재설정 방법을 알려주세요.',
    answer:
      '로그인 화면의 비밀번호 찾기를 이용하시면 가입하신 이메일로 재설정 링크가 발송됩니다. 메일이 보이지 않으면 스팸함도 함께 확인해 주세요.',
    answeredAt: '2026.10.29',
  },
  {
    id: 116,
    category: '이용 방법',
    title: '한 반 학생 20명을 한 번에 등록할 수 있나요',
    author: '배현*',
    createdAt: '2026.10.28',
    status: 'answered',
    content:
      '매번 한 명씩 등록하는 것이 번거롭습니다. 여러 명을 한 번에 추가하는 방법이 있는지 궁금합니다.',
    answer:
      '학생 관리 화면에서 명단 일괄 등록을 이용하시면 이름과 아이디를 붙여 넣는 방식으로 한 번에 등록하실 수 있습니다.',
    answeredAt: '2026.10.28',
  },
  {
    id: 115,
    category: '기능 문의',
    title: '복습 알림을 보내는 시간을 바꿀 수 있나요',
    author: '신유*',
    createdAt: '2026.10.27',
    status: 'answered',
    content: '저녁 9시에 오는 알림을 저녁 7시로 옮기고 싶습니다.',
    answer:
      '내 계정의 알림 설정에서 복습 알림 시간을 직접 지정하실 수 있습니다. 학생별로 다른 시간을 지정하는 기능도 지원합니다.',
    answeredAt: '2026.10.27',
  },
  {
    id: 114,
    category: '요금·회원권',
    title: '학원 단위로 도입할 때 별도 상담이 필요한가요',
    author: '조은*',
    createdAt: '2026.10.26',
    status: 'waiting',
    content:
      '원생 80명 정도 되는 학원입니다. 학원 전체로 사용할 경우 안내받을 수 있는 방법이 있을까요?',
  },
  {
    id: 113,
    category: '이용 방법',
    title: '학생이 스마트폰 없이 태블릿으로도 사용할 수 있나요',
    author: '권나*',
    createdAt: '2026.10.25',
    status: 'answered',
    content: '학원 태블릿으로도 촬영과 테스트가 가능한지 알고 싶습니다.',
    answer:
      '태블릿 브라우저에서도 동일하게 사용하실 수 있습니다. 카메라 권한을 허용해 주시면 촬영과 테스트 모두 정상 동작합니다.',
    answeredAt: '2026.10.25',
  },
];