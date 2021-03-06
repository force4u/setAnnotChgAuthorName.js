//setAnnotChgAuthorName.js
//20210130 v1
//注釈の作成者を環境設定＞＞ユーザー情報＞＞姓＋名に変更します
//インストール先は
//ディスク名/Users/ユーザー名/Library/Application Support/Adobe/Acrobat/DC/JavaScripts
//
//注釈の作成者を変更した後で注釈をロックして読み取り専用にして変更出来なくします。
//
//実行

function setAnnotChgAuthorName(){
try {
//↓デバック用のコンソールオープン
//console.show();
//プロパティを取得
var aAnnots = this.selectedAnnots;
//ロック解除
for (var i=0; i < aAnnots.length; i++)
aAnnots[i].setProps({ lock:false});
//読み取り専用を解除
for (var i=0; i < aAnnots.length; i++)
this.selectedAnnots[i].setProps({ readOnly:false});
//作成者を変更
for (var i=0; i < aAnnots.length; i++)
aAnnots[i].setProps({ author:cEditUserName});
//ロックして
for (var i=0; i < aAnnots.length; i++)
aAnnots[i].setProps({ lock:true});
//読み取り専用に
for (var i=0; i < aAnnots.length; i++)
this.selectedAnnots[i].setProps({ readOnly:true});
//エラーした場合
}catch(e) {
var strErrMes = "注釈の作成者の変更に失敗しました";
console.show();
console.println(strErrMes);
}
}

//設定から姓名を取得
var cEditUserName = (identity.name);
console.println('identity.name: ' + cEditUserName + ' ');


//メニュー本体
var PageTitle = {
cName: "注釈の作成者を変更B",
cParent: "Annots",
cExec: "setAnnotChgAuthorName()",
cEnable: "event.rc = true",
cMarked: "event.rc = false",
cTooltext: "注釈の作成者を変更します",
nPos: -4,
cLabel: "注釈の作成者を変更B"
};

//ツールとして登録
app.addToolButton(PageTitle);

