let score = 0;
let answer;
// const rightModalEl = document.querySelector(".right");
// const wrongModalEl = document.querySelector(".wrong");
const optionEl = document.querySelectorAll(".option");
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
optionEl.forEach((el, index) => {
  el.addEventListener("click", e => {
    el.classList.add("large");
    // 클릭을 해서들어왔기 때문에 내가 누른값만 출력
    if (answer === index) {
      // alert("맞음");
      score++;
      document.querySelector(".modal.right").classList.add("open");
    } else {
      // alert("틀림");
      document.querySelector(".score-in-modal").textContent = score;
      score = 0;
      document.querySelector(".modal.wrong").classList.add("open");
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
  optionEl.forEach((el, index) => {
    el.style.backgroundColor = options[index];
  });
  answer = Math.floor(Math.random() * 3);
  document.querySelector(".color-text").textContent = options[answer];
}

// large가 된 화면 지우기 
document.querySelectorAll(".modal").forEach(el => {
  el.addEventListener("click", e => {
    if (e.target === el.querySelector(".close")) {
      e.currentTarget.classList.remove("open");
      optionEl.forEach(el => {
        el.classList.remove("large");
      });
      newStage();
    }
  });
});

newStage();
