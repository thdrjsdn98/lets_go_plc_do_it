// 랜덤 모의고사용 전체 문제 풀 (PLC 예제② 타이머·카운터)
var questionPool = [
    { unit: 1, type: "mc", q: "생산 개수를 세는 데 사용하며, 설정값(PV)에 도달하면 출력이 ON되는 카운터 명령은?", opts: ["CTU", "TON", "MOVE", "CMP"], correct: "CTU", expl: "CTU(업카운터)는 CU 입력이 들어올 때마다 카운트가 증가해 설정값(PV)에 도달하면 출력이 ON됩니다." },
    { unit: 1, type: "short", q: "컨베이어를 순서대로 기동시킬 때 각 구간 사이에 지연 시간을 주기 위해 사용하는 대표적인 타이머 명령은? (영문 3글자)", answers: ["TON"], expl: "TON(On-Delay Timer)을 체인처럼 연결하면 일정 간격을 두고 순차적으로 여러 출력을 기동시킬 수 있습니다." }
];
