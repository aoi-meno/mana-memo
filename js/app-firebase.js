// Firebase を初期化する
var config = {
  apiKey: "AIzaSyBOl-F4cFX1yE4fyKgU23kDqXj2Upg2DIE",
  authDomain: "mana-memo.firebaseapp.com",
  databaseURL: "https://mana-memo.firebaseio.com/",
  projectId: "mana-memo",
  storageBucket: "mana-memo.appspot.com",
  messagingSenderId: "688956400573"
};
firebase.initializeApp(config);

var data_path = "/messages";

document.addEventListener("init", function(event) {
  // それぞれのページが表示されるたびにここが呼び出される
  var page = event.target;

  if (page.id === "login_page") {
    // ログインページが表示されたとき、各ボタンのイベント処理を
    // あらかじめ設定しておく
    page.querySelector("#login_button").onclick = function() {
      // ログインボタンが押されたら login() を呼び出す
      login();
    };
    page.querySelector("#regist_button").onclick = function() {
      // 新規登録ボタンが押されたら regist() を呼び出す
      regist();
    };
  } 
  else if (page.id === "main_page") {
    // 掲示板ページが表示されたとき、掲示板のメッセージを表示するとともに
    // 各ボタンのイベント処理を設定する
    firebase.database().ref(data_path).on("child_added", function (data) {
      // データベースを監視して新規書き込み（child_added イベントの発生）が
      // あったら、メッセージを掲示板に表示する
      // メッセージ表示は <div id="all_messages"> タグの配下に insertBefore() を
      // 使って新規のHTMLタグやメッセージの文字列を挿入している
      var new_msg = document.createElement("div");
      new_msg.innerHTML 
      = "<p class='data_email'>" + data.val().timestamp + " " +data.val().email + "</p>" +
        "<p class='data_msg'>" + data.val().msg + "</p>";

      var msgs = document.getElementById("all_messages");
      msgs.insertBefore(new_msg, msgs.firstChild);
    });
    
    page.querySelector("#send_button").onclick = function() {
      // 送信ボタンが押されたら send() を呼び出す
      send();
    };
    page.querySelector("#logout_button").onclick = function() {
      // ログアウトボタンが押されたら logout() を呼び出す
      logout();
    };
  }
});

function login() {
  // 入力されたメールアドレスとパスワードが登録済みかどうかを Firebase に
  // 問い合わせて、登録済みなら掲示板のページ main.html を表示

  // ユーザが入力したメールアドレスとパスワードを取り出す
  var adr = document.getElementById("adr").value;  // 入力されたメールアドレス
  var pwd = document.getElementById("pwd").value;  // 入力されたパスワード

  // Firebase で登録済みのユーザかどうかを確認する
  firebase.auth()
    .signInWithEmailAndPassword(adr, pwd)
    .then(function(user) {
      // ログインが成功したので掲示板のページ main.html を表示する
      //alert("Login success!");
      document.querySelector("#navigator").pushPage("main.html");
    })
    .catch(function(error) {
      // ログインが失敗した
      alert("ログインできませんでした\n\n" + error.message);
    });
}

function regist() {
  // 入力されたメールアドレスとパスワードを Firebase に渡して
  // 新規ユーザとして登録を依頼する

  // ユーザが入力したメールアドレスとパスワードを取り出す
  var adr = document.getElementById("adr").value;  // 入力されたメールアドレス
  var pwd = document.getElementById("pwd").value;  // 入力されたパスワード

  // Firebase にユーザを登録する
  firebase.auth()
    .createUserWithEmailAndPassword(adr, pwd)
    .then(function() {
      alert("ユーザ登録が成功しました\n\nログインしてください");
    })
    .catch(function(error) {
      alert("ユーザ登録が失敗しました\n\n" + error.message);
  });

}

function send() {
  // 掲示板データベースにメッセージを書き込む
  var msg = document.getElementById("new_message").value;  // 送りたいメッセージ
  var user = firebase.auth().currentUser;  // いまこのアプリを使っているユーザ
  var date = new Date();  // 現在の日時

  // Firebase のデータベースにデータを送る
  firebase.database().ref(data_path).push({
    timestamp: gettime(),  // 現在時刻
    email: user.email,     // 投稿者のユーザID
    msg: msg               // 投稿メッセージ
  });
  
  // 書き込みが終了したらメッセージ入力欄をクリアする
  document.getElementById("new_message").value = "";
  
  // いま入力したメッセージは、すでに定義済みの
  // firebase.database().ref(data_path).on("child_added", function (data) {...
  // のところで自動的に表示されるため、ここで自分の掲示板画面に表示する必要はない
}

function logout() {
  // ログアウト処理
  firebase.database().ref(data_path).off();  // データベースとの接続を切る
  firebase.auth().signOut();  // firebase からログアウトする
  document.querySelector("#navigator").popPage();  // ログインページに戻る
}

function gettime() {
  // 現在時刻を "YYYY-MM-DD hh:mm:ss" 形式の文字列にして返す
  var d = new Date();  // 現在時刻オブジェクト
  var str = "";
  
  // 時刻オブジェクトから時刻の文字列を作る
  // ('00' + xxxx).slice(-2) の部分は日付や時間が1桁の場合
  // 先頭に "0" を付加するための処理で、あらかじめ先頭に "00" を
  // 付けてから文字列の末尾の2桁を slice(-2) で取り出している
  str = d.getFullYear() + "-" +
        ("00" + (d.getMonth() + 1)).slice(-2) + "-" +
        ("00" + d.getDate()).slice(-2) + 
        " " +
        ("00" + d.getHours()).slice(-2) + ":" + 
        ("00" + d.getMinutes()).slice(-2) + ":" + 
        ("00" + d.getSeconds()).slice(-2);
  
  return str;
}