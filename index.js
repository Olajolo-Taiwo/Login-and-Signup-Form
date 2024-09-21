const loginText = document.querySelector("#div .login");

const loginForm = document.querySelector("form.login");
const loginBoxCon = document.querySelector("label.login");
const signupBoxCon = document.querySelector("label.signup");
const footer = document.querySelector("form #footer p");
signupBoxCon.onclick = (()=>{
loginForm.style.marginLeft = "-50%";
loginText.style.marginLeft = "-50%";
});
loginBoxCon.onclick = (()=>{
loginForm.style.marginLeft = "0%";
loginText.style.marginLeft = "0%";
});
footer.onclick = (()=>{
signupBoxCon.click();
return false;
});