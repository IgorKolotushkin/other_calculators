function addElem(result) {
    document.getElementById('result').innerHTML = `Результат: ${result.toFixed(1)}`;

    const para = document.createElement("li");
    para.className = "list-group-item";
    let d = new Date();
    const node = document.createTextNode('Дата: ' + d + `\nРезультат: ${result.toFixed(1)}`);
    para.appendChild(node);

    const element = document.getElementById("ul-id");
    element.appendChild(para);
}

function calcDuty() {
    const hours = +document.getElementById('hours').value;
    const salary = +document.getElementById('salary').value;
    const bonus = +document.getElementById('bonus').value / hours;
    const vmp = +document.getElementById('vmp').value / hours;
    const sum_night = +document.getElementById('sum_night').value;
    const hours_hight = +document.getElementById('hours_night').value;
    const academic_degree = +document.getElementById('academic_degree').value / hours;
    const intensity = +document.getElementById('intensity').value;
    let category = +document.getElementById('category').value / hours;
    let disutility = (salary * 0.08) / hours;
    let length_of_service = (salary * 0.1) / hours;
    
    let hrs_duty = +document.querySelector('.form-check-input:checked').value;

    let all_salary = (((salary + intensity) / hours) + bonus + vmp + academic_degree + category + disutility + length_of_service) * hrs_duty;
    let all_night = ((sum_night / hours_hight) * 8);
    
    let all_sum =  all_salary + all_night;
    let result = all_sum - (all_sum * 0.13);
    
    alert('Результат: ' + result.toFixed(1));

    addElem(result)
    };

function clearLabel() {
    const dutyLabel = document.getElementsByName('duty');
    for (let i = 0; i < dutyLabel.length; i++) {
        dutyLabel[i].value = ''
    }
    document.getElementById('duty_16').checked = true;
    document.getElementById('result').innerHTML = '';
}
