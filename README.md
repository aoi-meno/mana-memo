<h1>プロジェクト名：マナメモ</h1>
<br />
現在の開発状況:試作品。メモ登録機能なし、設定維持なし、html,フロントエンドのみ。<br />
展望：mongoDBを使ったメモ登録機能やユーザー管理、vue.js+node.js環境への移植、出来ればwebサービス的な物にしてみたい<br />
<br />
・概要<br />
形態素解析器kuromoji.jsを利用し、自動的に文章中の名詞の検索リンクを生成してくれるメモアプリケーション。<br />
WEBブラウザ上で動き、スマートフォン上でも使える。<br />
エディタにテキストタイプするとリアルタイムで名詞毎に辞書・百科サイトに直接行けるボタンを生成してくれる。<br />
サイトは設定で変更可。学習的なメモ、文章を意味的に分析する場面、文章内に未知語が多い場合や文章を校閲する場面にターゲットをおいた。<br />
<br />
・製作動機<br />
メモを書くとき等、範囲選択でコピー＆ペーストして一つ一つ希望の辞書で検索するのが手間だと感じたこと。<br />
また、マシンパワーが有り余るなか、メモアプリを単純に書くだけものにするのはもったいないのではないか？という疑問があったこと。<br />
デスクトップ環境では単語にマウスオーバーで意味を出してくれるブラウザアドオンがあるが、WEBアプリでそれに近いことが実装出来ないかと思ったこと。<br />
この三つの動機から、制作した。<br />
<br />
・課題<br />
アクセス性が思ったほど良くなかった。<br />
単語の並びが文の順番通りなので見づらく、検索リンク先が同タブ・アプリ内ではなく別タブで立ち上がる点が面倒<br />
複数回出現するからこの単語は重要だと判断して単語のランク付けをする機能や<br />
あるいはリンクを踏んだ回数からこの間も調べたなどの履歴機能が必要と思われる。<br />
サービスであれば検索回数なども入れてランク付けするとなおよいかもしれない<br />
同一タブ内、アプリ内で辞書サイトを開くようにすることも必要。<br />
<br />
<br />
<img src="./im324.png" alt="操作説明" title="操作説明">
<br />
This software includes the work that is distributed in the Apache License 2.0<br />
-------------------------------------------------------------------------------------------------------------------------------------<br />
Onsen UI<br />
    Copyright 2013-2017 ASIAL CORPORATION<br />
<br />
kuromoji.js(https://github.com/takuyaa/kuromoji.js)<br />
    Copyright Copyright 2014 Takuya Asano<br />
    Copyright 2010-2014 Atilika Inc. and contributors<br />
<br />
<br />
Licensed under the Apache License, Version 2.0 (the "License");<br />
you may not use this file except in compliance with the License.<br />
You may obtain a copy of the License at<br />
<br />
    http://www.apache.org/licenses/LICENSE-2.0<br />
<br />
Unless required by applicable law or agreed to in writing, software<br />
distributed under the License is distributed on an "AS IS" BASIS,<br />
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.<br />
See the License for the specific language governing permissions and<br />
limitations under the License.<br />
-------------------------------------------------------------------------------------------------------------------------------------<br />
The MIT License (MIT)<br />
<br />
Vue.js<br />
 Copyright (c) 2013-present, Yuxi (Evan) You<br />
<br />
Permission is hereby granted, free of charge, to any person obtaining a copy<br />
of this software and associated documentation files (the "Software"), to deal<br />
in the Software without restriction, including without limitation the rights<br />
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell<br />
copies of the Software, and to permit persons to whom the Software is<br />
furnished to do so, subject to the following conditions:<br />
<br />
The above copyright notice and this permission notice shall be included in<br />
all copies or substantial portions of the Software.<br />
<br />
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR<br />
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,<br />
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE<br />
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER<br />
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,<br />
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN<br />
THE SOFTWARE.<br />
-------------------------------------------------------------------------------------------------------------------------------------<br />
