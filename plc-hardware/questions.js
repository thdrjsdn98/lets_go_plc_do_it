// 랜덤 모의고사용 전체 문제 풀 (PLC 핵심내용① 하드웨어·통신)
var questionPool = [
    { unit: 1, type: "mc", q: "고성능·대규모 설비에 주로 사용되는 최신 지멘스 CPU 계열은?", opts: ["S7-1500", "S7-1200", "LOGO!", "S7-200"], correct: "S7-1500", expl: "S7-1500은 고성능이 필요한 대규모 설비나 모션제어에 주로 사용됩니다." },
    { unit: 1, type: "mc", q: "소규모 자동화 설비에 적합한 엔트리급 최신 CPU 계열은?", opts: ["S7-1200", "S7-1500", "S7-400", "S5"], correct: "S7-1200", expl: "S7-1200은 엔트리~미들레인지급으로 소규모 자동화 설비에 적합합니다." },
    { unit: 2, type: "short", q: "디바이스 추가시 실물 CPU와 반드시 일치시켜야 하는 항목은? (한글)", answers: ["주문번호", "주문 번호"], expl: "실제 CPU의 정확한 주문번호를 그대로 선택해야 다운로드시 오류가 발생하지 않습니다." },
    { unit: 2, type: "mc", q: "CPU 옆에 입출력 모듈을 추가할 때 참고하는 창은?", opts: ["하드웨어 카탈로그", "정보창", "라이브러리", "진단창"], correct: "하드웨어 카탈로그", expl: "하드웨어 카탈로그에서 필요한 I/O 모듈, 통신 모듈 등을 검색해 배치할 수 있습니다." },
    { unit: 3, type: "mc", q: "I0.0, I0.1 ... I0.7을 묶어서 부르는 바이트 단위 표기는?", opts: ["IB0", "IW0", "ID0", "I0"], correct: "IB0", expl: "I0.0~I0.7 8개의 비트를 묶은 바이트 단위 표기는 IB0입니다." },
    { unit: 3, type: "mc", q: "외부로 나가는 출력 신호(램프, 모터 등)에 사용하는 어드레스 접두사는?", opts: ["%Q", "%I", "%M", "%DB"], correct: "%Q", expl: "%Q는 출력(Output), %I는 입력(Input)에 사용하는 어드레스 접두사입니다." },
    { unit: 4, type: "mc", q: "PC와 PLC를 실제로 연결하기 위해 선택해야 하는 설정은?", opts: ["온라인 액세스(Online access)의 네트워크 어댑터", "프린터 설정", "사운드 설정", "디스플레이 설정"], correct: "온라인 액세스(Online access)의 네트워크 어댑터", expl: "실제로 케이블이 꽂힌 네트워크 어댑터를 온라인 액세스에서 선택해야 통신이 가능합니다." },
    { unit: 4, type: "mc", q: "최신 지멘스 CPU가 PC와 통신할 때 주로 사용하는 물리적 연결 방식은?", opts: ["이더넷(PROFINET)", "RS-232", "USB 전용", "블루투스"], correct: "이더넷(PROFINET)", expl: "요즘 CPU는 대부분 PROFINET(이더넷) 방식으로 PC와 통신합니다." },
    { unit: 5, type: "mc", q: "CPU의 IP주소를 설정하는 위치는?", opts: ["속성(Properties)→일반→이더넷 주소", "프로젝트 이름 변경창", "라이브러리", "정보창"], correct: "속성(Properties)→일반→이더넷 주소", expl: "인스펙터 창의 속성(Properties) 탭 안 이더넷 주소 항목에서 IP주소를 설정합니다." },
    { unit: 5, type: "mc", q: "같은 네트워크의 여러 CPU에 절대 겹치면 안 되는 값은?", opts: ["IP 주소", "CPU 색상", "케이블 길이", "프로젝트 이름"], correct: "IP 주소", expl: "같은 네트워크 안의 여러 CPU는 서로 다른 IP 주소를 가져야 통신 충돌이 발생하지 않습니다." },
    { unit: 6, type: "mc", q: "이더넷 기반의 최신 지멘스 산업용 통신 프로토콜은?", opts: ["PROFINET", "PROFIBUS", "RS-485", "CAN"], correct: "PROFINET", expl: "PROFINET은 이더넷 기반의 최신 산업용 통신 프로토콜로 실시간성을 지원합니다." },
    { unit: 6, type: "mc", q: "주로 S7-300/400 세대와 함께 쓰이던 구형 시리얼 기반 필드버스는?", opts: ["PROFIBUS", "PROFINET", "Ethernet/IP", "OPC UA"], correct: "PROFIBUS", expl: "PROFIBUS는 S7-300/400 세대에서 널리 쓰이던 구형 시리얼 기반 필드버스입니다." },
    { unit: 7, type: "mc", q: "다운로드시 '하드웨어 불일치' 오류가 자주 발생하는 원인은?", opts: ["프로젝트의 CPU 주문번호와 실제 CPU가 다름", "케이블 색이 다름", "프로젝트 이름이 김", "시간이 늦음"], correct: "프로젝트의 CPU 주문번호와 실제 CPU가 다름", expl: "프로젝트에 설정된 CPU 정보와 실제 하드웨어가 일치하지 않을 때 하드웨어 불일치 오류가 발생합니다." },
    { unit: 7, type: "mc", q: "실제 연결된 CPU의 정보(주문번호, 펌웨어 등)를 확인할 수 있는 기능은?", opts: ["온라인 진단(Online & Diagnostics)", "라이브러리", "태스크카드", "정보창"], correct: "온라인 진단(Online & Diagnostics)", expl: "온라인 진단(Online & Diagnostics) 기능으로 실제 연결된 CPU의 상세 정보를 확인할 수 있습니다." },
    { unit: 8, type: "short", q: "실제 하드웨어 없이 PC에서 가상 CPU를 만들어 테스트하는 지멘스 시뮬레이터 이름은? (영문)", answers: ["PLCSIM", "S7-PLCSIM", "plcsim"], expl: "PLCSIM(S7-PLCSIM)은 실제 CPU 없이도 PC에서 가상 CPU를 만들어 프로그램을 테스트할 수 있는 지멘스의 시뮬레이터입니다." },
    { unit: 8, type: "mc", q: "PLCSIM/실제 PLC 모두에서 특정 비트 값을 강제로 켜고 끄며 로직을 확인할 때 사용하는 도구는?", opts: ["와치 테이블(Watch table)", "라이브러리", "정보창", "태스크카드"], correct: "와치 테이블(Watch table)", expl: "와치 테이블(Watch table)을 사용하면 특정 비트를 강제로 On/Off하며 로직 동작을 확인할 수 있습니다." }
];
