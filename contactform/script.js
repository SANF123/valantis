function sendMail(){
    var params={
        name: document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
    };
const serviceID = "service_0kvwd1m";
const templateID = "template_ndcmm96";

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("name").value ="";
        document.getElementById("email").value ="";
        document.getElementById("message").value ="";
        console.log(res);
        alert("your message snet successfully");
    }
)
.catch(err=>console.log(error));
}