let form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let username = document.querySelector('input[name="username"]').value
    let password = document.querySelector('input[name="password"]').value

    if (username == 'admin' && password == 'password') {
        localStorage.setItem('login', 'true');
        document.location.href = 'file:///home/rizkan/Apps/itclub/index.html'
    }
})