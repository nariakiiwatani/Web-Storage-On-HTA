var LSTJSON = {};

// localStorageが使えない時のみ有効にする
if(!localStorage) {
	// json2を使うので読み込んどく。パスは適当に書き換えてください。
	// json2を持っていない方はこちらからDL→https://github.com/douglascrockford/JSON-js
	document.write('<script type="text/javascript" src="./js/json2.js"></script>');
	
	var localStorage = new Array();
	
	LSTJSON.load = function(filename) {
		var fso = new ActiveXObject("Scripting.FileSystemObject");
		// 作成済みなら%TMP%下にある
		var filepath = fso.BuildPath(fso.GetSpecialFolder(2).Path, filename+".json");
		// 空っぽだと困るので初期値を入れておく
		var str = "{}";
		if(fso.FileExists(filepath)) {
			var stream = fso.OpenTextFile(filepath);
			str = stream.ReadAll();
			stream.Close();
		}
		localStorage = JSON.parse(str);
	};

	LSTJSON.save = function(filename) {
		var fso = new ActiveXObject("Scripting.FileSystemObject");
		// %TMP%下に作成
		var filepath = fso.BuildPath(fso.GetSpecialFolder(2).Path, filename+".json");
		var stream = fso.CreateTextFile(filepath);
		stream.Write(JSON.stringify(localStorage));
		stream.Close();
	};
}
// localStorageが使える時はloadとsaveを無視する
else {
	alert(localStorage);
	LSTJSON.load = function(){};
	LSTJSON.save = function(){};
}