// JSON is a format for storing and transporting data. JSON stands for JavaScript Object Notation
// JSON is often used when data is sent from a server to a web page. It is a lightweight data interchange format
// JSON is language independent. The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. Code for reading and generating JSON data can be written in any programming language.

// Example:
// This JSON syntax defines an employees object: an array of 3 employee records (objects)

{
"employees":[
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
]
}

// JSON Syntax Rules:
// - Data is in name/value pairs
// - Data is separated by commas
// - Curly braces hold objects
// - Square brackets hold arrays


// Converting a JSON Text to a JavaScript Object

// A common use of JSON is to read data from a web server, and display the data in a web page.
// For simplicity, this can be demonstrated using a string as input.
// First, create a JavaScript string containing JSON syntax:

let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

// Then, use the JavaScript built-in function JSON.parse() to convert the string into a JavaScript object:

const obj = JSON.parse(text);


// - MIME Type

// MIME "Multipurpose internet mail extensions" is a standard to describe documents in other forms beside ASCII text, e.g. audio, video and images.
// Initially used for email attachments, it has become the de facto standard to define types of documents anywhere.

//A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).


// - JSON.stringify()
// This function allows us to convert objects and arrays into strings under the JSON notation.
// This allows us to send these data types to a server or store them into a local text file.

// Syntax:

JSON.stringify(value)
JSON.stringify(value, replacer)
JSON.stringify(value, replacer, space)

// Examples:

// Object

const obj = {name: "John", age: 30, city: "New York"};
const myJSON = JSON.stringify(obj);

// Array

const arr = ["John", "Peter", "Sally", "Jane"];
const myJSON = JSON.stringify(arr);

// Date 

// In JSON, date objects are not allowed. The JSON.stringify() function will convert any dates into strings.
const obj = {name: "John", today: new Date(), city : "New York"};
const myJSON = JSON.stringify(obj);


// Function

const obj = {name: "John", age: function () {return 30;}, city: "New York"};
obj.age = obj.age.toString(); // In JSON, functions are not allowed as object values. Therefore, the stringify function removes any functions froma a JavaScript object. This code line avoids that.
const myJSON = JSON.stringify(obj);


// - Replacer parameter
// The replacer parameter is either a function or an array which is used to filter the parameters we want to include in the resulting JSON string.

// Example using a function:

function replacer(key, value) {
    // Filtering out properties
    if (typeof value === "string") {
      return undefined;
    }
    return value;
  }
  
  const foo = {
    foundation: "Mozilla",
    model: "box",
    week: 45,
    transport: "car",
    month: 7,
  };
  JSON.stringify(foo, replacer);
  // '{"week":45,"month":7}'

  // Here we are only getting the parameters which do not have a string type value


// Example using an array:

const foo = {
    foundation: "Mozilla",
    model: "box",
    week: 45,
    transport: "car",
    month: 7,
  };
  
  JSON.stringify(foo, ["week", "month"]);
  // '{"week":45,"month":7}', only keep "week" and "month" properties


  // - Space parameter
  // This parameter is used to insert white spcae into the output JSON string for readability purposes

  // Examples:

  // Indent the output with one space
  console.log(JSON.stringify({ a: 2 }, null, " "));
    /*
    {
    "a": 2
    }
    */

  // indent using a tab character
  console.log(JSON.stringify({ uno: 1, dos: 2 }, null, "\t"));
    /*
    {
        "uno": 1,
        "dos": 2
    }
    */


// ***** JSON vs XML *****

// Both JSON and XML can be used to receive data from a web server.
// The following JSON and XML examples both define an employees object, with an array of 3 employees:

// JSON
{"employees":[
    { "firstName":"John", "lastName":"Doe" },
    { "firstName":"Anna", "lastName":"Smith" },
    { "firstName":"Peter", "lastName":"Jones" }
  ]}

// XML
<employees>
  <employee>
    <firstName>John</firstName> <lastName>Doe</lastName>
  </employee>
  <employee>
    <firstName>Anna</firstName> <lastName>Smith</lastName>
  </employee>
  <employee>
    <firstName>Peter</firstName> <lastName>Jones</lastName>
  </employee>
