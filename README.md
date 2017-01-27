MiniMinifier (2016 version)
==

A collection of super tiny minifiers faster and more efficient than most of the other online minifiers!

---

512b CSS Minifier:
===

```` todo ````

- Demo: http://xem.github.io/miniMinifier/css.html

- Test file: https://github.com/xem/miniMinifier/blob/gh-pages/test.css

- Features:

  - Single-pass, instant output, doesn't alter the structure of the code nor the content of the strings (ex: ````content: " ... "````)
  - Removes all CSS comments (ex: ````/* ... */```` )
  - Removes all unnecessary spaces, tabs and line breaks (ex: around ````+ > ~ ; : , ( ) { } /````)
    - Keeps spaces before ````:```` in selectors (ex: ````* :before" != *:before````)
    - Keeps spaces around ````+```` and ````-```` in ````calc(...)````
    - Keeps spaces after ````)```` to preserve compatibility with IE < 9  
  - Removes all unnecessary ````;```` (ex: ````a{color:red;}````)
  - Removes all unnecessary ````*```` in CSS selectors (ex: ````*:before { ... }````)
  - Removes leading and trailing zeros (ex: ````0.1%, 1.0%, 0.0px````)
  - Removes units after zero (ex: ````0px 0rem 0% 0turn 0vmax 0dpi````
    - Keeps ````%```` after zero in parenthesis (ex: ````hsl(123,0%,0%)````) 
  - Converts RGB colors in hex (ex: ````rgb(255, 0, 0) => #FF0000````)
  - Minifies 6-digit hex colors to 3-digit hex colors if possible (ex: ````#FF0000 => #F00````)
  - Replace hex colors with shorter names (ex: ````#F00 => red````)
  - Removes empty rules and media queries
  - Removes unnecessary quotes in ````url("...")```` or ````font-family: "..."````)
  - Replace font-weight values (ex: ````normal = 400, bold = 500````)
  
- Benchmark:
  
  - **Bootstrap 3.3.7**: commented: 142.58kb - minified: 118.35kb - csscompressor.com: 120.66kb - MiniMinifier: ?kb
  - **Normalize 5.0.0**: commented: 8.31kb - csscompressor.com: 2332b - MiniMinifier: ?b
  - **Our test.css**: commented: 1529b - csscompressor.com: 503b - MiniMinifier: ?b

---

128b HTML minifier
===

````<textarea oninput='value=value.replace(/(<!--[^]+?->|\s)+/g," ").replace(/ (?=<|$)|<\/[tl].>|<.p> *(<[p/])| ?\/?(>)/gi,"$1$2")'>````

- Demo: http://xem.github.io/miniMinifier/html.html

- Simple test file: https://github.com/xem/miniMinifier/blob/gh-pages/test.html

- Features:

  - Removes all HTML comments
  - Removes all unnecessary spaces, tabs and line breaks
  - Removes trailing spaces and slashes in tags (ex: ````<br />````)
  - Removes unnecessary closing tags (````</li>````, ````</tr>````, ````</th>````,````</td>```` and ````</p>```` sometimes)
  - Warning: strings can be altered (ex: ````<body onload="...">```` )

- Benchmark:

  - **Our test.html**: commented: 710b - willpeavy.com: 399b - kangax.github.io/html-minifier: 273b - MiniMinifier: 273b

--
