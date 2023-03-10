const users =['Manisha','Piyush','Ayush'];



const memberDiv = document.querySelector('.memberDiv');

const addIcon = document.querySelector('.addIcon');



const userIcons = () =>{
    users.reverse();
    users.map((curElem) =>{
        memberDiv.insertAdjacentHTML('afterbegin',`<button class="btn"><span>${curElem}</span></button>`);
       
    })
};

userIcons();

addIcon.addEventListener('click',()=>{
    let userName = prompt("Enter your Profile Name here");

    if(userName != null && !users.includes(userName)){
        users.push(userName);
        console.log(users);
        memberDiv.insertAdjacentHTML('afterbegin',`<button class="btn"><span>${userName}</span></button>`);
    }
    else{
        alert("User name already exists");
    }
})