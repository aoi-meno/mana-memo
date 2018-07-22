<h4>プロジェクト名：マナメモ</h4>
<p>
・現在の開発状況(7/20)<br>
開発途中、バックエンド実装中。展望としてはmongoDBを使ったメモ登録機能やユーザー管理を付け、webサービスとしてリリース予定。
</p>
<p>
・概要<br>
自動的に文章中の名詞の検索リンクを生成してくれる簡易メモアプリケーション。WEBブラウザ上で動き、スマートフォン上でも使える。
エディタにテキストを打ち込むとリアルタイムで品詞(デフォルトは名詞のみ)毎に辞書・百科サイトに直接行けるボタンを生成してくれる。使用辞書サイトは設定で変更可。
</p>
<p>
・想定用途<br>
記事や小説の執筆などにおける文章の推敲、学習的な書き取りなど文章内に未知語が多い場合や文章校閲など
</p>
<p>
・製作動機<br>
メモを書くとき、範囲選択でコピー＆ペーストして一つ一つ希望の辞書で検索するのが手間だと感じたこと。
また、多くのデバイスのマシンパワーが有り余る中で、メモアプリを単純に書くだけものにするのはもったいないのではないか？という疑問があったこと。
デスクトップ環境では単語にマウスオーバーで意味を出してくれるブラウザアドオンがあるが、WEBアプリでそれに近いことが実装出来ないかと思ったこと。
これら三つの動機から、制作した。
</p>
<p>
・課題<br>
アクセス性が思ったほど良くなかった。単語の並びが文の順番通りなので見づらく、
検索リンク先が同タブ・アプリ内ではなく別タブで立ち上がる点が面倒
複数回出現するからこの単語は重要だと判断して単語のランク付けをする機能や
あるいはリンクを踏んだ回数からこの間も調べたなどの履歴機能が必要と思われる。
サービスであれば検索回数なども入れてランク付けするとなおよいかもしれない
同一タブ内、アプリ内で辞書サイトを開くようにすることも必要。
</p>
<br>
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
