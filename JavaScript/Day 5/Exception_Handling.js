// ***** TRHOW *****

// The throw statement throws a user-defined exception.
// Execution of the current function will stop (the statements after throw won't be executed), and control will be passed to the first catch block in the call stack.
// If no catch block exists among caller functions, the program will terminate.

throw "Error2"; // generates an exception with a string value
throw 42; // generates an exception with the value 42
throw true; // generates an exception with the value true
throw new Error("Required"); // generates an error object with the message of Required

// Example:

function UserException(message) {
    this.message = message;
    this.name = "UserException";
  }
  function getMonthName(mo) {
    mo--; // Adjust month number for array index (1 = Jan, 12 = Dec)
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];
    if (months[mo] !== undefined) {
      return months[mo];
    } else {
      throw new UserException("InvalidMonthNo");
    }
  }
  
  let monthName;
  
  try {
    // statements to try
    const myMonth = 15; // 15 is out of bound to raise the exception
    monthName = getMonthName(myMonth);
  } catch (e) {
    monthName = "unknown";
    console.error(e.message, e.name); // pass exception object to err handler
  }


// ***** TRY / CATCH *****
// The code in the try block is executed first, and if it throws an exception, the code in the catch block will be executed.
// The code in the finally block will always be executed before control flow exits the entire construct.

// A catch-block contains statements that specify what to do if an exception is thrown in the try-block.
// If any statement within the try-block (or in a function called from within the try-block) throws an exception, control is immediately shifted to the catch-block.
// If no exception is thrown in the try-block, the catch-block is skipped.


// The finally block will always execute before control flow exits the try...catch...finally construct.
// It always executes, regardless of whether an exception was thrown or caught.

try {
    tryStatements
  } catch (exceptionVar) {
    catchStatements
  } finally {
    finallyStatements
  }

  