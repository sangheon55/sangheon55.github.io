export const SITE = {
  title: 'Sangheon',
  description: '논문 리뷰와 연구 기록을 남기는 개인 사이트',
  author: 'Sangheon',
  role: 'Student / Researcher',
  affiliation: '소속을 입력하세요',
  intro: [
    '안녕하세요, 상헌입니다. 관심 있는 연구 분야와 지금 하고 있는 일을 두세 문장으로 소개해 주세요.',
    '읽은 논문을 정리해 이곳에 기록합니다.',
  ],
  email: 'owo2002@gmail.com',
  github: 'https://github.com/sangheon55',
  // 필요하면 추가: { label: 'Google Scholar', href: '...' }, { label: 'LinkedIn', href: '...' }
  links: [] as { label: string; href: string }[],
};

export const INTERESTS = ['Machine Learning', 'Deep Learning', 'NLP'];

// 최신 소식 (위에서부터 최신순)
export const NEWS: { date: string; text: string }[] = [
  { date: '2026.11', text: '개인 사이트를 열었습니다.' },
];

// 학력 / 경력
export const TIMELINE: { period: string; title: string; detail?: string }[] = [
  { period: '20XX – 현재', title: '학교 / 학과', detail: '학위 과정' },
];