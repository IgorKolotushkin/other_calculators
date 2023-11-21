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

function getExamConsultation(educ_hours) {
    if (educ_hours >= 144) {
        return listeners * 0.5
    }
    else {
        return 0
    }
}

function getExam(listeners) {
    const exam = document.getElementById('flexCheckExam').value
    if (exam === 'yes') {
        return 0.5 * listeners
    }
    else {
        return 0
    }
}
    

function calculationHours() {
    const listeners = +document.getElementById('listeners').value;
    const educ_hours = +document.querySelector('.form-check-input:checked').value;
    const current_consult = listeners * 0.5
    const attest = listeners * 0.5
    let examConsultation = getExamConsultation(educ_hours)
    let humanHours = educ_hours * listeners
    let controlWork = getControlWork(educ_hours, listeners)
    let curation = getCuration(educ_hours)
    let exam_hours = getExam(listeners)
    // let g = getControlWork(educ_hours, listeners)
    // let c = getCuration(educ_hours)
    // let e = getExamConsultation(educ_hours)
    let educationJob = controlWork + curation + current_consult + examConsultation + attest
    let result = humanHours + educationJob

}

function setInfo() {

}