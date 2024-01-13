let head = document.querySelector('header');
let button = document.querySelectorAll('button');
let nav = document.querySelectorAll('.navigation');
let navLeft = document.querySelector('.slide_left');
let navRight = document.querySelector('.slide_right');


/*--------------------------функция Zip----------------------------*/
function* zip(arrays) {
    let iterators = arrays.map(a => a[Symbol.iterator]());
    while (true) {
      let results = iterators.map(it => it.next());
      if (results.some(r => r.done)) return;
      yield results.map(r => r.value);
    }
  };
/*---------------------Анимация шапки----------------------------*/
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navLeft.classList.add('hidden');
        navRight.classList.add('hidden');
    } else {
        navLeft.classList.remove('hidden');
        navRight.classList.remove('hidden');
    }
});

head.addEventListener('mouseover', () => {
    nav.forEach((e) => {
        e.classList.add('active');
    });
});

head.addEventListener('mouseout', () => {
    nav.forEach((e) => {
        e.classList.remove('active');
    });
});
/*------------------Попапы--------------------*/

/*--------Окно меню----------*/
const profileBtn = document.getElementById('profile_btn');
const prolifeMenu = document.querySelector('.profile_menu');
const profileCloseBtn = document.getElementById('close_profile');
/*--------Уведомления----------*/
const bellBtn = document.querySelector('.icon_bell');
const bellMenu = document.querySelector('.bell_popup');
const bellCloseBtn = document.getElementById('close_bell');

const menuBtnList = [profileBtn, bellBtn];
const menuList = [prolifeMenu, bellMenu];
const menuCloseList = [profileCloseBtn, bellCloseBtn];


/* --------------События Открытия меню--------------- */
const is_open = (function(e){
    return e.classList.contains('open');
});
const toggle = function (event){
    event.classList.toggle('open'); /*Создаём функцию открытия/закрытия меню*/
    nav.forEach((e) => {
        e.classList.toggle('active_menu');
    });
    //body_hidden.classList.toggle('hidden');
    //mainHead.classList.toggle('active_menu');
    //body_p.classList.toggle('hidden');
    //head.classList.toggle('hidden');
    //mainImg.classList.toggle('hidden');
};
const closeMenu = function(e){
    if (is_open(e)){
        toggle(e);
    }
}
/*----------Click Event listener-----------*/
for (let [button, menu] of zip([menuBtnList, menuList])) {
    button.addEventListener('click', function(e){
        toggle(menu); //Вызываем функицию закрытия/открытия при клике на кнопку
    });
};
for (let [close, menu] of zip([menuCloseList, menuList])) {
    close.addEventListener('click', function(e){
        closeMenu(menu);
    });
}
document.addEventListener('click', function(e) {
    const target = e.target;
    for (let [button, menu] of zip([menuBtnList, menuList])) {
        let its_Menu = target == menu || menu.contains(target);
        let its_btnMenu = target == button

        if (!its_Menu && !its_btnMenu && is_open(menu)) {
            toggle(menu);
        };
    };
});
