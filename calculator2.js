// 給料計算
function calculate() {
  var all = document.getElementById("all");       // 累計活動量
  var period = document.getElementById("period"); // 期間内活動量

  
  if (all.value == ""){
    all.value = 0;    // 累計活動量が未入力なら0を入れる
  }
  
  if (period.value == "") {
    period.vlaue = 0; // 期間内活動量が未入力なら0を入れる
  }

  if (10000 < period.value) {
    period.value = 10000; // 期間活動量は1万が上限なので補正
  }

  // 短期給料計算
  var next_short = document.getElementById("nextShort");
  var value1 = Math.ceil(all.value / 10000) * 2000 + period.value * 200;

  // 下限判定
  if (value1 < 400000) {
    value1 = 400000;
  }

  // 上限判定
  if (5000000 < value1) {
    value1 = 5000000;
  }

  // 短期契約出力
  next_short.value = value1;

  // 長期給料計算
  var next_long = document.getElementById("nextLong");
  var value2 = Math.ceil(all.value / 10000) * 8000;

  // 上限判定
  if (5000000 < value2) {
    value2 = 5000000;
  }

  // 長期契約出力
  next_long.value = value2;

  // いい方色付処理
  if (value2 < value1) {
    next_short.style.color = "#FF0000";
    next_long.style.color = "#333333";
  }
  else {
    next_short.style.color = "#333333";
    next_long.style.color = "#FF0000";
  }

  // コピーボタンを有効家
  var copy = document.getElementById("copy");
  copy.disabled = false;
};

// キー押下時イベント
function onKeyPress(e) {
  if ( e.keyCode !== 13 || ( e.keyCode === 13 && (e.shiftKey === true || e.ctrlKey === true || e.altKey === true) )) { // Enterキー除外
    return false;
  }

  calculate();

  return true;
};

// クリップボードにコピー
function copyToClipBoard() {
  if(navigator.clipboard){
    var next_short = document.getElementById("nextShort");
    var next_long = document.getElementById("nextLong");

    var copy_str = "";
    if (next_long.value < next_short.value) {
      copy_str = next_short.value;
    }
    else {
      copy_str = next_long.value;
    }

    navigator.clipboard.writeText(copy_str);
  }
};