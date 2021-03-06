const addUserBtn = document.querySelector('.addUser')

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.prepend(el);
}

const ul = document.querySelector('.user__group');
const url = 'https://randomuser.me/api/?results=1';

const getUserInfo = () => {
    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            let users = data.results;
            return users.map(function (user) {
                let li = createNode('li');
                li.classList.add('user__list')
                let img = createNode('img');
                let userName = createNode('span');
                let userGender = createNode('span');
                let userInfo = createNode('div')
                userInfo.classList.add('user__info')
                img.src = user.picture.medium;
                img.classList.add('user__img')
                userName.innerHTML = `${user.name.first} ${user.name.last}`;
                userGender.innerHTML = `${user.gender}`
                userArr.push(new usersAdd(userName.innerHTML, userGender.innerHTML, img.src))
                append(li, userInfo);
                append(userInfo, userName);
                append(userInfo, userGender);
                append(li, img);
                append(ul, li);
                addLocal()
            })
        })
        .catch(function (error) {
            console.log(error);
        });
}

getUserInfo()

addUserBtn.addEventListener('click', () => {
    let userList = document.querySelectorAll('.user__list')
    if (userList.length < 10) {
        getUserInfo()
    }
    if (userList.length > 1 ) {
        userList.forEach(elem => {
            elem.addEventListener('click', () => {
                elem.remove()
            })
        })
    }
}) 