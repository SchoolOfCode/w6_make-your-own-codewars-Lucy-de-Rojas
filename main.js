/* 
👉 Write your kata's scenario/description here!




*/

//👉 Write the function your CodeWarriors will start with below here:
export function confuseMe(firstName, lastName) {


    let person = {
        name: firstName,
        surname: lastName, 


        shuffle: ()=>{

            console.log('shuffling');

    
            person.name = lastName;
            person.surname = firstName;

            return {name: person.name, surname: person.surname};

            
        }




    };


   
    return person;


}





let lucy = confuseMe('lucy', 'rojas')
console.log(lucy);

lucy.shuffle()

console.log(lucy);