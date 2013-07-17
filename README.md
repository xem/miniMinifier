miniMinifier
============

A mini CSS minifier written in JavaScript

http://xem.github.com/miniMinifier

Changelog:
----------

v0.1 / 0.2:

```js
// Original version: Remove unnecessary spaces, tabs, line breaks, semicolons, IE compatibility (116 bytes)
css.replace(/\s+/g,' ').replace(/\/\*.*?\*\/ *|^ | $|[ ;]*([{};,:!+>~\.!\(\)]) */g,'$1').replace(/\)([^;{}])/g,') $1')
```

v0.3:

```js
// Original version: Remove more unnecessary spaces (118 bytes)
css.replace(/\/\*(\s|.)*?\*\/|\s+/g,' ').replace(/^ *| *$|[ ;]*([{};,:!+>~\(\)]) */g,'$1').replace(/\)([^;{}])/g,') $1')

// Lighter version, to call many times (100 bytes)
css.replace(/^ | $|[ ;]*([{};,:!+>~\(\)]) */g, '$1').replace(/\s+|\/\*.*?\*\/|(\))([^;,{}])/g,'$1 $2')

// Options updates:

// Remove leading zeros (118 + 29 bytes)
.replace(/([ :,])0\./g,"$1.")

// Remove some zero's units (118 + 36 bytes)
.replace(/([ :,])0(em|px|%)/g,"$10")

// Minify RGB (118 + 152 bytes)
.replace(/rgb\((\d{1,}),(\d{1,}),(\d{1,})\)/g,function(a,b,f,g,e,d){a="#";d=[b,f,g];for(e in d)a+=("0"+parseInt(d[e]).toString(16)).slice(-2);return a})

// Minify long hexadecimal colors (118 + 91 bytes)
.replace(/#[a-f0-9]{6}/gi,function(a,b){b=a[2]+a[4]+a[6];return b==a[1]+a[3]+a[5]?"#"+b:a})
```

v0.4:

```js
// Original version: IE support is now optional (89 bytes):
css[r="replace"](/((\/\*[^]*?\*\/)|\s)+/g,' ')[r](/^ | $|[ ;]*([{};,:!+>~\(\)-@]) */g,'$1')

// Options updates:

// Leading zeros (89 + 21 bytes)
[r](/(\D)0\./g,'$1.')

// Every possible zero's unit (89 + 29 bytes)
[r](/(\D)0([a-z%]+)/gi,'$10')

// RGB (89 + 139 bytes)
[r](/rgb\((\d+),(\d+),(\d+)\)/gi,function(h,a,b,c,i,p){h='#';p=[a,b,c];for(i in p)h+=('0'+parseInt(p[i]).toString(16)).slice(-2);return h})

// Hexadecimal (89 + 86 bytes)
[r](/#[a-f0-9]{6}/gi,function(h,p){p=h[2]+h[4]+h[6];return p==h[1]+h[3]+h[5]?'#'+p:h})

// IE fix (89 + 24 bytes)
[r](/\)(?![;{}])/g,') ')
```

v0.5:

```js
// Original version (87 bytes)
css[r='replace'](/((\/\*[^]*?\*\/)|\s)+/g,' ')[r](/^ | $|[ ;]*([{};,:!+>~()-@]) */g,'$1')

// Options updates:

// Merged leading zeros option + zero's unit option (87 + 40 bytes)
[r](/(\D)((0)[a-z%]+|0(\.))/gi,'$1$3$4')

// RGB option (87 + 137 bytes)
[r](/rgb\((\d+),(\d+),(\d+)\)/gi,function(h,a,b,c,i,p){p='#';h=[a,b,c];for(i in h)p+=(0+parseInt(h[i]).toString(16)).slice(-2);return p})
```

v0.6:

```js
// Merged original and IE option

// Original (80 bytes)
css.replace(/((\/\*[^]*?\*\/)|\s)+/g,' ').replace(/^ | $|[ ;]*([^\w.# ]) */g,'$1')

// Original + IE (89 bytes)
css.replace(/((\/\*[^]*?\*\/)|\s)+/g,' ').replace(/^ | $|[ ;]*([^\w.#) ]) *| (\))/g,'$1$2')

// Options updates:

// Merged RGB and hexadecimal options (+ 204 bytes)
.replace(/rgb\((\d+),(\d+),(\d+)\)|#[a-f0-9]{6}/gi,function(h,a,b,c,i,p){if(c){h='#';p=[a,b,c];for(i in p)h+=('0'+parseInt(p[i]).toString(16)).slice(-2)}p=h[2]+h[4]+h[6];return p==h[1]+h[3]+h[5]?'#'+p:h})
```

v.0.7:

```js
// Merged original, IE option and zero's option

// Original: handle quotes correctly (80 bytes)
css.replace(/(\/\*[^]*?\*\/|\s)+/g,' ').replace(/^ | $|[ ;]*([^\w.#'" ]) */g,'$1')

// Original + IE (80 + 9 bytes)
css.replace(/(\/\*[^]*?\*\/|\s)+/g,' ').replace(/^ | $|[ ;]*([^\w.#)'" ]) *| (\))/g,'$1$2')

// Original + zeros (80 + 30 bytes)
css.replace(/(\/\*[^]*?\*\/|\s)+/g,' ').replace(/(\D)((0)[a-z%]+|0(\.))|^ | $|[ ;]*([^\w.#'" ]) */gi,'$1$3$4$5')

// Original + both (80 + 39 bytes)
css.replace(/(\/\*[^]*?\*\/|\s)+/g,' ').replace(/(\D)((0)[a-z%]+|0(\.))|^ | $|[ ;]*([^\w.#)'" ]) *| (\))/gi,'$1$3$4$5$6')



// Even shorter version, to call many times (62 bytes)
css.replace(/^\s|\s$|\/\*[^]*?\*\/|\s*;*([^\w.#'"\s])\s*/g,'$1')

// IE fix (62 + 10 bytes)
css.replace(/^\s|\s$|\/\*[^]*?\*\/|\s*;*([^\w.#)'"\s])\s*|\s(\))/g,'$1$2')

// Zeros (62 + 30 bytes)
css.replace(/(\D)((0)[a-z%]+|0(\.))|^\s|\s$|\/\*[^]*?\*\/|\s*;*([^\w.#'"\s])\s*/gi,'$1$3$4$5')

// Both (62 + 40 bytes)
css.replace(/(\D)((0)[a-z%]+|0(\.))|^\s|\s$|\/\*[^]*?\*\/|\s*;*([^\w.#)'"\s])\s*|\s(\))/gi,'$1$3$4$5$6')
```

v.0.8:
Added 2 bytes to handle correctly rare bugs like ";-" -> "-" and "* *" -> "**"

```js
// [^\w.#'"\s] is now [^\w.#'"\s*-] in the regex
````