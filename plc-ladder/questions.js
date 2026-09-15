// 랜덤 모의고사용 전체 문제 풀 (PLC 핵심내용② 래더 명령어)
var questionPool = [
    { unit: 1, type: "mc", q: "평소 열려있다가 조건이 참이 되면 닫히는(통전되는) 접점은?", opts: ["A접점", "B접점", "코일", "타이머"], correct: "A접점", expl: "A접점(Normally Open)은 평소 열려 있다가 조건이 참이 되면 통전됩니다." },
    { unit: 1, type: "mc", q: "정지버튼처럼 '눌리면 회로를 끊고 싶은' 경우 주로 사용하는 접점은?", opts: ["B접점", "A접점", "SET", "RESET"], correct: "B접점", expl: "B접점(Normally Closed)은 평소 통전 상태이다가 조건이 참이 되면 회로를 끊는 데 사용됩니다." },
    { unit: 2, type: "mc", q: "조건이 꺼지면 즉시 출력도 꺼지는 일반 코일 기호는?", opts: ["( = )", "SET(S)", "RESET(R)", "CTU"], correct: "( = )", expl: "일반 코일(=)은 조건이 참인 동안만 출력이 ON되고 조건이 꺼지면 즉시 OFF됩니다." },
    { unit: 2, type: "mc", q: "SET과 RESET 코일이 같은 스캔에서 동시에 실행 조건이 되면, 최종 상태를 결정하는 요소는?", opts: ["프로그램상 나중에(아래에) 실행되는 명령", "항상 SET이 우선", "항상 RESET이 우선", "무작위로 결정됨"], correct: "프로그램상 나중에(아래에) 실행되는 명령", expl: "일반적으로 프로그램에서 나중에(아래쪽에) 배치된 SET/RESET 명령이 최종 상태를 결정합니다." },
    { unit: 3, type: "mc", q: "입력이 꺼진 후 설정시간이 지나야 출력이 꺼지는 타이머는?", opts: ["TOF", "TON", "TP", "CTU"], correct: "TOF", expl: "TOF(Off-Delay Timer)는 입력이 꺼진 뒤 설정시간이 지나야 출력이 꺼집니다." },
    { unit: 3, type: "mc", q: "입력이 켜지는 순간 설정시간만큼만 출력이 켜지고 자동으로 꺼지는 타이머는?", opts: ["TP", "TON", "TOF", "CTD"], correct: "TP", expl: "TP(Pulse Timer)는 입력이 켜지는 순간부터 설정시간만큼만 출력이 켜지고 이후 자동으로 꺼집니다." },
    { unit: 4, type: "mc", q: "카운트 값이 설정값에서부터 감소하여 0이 되면 출력이 ON되는 카운터는?", opts: ["CTD", "CTU", "CTUD", "TON"], correct: "CTD", expl: "CTD(Down Counter)는 CD 입력마다 값이 감소하여 0이 되면 출력이 ON됩니다." },
    { unit: 4, type: "mc", q: "증가와 감소를 모두 지원하는 카운터는?", opts: ["CTUD", "CTU", "CTD", "TP"], correct: "CTUD", expl: "CTUD는 업(증가)과 다운(감소)을 모두 지원하는 업다운 카운터입니다." },
    { unit: 5, type: "mc", q: "두 값이 서로 다른지 비교하는 연산자는?", opts: ["<>", "==", ">=", "<="], correct: "<>", expl: "<>는 두 값이 서로 다른지를 비교하는 연산자입니다." },
    { unit: 5, type: "mc", q: "비교 명령을 사용할 때 반드시 확인해야 하는 것은?", opts: ["두 값의 데이터 타입 일치 여부", "색상", "폰트 크기", "케이블 길이"], correct: "두 값의 데이터 타입 일치 여부", expl: "비교하려는 두 값의 데이터 타입이 일치해야 정상적으로 비교됩니다." },
    { unit: 6, type: "mc", q: "한 주소의 값을 다른 주소로 복사하는 명령은?", opts: ["MOVE", "CMP", "SET", "RESET"], correct: "MOVE", expl: "MOVE 명령은 한 주소의 값을 다른 주소로 그대로 복사합니다." },
    { unit: 6, type: "mc", q: "두 값을 더하는 연산 명령은?", opts: ["ADD", "SUB", "MUL", "DIV"], correct: "ADD", expl: "ADD는 두 값을 더하는 사칙연산 명령입니다." },
    { unit: 7, type: "mc", q: "0 또는 1 두 가지 값만 가지는 가장 기본적인 데이터 타입은?", opts: ["Bool", "Int", "Real", "Byte"], correct: "Bool", expl: "Bool은 0(거짓) 또는 1(참) 두 가지 값만 가지는 가장 기본적인 데이터 타입입니다." },
    { unit: 7, type: "mc", q: "소수점이 있는 값을 저장할 때 사용하는 데이터 타입은?", opts: ["Real", "Bool", "Byte", "Int"], correct: "Real", expl: "Real은 소수점을 포함한 실수 값을 저장하는 데이터 타입입니다." },
    { unit: 8, type: "mc", q: "여러 개의 FC/FB로 나누어 프로그램을 구성하는 주된 이유는?", opts: ["가독성과 재사용성 향상", "속도가 항상 빨라짐", "메모리가 무한대가 됨", "특별한 이유 없음"], correct: "가독성과 재사용성 향상", expl: "기능별로 블록을 나누면 프로그램의 가독성이 좋아지고 다른 프로젝트에서도 재사용하기 쉬워집니다." },
    { unit: 8, type: "mc", q: "FB를 호출할 때 그 상태(값)를 저장하기 위해 함께 사용하는 블록은?", opts: ["인스턴스 DB", "글로벌 DB만 가능", "OB", "FC"], correct: "인스턴스 DB", expl: "FB 호출시 인스턴스 DB를 함께 지정하여 다음 스캔에서도 상태를 기억할 수 있습니다." }
];
