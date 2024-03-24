let checkLogin = localStorage.getItem('login')

if (!checkLogin || checkLogin == 'false') {
    alert("KAMU GAPUNYA AKSES!!!!")
    document.location.href = 'file:///home/rizkan/Apps/itclub/pages/login.html';
}

// FUNGSI STRIKE THROUGH

let dataTask = [];
loadData()

let form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let task = document.querySelector('input[type="text"]').value

    let data = {
        id: dataTask.length + 1,
        name: task
    }

    dataTask.push(data);
    loadData();
})

document.querySelector('main .apps ul').addEventListener('click', function (e) {
    e.stopPropagation();
    let check = document.querySelector('input[type="checkbox"]')
    check.addEventListener('change', function () {
        let value = this.value

        let spanChecked = document.querySelector(`span[data-id="${value}"]`)

        if (spanChecked.getAttribute('data-checked') == 'false') {
            spanChecked.setAttribute('style', 'text-decoration:line-through')
            spanChecked.setAttribute('data-checked', 'true')
        } else {
            spanChecked.setAttribute('style', 'text-decoration:none')
            spanChecked.setAttribute('data-checked', 'false')
        }
    })
})

function loadData() {
    let html = '';
    dataTask.forEach((value, key) => {
        html += `
            <li>
                <div>
                    <input type="checkbox" name="check" value="${value.id}" id="">
                    <span data-id="${value.id}" data-checked="false">${value.name}</span>
                </div>
            </li>
    `;
    });
    document.querySelector('.apps .body ul').innerHTML = html
}

// FUNGSI STRIKE THROUGH