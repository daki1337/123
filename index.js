// конвертер валюти

// confirm чи буде конвертація з доларів в гривні

// якщо так - то просимо ввести суму в доларах

//виводимо скільки це гривень

const hello = alert('Добрий день, це конвертер доларів в гривні, та гривней в долари!');

if (confirm('Хочете конвертувати долари в гривні?')) {
    const howMuchDol = prompt(
        'Введіть скільки Ви хочете конвертувати')
        const cursDol = prompt ('Введіть курс долару')
        const resultDol = howMuchDol*cursDol;
        alert('Ось,' + result);

} else {
    const change = confirm('Хочете конвертувати гривні в долари?'

    )
    if (condition) {
        const howMuchGrn = prompt(
            'Введіть скільки Ви хочете конвертувати')
            const cursGrn = prompt ('Введіть курс гривні')
            const resultGrn = howMuchGrn*cursGrn;
        alert('Ось,' + result);
    } else {
       alert('Добре, до побачення!');
    }
}






