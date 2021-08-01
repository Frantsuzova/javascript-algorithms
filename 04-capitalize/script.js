/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    const newStr = str.toLowerCase();
    if (newStr === '' || newStr === ' ') {
        return newStr;
    }
    else if (newStr.slice(-1) === ' ') {
        return newStr[0].toUpperCase() + newStr.slice(1);
    }
    else {
        return newStr.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость ')); // "Молодость Всё Простит"