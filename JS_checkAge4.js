// 4***
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке
//ссылаюсь на этот скрипт в файле checkAge.html

const checkAge = function (age) {

    if (age !== "" && !isNaN(age)) {
        if (age < 18) {
            console.log(`You don’t have access cause your age is ${age} It’s less then 18`);
        } else if (age >= 18 && age < 60) {
            console.log('Welcome!');
        } else if (age >= 60) {
            console.log('Keep calm and look Culture channel');
        } else {
            console.log('Technical work');
        }
    } else {
        console.log('Error!!!');
    }
}

let question = prompt('How old are you?');
checkAge(question)

