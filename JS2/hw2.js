//Task 1
let firstNumber = Number(prompt('Enter 1st number'));
let action = prompt('Choose action + - * /');
let secondNumber = Number(prompt('Enter second number'));
let summ = firstNumber+secondNumber;
let difference = firstNumber-secondNumber;
let multiplication = firstNumber*secondNumber;
let division = firstNumber/secondNumber;
if(action==='+'){
    console.log('Result'+' '+ summ);
}
if(action==='-'){
    console.log('Result'+' '+difference);
}
if(action==='*'){
    console.log('Result'+' '+multiplication);
}
if(action==='/'){
    console.log('Result'+' '+division);
}
if(action==='/' && secondNumber==='0'){
    alert('This action is not possible'); //alert не працює Чому?
}
if(action!='+'&&action!='-'&&action!='*'&&action!='/')
console.log('No result');

//Task 2 Браузер зависає на цьому завданні, не розумію, чи правильно виконано.
let i=1;
while(i<=20){
    console.log(i);
    i+2;    
}

//Task3
let login= prompt('Enter login');
let password= prompt('Enter password');
if(login==='Admin' && password==='12345')
alert('Вітаємо в системі!');
else(login==='Admin' && password==='12345')
alert('Логін або пароль не вірні'); //Чому при введені вірних логін та пароль значення else також спрацьовує?

//Task 4
let age= Number(prompt('Enter your age'));
let agePermission = age>=18 ? 'true' : 'false';
console.log(agePermission);

//Task 5
let userSumm= Number(prompt('Введіть суму покупки для прорахунку знижки'));
let firstDiscount=userSumm-(userSumm*0.03);
let secondDiscount=userSumm-(userSumm*0.05);
let thirdDiscount=userSumm-(userSumm*0.07);
if(userSumm>=100 && userSumm<3000){
   console.log(`Вартість, з врахуванням знижки ${firstDiscount}`+'грн.') ;
} 
if(userSumm>=3000 && userSumm<10000){
    console.log(`Вартість, з врахуванням знижки ${secondDiscount}`+'грн.');
}
if(userSumm>=10000){
    console.log(`Вартість, з врахуванням знижки ${thirdDiscount}`+'грн.');
}
if(userSumm<100){
    console.log(`У вас немає знижки. Сума до сплати: ${userSumm}`+'грн.')
}