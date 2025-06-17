/* ---------- Helpers ---------- */
const $ = sel => document.querySelector(sel);

/* ---------- Local‑storage “database” ---------- */
function loadUsers ()            { return JSON.parse(localStorage.getItem('users') || '[]'); }
function saveUsers (u)           { localStorage.setItem('users', JSON.stringify(u)); }
const users = loadUsers();

/* ---------- Sign‑Up page ---------- */
const signupForm = $('#signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', e => {
    e.preventDefault();
    const username = $('#suName').value.trim();
    const password = $('#suPass').value;
    const msg      = $('#suMsg');

    if (users.some(u => u.username === username)) {
      msg.textContent = 'Username already taken!';
      msg.className   = 'msg error';
      return;
    }
    users.push({ username, password });
    saveUsers(users);
    msg.textContent = 'Account created  — please log in.';
    msg.className   = 'msg success';
    signupForm.reset();
  });
}

/* ---------- Login page ---------- */
const loginForm = $('#loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const username = $('#liName').value.trim();
    const password = $('#liPass').value;
    const msg      = $('#liMsg');

    const match = users.find(u => u.username === username && u.password === password);
    if (match) {
      msg.textContent = `Welcome back, ${username}!`;
      msg.className   = 'msg success';
      loginForm.reset();
    } else {
      msg.textContent = 'Invalid credentials — try again.';
      msg.className   = 'msg error';
    }
  });
}
