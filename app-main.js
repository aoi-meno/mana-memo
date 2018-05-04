//初期化処理
//-----------------------------------------------------------------------------------------------------------------------------------------
//tokenizer初期化
var tokenizer = null;

//基本データ初期化
var data = {
  mTitle:"",
  mText: "",
  tokens: [],
  tokens_ex:[],
  tokens_ex2:[],
  filter_basic:"",
  filter_pos:"名詞 || 動詞",
  filter_length: 0,
  mList:[],
  isLoading: true,
  setting_dic_name: '指定検索',
  setting_dic_url:"https://ja.m.wikipedia.org/w/index.php?search=",
};

//function
//-----------------------------------------------------------------------------------------------------------------------------------------
// 入力された内容をローカルストレージに保存する
function saveText() {
  var title = data.mTitle;
  var text = data.mText;
  var analysis = data.token_ex2;
  var time = new Date();
  localStorage.setItem(time, title, text, analysis);
}

// 入力された内容,分析内容のリセット
function clearText(){
  data.mTitle = "";
  data.mText = "";
  data.tokens = [];
  data.tokens_ex = [];
  data.tokens_ex2 = [];
}

// ローカルストレージに保存した値を再描画する
function showText() {
  var key, value, html = [];
  data.mList = [];
  for(var i=0, len=localStorage.length; i<len; i++) {
    key = localStorage.key(i);
    value = localStorage.getItem(key);
    data.mList.push(value);
  }
  console.log(data.mList);
}

// 文字をエスケープする
function escapeText(text) {
  var TABLE_FOR_ESCAPE_HTML = {
    "&": "&amp;",
    "\"": "&quot;",
    "<": "&lt;",
    ">": "&gt;"
  };
  return text.replace(/[&"<>]/g, function(match) {
    return TABLE_FOR_ESCAPE_HTML[match];
  });
}

// 入力チェックを行う
function checkText(text) {
  if (0 === text.length || 20 < text.length) {
    alert("文字数は1〜20字にしてください");
    return false;
  }
  var length = localStorage.length;
  for (var i = 0; i < length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    if (text === value) {
      alert("同じ内容は避けてください");
      return false;
    }
  }
  return true;
}

//記号フィルタリング
function validateString(val) {
  var reg = new RegExp(/[!"#$%&'()\*\+\-\.,、。「」\/:;<=>?@\[\\\]^_`{|}~]/g);
	if(reg.test(val)) {
		return false;
	}
  return true;
}

//分析内容のフィルタリング機能
function tokens_extract() {
  for (var i = 0; i < data.tokens.length; i++) {
    if(data.tokens[i].pos == data.filter_pos && data.tokens[i].basic_form.length >= data.filter_length){
		  if(validateString(data.tokens[i].surface_form)){
			  data.tokens_ex.push(data.tokens[i].surface_form);
			}
    }
  }
  //重複削除
	data.tokens_ex2 = data.tokens_ex.filter(function (x, i, self) {
    return self.indexOf(x) === i;
  });
}







//vue and tokenize
//-----------------------------------------------------------------------------------------------------------------------------------------
//各ページ内容,読み込み時の操作
//Section1
const loginPage = {
  template: '#login',
  data: function() {
    return data;
  },
};

//Section2
const editerPage = {
  template: '#editer',
  data: function() {
    return data;
  },
  props{
    message: "機能をロードしています ...",
  },
};
const analysisPage = {
  template: '#analysis',
  data: function() {
    return data;
  },
  props{
    search_b_label_a:'Wikipedia',
    search_b_label_b:'goo辞書',
    search_url_a:'https://ja.m.wikipedia.org/wiki/',
    search_url_b:'https://dictionary.goo.ne.jp/srch/all/',
    search_url_b_s:'/m0u/',
  },
};

//Section3
const memolistPage = {
  template: '#mlist',
  data: function() {
    return data;
  },
};
const login_memolistPage = {
  template: '#mlist_login',
  data: function() {
    return data;
  },
};
const SearchPage = {
  template: '#search',
  data: function() {
    return data;
  },
};
const settingsPage = {
  template: '#settings',
  data: function() {
    return data;
  },
};
const settingsPage2 = {
  template: '#settings2',
  data: function() {
    return data;
  },
};

//Vueメイン関数
var main = new Vue({
  el: '#app',
  template: '#main',
  data: function(){
    return {
      activeIndex:0,
      tabs: [
        {
          label: 'メモ登録',
          page: editerPage,
          key: "editerPage"
        },
        {
          label: '分析',
          page: analysisPage,
          key: "analysisPage"
        },
        {
          label: 'メモ一覧',
          page: memolistPage,
          key: "memolistPage"
        },
        {
          label: '設定',
          page: settingsPage,
          key: "settingsPage"
        }
      ]
    };
  },
  methods: {
    tokenize: function () {
      if (data.mText == "" || tokenizer == null) {
        data.tokens = [];
        return;
      }
      try {
        data.tokens = tokenizer.tokenize(data.mText);
      } catch (e) {
        console.log(e);
        data.tokens = [];
      }
    },
    md: function(){
      return this.$ons.platform.isAndroid();
    },
  },
  computed: {
    title: function(){
      return this.tabs[this.activeIndex].label;
    },
  },
});

//フォームの内容の変化を検知、変更されたらtokenizeする
jQuery(document).ready(function($){
  $("[id^=text_input]").bind('keyup change', function() {
	  main.tokenize();
    data.tokens_ex = [];
    tokens_extract();
	});
});


// リセットボタン押されたらメモ・分析内容をリセット
document.querySelector("#clear_button").onclick = function() {
  clearText();
},

// 登録ボタン押されたらDB or 一覧に追加
document.querySelector("#send_button").onclick = function() {
  saveText();
  clearText();
  showText();
},


// Load and prepare tokenizer
kuromoji.builder({ dicPath: "./dict/" }).build(function (error, _tokenizer) {
  if (error != null) {
    console.log(error);
  }
  tokenizer = _tokenizer;
  data.message = "Ready";
  data.mText = "";
  data.isLoading = false;
});