</employees>

// JSON is Like XML Because:
// - Both JSON and XML are "self describing" (human readable)
// - Both JSON and XML are hierarchical (values within values)
// - Both JSON and XML can be parsed and used by lots of programming languages
// - Both JSON and XML can be fetched with an XMLHttpRequest

// JSON is Unlike XML Because
// - JSON doesn't use end tag
// - JSON is shorter
// - JSON is quicker to read and write
// - JSON can use arrays
// The biggest difference is: XML has to be parsed with an XML parser. JSON can be parsed by a standard JavaScript function.
// XML is much more difficult to parse than JSON. JSON is parsed into a ready-to-use JavaScript object.


// ***** JSON vs YAML *****

// YAML uses three dashes (---) to indicate the start of a document and three dots ( ...) to indicate the end of a document.
// Unlike JSON, YAML uses the indentations just like in Python to show the levels in the data.
// The key/value pairs are separated with a colon and the lists begin with a hyphen in YAML.
// YAML allows commenting

// YAML Example:
---
employees:
- firstName: John
  lastName: Doe
- firstName: Anna
  lastName: Smith
- firstName: Peter
  lastName: Jones
...

// YAML is easier to read at the expense of more complex parsing and file generation
// It is said that YAML is a superset of JSON format. What is simply meant by this is that we can parse JSON using a YAML parser.


// ***** JSON vs BSON *****
// BSON stands for Binary JSON. It is a binary file format that is used to store serialized JSON documents in a binary-encoded format.

// Example:

// JSON

{
    "hello" : "world"
}

// BSON

\x16\x00\x00\x00             // Size of the Document
\x02                         // 0x02 = type String
hello\x00                    // field name
\x06\x00\x00\x00world\x00    // field value        
\x00                         // Used to represent end of object

//where “\x01” is used to represent 0000 0001.

// BSON is clearly less human-readible.
// BSON records tend to be littler than JSON records
// The BSON sort arrangement is exceedingly traversable and quick in nature. BSON objects are designed to be highly traversable and lightweight in nature, which makes it a better option for data transfer.
// BSON can be parsed easily and very quickly because it supports type and length encoding, thanks to its binary structure.

// JSON only supports a limited number of basic data types. Most notably, JSON lacks support for dates and binary data.
// JSON objects and properties don’t have fixed length which makes traversal slower.
// JSON consumes less space since BSON includes additional information such as string lengths and object subtypes in order to make traversing faster. BSON may sometimes occypy less space depending on the case.

// BSON adds some non-JSON-native data types, like dates and binary data
// BSON is a serialization format encoding format for JSON mainly used for storing and accessing the documents, whereas JSON is a human-readable standard file format mainly used for transmission of data in the form of key-value attribute pairs.


// ***** JSON vs JSONP *****

// JSONP stands for JSON with Padding.
// JSONP is a method for sending JSON data without worrying about cross-domain issues.
// Requesting a file from another domain can cause problems, due to cross-domain policy.
// Requesting an external script from another domain does not have this problem.
// JSONP uses this advantage, and request files using the script tag instead of the XMLHttpRequest object.

// Here is a full example of how this is done

<!DOCTYPE html>
<html>

<body>

<h2>Click the Button.</h2>
<p>A script tag with a src attribute is created and placed in the document.</p>
<p>The PHP file returns a call to a function with the JSON object as a parameter.</p>

<button onclick="clickButton()">Click me!</button>

<p id="demo"></p>

<script>
function clickButton() {
  let s = document.createElement("script");
  s.src = "demo_jsonp.php";
  document.body.appendChild(s);
}

function myFunc(myObj) {
  document.getElementById("demo").innerHTML = myObj.name;
}
</script>

</body>
</html>



<?php
$myJSON = '{ "name":"John", "age":30, "city":"New York" }';

echo "myFunc(".$myJSON.");";
?>