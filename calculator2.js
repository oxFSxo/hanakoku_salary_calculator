function calculate() {
  var all = document.getElementById("all");
  var period = document.getElementById("period");
  if (all.value == "" || period.value == "") {
    alert("未入力の欄があります");
    return;
  }
  var next = document.getElementById("next");
  var value1 = Math.ceil(all.value / 10000) * 2000 + period.value * 100;
  if (value1 < 400000) {
    value1 = 400000;
  }
  next.value = value1;
};
