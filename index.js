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


const arr1 = [1, 2];
const arr2 = [2, 3];
const arr3 = ['a', 'b'];
const arr4 = ['b', 'c'];
const arr5 = ['b', 'e', 'c'];
const arr6 = ['b', 'b', 'e'];
const arr7 = ['b', 'c', 'e'];
const arr8 = ['b', 'e', 'c'];


const intersection = (arrays) => {
    // Напишите здесь своё решение



   }
   
   
console.log(intersection(arr1, arr2)) // [2]
console.log(intersection(arr3, arr4, arr5)) // ['b']
console.log(intersection(arr6, arr7, arr8)) // ['b', 'e']


