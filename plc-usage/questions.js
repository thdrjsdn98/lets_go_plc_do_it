// 랜덤 모의고사용 전체 문제 풀 (PLC 사용법)
var questionPool = [
    { unit: 1, type: "mc", q: "TIA Portal이 통합적으로 다루는 대상이 아닌 것은?", opts: ["PLC, HMI, 드라이브", "스마트폰 앱", "PLC", "HMI"], correct: "스마트폰 앱", expl: "TIA Portal은 PLC, HMI, 드라이브를 통합 엔지니어링하는 플랫폼이며 스마트폰 앱 개발과는 무관합니다." },
    { unit: 1, type: "short", q: "S7-1200/1500처럼 최신 CPU 계열의 프로그래밍에 쓰이는 지멘스 통합 SW 이름은? (영문)", answers: ["TIA Portal", "TIA portal", "tia portal"], expl: "TIA Portal은 최신 지멘스 CPU 계열의 통합 엔지니어링 소프트웨어입니다." },
    { unit: 2, type: "mc", q: "S7-1200만 프로그래밍 가능한 하위 등급 제품은?", opts: ["STEP 7 Basic", "STEP 7 Professional", "STEP 7 Safety", "WinCC"], correct: "STEP 7 Basic", expl: "STEP 7 Basic은 S7-1200 전용이며, S7-1500/300/400까지 다루려면 STEP 7 Professional이 필요합니다." },
    { unit: 2, type: "mc", q: "TIA Portal 라이선스 인증에 흔히 사용되는 방식은?", opts: ["USB 라이선스 키(License Key)", "이메일 인증", "전화 인증", "인증 필요 없음"], correct: "USB 라이선스 키(License Key)", expl: "TIA Portal/STEP 7은 일반적으로 라이선스 키를 통해 인증합니다." },
    { unit: 3, type: "mc", q: "Portal 뷰에서 프로젝트 뷰로 전환하는 링크는 화면 어디에 있는가?", opts: ["좌측 하단", "우측 상단", "화면 중앙", "자동으로만 전환됨"], correct: "좌측 하단", expl: "Portal 뷰 좌측 하단의 '프로젝트 뷰로 전환' 링크를 통해 이동합니다." },
    { unit: 3, type: "short", q: "실제 하드웨어 배치와 래더 프로그래밍이 이루어지는 뷰의 이름은? (한글)", answers: ["프로젝트 뷰", "프로젝트뷰"], expl: "프로젝트 뷰는 하드웨어 구성과 프로그램 작성이 이루어지는 본격적인 작업 화면입니다." },
    { unit: 4, type: "mc", q: "컴파일 오류·경고 메시지를 확인할 수 있는 창은?", opts: ["정보창(Info window)", "태스크카드", "프로젝트트리", "라이브러리"], correct: "정보창(Info window)", expl: "정보창(Info window)은 화면 하단에서 컴파일 오류/경고/정보 메시지를 보여줍니다." },
    { unit: 4, type: "mc", q: "선택한 개체(예: CPU)의 속성(IP주소 등)을 편집하는 곳은?", opts: ["인스펙터 창", "태스크카드", "프로젝트 트리", "정보창"], correct: "인스펙터 창", expl: "인스펙터 창의 속성(Properties) 탭에서 선택한 개체의 세부 설정을 편집합니다." },
    { unit: 5, type: "short", q: "디바이스 추가시 반드시 실물 CPU와 일치시켜야 하는 항목은? (한글)", answers: ["주문번호", "주문 번호"], expl: "실제 CPU의 정확한 주문번호를 선택해야 다운로드 시 하드웨어 불일치 오류를 막을 수 있습니다." },
    { unit: 5, type: "mc", q: "여러 프로젝트에서 재사용할 블록을 저장해두는 곳은?", opts: ["전역 라이브러리", "프로젝트 트리", "정보창", "인스펙터창"], correct: "전역 라이브러리", expl: "전역 라이브러리(Global library)는 여러 프로젝트에서 공통으로 재사용할 블록·화면을 저장합니다." },
    { unit: 6, type: "mc", q: "상태(값)를 스캔 사이클 사이에도 유지해야 할 때 사용하는 코드 블록은?", opts: ["FB", "FC", "OB", "블록으로는 불가능"], correct: "FB", expl: "FB(Function Block)는 인스턴스 DB를 가지므로 스캔 사이클 사이에도 상태를 유지할 수 있습니다." },
    { unit: 6, type: "mc", q: "PLC가 RUN 모드에서 반복 실행하는 메인 프로그램이 담기는 블록은?", opts: ["OB1", "FC1", "DB1", "FB1"], correct: "OB1", expl: "OB1은 PLC가 전원이 켜진 뒤 반복 실행하는 메인 프로그램(Organization Block)입니다." },
    { unit: 7, type: "mc", q: "컴파일 결과 창에서 빨간색 X로 표시되는 항목은?", opts: ["오류", "경고", "정보", "정상"], correct: "오류", expl: "빨간 X는 오류(Error), 노란 느낌표는 경고(Warning)를 나타냅니다." },
    { unit: 7, type: "short", q: "온라인 모니터링 시 통전 중인 접점/코일이 일반적으로 표시되는 색은? (한글)", answers: ["초록색", "녹색"], expl: "온라인 모니터링에서는 통전(참) 상태의 접점·코일이 보통 초록색으로 강조 표시됩니다." },
    { unit: 8, type: "mc", q: "TIA Portal 프로젝트를 통째로 압축해 백업/이동할 때 사용하는 기능은?", opts: ["아카이브(Archive)", "복사(Copy)", "인쇄(Print)", "내보내기 불가능"], correct: "아카이브(Archive)", expl: "아카이브(Archive) 기능으로 프로젝트 전체를 하나의 압축 파일로 백업·이동할 수 있습니다." },
    { unit: 8, type: "mc", q: "여러 엔지니어가 동시에 하나의 프로젝트를 작업할 수 있게 해주는 TIA Portal 기능은?", opts: ["Multiuser Engineering", "PLCSIM", "Cross reference", "Watch table"], correct: "Multiuser Engineering", expl: "Multiuser Engineering은 여러 사용자가 동시에 하나의 프로젝트를 나누어 작업할 수 있게 해주는 옵션 기능입니다." }
];
