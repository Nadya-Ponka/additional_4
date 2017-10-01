module.exports = function multiply(first, second) {
  let numberOneLength = first.length;
  let numberTwoLength = second.length;
  let One, Two, Multi,Ostatok,Razriad, RazriadNumber=0, Counter=1,Promejutok=0;

  if (numberOneLength > numberTwoLength) {
    var numberOne=first.split('');
    var numberTwo=second.split('');
  } else {
    var numberOne=second.split('');
    var numberTwo=first.split('');
    numberOneLength = second.length;
    numberTwoLength = first.length;

//    console.log(numberOne);
//    console.log(numberTwo);
  }
//  console.log(Promejutok);
  var numberFinal=[];

  let i=(numberOneLength-1);
  let j=(numberTwoLength-1);

  //One=Number(numberOne[i]);
//  Two=Number(numberTwo[j]);

  do {
// console.log('Второе число' + Two);
 Two=Number(numberTwo[j]);
 One=Number(numberOne[i]);
 if (Two != 0) {
     do  {

     Multi=One*Two+RazriadNumber;
  //   console.log('Умножение + Разряд:' + One + '*' + Two + '=' + Multi + '\(' + RazriadNumber + '\)');
              Ostatok=Multi%10;
              RazriadNumber=Math.floor(Multi/10);
              Ostatok=Ostatok.toString();
      //        console.log('остаток' + Ostatok);
      //        console.log('Переносится разряд' + RazriadNumber);
              numberFinal.splice(0,0,Ostatok);
            //console.log(numberFinal);

  			      if (i==0 && RazriadNumber>0) {
                Razriad=RazriadNumber.toString();
                numberFinal.splice(0,0,Razriad);
      //          console.log(numberFinal);
      				} else {
                One=Number(numberOne[i-1]);
      //          console.log(numberFinal);
  				}

    i--;
  } while (i>=0)
} else {
  numberFinal.push('0');
}
//  console.log('\n\nСледующая итерация');
  i=(numberOneLength-1);
//console.log(numberFinal);

  Promejutok=Promejutok+numberFinal.join('')*Counter;
  console.log('Промежуток inside: ' + Promejutok);

  Counter*=10;
  RazriadNumber=0;
  numberFinal=[];
  j--;
} while (j>=0)

console.log('Промежуток out: ' + Promejutok);
console.log(Promejutok.toString());


//перевод большого числа в строку
var FinalStroke=[];
while (Promejutok>0) {
FinalStroke.splice(0,0,Promejutok%10);
Promejutok=Math.floor(Promejutok/10);

}
FinalStroke=FinalStroke.join('');
console.log('End  ' + FinalStroke);
//окончание перевода
console.log('End  ' + FinalStroke);

return(FinalStroke);
}
