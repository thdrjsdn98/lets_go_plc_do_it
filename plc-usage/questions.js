// 랜덤 모의고사용 전체 문제 풀 (PLC 사용법)
var questionPool = [
    { unit: 1, type: "mc", q: "TIA Portal에서 새 프로젝트 생성, 디바이스 추가 등 큰 메뉴를 아이콘 형태로 고르는 초기 화면을 무엇이라 하는가?", opts: ["Portal 뷰", "프로젝트 뷰", "인스펙터 창", "태스크 카드"], correct: "Portal 뷰", expl: "Portal 뷰는 새 프로젝트·디바이스 구성 등 큰 작업을 마법사 형태로 선택하는 초기 화면이며, 실제 프로그래밍은 프로젝트 뷰에서 이루어집니다." },
    { unit: 1, type: "short", q: "S7-1200, S7-1500, HMI, 드라이브를 하나의 소프트웨어에서 통합적으로 다루는 지멘스의 엔지니어링 플랫폼 이름은? (영문으로)", answers: ["TIA Portal", "TIA portal", "tia portal"], expl: "TIA는 'Totally Integrated Automation'의 약자로, TIA Portal은 PLC·HMI·드라이브를 하나의 SW에서 통합 엔지니어링하는 플랫폼입니다." }
];
