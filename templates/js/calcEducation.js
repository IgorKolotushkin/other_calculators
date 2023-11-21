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

function calculationHours() {
    const listeners = +document.getElementById('listeners').value;
    const educ_hours = +document.querySelector('.form-check-input:checked').value;
    const current_consult = listeners * 0.5
    const attest = listeners * 0.5
    let humanHours = educ_hours * listeners
    // let g = getControlWork(educ_hours, listeners)
    // let c = getCuration(educ_hours)
    // let e = getExamConsultation(educ_hours)
    let educationJob = getControlWork(educ_hours, listeners) + getCuration(educ_hours) + current_consult + getExamConsultation(educ_hours) + attest
    let result = humanHours + educationJob

}

function setInfo() {

}