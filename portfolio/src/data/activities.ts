export interface Activity {
  date: string;
  title: string;
  description: string;
  achievements: string[];
}

export const activities: Activity[] = [
  {
    date: "2023.03 - 2024.02",
    title: "대구소프트웨어마이스터고등학교",
    description: "소프트웨어개발과 재학",
    achievements: [
      "교내 해커톤 대상 수상",
      "전공동아리 부장",
      "교내 프로젝트 발표회 최우수상",
      "전국 기능경기대회 웹개발 부문 금상"
    ]
  },
  {
    date: "2023.07 - 2023.08",
    title: "삼성 청년 SW 아카데미",
    description: "웹 개발 과정 수료",
    achievements: [
      "팀 프로젝트 우수상 수상",
      "알고리즘 스터디 운영",
      "React & Spring Boot 기반 웹 서비스 개발"
    ]
  },
  {
    date: "2023.09 - 2023.12",
    title: "오픈소스 컨트리뷰션",
    description: "GitHub 오픈소스 프로젝트 참여",
    achievements: [
      "10개 이상의 PR 병합 성공",
      "버그 수정 및 기능 개선",
      "커뮤니티 활동 참여"
    ]
  },
  {
    date: "2024.01 - 현재",
    title: "프리랜서 웹 개발자",
    description: "웹 서비스 개발 및 유지보수",
    achievements: [
      "5개 이상의 프로젝트 성공적 완료",
      "클라이언트 만족도 100%",
      "최신 웹 기술 스택 활용"
    ]
  }
];
