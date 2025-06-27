let users = [];
let user = {};

const validateUser = () => {
  let email = document.getElementById("txtEmail").value;
  let pass = document.getElementById("txtPass").value;
  const found = users.find(
    (value) => value.email === email && value.pass === pass
  );
  if (found) {
    user = found; // store the logged-in user
    showHome();
  } else {
    document.getElementById("errorTxt").innerHTML = "Access Denied";
  }
};

const renderUserList = () => {
  let x = "<h4>Registered Users:</h4>";
  if (users.length == 0) {
    return "<p>No Users Registered</p>";
  }
  users.forEach(user => {
    x += `<p>${user.name} | ${user.email} | ${user.pass} | ${user.balance}</p>`;
  });

  return x;
};

const loginForm = () => {
  const str = `
    <div style='display:flex'>
      <div>
        <h3>Login Form</h3>
        <p id='errorTxt'></p>
        <p><input type='text' id='txtEmail'></p>
        <p><input type='password' id='txtPass'></p>
        <p><button onclick='validateUser()'>Submit</button></p>
        <p><button onclick='registerForm()'>Create Account</button></p>
      </div>
      <div>
        ${renderUserList()}
      </div>
    </div>
  `;
  root.innerHTML = str;
};

const saveUser = () => {
  let name = document.getElementById("txtName").value;
  let email = document.getElementById("txtEmail").value;
  let pass = document.getElementById("txtPass").value;
  users.push({
    name,
    email,
    pass,
    balance: 0,
  });
  loginForm();
};

const registerForm = () => {
  const str = `<div>
    <h3>Registration Form</h3>
    <p><input type='text' id='txtName'></p>
    <p><input type='text' id='txtEmail'></p>
    <p><input type='password' id='txtPass'></p>
    <p><button onclick='saveUser()'>Submit</button></p>
    <p><button onclick='loginForm()'>Already a member? Login here...</button></p>
  </div>`;
  root.innerHTML = str;
};

const showHome = () => {
  const str = `<div>
    <h3>Welcome, User</h3>
    <p><strong>Balance:</strong> ₹${user.balance}</p>
    <p><input type="number" id="depositAmt" placeholder="Deposit Amount"></p>
    <p><button onclick="deposit()">Deposit</button></p>
    <p><input type="number" id="withdrawAmt" placeholder="Withdraw Amount"></p>
    <p><button onclick="withdraw()">Withdraw</button></p>
    <p><button onclick='loginForm()'>Logout</button></p>
  </div>`;
  root.innerHTML = str;
};

const deposit = () => {
  let amt = parseFloat(document.getElementById("depositAmt").value);
  if (amt > 0) {
    user.balance += amt;
    showHome();
  }
};

const withdraw = () => {
  let amt = parseFloat(document.getElementById("withdrawAmt").value);
  if (amt > 0 && amt <= user.balance) {
    user.balance -= amt;
    showHome();
  } else {
    alert("Insufficient balance");
  }
};

loginForm();
