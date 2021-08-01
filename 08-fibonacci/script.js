/*
 * Задача 8: «Фибоначчи»
 *
 * Последовательность Фибоначчи — это порядок чисел, где каждое последующее
 * число является суммой двух предыдущих: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 * 
 * Напишите функцию, которая принимает на вход число n и возвращает n-й элемент
 * последовательности Фибоначчи.
*/

function fibonacci(n) {
    let sum = 0;
    let fibonacci = [0, 1]; // первые два элемента последовательности Фибоначчи
    for (i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    if (n === 1) {
        return 1;
    }
    else if (n === 0) {
        return 0;
    }
    else {
        return fibonacci[fibonacci.length - 1];
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fibonacci(0)); // 2. Четвёртое число последовательности — двойка (0, 1, 1, 2)