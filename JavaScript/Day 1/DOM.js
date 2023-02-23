// The DOM (Document Object Model) is an API that represents and interacts with any HTML or XML document.
// REMEMBER: An API (Application Programming Interface) is a software program which is capable of performing a specific task within a set of features and rules
// The DOM is one of the most-used APIs on the Web because it allows code running in a browser to access and interact with every node in the document.
// Nodes can be created, moved and changed. Event listeners can be added to nodes and triggered on occurrence of a given event.
// REMEMBER: nodes refers to the different parts of a document (e.g. an element, text string, or comment), which conforms a node tree

// ******** HTML DOM Methods ********

// HTML DOM methods are actions you can perform (on HTML Elements).
// HTML DOM properties are values (of HTML Elements) that you can set or change.

// Example
// The following example changes the content (the innerHTML) of the <p> element with id="demo":

<html>
<body>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "Hello World!";
</script>

</body>
</html>

// where we have accessed the content of the p flag by using its id through the getElementById method.
// The innerHTML method allows to get the content of the p flag and assign it a new value