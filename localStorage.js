var LSTJSON = {};

// localStorage���g���Ȃ����̂ݗL���ɂ���
if(!localStorage) {
	// json2���g���̂œǂݍ���ǂ��B�p�X�͓K���ɏ��������Ă��������B
	// json2�������Ă��Ȃ����͂����炩��DL��https://github.com/douglascrockford/JSON-js
	document.write('<script type="text/javascript" src="./js/json2.js"></script>');
	
	var localStorage = new Array();
	
	LSTJSON.load = function(filename) {
		var fso = new ActiveXObject("Scripting.FileSystemObject");
		// �쐬�ς݂Ȃ�%TMP%���ɂ���
		var filepath = fso.BuildPath(fso.GetSpecialFolder(2).Path, filename+".json");
		// ����ۂ��ƍ���̂ŏ����l�����Ă���
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
		// %TMP%���ɍ쐬
		var filepath = fso.BuildPath(fso.GetSpecialFolder(2).Path, filename+".json");
		var stream = fso.CreateTextFile(filepath);
		stream.Write(JSON.stringify(localStorage));
		stream.Close();
	};
}
// localStorage���g���鎞��load��save�𖳎�����
else {
	alert(localStorage);
	LSTJSON.load = function(){};
	LSTJSON.save = function(){};
}