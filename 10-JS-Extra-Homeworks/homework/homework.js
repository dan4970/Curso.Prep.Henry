// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  return(Object.entries(objeto))   //Object.entreis()   convierte cualqueir objeto de propiedad y valor en un array de pares de valore(arrray de arrays)
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
//   let conteo={};
// for(let i=0; i<string.length;i++){
//   if(conteo.hasOwnProperty(string[i]))//existe alguna propiedad con el valor de string[i]?? en este caso por ejemplo el "a"
//   { conteo[string[i]]=conteo[string[i]]+1;  //sumo en uno el contador del la letra q se repite, si no se repite o es la primera vez q entra pasa directamente al else
//   }
//   else{
//     conteo[string[i]]=1; //si es la primera vez de la letra , se creo una propiedad(string[i]=a) en el objeto (conteo)en donde se le atribuye el valor uno para iniciar el contador 
//   }
// }
// return conteo;


// RESUELTO CON EL METODO DECLARATIVO!! PROGRAMACION FUNCIONAL XDDDDD
var array=string.split('')
var obj={}
array.map((letra)=>(obj[letra])?obj[letra]++:(obj[letra]=1))  
return obj;
//PRIMERO CONVIERTO EL STRING EN UNA ARRAY Y CON ESE ARRAY LO MAPEO BUCANDO CON UN IF SI EXISTE EL 
//obj.letra=a  SI ESQUE EXISTE LO CONTEA DE VUELTA Y SI NO EXISTE PASA A ELSE Y ALLI CREO UNA NUEVA PROPIEDAD EN 
//EL OBJETO (obj ) ASIGNANDOLE LA PROPIEDAD (a) Y EL VALOR DE 1 DE ESA PROPIEDAD Y DE ESA FORMA VA CONTANDO !! 

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
var array=s.split('');
var mayusculas=array.filter((ele)=>ele===ele.toUpperCase());
var minusculas=array.filter((e)=>e!==e.toUpperCase());
return (mayusculas.join("")+ minusculas.join(""));


}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var frase=str.split(' ');
  var frasefinal=frase.map((elemento)=>elemento.split('').reverse().join(''))
  return frasefinal.join(' ');
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var array=String(numero).split('').reverse()
 if(array.join('')==String(numero))return'Es capicua'
 else return "No es capicua";
  
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  
  var nuevo=cadena.split('').filter((e)=>((e!=="a")&&(e!=="b")&&(e!=="c")))   //pongo la condicion de && por que esta negando 
                                                                               //la condicion de e!==a , si en el caso de q este 
                                                                              //igualando seria la condicion de || 
  return nuevo.join('');
  
  
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
return arr.sort((a,b)=>a.length-b.length)  //si a-b es negativo entonnces primero lo pone al "a".
                                            // si a-b es positivo , entonces primero lo posiciona a "b"

}
function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

// METODO DECLARATIVO:

  var nuevo=arreglo1.filter((ele1)=>arreglo2.indexOf(ele1)!==-1)  //con el indexOf estoy buscando en el array2
  //                                                                 //si exixte algun numero que es el ele1 del array 1
  //                                                                 //que si lo encuentra lo coloca en un nuevo array mediante 
  //                                                                 //el filter xDDD
  return nuevo;



// OTRO METODO:
// var nuevo=arreglo1.filter((ele1)=>(arreglo2.includes(ele1)))       //ahora si utilizo includes() ese me busca un valor 
//                                                                     // en comun y si encuentra devuelve true y si es true 
//                                                                    //carga el valor en comun ala nueva array.
// return nuevo;





// OTRO METODO, METODO IMPERATIVO:
// var int=[];
// for(let i =0;i<arreglo1.length;i++){
//   for(let j=0; j<arreglo2.length;j++){
//     if(arreglo1[i]===arreglo2[j]){
//       int.push(arreglo1[i]);
//     }
//   }
// }
// return int;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};