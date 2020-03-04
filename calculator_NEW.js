var acc="";
var bt=document.getElementsByClassName("bt");
var value=document.getElementById("value");
var ac=document.getElementById("AC");
var fm=document.getElementById("formula");
var eq=document.getElementById("eq");

function accumulation(input){ //숫자, 기호 버튼 클릭 함수->acc변수에 축적, formula칸에 출력
  acc += input;
  fm.innerHTML = `${acc}`;
  console.log(acc);
};
for(var i=0;i<bt.length;i++) {
  const buttonEl = bt[i];
  buttonEl.addEventListener("click", function () {
    accumulation(buttonEl.innerText);
  });
}

function showValue(){//=버튼 클릭 함수->결과칸에 결과값 전달
  acc = eval(acc);
  value.innerHTML = acc;
};
eq.addEventListener("click", showValue);

function acFunction() {//AC버튼 클릭 함수->결과 칸 공백으로 만들기
  value.innerHTML = "";
  fm.innerHTML= "";
  acc = "";
};
ac.addEventListener("click", acFunction);
