// 랜덤 모의고사용 전체 문제 풀 (PLC 핵심내용② 래더 명령어)
var questionPool = [
    { unit: 1, type: "mc", q: "입력 조건이 ON된 뒤 설정 시간이 지나야 출력이 ON되는 타이머는?", opts: ["TON", "TOF", "TP", "CTU"], correct: "TON", expl: "TON(On-Delay Timer)은 입력이 켜진 뒤 설정 시간만큼 지연되어 출력이 켜지는 온딜레이 타이머입니다." },
    { unit: 1, type: "mc", q: "한 번 ON되면 RESET(R) 명령이 실행되기 전까지 계속 ON 상태를 유지하는 출력 명령은?", opts: ["일반 코일( = )", "SET(S)", "MOVE", "CMP"], correct: "SET(S)", expl: "SET(S) 코일은 조건이 한 번 참이 되면 이후 조건이 꺼져도 RESET(R)이 실행되기 전까지 출력을 계속 ON으로 유지합니다." }
];
