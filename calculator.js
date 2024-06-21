document.addEventListener('DOMContentLoaded', () => {
    let s = "";
    let buttons = document.querySelectorAll('.button');
    Array.from(buttons).forEach((button) => {
        button.addEventListener('click', (e) => {
            try {
                if(e.target.innerHTML=='='){
                    s=eval(s);
                    document.querySelector('input').value = s;
                }
                else if(e.target.innerHTML=='AC'){
                    s="";
                    document.querySelector('input').value = s;
                }
                else if (e.target.innerHTML == 'del') {
                    s = s.slice(0, -1); // Remove the last character
                    document.querySelector('input').value = s;
                }else{
                    console.log(e.target);
                    s = s + e.target.innerHTML;
                    document.querySelector('input').value = s;
                }
            } catch (error) {
                console.error('An error occurred:', error.message);
                // Handle the error here, such as displaying a message to the user
            }
        });
    });
});








// let s="";
// let buttons=document.querySelectorAll('.button');
// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click',(e)=>{
//         console.log(e.target);
//         s=s+e.target.innerHTML;
//         document.querySelector('input').value=s;
//     })
// })
// document.addEventListener('DOMContentLoaded', () => {
//     let s = "";
//     let buttons = document.querySelectorAll('.button');
//     Array.from(buttons).forEach((button) => {
//         button.addEventListener('click', (e) => {
//             if(e.target.innerHTML=='='){
//                 s=eval(s);
//                 document.querySelector('input').value = s;
//             }
//             else if(e.target.innerHTML=='AC'){
//                 s="";
//                 document.querySelector('input').value = s;
//             }
//             else if (e.target.innerHTML == 'del') {
//                 s = s.slice(0, -1); // Remove the last character
//                 document.querySelector('input').value = s;
//             }else{
//                 console.log(e.target);
//             s = s + e.target.innerHTML;
//             document.querySelector('input').value = s;
//             }
            
//         });
//     });
// });