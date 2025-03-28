export interface Award {
  date: string;
  title: string;
  description: string;
}

export const awards: Award[] = [
  {
    date: "2025.01.18",
    title: "정책주권 지역문제 해결 해커톤 우수상",
    description: "지역 사회 문제 해결을 위한 혁신적인 솔루션 제안"
  },
  {
    date: "2025.02.09",
    title: "스마틴앱챌린지(APPJAM) 최우수상",
    description: "모바일 앱 개발 부문에서 창의적인 아이디어와 기술력 인정"
  },
  {
    date: "2024.12.15",
    title: "전국 고등학생 소프트웨어 경진대회 대상",
    description: "웹 개발 분야에서 뛰어난 성과 달성"
  }
];
