let result = 0;

let sum = prompt('Скільки буде 2+2?') == '4' ? (result +=10) : (result += 0);
let sun = confirm('Сонце встає на сході?') == true ? (result +=10) : (result += 0);
let division = prompt('Скільки буде 5 / 0?') == 'на 0 ділити не можна' ? (result +=10) : (result += 0);
let skyColor = prompt('Якого кольору небо?') == 'синє' ? (result +=10) : (result += 0);
let weirdQuestion = prompt('Яка правильна відповідь на головне питання життя, всесвіту та всього такого?') == '42' ? (result +=10) : (result += 0);

alert(`Ви набрали ${result} балів з 50 можливих.`)

