function calc_duty() {
    const hours = +document.getElementById('hours').value;
    const salary = +document.getElementById('salary').value / hours;
    const bonus = +document.getElementById('bonus').value / hours;
    const vmp = +document.getElementById('vmp').value / hours;
    const sum_night = +document.getElementById('sum_night').value;
    const hours_hight = +document.getElementById('hours_night').value;
    const academic_degree = 3000 / hours;
    let category = salary * 0.22 / hours;
    let disutility = salary * 0.08 / hours;
    
    let hrs_duty = +document.querySelector('.form-check-input:checked').value;

    let all_salary = ((salary * 2) + bonus + vmp + academic_degree + category + disutility) * hrs_duty;
    let all_night = ((sum_night / hours_hight) * 8);
    
    let all_sum =  all_salary + all_night;
    let result = all_sum - (all_sum * 0.13);
    
    alert('Результат: ' + result.toFixed(1));

    document.getElementById('result').innerHTML = 'Результат: ' + result.toFixed(1);
};
