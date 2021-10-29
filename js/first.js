/*
- Írj egy olyan függvénykifejezést, amely paraméterként vár egy egész számokat tartalmazó tömböt! (Inputellenőrzést nem kell végezni.)
- A függvény neve `brutto` legyen!
- A függvény szorozza meg a tömbelemek értékét 1.27-tel, majd pedig 
__térjen vissza__ az elemek egész számra kerekített összegével!
*/

//const numericArray = [1, 2, 3, 4, 5];
const  brutto = (array) => {
    const bruttoArray = array.map(item => item*1.27);
    //console.log(bruttoArray);
    const sumOfArray = bruttoArray.reduce((previousValue, currentValue) => previousValue + currentValue);
    //console.log(sumOfArray);
    return Math.round(sumOfArray);
}
//brutto(numericArray);
