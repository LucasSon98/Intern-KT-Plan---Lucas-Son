// Regular Expressions are used to create string patterns for text search and text replace
// Syntax: /pattern/modifiers;

// String methods

// search(): uses an expression to search for a match, and returns the position of the match
// Example:

let email = 'lucas.son@zs.com';
let n = email.search("@");
console.log(n);


// replace(): replaces a specified value with another value in a string

let text = "Visit Microsoft!";
let result = text.replace("Microsoft", "W3Schools");

// Creating a regular expression
// - regular expression literal
    const re = /ab+c/
// improves performance. Use it when sure that it will remain constant

// - calling the constructor function of the RegExp object
    const re = new RegExp("ab+c");
// Better for when we know the regex's ppattern will be changing or don't know it at first



// Modifiers:
//      - i: perform case-insensitive matching
//        Example:

          let text = "Hello, World";
          let n = text.search(/world/i);
          console.log(n); // Expected output: 7

          n = text.search(/world/);
          console.log(n); // Expected output: -1 --> not found

//      - g: perform a global match (find all matches rather than stopping after the first match)
//        Example:

            let text = "Hello, World, Big World, Small World";
            let n = text.match(/World/g); // match() is a string method which returns an array with all the matches found in a string against a regular expression
            console.log(n); // Expected output: ['World','World','World']

            n = text.match(/World/);
            console.log(n); // Expected output: ['World']

//      - m: perform multiline matching when using ^ or $
//        Example:
//          See if there is a line which starts with the word Big in a multiline string

            let text = "Hello, World\nBig World\nSmall World";
            let n = text.match(/^Big/m); 
            console.log(n); // Expected output: ['Big']

            n = text.match(/^Big/);
            console.log(n); // Expected output: null
// Modifiers can be conmbined, ex: ig will perform both case-insensitive matching and global match.
//        Example:
            let text = "Hello, World, Big World, Small World";
            let n = text.match(/world/ig);
            console.log(n); // Expected output: ['World','World','World']

            let text = "Hello, World, Big World, Small World";
            let n = text.match(/world/g);
            console.log(n); // Expected output: null

// Expression Patterns:
//  * Brackets: used to find a range of characters.
//      - [abc]: find any of the characters between the brackets
//        Example:
            let text = "Is this all there is?";
            let result = text.match(/[h]/g); // here the modifier g is important so it doesn't get stuck with the first h
            console.log(result); // Expected output: ['h','h']

//      - [0-9]: find any of the digits between the brackets
//        Example:
            let text = "123456789";
            let result = text.match(/[1-4]/g);
            console.log(result); // Expected output: ['1','2','3','4']

//      - [x|y]: find any of the digits between the brackets
//        Example:
            let text = "re, green, red, green, gren, gr, blue, yellow";
            let result = text.match(/(red|green)/g);
            console.log(result); // Expected output: ['green','red','green']

// Combined Example:
            let text = "First World war started the 28th of July 1914";
            let result = text.match(/([w]|[1-2])/ig);
            console.log(result); // Expected output: ['W','w','2','1','1']


//  * Metacharacters: characters with a special meaning.
//      - \d: find a digit
//          Example:
            let text = "First World war started the 28th of July 1914";
            let result = text.match(/\d/g);
            console.log(result);// Expected output: ['2','8','1','9','1','4']

//      - \s: find a whitespacec character
//          Example:
            let text = "First World war started the 28th of July 1914";
            let result = text.match(/\s/g);
            console.log(result);// Expected output: [' ',' ',' ',' ',' ',' ',' ',' ']

//      - \b: find a match at the beginning of a word (\bWORD), or at the end of a word (WORD\b)
//          Example:
            let text = "HELLO, LOOK AT YOU!"; 
            let result1 = text.search(/\bLO/);
            console.log(result1);// Expected output: 7

            let result2 = text.search(/LO\b/);
            console.log(result2);// Expected output: 3

//      - \uxxxx: find the Uncode character specified by the hexadecimal number xxxx
//          Example:
            let text = "Visit W3Schools. Hello World!"; 
            let result = text.match(/\u0057/g); // 0057 corresponds to the hexadecimal number for 'W'
            console.log(result);// Expected output: ['W','W']

//  * Metacharacters: characters with a special meaning.
//      - n+: matches any string that contains at least one n
//          Example:
            let text = "Hellooo World! Hello W3Schools!"; 
            let result = text.match(/o+/g);
            console.log(result);// Expected output: ['ooo','o','o','oo']

//      - n*: matches any string that contains zero or more occurences of n
//          Example:
            let text = "Hellooo World! Hello W3Schools!"; 
            let result = text.match(/lo*/g); // Do a global search for an "l", followed by zero or more "o" characters
            console.log(result);// Expected output: ['l','looo','l','l','lo','l']

//      - n?: matches any string that contains zero or one occurences of n
//          Example:
            let text = "1, 100 or 1000?";
            let result = text.match(/10?/g);// Do a global search for a "1", followed by zero or one "0" characters
            console.log(result);// Expected output: ['1','10','10']


// -------------------------------------------------------------------------------

// ***** RegEx Methods ******

// test(): Tests for a match in a string. It returns true or false.
// Example:
const pattern = /e/;
pattern.test("The best things in life are free!"); // Expected output: true

/w/.test("The best things in life are free!"); // Expected output: false


// exec(): It searches a string for a specified pattern, and returns the found text as an object.
// If no match is found, it returns an empty (null) object.
// Example:
/e/.exec("The best things in life are free!");
