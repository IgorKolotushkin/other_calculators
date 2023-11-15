function setRisk(level) {
    switch (level) {
        case 0:
            document.getElementById('risk0').className = 'on risk';
            document.getElementById('risk1').className = 'risk';
            document.getElementById('risk2').className = 'risk';
            document.getElementById('risk3').className = 'risk';
            document.getElementById('meter').className = 'very_low';
            document.getElementById('recommend').innerHTML = recommend[0];
            break
        case 1:
            document.getElementById('risk0').className = 'risk';
            document.getElementById('risk1').className = 'on risk';
            document.getElementById('risk2').className = 'risk';
            document.getElementById('risk3').className = 'risk';
            document.getElementById('meter').className = 'low';
            document.getElementById('recommend').innerHTML = recommend[1];
            break
        case 2:
            document.getElementById('risk0').className = 'risk';
            document.getElementById('risk1').className = 'risk';
            document.getElementById('risk2').className = 'on risk';
            document.getElementById('risk3').className = 'risk';
            document.getElementById('meter').className = 'moderate';
            document.getElementById('recommend').innerHTML = recommend[2];
            break
        case 3:
            document.getElementById('risk0').className = 'risk';
            document.getElementById('risk1').className = 'risk';
            document.getElementById('risk2').className = 'risk';
            document.getElementById('risk3').className = 'on risk';
            document.getElementById('meter').className = 'high';
            document.getElementById('recommend').innerHTML = recommend[3];
            break
    }
}
function theReset() {
    document.getElementById('__body_weight').value = ''
    document.getElementById('__body_height').value = ''
    const ageButton = document.getElementsByName('age')
    for (let i = 0; i < ageButton.length; i++) {
        ageButton[i].checked = false
    }
    const factorButton = document.getElementsByName('factor')
    for (let i = 0; i < factorButton.length; i++) {
        factorButton[i].checked = false
    }
    const surgeryButton = document.getElementsByName('surgery')
    for (let i = 0; i < surgeryButton.length; i++) {
        surgeryButton[i].checked = false
    }
    reCalculate()
}

// scores
var patientScore = 0
var surgeryScore = 0
var totalScore = 0

function reCalculate() {
    // body weigth and height
    // imt
    let bodyWeight = document.getElementById('__body_weight').value
    let bodyHeight = document.getElementById('__body_height').value
    let bodyHeightM = bodyHeight / 100
    let imt = bodyWeight / (bodyHeightM * bodyHeightM)

    if (bodyWeight != '' && bodyHeight != '') {
        document.getElementById('__imt').innerHTML = imt.toFixed(2)
    } else {
        document.getElementById('__imt').innerHTML = '00.0'
    }

    if (bodyWeight != '' && bodyHeight != '' && imt >= 25) {
        document.getElementById('f2').checked = true
    } else {
        document.getElementById('f2').checked = false
    }
    // age
    let ageScore = 0
    let ageButton = document.getElementsByName('age')
    for (let i = 0; i < ageButton.length; i++)
        if (ageButton[i].checked) {
            ageScore += Number(ageButton[i].value)
        }
    // factors
    let factorScore = 0
    let factorButton = document.getElementsByName('factor')
    for (let i = 0; i < factorButton.length; i++)
        if (factorButton[i].checked) {
            factorScore += Number(factorButton[i].value)
        }
    patientScore = ageScore + factorScore
    // surgery
    let surgeryScore = 0
    let surgeryButton = document.getElementsByName('surgery')
    for (let i = 0; i < surgeryButton.length; i++)
        if (surgeryButton[i].checked) {
            surgeryScore += Number(surgeryButton[i].value)
        }
    patientScore = ageScore + factorScore
    // total
    totalScore = patientScore + surgeryScore
    // document.getElementById('total_risk').innerHTML = totalScore
    // document.getElementById('patient_risk').innerHTML = patientScore
    // document.getElementById('surgery_risk').innerHTML = surgeryScore
    // if (totalScore < 1) {
    //     setRisk(0);
    // }
    // if (totalScore == 2) {
    //     setRisk(1);
    // }
    // if (totalScore >= 3 && totalScore <= 4) {
    //     setRisk(2);
    // }
    // if (totalScore >= 5) {
    //     setRisk(3);
    // }
} 