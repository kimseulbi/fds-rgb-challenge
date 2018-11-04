// answer 변수 선언
// 클로저는 코드에 흐름을 파악하기 위해 중요함
// 클로저 - 안쪽 스코프에서 만들어진 바깥 스코프의 변수를 사용하고 있다면, 이함수를 통해 변수를 계속 사용, 바깥 스코프에 해당하는 코드의 실행이 끝난 뒤

// 화면 전환 방법
// 1.dom객체를 새로 만드는경우 - 사용자가 생성및 추가 할지 모르는경우 (ex: 할일 추가)
// 2.스타일을 다르게 넣어서  - 코드 작성 시점에 생성및 추가 갯수를 아는 경우
let score = 0;
let answer;
const rightModalEl = document.querySelector('.right-modal');
const wrongModalEl = document.querySelector('.wrong-modal');
// color 램덤 함수
function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

// 작업을 쏘갬 -> alert이 계속 실행되기 때문에
// 함수를 뺄때 역활과 책임이 맞게 뺴야함
// 전체 CSS 선택자 요소 가져오기 - querySelectorAll (".option") 3개
// forEach() 를 사용하여 반복할 수 있습니다.즉 `루프`( item,index )
document.querySelectorAll(".option").forEach((optionEl, index) => {
    optionEl.addEventListener("click", e => {
        // 클릭을 해서들어왔기 때문에 내가 누른값만 출력
        if (answer === index) {
            // alert("맞음");
            score++;
            document.querySelector('.right-modal').classList.add('open')
        } else {
            // alert("틀림");
            document.querySelector('.score-in-modal').textContent = score
            score = 0;
            document.querySelector('.wrong-modal').classList.add('open');
        }
        // 코드 중복 줄이기
        document.querySelector(".score").textContent = score;
        // 게임 재시작 함수
        // newStage()
    });
});

// 새 게임 나오게 하기 위해서 선언
function newStage() {
    // 재사용 하기 위해 변수선언
    const options = [randomColor(), randomColor(), randomColor()];
    // 옵션 세개가 이 작업을 함 세번 실행
    // optionEl -option1~3 , index- 배열 index
    document.querySelectorAll(".option").forEach((optionEl, index) => {
        optionEl.style.backgroundColor = options[index];
    });
    answer = Math.floor(Math.random() * 3);

    document.querySelector(".color-text").textContent = options[answer];
}

document.querySelector('.next-stage').addEventListener('click', e => {
    newStage()
    rightModalEl.classList.remove('open')
})

document.querySelector('.play-again').addEventListener('click', e => {
    newStage()
    wrongModalEl.classList.remove('open')
})

newStage();


