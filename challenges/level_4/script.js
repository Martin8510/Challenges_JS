const btnExerciseOne = document.getElementById("btnExercise1");
const btnExerciseTwo = document.getElementById("btnExercise2");
const btnExerciseThree = document.getElementById("btnExercise3");
const btnExerciseFour = document.getElementById("btnExercise4");
const btnExerciseFive = document.getElementById("btnExercise5");
const btnExerciseSix = document.getElementById("btnExercise6");
const btnExerciseSeven = document.getElementById("btnExercise7");
const btnExerciseEight = document.getElementById("btnExercise8");
//Challenges_JS
/**
 *Challenge 1: Crea un programa que imprima (log o alert) todos los elementos de un array dado usando for normal. Array de ejemplo: ['manzana', 'banana', 'cereza', 'dátil']
 */

function exerciseOne(params) {
  const fruits = ["manzana", "banana", "cereza", "dátil"];
  //For
  for (let i = 0; i < fruits.length; i++) {
    const imprimirHtml = document.getElementById("Imprimir");
    imprimirHtml.innerHTML = fruits;
  }
}

/**
 * Challenge 2: Crea un programa que imprima (log o alert) todos los elementos de un array dado usando forEach. Array de ejemplo: ['manzana', 'banana', 'cereza', 'dátil']
 */

function exerciseTwo() {
  const fruits = ["manzana", "banana", "cereza", "dátil"];
  let imprimirHtml = document.getElementById("respuesta");
  let mostrar = "";
  fruits.forEach((e) => {
    mostrar += `<h3>${e}</h3>`;
  });
  imprimirHtml.innerHTML = mostrar;
}

/**
 * Challenge 3: Crea un menu que se repite si ingresa la opcion equivocada hasta que ingrese la opcion correcta - reutilizar ejercicio de operaciones matematicas (exercisesLevel3.js, function exerciseTwo())
 */

function exerciseThree() {
  // operaciones matematicos

  let mathem = parseInt(
    prompt(`
Operadores Matematicos:Ingresa el valor a la cual desea realizar
   1: Suma.
   2: Resta.  
   3: Multiplicacion  
   4: Division  
  `)
  );

  const litsmenu = [1, 2, 3, 4];

  while (!litsmenu.includes(mathem)) {
    mathem = parseInt(
      prompt(`
 Operadores Matematicos:Ingresa el valor a la cual desea realizar
    1: Suma.
    2: Resta.  
    3: Multiplicacion  
    4: Division   
   `)
    );
  }
  const numberOne = parseFloat(prompt("Ingrese el primer numero"));
  const numberTwo = parseFloat(prompt("Ingrese el segundo numero"));
  let result = 0;
  const mathemHtml = document.getElementById("matematicas");
  switch (mathem) {
    case 1:
      result = numberOne + numberTwo;
     mathemHtml.innerHTML = "El resultado de la Suma es : " + result;
      break;
    case 2:
      result = numberOne - numberTwo;
      mathemHtml.innerHTML = "El resultado de la Resta es : " + result;
      break;
    case 3:
      result = numberOne * numberTwo;
      mathemHtml.innerHTML = "El resultado de la Multiplicacion es : " + result;
      break;
    case 4:
      if (numberTwo === 0) {
        alert("No es posible dividir por cero");
      } else {
        result = numberOne / numberTwo;
        mathemHtml.innerHTML = "El resultado de la Divicion es : " + result;
      }
      break;
  }
}

/**
 * Challenge 4: Crea un programa que encuentre el número más grande en un array dado usando for normal y lo imprima en un alert o log. Array de ejemplo: [45, 23, 67, 89, 12, 56]
 */
function exerciseFour() {
  const size = [45, 23, 67, 89, 12, 56]
  
  let number = size[0]
 
 for (let i = 1; i < size.length; i++) {
     
  if (size[i] > number) {
    number = size[i];
  } 
 }
 alert("El numero mayor es: " + number)
}
/**
 * Challenge 5: Crea un programa que sume todos los elementos de un array de números usando forEach y lo simprima en un alert o log. Array de ejemplo: [2, 4, 6, 8, 10]
 */

function exerciseFive() {
  const element = [2, 4, 6, 8, 10]
   let guard = 0;
   element.forEach((numbers) => {
    guard += numbers
   });   
   alert("La suma de los elementos es: " + guard);
}
/**
 * Challenge 6: Crea un programa que multiplique cada elemento de un array por 2 y devuelva un nuevo array con los resultados usando for normal. Array de ejemplo: [3, 7, 2, 8] 
 */
 function exerciseSix() {
   const multiplications = [3, 7, 2, 8]
   let result = [];
    
   for (let i = 0; i < multiplications.length; i++) {
     
    const multi = multiplications[i] * 2;
    result.push(multi)
   }
   alert ("El resultado de la multiplicacion del array es: " + result)
   console.log("Array resultante:", result);

 }

/**
 * Challenge 7: Crea un programa que encuentre la suma de los elementos pares (los impares no los suma) en un array usando forEach. Array de ejemplo: [1, 4, 7, 3, 10, 12] -- recuerden que para saber como e sun numero inpar pueden usar (numero % 2 === 0)
 */
 function exerciseSeven() {
  const numbers = [1, 4, 7, 3, 10, 12]
  let result = 0;

  numbers.forEach((par) => {
      if (par % 2 === 0 ) {

        result += par
      }
  });
  alert ("La suma de los numero pares es: "+ result)
 }

 /**
  * Challenge 8: Crea un programa que encuentre el primer número mayor que 50 en un array de números usando un bucle while. Array de ejemplo: [30, 45, 60, 72, 48, 10]
  */

function exerciseEight() {
  const numbers = [30, 45, 60, 72, 48, 10]
  let i = 1 ;
  let result = numbers[0]
  while ( i < numbers.length) {
    console.log(i);
    if (numbers[i] > result) {
      console.log({numbers});
       result = numbers[i]
      
    }
    i++;
  }
console.log("El numero mayor es: " + result);
alert("El numero mayor es: " + result)

}


btnExerciseOne.onclick = function () {
  exerciseOne();
};
btnExerciseTwo.onclick = function () {
  exerciseTwo();
};
btnExerciseThree.onclick = function () {
  exerciseThree();
};
btnExerciseFour.onclick = function () {
  exerciseFour();
};
btnExerciseFive.onclick = function () {
  exerciseFive();
};
btnExerciseSix.onclick = function () {
  exerciseSix();
};
btnExerciseSeven.onclick = function () {
  exerciseSeven();
};
btnExerciseEight.onclick = function () {
  exerciseEight();
};
