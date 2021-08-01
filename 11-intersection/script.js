/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 * 
*/

function intersection(arr1, arr2) {
    let arr3 = [];
    for (i = 0; i < arr1.length; i++) {
        for (j = 0; j < arr2.length; j++) {
            if (arr2[j] === arr1[i]) {
                if (arr3.indexOf(arr2[j]) === -1) {
                    arr3.push(arr2[j]);
                }
            }
        }
    }

    return arr3;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(intersection([1, 1, 5, 4, 2], [8, 91, 4, 1, 1, 3])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []