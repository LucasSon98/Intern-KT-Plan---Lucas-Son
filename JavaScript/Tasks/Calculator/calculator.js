addEventListener("message", message => {
    if (message.data.command === 'calculate') {
      calculate(message.data.operation);
    }
  });

function calculate(operation){
    const product = function(num1,num2){
        return num1*num2;
    };

    const division = function(num1,num2){
        return num1/num2;
    };

    const addition = function(num1,num2){
        return num1+num2;
    };

    const substraction = function(num1,num2){
        return num1-num2;
    };

    const power = function (power_operation) {
        if(power_operation.match(/\u{00B3}/gu) != null){
            return Number(power_operation.slice(0,-1)) ** 3;
        }else if(power_operation.match(/\u{00B2}/gu) != null){
            return Number(power_operation.slice(0,-1)) ** 2;
        }
    };

    const arr = operation.split(/(?<=[0-9|\u{00B2}|\u{00B3}])-|(?<=[0-9|\u{00B2}|\u{00B3}])\+/gu); // Esto se llama look-arond expression: https://stackoverflow.com/questions/3926451/how-to-match-but-not-capture-part-of-a-regex
    // en este caso lo que estoy pidiendo es que haga un split cuando encuentra un - o + precedido de un numero, pero que ignore ese numero en el split
    // ejemplo: 3-4*-1 --> ['3','4*-1'], hace split solo respecto del - e ignora el numero
    // en el caso contrario en el que no ignorase el numero me devolveria ['','4*-1'] porque hace un split respecto de '3-' en vez de solo '-'
    const plus_minus_operators = operation.match(/(?<=[0-9|\u{00B2}|\u{00B3}])-|(?<=[0-9|\u{00B2}|\u{00B3}])\+/gu)

    console.log(arr);

    arr.forEach((element,index) =>{
        let sub_operation = element;
        let prod_div_operators = sub_operation.match(/[\u{00D7},\u{00F7}]/gu)

        if (prod_div_operators !== null){
            let terms = sub_operation.split(/[\u{00D7},\u{00F7}]/gu);
            prod_div_operators.unshift('\u00D7');

            console.log(terms);

            let result = 1;

            terms.forEach((element,index) => {

                if (typeof element === "string"){
                    if (element.match(/\u{00B3}|\u{00B2}/gu) != null){
                        element = power(element);
                    }
                }

                if (prod_div_operators[index] == '\u00D7'){
                    console.log("is product")
                    result = product(result,Number(element));
                }else{
                    console.log("is division")
                    result = division(result,Number(element));

                }
            })
            console.log(result);
            arr[index] = result;
        }

    });

    if (plus_minus_operators != null){
        plus_minus_operators.unshift('+');
        let result = 0;

        arr.forEach((element,index) =>{
            if (typeof element === "string"){
                if (element.match(/\u{00B3}|\u{00B2}/gu) != null){
                    element = power(element);
                }
            }

            if (plus_minus_operators[index] == "+"){
                result = addition(result,Number(element));
            }else{
                result = substraction(result,Number(element));
            }
        });
        postMessage(result);

    }else{
        if (typeof arr[0] === "string"){
            if (arr[0].match(/\u{00B3}|\u{00B2}/gu) != null){
                arr[0] = power(arr[0]);
            }
        }
        postMessage(Number(arr[0]));

    }

}