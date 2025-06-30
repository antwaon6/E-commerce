function validateLogin() {
    const Validusername = "gowrav";
    const Validpassword = "1694";

    const inputusername = document.getElementById('username').value;
    const inputpassword = document.getElementById('pass').value;

    if (Validusername === inputusername && Validpassword === inputpassword) {
        window.location.href = "product.html";
    } else {
        alert("Enter correct values, baka.");
    }

    return false; 
}
