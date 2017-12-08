var code = p.value,
  
string = url = attr = 0,
string_back = url_back = attr_back = 0,
strings = [];
urls = [];
attrs = [];

p.innerHTML =

code

// Remove charset rule
.replace(/@charset (".*?"|'.*?');/g, "") 

// Remove comments /* ... * /
.replace(/\/\*[^]*?\*\//g,'') 

// Compress spaces/tabs/line breaks as 1 space
.replace(/\s+/g,' ')

// Tokenize urls 
.replace(/url\(.*?\)/g, z=>{urls[url] = z; return `&&&${url++}&&&`}) 

// Tokenize strings to keep them unaltered
.replace(/"(\\"|.)*?"|'(\\'|.)*?'/g, z=>{strings[string] = z; return `&&${string++}&&`})

// Remove spaces,tabs,line breaks around ~ ; , ( ) { } / @ ! < > = <= >= ' "
.replace(/ *([~;,(){}\/@!<>='"]+) */g,'$1') 

// Isolate at-rules
.replace(/(^|\{|\})@[^{}]+?(?=\{)/g, a => { 
  return a
  .replace(/ ?([*:]) ?/g,'$1') // remove spaces around : in at-rules
})

// Isolate selectors
.replace(/(^|\{|\})[^{}]+?(?=\{)/g, a => { 
  return a
  .replace(/ ?([+-]) ?/g,'$1') // remove spaces around + and -
  .replace(/(^|,|}) ([*:])/g,'$1$2') // keep spaces before * and :, except if they follow ^ or , or }
  .replace(/([^{},]*)(,(\1)(?=[,{]))*/g, "$1") // Avoid repetitions of selectors
})

// Isolate rules
.replace(/{[^{}]*}/g, a => { 
  return a
  .replace(/ ?([*:]) ?/g,'$1') // remove spaces around * and : 
  .replace(/ #/g, "#") // Remove spaces before hex colors

})

// Tokenize case insensitive attr selectors
.replace(/\[[^\]]* i\]/g, z=>{attrs[attr] = z; return `&&&&${attr++}&&&&`})

// Lowercase all the rest
.toLowerCase()

// Put back tokenized attr selectors
.replace(/&&&&\d+&&&&/g, z=>attrs[attr_back++])

// Remove spaces between ":" and "rgb()"
.replace(/: rgb/g, ":rgb")

// Remove all unnecessary ;
.replace(/;+}/g, '}')
.replace(/{;+/g, '{')

// Remove all unnecessary * in selectors
.replace(/(^|,|}| )\*:/g,'$1:')

// Remove "+" and leading zeroes after space or ":" or "/" or "*" and before any other number
.replace(/([ :*\/])\+?0*(\d)/g, "$1$2")

// Remove ".0" in decimal numbers
.replace(/(\d)\.0(\D)/g, "$1$2")

// Remove lone zeros before "."
.replace(/(\D)0\.(\d)/g, "$1.$2")

// Remove trailing zeroes in decimal numbers (ex: "1.230")
.replace(/(\.[1-9]+)0*(\D)/g,"$1$2")

// Remove "-" before zero
.replace(/-0(\D)/g, "0$1")

// Remove units after zero 
.replace(/([ :*\/(])0([a-z]+)/g,"$10")

// Remove "+", "-" and "." in "-.0" and "+.0" and ".0"
.replace(/(\D)[-+.]?\.?0(?=\D)/g,"$10")

// Remove % after zero, except in parenthesis (ex: hsl(123,0%,0%)) and keyframes (ex: 0%{...})
.replace(/(\D)0%(?!\{)(?![^(]*\))/g,"$10")

// Convert rgba colors in rgb (ex: rgba(255, 0, 0, 1) => rgb(255, 0, 0))
.replace(/rgba\((\d+,\d+,\d+),1(\.0)?\)/g, "rgb($1)")
.replace(/hsla\(([^,]+,[^,]+,[^,]+),1(\.0)?\)/g, "hsl($1)")

// Convert rgba(0,0,0,0) in transparent
.replace(/rgba\(0,0,0,0\)/g, "transparent")

// Convert rgb colors in hex (ex: rgb(255, 0, 0) => #FF0000)
.replace(/rgb\((\d+),(\d+),(\d+)\)/g, (a,b,c,d)=>{
  return "#" + ("0"+(+b).toString(16)).slice(-2) + ("0"+(+c).toString(16)).slice(-2) + ("0"+(+d).toString(16)).slice(-2);
})

// Minify 6-digit hex colors to 3-digit hex colors if possible (ex: #FF0000 => #F00)
.replace(/#([0-9a-f])\1([0-9a-f])\2([0-9a-f])\3/g, "#$1$2$3")

// Replace hex colors with shorter names (ex: #F00 => red)
.replace(/#[0-9a-f]+/g, a=>{
  return {
    "#f0ffff": "azure",
    "#f5f5bc": "beige",
    "#ffe4c4": "bisque",
    "#a52a2a": "brown",
    "#ff7f50": "coral",
    "#ffd700": "gold",
    "#808080": "gray",
    "#008000": "green",
    "#4b0082": "indigo",
    "#fffff0": "ivory",
    "#f0e68c": "khaki",
    "#faf0e6": "linen",
    "#800000": "maroon",
    "#000080": "navy",
    "#808000": "olive",
    "#ffa500": "orange",
    "#da70d6": "orchid",
    "#cd853f": "peru",
    "#ffc0cb": "pink",
    "#dda0dd": "plum",
    "#800080": "purple",
    "#fa8072": "salmon",
    "#a0522d": "sienna",
    "#c0c0c0": "silver",
    "#fffafa": "snow",
    "#d2b48c": "tan",
    "#008080": "teal",
    "#ff6347": "tomato",
    "#ee82ee": "violet",
    "#f5deb3": "wheat",
    "#f00": "red"
  }[a] || a;
})

// Remove empty rules and empty media queries
.replace(/(^|\{|\})[^{}]+?\{\}/g, "$1")
.replace(/@[^{}]+?\{\}/g, "")

// Replace font-weight values (normal => 400, bold => 500)
.replace(/(font(-weight)?:[^;]*)normal/g, "$1400")
.replace(/(font(-weight)?:[^;]*)bold/g, "$1700")

// Simplify nth-of-type and nth-child
.replace(/:nth-child\(1\)/g, ":first-child")
.replace(/:nth-of-type\(1\)/g, ":first-of-type")
.replace(/nth-child\(even\)/g, ":nth-child(2n)")
.replace(/:nth-of-type\(even\)/g, ":nth-of-type(2n)")
.replace(/:nth-child\(2n[+-]1\)/g, ":nth-child(odd)")
.replace(/:nth-of-type\(2n[+-]1\)/g, ":nth-of-type(odd)")

// Rename ":root" in "html"
.replace(/:root/g, "html")

// Rewrite margin/padding/border-width/border-radius shorthands with less attributes
.replace(/((margin|padding|border-width|border-radius):)([^ ;}]+?) \3 \3 \3/g, "$1$3")
.replace(/((margin|padding|border-width|border-radius):)([^^ ;}]+?) ([^ ;}]+?) \3 \4/g, "$1$3 $4")
.replace(/((margin|padding|border-width|border-radius):)([^ ;}]+?) ([^ ;}]+?) ([^ ;}]+?) \4/g, "$1$3 $4 $5")

// Convert units (except: 3pt = 4px ; 25.4mm  = 96px = 1in ; 16px = 1pc)
.replace(/([: {(-])360deg/g,"$11turn") // 360deg = 1turn
.replace(/([: {(-])720deg/g,"$12turn") // 720deg = 2turn
.replace(/([: {(-])(\d+)000ms/g,"$1$2s") // 1000ms = 1s
.replace(/([: {(-])(\d+)(\d)00ms/g,"$1$2.$3s") // 100ms = .1s
.replace(/([: {(-])(\d*)(\d\d)0ms/g,"$1$2.$3s") // XY0ms = .XYs
.replace(/([: {(-])(\d+)0mm/g,"$1$2cm") // 10mm = 1 cm

// Put back tokenized urls
.replace(/&&&\d+&&&/g, z=>urls[url_back++])

// Remove "https?:" and quotes in urls
.replace(/url\(('|")?(https?:)?(.*?)('|")?\)/g, "url($3)")

// Put back tokenized strings
// TODO? => if a string is between quotes, and contains an escaped quote, and no double quote, surround it with double quotes and unescape rhe quote (and vice versa)
.replace(/&&\d+&&/g, z=>strings[string_back++])

// Remove quotes around [a-zA-Z]* names in font / font-family /... (but not content!) (may affect strings)
.replace(/(content:[^;}]*)|'([a-zA-Z-_ ]+)'|"([a-zA-Z-_ ]+)"/g, "$1$2$3")

// Avoid repetitions of properties
.replace(/([^{}:;]*:[^{}:;]*)(;(\1)(?=[;}]))*/g, "$1")

// Avoid repetitions of rules
.replace(/([^{]*{[^}]*})(\1)*/g, "$1")

// Remove trailing containers
.replace(/["']?\)?}?}?}?$/, "")

// Debug
.replace(/}+/g, "}\n");