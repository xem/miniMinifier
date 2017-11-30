MiniMinifier
==

A collection of super tiny minifiers more efficient than most of the other online minifiers

---

128b CSS Minifier:
===

````<textarea oninput='value=value.replace(/(\/\*[^]+?\*\/|\s)+/g," ").replace(/^ |([ ;]*)([^\w:*.#% -])([ ;]*)|\*?(:) */g,"$2$4")'>````

- Demo: http://xem.github.io/miniMinifier/css.html

- Test file: https://github.com/xem/miniMinifier/blob/gh-pages/test.css

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
  
  - **Bootstrap 3.3.7**: commented: 142.58kb - minified: 118.35kb - csscompressor.com: 120.66kb - miniMinifier: 117.93kb
  - **Normalize 5.0.0**: commented: 8.31kb - csscompressor.com: 2332b - miniMinifier: 2331b
  - **Our test file**: commented: 1529b - csscompressor.com: 503b - miniMinifier: 495b

---

128b HTML minifier
===

````<textarea oninput='value=value.replace(/(<!--[^]+?->|\s)+/g," ").replace(/ (?=<|$)|<\/[tl].>|<.p> *(<[p/])| ?\/?(>)/gi,"$1$2")'>````

- Demo: http://xem.github.io/miniMinifier/html.html

- Test file: https://github.com/xem/miniMinifier/blob/gh-pages/test.html

- Features:

  - Removes all HTML comments
  - Removes all unnecessary spaces, tabs and line breaks
  - Removes trailing spaces and slashes in tags (ex: ````<br />````)
  - Removes unnecessary closing tags (````</li>````, ````</tr>````, ````</th>````,````</td>```` and ````</p>```` sometimes)
  - Warning: strings can be altered (ex: ````<body onload="...">```` )

- Benchmark:

  - **Our test file**: commented: 710b - willpeavy.com: 399b - [kangax](kangax.github.io/html-minifier): 273b - miniMinifier: 273b

--
  
Advanced CSS Minifier:
===

```` (coming soon) ````
