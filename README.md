# Week14### 
Вопросы 💎

1. Что называется массивом?
Массив - это обьект для хранения и работы с упорядоченной коллекцией данных.

2. С какого порядкового номера начинаются массивы?
с 0

3. Сколько значений может иметь массив?
бесконечно много?

4. Как можно получить значение текстового поля из данной формы? (Форма одна)
    
    ```jsx
    <form action="start.php" method="post" name="fld">
    	<input type="text" name="field" value="Text field">
    	<input type="submit" value="Старт" name="btn">
    </form>
    
    ```

        ```jsx
    const inputText = document.getElementsByName( "field" );   ///Создаем Псевдомассив и берем значение первого элемента 
     const inputTextValue = inputText[0].value;
     console.log(inputTextValue);  ////  Text field
    
    ```

    
5. Какой результат работы данного скрипта?
    
    ```jsx
    let mas = new Array(2);
    mas[3] = 5;
    console.log(mas[3]);   /////5
    ```
    
6. Какой результат работы данного скрипта?
    
    ```jsx
    let mas = new Array(2);
    mas[3] = 5;
    console.log(mas3); ///// Ошибка, mas3 -переменной не существует
    ```
    
7. Что делает строка let mas = new Array()?

создает пустой массив с именем mas

8. Может ли массив состоять из элементов разных типов?
да, но в массиве не может быть функций

9. Укажите длину массива после исполнения следующего кода:
    
    ```jsx
    let a = new Array(2);
    a[1] = null;  /// длина массива 2
    ```

  
    
10. Что выведет консоль?
    
    ```jsx
    const students = [“Lena", “Olya", "Ylia", "Roma" ,  "Vova" ];
    console.log(students[3]);
    ```                             /////// Roma
    
11. Что выведет третья строка?
1. const fruits = [ "Груша", "Яблоко", "Лимон", "Ананас",];

2. console.log(fruits.shift()); 

3. console.log(fruits);                          //////  ["Яблоко", "Лимон", "Ананас"]