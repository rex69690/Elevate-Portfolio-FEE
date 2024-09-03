document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");
  const registerbtn = document.getElementById("register");
  const loginbtn = document.getElementById("login");

  if (registerbtn && loginbtn) {
    registerbtn.addEventListener("click", () => {
      container.classList.add("active");
    });

    loginbtn.addEventListener("click", () => {
      container.classList.remove("active");
    });
  }

  const signinForm = document.getElementById("signinForm");
  if (signinForm) {
    signinForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      if (email === "tusharkoundal913@gmail.com" && password === "123456") {
        handleLogin();
      } else {
        alert("Invalid email or password.");
      }
    });
  }

  function handleLogin() {
    setTimeout(function () {
      window.location.href = "portfolio.html";
    }, 1500);
  }
});
