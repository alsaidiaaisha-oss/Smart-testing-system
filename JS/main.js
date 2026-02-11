/*document.getElementById("btn").addEventListener("click",
    function() {

        alert("heloooooo")
    }
)*/

/*var x=45
console.log(x,typeof(x))

var y=true
console.log(y,typeof(y))

var z="Aaisha Alsaidi"
console.log(z,typeof(z))

var t=
console.log(t , typeof(t))*/





/*var fname=prompt("Enter first name")
console.log(fname);

var lname=prompt("Enter last name")
console.log(lname);

var Age=prompt("Enter Age")
console.log(Age);

console.log(`hello my first name is ${fname} and my last name is ${lname} my age is ${Age}`);*/




/*var num1= +prompt("Enter first number")
var num2= +prompt("Enter second number")
var sum= num1+num2
 console.log(sum)
 
 console.log(Boolean(0))*/

/*var user1 = {
   name:"Aaisha",
   id:1234,
   city:"Alkabourah",
   child1: {
       name:"Ahmed",
       Gender:"male",
       DOB:"15-15-15" },
       sport:{
           hoppies1:"basketball",
           hoppies2:"drawing",
           hoppies3:"no hoppies"
       },
       child2:{
       name:"salim",
       Gender:"male",
       DOB:"12-12-12" },
        child3:{
       name:"noor",
       Gender:"female",
       DOB:"13-13-13" },

       }

      
 
console.log(user1["child1"]["name"],user1["child3"]["name"]);

/*var friend= ["Ahmed","wael",123,true]
console.log(friend[0])
 console.log(friend[3])*/


/*var user1=[{name:"Ahmed",Id:123,Age:23} ,{name:"wael", Id:234, Age:24},{name:"aaisha", Id:2345, Age:20}]
console.log(user1)
console.log(user1[0])
 console.log(user1[1])*/



/*var BigArray = [
[[1,2,3],[1,2,3]],
[[1,2,3],[1,2,3],["Talaal","Yousef"]],
[["Ahemd","Eid","Saieed"],[1,2,3]],
[["Mahmoud","Hassan","Soliman"],[1,2,3]],
[[1,2,3],[1,2,3],[{name:"Monsef",id:[45,45,110,["SARA"]]}]],
]

console.log(BigArray[4][2][0].id[2])*/
/*var x = 45
var y = x // ==> ( y = 45 )
console.log(`x = ${x}`);
console.log(`y = ${y}`);
y = y+1 //==> y = 45 + 1
x=x+3
console.log("=========== After change y ============");
console.log(`x = ${x}`);
console.log(`y = ${y}`);
console.log("----------------------------");
var arr1 = [1,2,3]
var arr2 = arr1 // arr2 = [1,2,3]
console.log(arr1);
console.log(arr2);
console.log("====== after change arr2 ========== ")
arr2.push("Ahmed")
console.log(arr1);
console.log(arr2);*/
/*var num = number( prompt("Enter your number"))

if( number>= 0);
console*/

/*var total =0;
var average =0;


for (var i =1 ; i<= 5;i++){
    var grade= Number(prompt("Enter the grade for student "+i ))
 total += grade ;
 if (grade >=50){
    console.log("The student "+i+"is pass");}
    else{
    console.log("the student "+i+"is fail");
 }

}
average = total/5;
console.log("total ="+total);
console.log("average =" + average);*/

/*var i =Number(prompt("Enter your number"))*/

/*for( i=1; i<=100;i++){                        // use for to know first point and last point 
    if(i%3===0 && i%5===0){                   // use if to comper 
        console.log("FizzBuzz");              
}
else if (i%3===0 ){
    console.log("Fizz")
}
else if (i%5===0 ){
    console.log("Buzz")

}
else{
    console.log(i);
}
}*/


/*for(i=1;i<=100; i++){
    console.log(i);
}*/


/*for(true;true;true){
    var i=Number(prompt("Enter any number"))
    if(i==10){
       console.log(i)
        break;}
        else 
            
            continue;
        }*/

/*for(var tries =1;tries<=3; tries++){
    var i=Number(prompt("Enter any number " ))
    if(i==10){
       console.log(i)
        break;}   

        if(tries==3){
            console.log("finish all tries")
        }
    }*/

/* var random = Math.floor(Math.random)
  for (;;){
      var number=+prompt("please enter any number")
      if(number ==random) break

  }*/


/*   var random = Math.floor(Math.random() *10)
   console.log(random);
for ( var tries =1; tries<=5; tries++){
    var number=+prompt("Guess the number")


     if(number >random){ 
        console.log("too cold")}
    
     else if(number < random) {
        console.log(" too hot")}
 
    
      else if (number=random){
            console.log("well done")
            break;
      }
     

      
}*/

/*var userEmail=prompt("Please Enter your Email");
var userpass=prompt("Please Enter your Password");

while (userEmail != "ahmed@gmail" || userpass !="12345 A"){

    alert(" try agin");
    userEmail=prompt("Please Enter your Email");
    userpass=prompt("Please Enter your Password");
}
console.log("login scsssful!")*/


/*var userEmail=prompt("Please Enter your Email");
var userpass=prompt("Please Enter your Password");

var number_of_tries=0
 while (userEmail != "ahmed@gmail" || userpass !="12345 A"){
    number_of_tries++
   if(number_of_tries<3){
       userEmail=prompt("Please Enter your Email");
       userpass=prompt("Please Enter your Password");

   }
   else{
       alert("Tried many times")
       break
   }
}*/

