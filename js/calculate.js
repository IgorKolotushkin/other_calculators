const recommend = [
    "<div><p>Специфических мероприятий не требуется; рекомендована ранняя активизация больного.</p></div>",
    "<div><p>Механическая профилактика, предпочтительно с прерывистой пневматической компрессией (ППК) или чулки с распределением давления.</p></div>",
    "<div><p>Пациентам<strong>&nbsp;без высокого риска серьезных геморрагических осложнений</strong> - низкомолекулярный гепарин (НМГ) либо низкие дозы нефракционированного гепарина (НФГ). Механическая профилактика, предпочтительно с перемежающейся пневматической компрессией (ППК). Примеры антикоагулянтов:</p><ul><li>Нефракционированный гепарин (гепарин натрия) - подкожно 2500 МЕ за 2–4 часа до операции, затем 2500 МЕ через 6–8 часов после операции, далее по 5000 МЕ 2–3 раза/сут.</li></ul><p>Пример низкомолекулярного гепарина (НМГ):</p><ul><li>Парнапарин натрия (Флюксум) - 3200 МЕ за 2 ч до операции и далее каждые 24 ч, в течение 7 дней.</li><li>Эноксапарин натрия - подкожно 20 мг за 2 часа до операции, затем 20-40 мг 1 раз/сут.</li></ul><p>При назначении антикоагулянтов прямого действия - учитывать функцию почек, для чего следует определять уровень креатинина в крови и рассчитать клиренс креатинина с помощью формулы Кокрофта-Голта.</p><p>При <strong>высоком риске геморрагических осложнений</strong> следует ограничиться механическими средствами профилактики - эластичная компрессия нижних конечностей (чулки с распределением давления), перемежающаяся пневмокомпрессия, миостимуляция мышц голени.</p></div>",
    "<div><p>Пациентам<strong> без высокого риска серьезных геморрагических осложнений</strong> - низкомолекулярный гепарин (НМГ) либо нефракционированный гепарин (НФГ). Механическая профилактика, предпочтительно с перемежающейся пневматической компрессией (ППК). Примеры антикоагулянтов:</p><ul><li>Нефракционированный гепарин (гепарин натрия) - подкожно 5000 МЕ за 4–6 часов до операции, затем 5000 МЕ через 6–8 часов после операции, далее по 5000 МЕ 3 раза/сут.</li></ul><p>Пример низкомолекулярного гепарина (НМГ):</p><ul><li>Парнапарин натрия (Флюксум) – 4250-6400 МЕ за 12 ч до и через 12 ч после операции, затем 1 раз в сутки не менее 10 дней.</li><li>Эноксапарин натрия - Подкожно 40 мг за 12 ч до операции или через 12– 24 час. после операции, затем 40 мг 1 раз/сут.</li></ul><p>При назначении антикоагулянтов прямого действия - учитывать функцию почек, для чего следует определять уровень креатинина в крови и рассчитать клиренс креатинина с помощью формулы Кокрофта-Голта.</p><p>При <strong>высоком риске геморрагических осложнений</strong> следует ограничиться механическими средствами профилактики - эластичная компрессия нижних конечностей (чулки с распределением давления), перемежающаяся пневмокомпрессия, миостимуляция мышц голени.</p></div>",
]

function setRisk(level, totalRisk) {
    document.getElementById('level-risk').innerHTML = `Уровень риска ВТЭО при сумме баллов: ${totalRisk}` 
    switch (level) {
        case 0:
            document.getElementById('risk').innerHTML = `Очень низкий (0-1 балл)`
            document.getElementById('risk').style.color = "green"
            document.getElementById('recommend').innerHTML = recommend[0];
            break
        case 1:
            document.getElementById('risk').innerHTML = `Низкий (2 балла)`
            document.getElementById('risk').style.color = "gold"
            document.getElementById('recommend').innerHTML = recommend[1];
            break
        case 2:
            document.getElementById('risk').innerHTML = `Умеренный (3-4 балла)`
            document.getElementById('risk').style.color = "orange"
            document.getElementById('recommend').innerHTML = recommend[2];
            break
        case 3:
            document.getElementById('risk').innerHTML = `Высокий (>4 баллов)`
            document.getElementById('risk').style.color = "red"
            document.getElementById('recommend').innerHTML = recommend[3];
            break
    }
}
function theReset() {
    document.getElementById('__body_weight').value = ''
    document.getElementById('__body_height').value = ''
    document.getElementById('risk').innerHTML = '...'
    document.getElementById('risk').style.color = 'black'
    document.getElementById('recommend').innerHTML = '...'
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
}

function reCalculate() {
    // scores
    let patientScore = 0
    // let surgeryScore = 0
    let totalScore = 0
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

    if (totalScore <= 1) {
        setRisk(0, totalScore);
    }
    if (totalScore == 2) {
        setRisk(1, totalScore);
    }
    if (totalScore >= 3 && totalScore <= 4) {
        setRisk(2, totalScore);
    }
    if (totalScore >= 5) {
        setRisk(3, totalScore);
    }
}
