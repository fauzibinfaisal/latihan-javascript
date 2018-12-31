//console.log("Hello");

document.getElementById('heading').innerHTML = "Hello fauzi!";

/* Variable */

//var name = "Fauzi";
//console.log(name);
//
//var lastName = "doank";
//console.log(lastName);
//
//var age = 26;
//console.log(age);
//
//var fullName = name + ' ' + lastName;
//console.log(fullName);
//
//var cobaBoolean = true;
//console.log(cobaBoolean);
//
//var job = "Engineer";
//console.log(job);
//
//var bio = "Nama saya " + fullName + ". Umur saya " + age + ". Pekerjaan saya " + job;
//console.log(bio);

/* Operator */
//var x = 5;
//var y = 3;
//var z = x + y;
//console.log(z);
//var z = x * y;
//console.log(z);
//z -= y;
//console.log(z);
//z += y;
//console.log(z);


/*  Comparison Operator */
//
//== equat to (value)
//=== equal value and equal type
//!= not equal
//!= not equal value atau not equal  type


/* Type Operator */
//typeof return --> tipe
//instanceof return --> Boolean


/* bitwise */

//& | ~ ^ << >> >>>


/* if else statement */

//var name = "Fauzi";
//var age = 26;
//var isAdult = "Yes";
//
//if (isAdult == 'Yes') {
//    console.log(name + " is an adult man");
//} else {
//    console.log(name + " is an young man");
//}
//

/* --------------------------------------------------------------- */

/* TYPE DATA */

/*A. Primitif */

// String: chat, text.
// Undefined: variable belum memiliki nilai
// Null: non-existent. memiliki nilai, takni null

/* Booloean */

//console.log(Boolean(10 > 8));
//console.log(Boolean(10 > 18));

/* Tools Debugging JS */
// console.log()
// alert()
// prompt()

//var name = prompt("whay is your name");
//console.log(name);

/* SWitch Condition */
//var job = "jaja";
//
//switch (job){
//    case 'Engineer':
//        console.log("Fauzi is an engineer");
//        break;
//    case 'Driver':
//        console.log("Fauzi is a driver");
//        break;
//    case 'Ninja':
//        console.log("Fauzi is a ninja");
//        break;
//    default:
//        console.log("Fauzi is an unknown");
//}

/* ----------------------------------------------------------------- */

/* JS Function */


//function textHello() {
//    console.log('hello !');
//}
//textHello();
//
//function printText (text, number) {
//    console.log("text is " + text + " and number is " + number);
//}
//printText("Fauzi", 11);
//
//
//function cobaReturn(text){
//    return text;
//}
//var textReturn = cobaReturn("this is a return function");
//console.log(textReturn);
//document.getElementById("element1").innerHTML = textReturn;

/* ------------------------------------------------------------ */

// Statement and Expression

// Statement
//function myFunc(){
//    //code
//}
//
//// expression
//3 + 4;
//var x  = 3;


/* ----------------------------------------------------------- */

// ARRAY
//
//var user = ["fauzi","engineer","single"];
//
//// cara akses array
//console.log(user);
////(3) ["fauzi", "engineer", "single"]
//console.log(user[1]);
////engineer
//
//// mutation
//user[2] = "jomblo";
//console.log(user);
////(3) ["fauzi", "engineer", "jomblo"]
//
//// push
//user.push("bengkulu");
//console.log(user);
//
//user.unshift("pak");
//console.log(user);
//
//user.pop();
//console.log(user);
//
//user.shift();


/* ------------------------------------------------------ */

//  OBJECT JS

//var car = {
//    color: 'blue',
//    year: 2018,
//    drive: function(){return 'drive'}
//};

//var shoList = [
//    'laptop',
//    'mouse',
//    'keyboard'
//]

/* ---------------------------------------------------------------- */

// CARA MENYISIPKAN ARRAY DAN OBJECT

//var car = {
//    made: "China",
//    speed: 100,
//    engine: {
//        size: 2.5,
//        fuel: 'Pertamax',
//        piston: [
//            '2010',
//            {made: 'China'}
//        ]
//    },
//    drive: function(){return 'drive';}
//};
//
//console.log(car.engine);
//console.log(car.made);

////Practice 37
//var myBio = [
//    'Fauzi',
//    26,
//    false,
//    ['html','css','bootstrap'],
//    {sd : '22', smp: '1', sma: '6'},
//    function() { return 'engineer'; }
//]
//
////Practice 38
//console.log(myBio[0]);
//console.log(myBio[3][0]);
//console.log(myBio[4]['sma']);
//console.log(myBio[5]);


/* Create, asign, delete */
//delete car.speed;

/* arrar */

//myBio[10] = 'data baru'
//bahaaya, karena index sebelumnya akan empty

/* prebuilt method */
// **dibwah __proto__ tiu prebuiltnya 

// shift() --> ghapus elemnt pertama pada array
// pop() --> menghapus element terakhir pada array
// unshift --> menambahkan element pertama pada array
// array.unshift('lalala');
// push --> menambahkan element terakhir pada arrray
// array.push('car',70)
// splice()  --> menambahkan, mengurangi
// mengapus*
// array.splice(2,3);
// 2, dari index ke2... 3, jumlah elemen yg akan dihapus dari index2
//menambah*
// array.splice(1, 0, 'Hello','world', 2018)
//

/*loops 8 */
//var i;
//for (i=0; i < 5; i++){
//    console.log(i)
//}

//while (i < array.length){
//    console.log(array[i]);
//    i++;
//}


//for (var i = 0; i < 10; i++){
//    if (i == 3){
//        continue;
//    }
//    console.log(i);
//}


/* function constructor */

function Car(nama, tahun){
    this.name = nama;
    this.tahun = tahun;
}

var car1 = new Car('honda',2018);


