function calc_duty() {
    var salary = document.getElementById('salary').value
    // let hrs = document.querySelector('.form-check-input').checked;
    var hrs = document.querySelector('.form-check-input:checked').value;
    document.getElementById('id_for_salary').innerHTML = salary;
    document.getElementById('result').innerHTML = 'Результат: ' + hrs
};
