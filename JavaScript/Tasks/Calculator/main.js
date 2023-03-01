const worker = new Worker('./calculator.js');

const buttons = document.querySelector('#calculator');
buttons.addEventListener(
    'click',
    (e) => {
        if (e.target.tagName == 'BUTTON'){
            let button_val = e.target.value;

            if (button_val == "C"){
                let calc = document.querySelector('#operation').value;
                calc = calc.slice(0,-1);
                document.querySelector('#operation').value = calc;
            }else if (button_val == "AC"){
                document.querySelector('#operation').value = "";
            }else if (button_val == "="){
                worker.postMessage({
                    command: 'calculate',
                    operation: document.querySelector('#operation').value
                });
            }
            else{
                document.querySelector('#operation').value += button_val;
            }
        
        }
        
    }
)

worker.addEventListener('message', message => {
    let result = String(message.data);
    if (result === 'Infinity'){
        result = '\u{221E}';
    }
    document.querySelector('#result').textContent = result;
    document.querySelector('#operation').value = "";
  });