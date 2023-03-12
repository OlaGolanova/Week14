'use strict';


//   const directorsName = document.querySelectorAll('.name');
//   const directorsCareer = document.querySelectorAll('.career');
//   const directorsfilm = document.querySelectorAll('.film');

  arr.forEach(function(item,i){

    // directorsName[i].innerHTML =`${(i+1)}. ${arr[i].name}`;
    // directorsCareer[i].innerHTML = arr[i].career;
    // directorsfilm[i].href = arr[i].films;


       const directors = document.querySelector('.directors');

    const directorName = document.createElement('div');
	directorName.className = 'li';
	directorName.innerHTML = ` <p class="name">${(i+1)}. ${arr[i].name}</p><br>
                                <div class="wrap">
                                    <div class="career">${arr[i].career}</div>
                                    <a href=${arr[i].films}>Фильмография</a>
                                </div>`;
	directors.append(directorName);

});




///Создайте новый массив topFilmsList, в нём должны быть лучшие фильмы режиссёров (они хранятся в полях top_rated_film).

const topFilmsList = arr.map(item => item.top_rated_film);
document.querySelector('.best_films').textContent = topFilmsList.join(', ');



///Задача со ***
// У меня несколько вариантов

//I.Вариант, который написала я для 4 аргументов

// const arr1 = [1, 2];
// const arr2 = [2, 3];
// const arr3 = ['a', 'b'];
// const arr4 = ['b', 'c'];
// const arr5 = ['b', 'e', 'c'];
// const arr6 = ['b', 'b', 'e'];
// const arr7 = ['b', 'c', 'e'];
// const arr8 = ['b', 'e', 'c'];


// const intersection = (x,y,z,w) => {
// /// Создаем массивы из уникальных элементов, удаляя повторяющиеся элементы new Set();
//   const xS = Array.from(new Set(x));
//   const yS = Array.from(new Set(y));
//   const zS = Array.from(new Set(z));
//   const wS = Array.from(new Set(w));
//   const B = xS.filter(el => yS.includes(el));
  
//   if (z === undefined && w === undefined) {
//     return B;
//   }
//   else if (z !== undefined && w === undefined) {
//     const A = B.filter(el => zS.includes(el));
//     return A;
//   }
//   else if (z === undefined && w !== undefined) {
//     const C = B.filter(el => wS.includes(el));
//     return C;
//   }
//   else {
//     const D = B.filter(el => zS.includes(el));
//     const E = D.filter(el => wS.includes(el));
//     return E;
//   }
// }

// console.log(intersection(arr1, arr2)) // [2]
// console.log(intersection(arr3, arr4, arr5)) // ['b']
// console.log(intersection(arr6, arr7, arr8)) // ['b', 'e']
// console.log(intersection(arr6, arr7, arr8, arr1)) // []  !!!!!!!!!!!!!!!!!у этих массивов нет общего пересечения, поэтому выдает пустой массив!!!!!!!!!!!!!!!!!!!!!!!!



// II. Это правильный вариант, но результат выдает не верный
const arr1 = [1, 2];
const arr2 = [2, 3];
const arr3 = ['a', 'b'];
const arr4 = ['b', 'c'];
const arr5 = ['b', 'e', 'c'];
const arr6 = ['b', 'b', 'e'];
const arr7 = ['b', 'c', 'e'];
const arr8 = ['b', 'e', 'c'];


const intersection = (...arrays) => {
  const result = arrays[0].filter((element) => {
    const indexOfElement = arrays[1].indexOf(element);
    if (indexOfElement >= 0) {
      return element;
    }
  });
  if (arrays.length > 2) {
    intersection(result, ...arrays.slice(2, arrays.length));
  }
  return Array.from(new Set(result));
};

console.log(intersection(arr1, arr2)) // [2]
console.log(intersection(arr3, arr4, arr5)) // ['b']
console.log(intersection(arr6, arr7, arr8)) // ['b', 'e']
console.log(intersection(arr6, arr7, arr8, arr1)) // ['b', 'e']   Почему здесь такой результат? У этих массивов нет общего пересения


// III.Вариант, который я переделала из предыдущего, мне кажется он короче, мне более понятен и результат выдает такой же как II вариант
// const arr1 = [1, 2];
// const arr2 = [2, 3];
// const arr3 = ['a', 'b'];
// const arr4 = ['b', 'c'];
// const arr5 = ['b', 'e', 'c'];
// const arr6 = ['b', 'b', 'e'];
// const arr7 = ['b', 'c', 'e'];
// const arr8 = ['b', 'e', 'c'];

// const intersection = (...arrays) => {
//   const result = arrays[0].filter((element) => arrays[1].includes(element));

//   if (arrays.length > 2) {
//     intersection(result, ...arrays.slice(2, arrays.length));
//   }
//   return Array.from(new Set(result));
// };

// console.log(intersection(arr1, arr2)) // [2]
// console.log(intersection(arr3, arr4, arr5)) // ['b']
// console.log(intersection(arr6, arr7, arr8)) // ['b', 'e']
// console.log(intersection(arr6, arr7, arr8, arr1)) // ['b', 'e']   