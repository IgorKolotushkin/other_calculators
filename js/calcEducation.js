function getCuration(educ_hours) {
    if (educ_hours === 36) {
        return 2.5
    }
    if (educ_hours === 72) {
        return 5
    }
    if (educ_hours === 144) {
        return 10
    }
    if (educ_hours === 288) {
        return 20
    }
    if (educ_hours === 576) {
        return 40
    }
}

function getControlWork(educ_hours, listeners) {
    if (educ_hours === 36) {
        return 0.125 * listeners
    }
    if (educ_hours === 72) {
        return 0.25 * listeners
    }
    if (educ_hours === 144) {
        return 0.5 * listeners
    }
    if (educ_hours === 288) {
        return listeners
    }
    if (educ_hours === 576) {
        return 2 * listeners
    }
}

function getExamConsultation(educ_hours, listeners) {
    if (educ_hours >= 144) {
        return 0.5 * listeners
    }
    else {
        return 0
    }
}

function getQualificationExam(listeners) {
    const exam = document.getElementById('flexCheckExam').checked
    if (exam === true) {
        return 0.5 * listeners
    }
    else {
        return 0
    }
}

function calculationHours() {
    const listeners = +document.getElementById('listeners').value;
    const educ_hours = +document.querySelector('.form-check-input:checked').value;
    const current_consult = listeners * 0.5;
    const attest = listeners * 0.5;
    const exam_hours = listeners * 0.5; //это просто экзамен
    let examConsultation = getExamConsultation(educ_hours, listeners);
    let humanHours = educ_hours * listeners;
    let controlWork = getControlWork(educ_hours, listeners);
    let curation = getCuration(educ_hours);
    let qualifExam = getQualificationExam(listeners) // квалификационный экзамен
    let educationJob = controlWork + curation + current_consult + examConsultation + attest + exam_hours + qualifExam;
    let result = humanHours + educationJob;
    setInfo(educ_hours, result, humanHours);
}

function setInfo(educ_hours, result, humanHours) {
    document.getElementById('hours_education').innerHTML = `Продолжительность обучения в часах: ${educ_hours}`;
    document.getElementById('all_hours').innerHTML = `Часов всего: ${result}`;
    document.getElementById('human_hours').innerHTML = `Число человеко-часов: ${humanHours}`;
    addElemToHistory(educ_hours, result, humanHours)
}

function clearInfo() {
    document.getElementById('listeners').value = ''
    document.getElementById('hours_36').checked = true;
    document.getElementById('flexCheckExam').checked = false;
    document.getElementById('hours_education').innerHTML = '';
    document.getElementById('all_hours').innerHTML = '';
    document.getElementById('human_hours').innerHTML = '';
}

function addElemToHistory(educ_hours, result, humanHours) {
    const para = document.createElement("li");
    para.className = "list-group-item";
    let d = new Date();
    const node = document.createTextNode(`Продолжительность обучения в часах: ${educ_hours} Часов всего: ${result} Число человеко-часов: ${humanHours}`);
    para.appendChild(node);

    const element = document.getElementById("ul-id-edu");
    element.appendChild(para);
}