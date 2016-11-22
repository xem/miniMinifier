// Remove comments 

/* one-line comment */

/* multiline 
comment */

var test0;  // inline comment

// Remove spaces around [ ] and =
var test1 = [ ];

// Remove spaces around ( )
var test2 = ( 2 + 2 );

// Remove spaces around { }
var test3 = { };

// Remove spaces around , ;
var test4 , test4bis ;

// Remove spaces around .
var test5 = Math . round( 5.5 );

// Remove spaces around  ? and  :
var test6 = true ? false : true;

// Remove spaces around < >
var test7 = ( 1 > 0 && 0 < 1);

// Remove spaces around + - * / %
var test8 = ((((1 * 2) / 3) + 4) - 5) % 6;

// Remove spaces around & |
var test9 = (0xFF & 0x33) | 0xdd;

// Remove spaces around ~
var test10 = ~ 1.5;

// Remove spaces around !
var test11 = ! false;

// Remove final ; and ; before } 
var test12 = function(){var r = 1; return r; }