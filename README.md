MiniMinifier
==

A collection of super tiny minifiers more efficient than most of the other online minifiers

---

128b CSS Minifier:
===

````<textarea oninput='value=value.replace(/(\/\*[^]+?\*\/|\s)+/g," ").replace(/^ |([ ;]*)([^\w:*.#% -])([ ;]*)|\*?(:) */g,"$2$4")'>````

- Demo: http://xem.github.io/MiniMinifier/css.html

- Simple test file: https:/github.com/xem/MiniMinifier/test.css

- Features:

  - Instant output
  - Doesn't alter your CSS rules and selectors
  - Removes all CSS comments
  - Removes all unnecessary spaces, tabs and line breaks
  - Removes all unnecessary semicolons
  - Removes all unnecessary ````*```` in CSS selectors (ex: ````*:before { ... }```` )
  - Warning: strings can be altered (ex: ````content: "..."```` )
  - Warning: doesn't remove spaces before ":" in CSS rules (ex: ````color :red```` )
  
- Benchmark:
  
  - **Bootstrap 3.3.7**: commented: 142.58kb - minified: 118.35kb - with csscompressor.com: 120.66kb - with MiniMinifier: 117.93kb
  - **Normalize 5.0.0**: commented: 8.31kb - with csscompressor.com: 2332b - with MiniMinifier: 2331b
  - **Our test.css**: commented: 1529b - with csscompressor.com: 503b - with MiniMinifier: 495b

---

128b HTML minifier
===

````<textarea oninput='value=value.replace(/(<!--[^]+?->|\s)+/g," ").replace(/ (?=<|$)|<\/[tl].>|<.p> *(<[p/])| ?\/?(>)/gi,"$1$2")'>````

- Demo: http://xem.github.io/MiniMinifier/html.html

- Simple test file: https:/github.com/xem/MiniMinifier/test.htm

- Features:

  - Removes all HTML comments
  - Removes all unnecessary spaces, tabs and line breaks
  - Removes trailing spaces and slashes in tags (ex: ````<br />````)
  - Removes unnecessary closing tags (````</li>````, ````</tr>````, ````</th>````,````</td>```` and ````</p>```` sometimes)
  - Warning: strings can be altered (ex: ````<body onload="...">```` )

- Benchmark:

  - **Our test.html**: commented: 710b - with willpeavy.com: 399b - with kangax.github.io/html-minifier: 273b - with MiniMinifier: 273b
  
--
  
512b advanced CSS Minifier:
===

```` (coming soon) ````

- Demo: http://xem.github.io/MiniMinifier/css2.html (coming soon)

- Advanced test file: https:/github.com/xem/MiniMinifier/test2.css

- Advanced features:

  - Removes spaces before ":" in CSS rules
  - Removes leading zeros
  - Removes units after zero
  - Converts RGB colors in hex
  - Minifies 6-digit hex colors to 3-digit hex colors if possible
  - Removes empty rules and media queries
  - Removes unnecessary quotes in url(), font-family
  - Replace font-weight values (normal = 400, bold = 500)
  - Replace hex colors with shorter names
  - Doesn't alter strings

- Benchmark:
  
  - **Bootstrap 3.3.7** : ???kb
  - **Normalize 5.0.0** : ???b
  - **Our test2.css** : ???b

---