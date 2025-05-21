
// function sendMail(event){
    // event.preventDefault();
    // const data = new FormData(event.target);
// 
    // fetch("https://formspree.io/f/mldbaagd", {
        // method: "POST",
        // body: new FormData(event.target),
        // headers: {
            // 'Accept': 'application/json'
        // }
    // }).then(() => {
        // window.location.href = "./send_mail.html";
    // }).catch((error) => {
        // console.log(error);
    // });
// }


function sendMail(event){
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        
            document.getElementById('blur').classList.add('blur_filter');
            document.getElementById('body_kontakt').classList.add('body_bestätigung');
            document.getElementById('confirmation').classList.remove('d_none');
            document.getElementById('after_confirm').classList.add('d_none');
            document.getElementById('lückenfüller').classList.add('lückenfüller')
            
            
      
    }).catch((error) => {
        console.log(error);
    });
}