/*var userEmail=prompt("Please Enter your Email");
var userpass=prompt("Please Enter your Password");

 var number_of_tries=0
  while (userEmail != "ahmed@gmail" || userpass !="12345 A"){
     number_of_tries++
    if(number_of_tries<3){
        userEmail=prompt("Please Enter your Email");
        userpass=prompt("Please Enter your Password");

    }
    else{
         alert("Tried too many times! Wait 1 minutes.");
        
    }

      setTimeoutfunction(){
          number_of_tries=0
        userEmail=prompt("Please Enter your Email");
        userpass=prompt("Please Enter your Password");

  while (userEmail != "ahmed@gmail" || userpass !="12345 A"){
      number_of_tries++

    if(number_of_tries<3){
        userEmail=prompt("Please Enter your Email");
        userpass=prompt("Please Enter your Password");
     
    }
    else{
    
            alert("Tried too many times! Wait 1 minutes.");
            break;
    }
  }
   if (userEmail != "ahmed@gmail" || userpass !="12345 A"){

console.log("Login successful!");
   
} ;
60000);
break;
}
  }


if(userEmail != "ahmed@gmail" || userpass !="12345 A"){
 console.log("Login successful!");
}*/

/* var userEmail = prompt("Please Enter your Email");
 var userPass  = prompt("Please Enter your Password");

     var number_of_tries = 0;

  while (userEmail != "ahmed@gmail" || userPass !="12345 A") {
   number_of_tries++;

  if (number_of_tries < 3) {
userEmail = prompt("Please Enter your Email");
userPass  = prompt("Please Enter your Password");
   } else {
alert("Tried too many times! Wait 1 minute.");

// Wait 1 minute before allowing retry
setTimeout(function() {
    number_of_tries = 0; // reset counter
    userEmail = prompt("Please Enter your Email");
    userPass  = prompt("Please Enter your Password");

    while (userEmail != "ahmed@gmail" || userPass !="12345 A") {
        number_of_tries++;
        if (number_of_tries < 3) {
            userEmail = prompt("Please Enter your Email");
            userPass  = prompt("Please Enter your Password");
        } else {
            alert("Tried too many times! Wait 1 minute.");
            break;
        }
    }

    if (userEmail != "ahmed@gmail" || userPass !="12345 A") {
        console.log("Login successful!");
    }

}, 60000); // 60000 ms = 1 minute

break; // stop current loop until timeout
}
}

if (userEmail != "ahmed@gmail" || userPass !="12345 A") {
console.log("Login successful!");
}*/
/*------------------------------------------------------------*/


/* var userEmail=prompt("Please Enter your Email");
 var userpass=prompt("Please Enter your Password");
 var number_of_tries=0
 while(userEmail !="aaaa" || userpass !=45){
     number_of_tries++
     if(number_of_tries < 3){
     userEmail=prompt("Please Enter your Email");
      userpass=prompt("Please Enter your Password");
     }

     else{
         alert("tiy tried too many times")
         break
 }
}

 if(userEmail !== "aaaa" && userpass !== "45"){
     alert("Successfully logged in ")
     var number_of_questions = +prompt("Please Enter your number of Question ")
     var operators=["+","-", "*", "/"]
     var score = 0
     for( var i =1; i <= number_of_questions; i++){
         var num1 = Math.floor(Math.random() *10)
         var num2 = Math.floor(Math.random() *10)
         var operation = operators[Math.floor(Math.random() * operators.length)]
          var userAnswer = +prompt(`${i}) ${num1} ${operation} ${num2} =`);

          var correctAnswer;

          if (operation === "+") {
              correctAnswer = num1 + num2;
              } else if (operation === "-") {
              correctAnswer = num1 - num2;
              } else if (operation === "*") {
                   correctAnswer = num1 * num2;
               } else if (operation === "**") {
                   correctAnswer = num1 ** num2;
                   } else if (operation === "/") {

               correctAnswer = num1 / num2;
            } else if (operation === "%") {
                 correctAnswer = num1 % num2;
                           }





                      if (userAnswer === correctAnswer) {
                                 score++;}

                             }

                       alert("Your total score is: " + score + " out of " + number_of_questions);
}*/



var userEmail = prompt("enter Email")
var userpass = prompt("enter password")
var number_of_tries = 0
while (userEmail != "aaaa" || userpass != "45") {
    number_of_tries++
    if (number_of_tries < 3) {
        userEmail = prompt("enter Email")
        userpass = prompt("enter password")
    }
    else {
        alert("you tiy too many times")
        break
    }
}
if (userEmail == "aaaa" && userpass == "45") {
    alert("successfully logged in")
    var number_of_questions = +prompt("please enter number of questions:")
    var Operators = ["+", "-", "*", "/", "**", "%"]
    var score = 0

    for (var i = 1; i <= number_of_questions; i++) {
        var num1 = Math.floor(Math.random() * 10)
        var num2 = Math.floor(Math.random() * 10)
        var operation = Operators[Math.floor(Math.random() * Operators.length)]
        var userAnswer = +prompt(`${i}) ${num1} ${operation} ${num2} =`);
        var correctAnswer;

        if (operation === "+") {
            correctAnswer = num1 + num2;
        } else if (operation === "-") {
            correctAnswer = num1 - num2;
        } else if (operation === "*") {
            correctAnswer = num1 * num2;
        } else if (operation === "**") {
            correctAnswer = num1 ** num2;
        } else if (operation === "/") {
            correctAnswer = num1 / num2;
        } else if (operation === "%") {
            correctAnswer = num1 % num2;
        }


        if (userAnswer === correctAnswer) {
            score++;
        }

    }

    alert("Your total score is: " + score + " out of " + number_of_questions);


}
































