// 랜덤 모의고사용 전체 문제 풀 (PLC 핵심내용① 하드웨어·통신)
var questionPool = [
    { unit: 1, type: "mc", q: "리밋스위치, 푸시버튼처럼 PLC로 들어오는 외부 입력 신호에 사용하는 어드레스 접두사는?", opts: ["%I", "%Q", "%M", "%DB"], correct: "%I", expl: "%I는 입력(Input), %Q는 출력(Output), %M은 내부 메모리 비트, %DB는 데이터블록입니다." },
    { unit: 1, type: "short", q: "실제 PLC 하드웨어 없이도 프로그램 동작을 테스트할 수 있는 지멘스의 시뮬레이션 소프트웨어 이름은? (영문)", answers: ["PLCSIM", "S7-PLCSIM", "S7-plcsim", "plcsim"], expl: "PLCSIM(S7-PLCSIM)은 실제 CPU 없이도 PC에서 가상 CPU를 만들어 프로그램을 다운로드·테스트할 수 있는 지멘스의 시뮬레이터입니다." }
];
