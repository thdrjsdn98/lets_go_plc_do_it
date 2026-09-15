// 랜덤 모의고사용 전체 문제 풀 (PLC 단축키)
var questionPool = [
    { unit: 1, type: "mc", q: "TIA Portal 단축키에 대한 설명으로 옳은 것은?", opts: ["버전마다 여러 번 바뀐 이력이 있다", "한번 정해지면 절대 안 바뀐다", "모든 버전이 완전히 동일하다", "단축키 자체가 없다"], correct: "버전마다 여러 번 바뀐 이력이 있다", expl: "지멘스 사용자 포럼에는 TIA Portal 단축키가 버전업마다 여러 번 바뀌었다는 불만이 실제로 여러 차례 제기되었습니다." },
    { unit: 1, type: "mc", q: "단축키를 안전하게 확인하는 가장 좋은 방법은?", opts: ["실제 설치 버전에서 Options→Settings로 확인", "인터넷의 특정 옛날 버전표를 그대로 암기", "매뉴얼 없이 추측", "확인할 필요 없음"], correct: "실제 설치 버전에서 Options→Settings로 확인", expl: "버전마다 단축키가 다를 수 있으므로, 실제 설치된 버전의 설정 화면에서 직접 확인하는 것이 가장 정확합니다." },
    { unit: 2, type: "mc", q: "프로젝트/파일 저장에 쓰이는 공통 단축키는?", opts: ["Ctrl + S", "Ctrl + O", "Ctrl + N", "Ctrl + P"], correct: "Ctrl + S", expl: "Ctrl+S는 대부분의 윈도우 프로그램과 마찬가지로 저장에 사용됩니다." },
    { unit: 2, type: "mc", q: "인쇄 대화상자를 여는 데 널리 쓰이는 공통 단축키는?", opts: ["Ctrl + P", "Ctrl + S", "Ctrl + F", "Ctrl + Z"], correct: "Ctrl + P", expl: "Ctrl+P는 대부분의 윈도우 프로그램에서 인쇄 대화상자를 여는 공통 단축키입니다." },
    { unit: 3, type: "mc", q: "실행취소의 반대(다시 실행)에 쓰이는 단축키는?", opts: ["Ctrl + Y", "Ctrl + Z", "Ctrl + S", "Ctrl + X"], correct: "Ctrl + Y", expl: "Ctrl+Z는 실행 취소, Ctrl+Y는 다시 실행에 해당합니다." },
    { unit: 3, type: "mc", q: "현재 화면의 모든 항목을 선택하는 공통 단축키는?", opts: ["Ctrl + A", "Ctrl + D", "Ctrl + E", "Ctrl + B"], correct: "Ctrl + A", expl: "Ctrl+A는 대부분의 윈도우 프로그램에서 전체 선택에 사용되는 공통 단축키입니다." },
    { unit: 4, type: "mc", q: "현재 화면에서 특정 태그·텍스트를 찾을 때 쓰는 공통 단축키는?", opts: ["Ctrl + F", "Ctrl + G", "Ctrl + K", "Ctrl + L"], correct: "Ctrl + F", expl: "Ctrl+F는 대부분의 윈도우 프로그램에서 찾기에 사용되는 공통 단축키입니다." },
    { unit: 4, type: "short", q: "사용자들 사이에서 상호참조(Cross reference) 창을 여는 데 널리 쓰인다고 알려진 단축키는?", answers: ["Shift+F11", "Shift + F11"], expl: "지멘스 포럼 등에서 Shift+F11이 상호참조 창을 여는 단축키로 자주 언급됩니다(버전별 재확인 권장)." },
    { unit: 5, type: "mc", q: "대부분의 윈도우 프로그램에서 화면을 확대/축소할 때 자주 쓰이는 조합은?", opts: ["Ctrl + 마우스 휠", "Alt + 마우스 휠", "Shift + 마우스 휠", "마우스 휠 단독"], correct: "Ctrl + 마우스 휠", expl: "Ctrl + 마우스 휠은 다수의 윈도우 프로그램에서 화면 확대/축소에 널리 쓰이는 조합입니다." },
    { unit: 5, type: "mc", q: "여러 개의 열린 창(도킹된 뷰)을 순서대로 전환할 때 널리 쓰이는 윈도우 공통 단축키는?", opts: ["Ctrl + Tab", "Ctrl + Shift", "Alt + F4", "Ctrl + W"], correct: "Ctrl + Tab", expl: "Ctrl + Tab은 여러 창/탭을 순서대로 전환하는 데 널리 쓰이는 윈도우 공통 단축키입니다." },
    { unit: 6, type: "mc", q: "컴파일·다운로드처럼 버전마다 단축키가 바뀔 수 있는 기능을 안전하게 실행하는 방법은?", opts: ["프로젝트 트리에서 디바이스 우클릭 메뉴 사용", "아무 키나 눌러본다", "무조건 F5를 누른다", "프로그램을 재설치한다"], correct: "프로젝트 트리에서 디바이스 우클릭 메뉴 사용", expl: "단축키 대신 우클릭 메뉴를 사용하면 버전에 관계없이 안전하게 같은 기능을 실행할 수 있습니다." },
    { unit: 6, type: "mc", q: "툴바 아이콘에 마우스를 잠깐 올려두면 나타나는, 단축키 정보가 포함된 요소는?", opts: ["툴팁(Tooltip)", "워터마크", "배너", "팝업 광고"], correct: "툴팁(Tooltip)", expl: "툴팁(Tooltip)에는 기능 설명과 함께 해당 버전의 단축키 정보가 표시되는 경우가 많습니다." },
    { unit: 7, type: "mc", q: "TIA Portal에서 직접 단축키를 지정/변경할 수 있는 메뉴 경로는?", opts: ["Options → Settings → General → Keyboard shortcuts", "Online → Diagnostics", "Project → Compile", "Tools → Calculate"], correct: "Options → Settings → General → Keyboard shortcuts", expl: "이 경로에서 현재 버전의 단축키를 검색·확인하고 직접 재할당할 수 있습니다." },
    { unit: 7, type: "mc", q: "단축키를 새로 등록할 때 함께 확인해야 할 것으로 가장 적절한 것은?", opts: ["다른 기능과 중복되지 않는지", "색상이 예쁜지", "아이콘 모양", "키보드 브랜드"], correct: "다른 기능과 중복되지 않는지", expl: "새 단축키가 이미 다른 기능에 쓰이고 있지는 않은지 확인해야 오작동을 피할 수 있습니다." },
    { unit: 8, type: "mc", q: "STEP 7 Classic에서 프로젝트를 관리하는 별도의 프로그램(창) 이름은?", opts: ["SIMATIC Manager", "TIA Portal", "PLCSIM", "WinCC"], correct: "SIMATIC Manager", expl: "STEP 7 Classic은 SIMATIC Manager라는 별도 프로그램에서 프로젝트를 관리합니다." },
    { unit: 8, type: "mc", q: "자주 쓰는 명령어를 모아두고 빠르게 드래그해서 쓸 수 있게 해주는 태스크카드 영역은?", opts: ["즐겨찾기(Favorites)", "라이브러리", "진단", "온라인"], correct: "즐겨찾기(Favorites)", expl: "즐겨찾기(Favorites)에 자주 쓰는 명령어를 등록해두면 작업 속도를 높일 수 있습니다." }
];
