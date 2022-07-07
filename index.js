function calculateResult() {
    let sum, persent, days, totalResult, resultInDay;

    sum = document.getElementById('sum').value;
    sum = parseInt(sum);

    persent = document.getElementById('persent').value;
    persent = parseFloat(persent);

    days = document.getElementById('days').value;
    days = parseInt(days);

    totalResult = ((sum * (persent / 100)) * days) + sum;
    totalResultPersent = (sum * (persent / 100)) * days;
    resultInDay = totalResultPersent / days;

    if (isNaN(sum) || isNaN(persent) || isNaN(days)) {
        document.getElementById('totalResult').innerHTML = 'Введіть, будь ласка, всі  дані!';
        document.getElementById('resultInDay').innerHTML = '';
        document.getElementById('totalResultPersent').innerHTML = '';

    } else if (sum <= 0 || persent <= 0 || days <= 0) {
        document.getElementById('totalResultPersent').innerHTML = 'Введіть, будь ласка, дані, більші за нуль!';
        document.getElementById('resultInDay').innerHTML = '';
        document.getElementById('totalResult').innerHTML = '';

    } else {
        document.getElementById('totalResult').innerHTML = 'Загальна сума боргу: ' + totalResult.toFixed(2) + ' грн.';
        document.getElementById('totalResultPersent').innerHTML = 'Загальна сума відсотків: ' + totalResultPersent.toFixed(2) + ' грн.';
        document.getElementById('resultInDay').innerHTML = ' Cума відсотків у день: ' + resultInDay.toFixed(2) + ' грн.';
    }
}