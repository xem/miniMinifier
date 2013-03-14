A mini CSS minifier written in JS

http://xem.github.com/miniMinifier

Source code:

    // Mini CSS minifier (140 bytes minified)
    // Trims all comments and useless spaces, tabs, line breaks.
    function min(c){
      return c
        .replace(/\/\*(\s|.)*?\*\/|\s+/g, ' ')               // replace comments, whitespaces, tabs, line breaks with a space
        .replace(/^ *| *$|[ ;]*([{};,:!+>~\(\)]) */g, '$1')  // trim spaces at the beginning and the end, trim spaces around [{};,:!+>~()] and trim ; before }
        .replace(/\)([^;{}])/g, ') $1');                     // IE bug: keep a space after ) unless it's followed by [;{}]
    }
    
Bonus:
    
    // Advanced minifier, to call after the last one (334 bytes minified)
    // converts RGB to hex, minifies hex, removes 0 when it's alone before a point, and removes the unit if it's placed after  a 0.
    function min2(c){
      return c
        .replace(/\/\*(\s|.)*?\*\/|\s+/g, ' ')                // replace comments, whitespaces, tabs, line breaks with a space
        .replace(/^ *| *$|[ ;]*([{};,:!+>~\(\)]) */g, '$1')   // trim spaces at the beginning and the end, trim spaces around [{};,:!+>~()] and trim ; before }
        .replace(/\)([^;{}])/g, ') $1')                       // IE bug: keep a space after ) unless it's followed by [;{}]
        .replace(/([ :,])0\./g, '$1.')                        // trim zeros before .
        .replace(/([ :,])0(em|px|%)/g, '$10')                 // trim units after 0
        .replace(/rgb\((\d{1,}),(\d{1,}),(\d{1,})\)/g,        // convert rgb to hex
          function(h,a,b,c,i,p){
            h = "#";
            p = [a,b,c];
            for(i in p){
              h += ("0" + parseInt(p[i]).toString(16)).slice(-2);
            }
            return h;
          }) 
        .replace(/#[a-f0-9]{6}/gi,                            // reduce long hex colors if possible
          function(h,p){
            p = h[2] + h[4] + h[6];
            return p == h[1] + h[3] + h[5] ? "#" + p : h;
          })
      }