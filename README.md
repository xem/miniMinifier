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
  
Advanced CSS Minifier (1kb?):
===

- Features:

  - remove charset rule
  - remove comments
  - keep strings and urls unaltered
  - remove spaces,tabs,line breaks around ~ ; , ( ) { } / @ ! < > =
  - remove spaces around : in at-rules
  - remove spaces before * and : in selectors, if possible
  - remove spaces around + and - in selectors
  - Remove all unnecessary * in selectors
  - remove spaces around * and : in rules
  - Remove spaces before hex colors
  - Remove spaces between ":" and "rgb()"
  - Remove all unnecessary semicolons
  - Remove "+" and leading zeroes in numbers
  - Remove ".0" in decimal numbers
  - Remove "0." in decimal numbers
  - Remove trailing zeroes in decimal numbers
  - Remove "-" before zero
  - Remove units after zero except %
  - Remove % after zero, except in parenthesis and keyframes stops
  - Remove "+", "-" and "." in "-.0", "+.0" and ".0"
  - Convert rgba(0,0,0,0) in transparent
  - Convert opaque rgba colors in rgb (ex: rgba(255, 0, 0, 1) => rgb(255, 0, 0))
  - Convert rgb colors in hex (ex: rgb(255, 0, 0) => #FF0000)
  - Minify 6-digit hex colors to 3-digit hex colors if possible (ex: #FF0000 => #F00)
  - Replace hex colors with shorter names (ex: #F00 => red)
  - Remove empty rules and empty media queries
  - Replace font-weight values with numbers
  - Simplify nth-of-type, nth-child, even, odd
  - Rename ":root" in "html"
  - Compress margin/padding/border-width/border-radius shorthands
  - Convert some units (angles, times, sizes)
  - Remove quotes around identifiers in font / font-family / etc (but not in content!)
  - Remove "https?:" and quotes in urls
  - Avoid repeating identical css properties in a rule
  - Don't close the last containers in the file
  - lowercase everything that can be lowercased (for better gzip compression)

- WIP:

  - Demo : http://xem.github.io/miniMinifier/css
  - Advanced test file (minified in the demo): https://github.com/xem/miniMinifier/blob/gh-pages/css/test.css

