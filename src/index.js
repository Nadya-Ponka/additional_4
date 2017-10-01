module.exports = function multiply(first, second) {
  let numberOneLength = first.length;
  let numberTwoLength = second.length;
  let One, Two, Multi,Ostatok,RazriadNumber=0, Counter=0,RowLength=0,f=0,k,s;

  if (numberOneLength > numberTwoLength) {
    var numberOne=first.split('');
    var numberTwo=second.split('');
  } else {
    var numberOne=second.split('');
    var numberTwo=first.split('');
    numberOneLength = second.length;
    numberTwoLength = first.length;
  }

  var numberFinal=[];

  let i=(numberOneLength-1);
  let j=(numberTwoLength-1);

 do {
 s=0;
 One=Number(numberOne[i]);
 Two=Number(numberTwo[j]);
 numberFinal[f]=[];
 for (k=0;k<Counter;k++) {
 numberFinal[f][k]=0;}

     do  {
     Multi=One*Two+RazriadNumber;
     Ostatok=Multi%10;
     RazriadNumber=Math.floor(Multi/10);
     numberFinal[f][s+f]=Number(Ostatok);
     numberFinal[f][s+1+f]=Number(RazriadNumber);
     One=Number(numberOne[i-1]);
    i--;
    s++;
  } while (i>=0)
  s=0;
  RowLength=numberFinal[f].length;
  f++;
  i=(numberOneLength-1);
  RazriadNumber=0;
  Counter+=1;
  j--;
} while (j>=0)

var FinalStroke=[];
RazriadNumber=0;

for (i=0;i<=RowLength;i++) {
  Multi=0;
  FinalStroke[i]=0;

  for (j=0;j<numberTwoLength;j++) {
    if (typeof numberFinal[j][i] == 'undefined') {numberFinal[j][i]=0;}
    Multi=Multi+Number(numberFinal[j][i]);
  }
  Multi+=RazriadNumber;
  Ostatok=Multi%10;
  FinalStroke[i]=Number(Ostatok);
  RazriadNumber=Math.floor(Multi/10);
}

FinalStroke.reverse();
for (i=0;i<=2;i++) {if (FinalStroke[0]==0) FinalStroke.shift();}
FinalStroke=FinalStroke.join('')

return(FinalStroke);
}
