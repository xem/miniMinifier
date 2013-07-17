// Reset textarea
document.getElementById("code").value = "/* Write or paste tour JSON here */";
document.getElementById("ex1").onclick = function(){document.getElementById("code").value = '{\n    "glossary": {\n        "title": "example glossary",\n		"GlossDiv": {\n            "title": "S",\n			"GlossList": {\n                "GlossEntry": {\n                    "ID": "SGML",\n					"SortAs": "SGML",\n					"GlossTerm": "Standard Generalized Markup Language",\n					"Acronym": "SGML",\n					"Abbrev": "ISO 8879:1986",\n					"GlossDef": {\n                        "para": "A meta-markup language, used to create markup languages such as DocBook.",\n						"GlossSeeAlso": ["GML", "XML"]\n                    },\n					"GlossSee": "markup"\n                }\n            }\n        }\n    }\n}';};

// Handle click on "Minify!"
document.getElementById("minify").addEventListener("click", function(){
  var code = document.getElementById("code").value;
  var size = code.length;
  code = minify(code);
  document.getElementById("code").value = code;
  var size2 = code.length;
  alert("Before: " + size + "Bytes. After: " + size2 + "Bytes. Saved: " + ((100 - Math.round(size2 / size * 100)) || 0) + "%.");
})

function minify(c){
  return c.replace(/\s+/,' ');//.replace(/ *([\[\]{}"':,+-.eE]) */,"$1");
}