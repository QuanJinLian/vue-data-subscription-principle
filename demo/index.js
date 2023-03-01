var user = {
  name: "",
  birth: "",
};

function showFirstName() {
  document.querySelector("#firstName").textContent = `성 : ${
    user.name[0] || ""
  }`;
}

function showLastName() {
  document.querySelector("#lastName").textContent = `이름 : ${user.name.slice(
    1
  )}`;
}

function showAge() {
  const birthday = new Date(user.birth);
  const today = new Date();
  let age = today.getFullYear() - birthday.getFullYear();
  age = isNaN(age) ? "" : age;
  document.querySelector("#age").textContent = `나이 : ${age}`;
}

observe(user); // object 각 필드 값 구독

autoRun(showFirstName); // 함수 실행과 동시에 사용하는 object 값이 변경 될때 자동 실행 되게끔 저장소에 저장
autoRun(showLastName);
autoRun(showAge);
