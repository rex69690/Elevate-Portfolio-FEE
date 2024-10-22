document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");
  const registerbtn = document.getElementById("register");
  const loginbtn = document.getElementById("login");
  const signinForm = document.getElementById("signinForm");
  const signupForm = document.getElementById("signupForm");

  if (registerbtn && loginbtn) {
    registerbtn.addEventListener("click", () => {
      container.classList.add("active");
    });

    loginbtn.addEventListener("click", () => {
      container.classList.remove("active");
    });
  }

  signinForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Check for stored user credentials
    const storedUser  = JSON.parse(localStorage.getItem("user"));

    if (storedUser  && storedUser .email === email && storedUser .password === password) {
      handleLogin();
    } else {
      alert("Invalid email or password.");
    }
  });

  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const signupEmail = document.getElementById("signupEmail").value;
    const signupPassword = document.getElementById("signupPassword").value;

    // Save user credentials to local storage
    const user = {
      email: signupEmail,
      password: signupPassword
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Registration successful! You can now log in.");
    container.classList.remove("active");
  });

  function handleLogin() {
    setTimeout(function () {
      window.location.href = "portfolio.html";
    }, 1500);
  }
});