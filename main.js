/* 
👉 Write your kata's scenario/description here!




*/

//👉 Write the function your CodeWarriors will start with below here:
function confuseMe(firstName, lastName) {


    let person = {
        name: firstName,
        surname: lastName, 


        shuffle: ()=>{

            console.log('shuffling');

    
            person.name = lastName;
            person.surname = firstName;

            return person;

            
        }




    };


   
    return person;


}




let lucy = confuseMe('lucy', 'rojas').shuffle();
console.log('finished: >>>>> ',lucy);
