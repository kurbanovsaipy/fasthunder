const tabsBtn = document.querySelectorAll(".tabs_btn");
const tabsItems = document.querySelectorAll(".tabs_content_item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let linkId = currentBtn.getAttribute("id");
        let currentTab = document.querySelector(tabId);
        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });

            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
};
document.querySelector(".tabs_btn").click();

/*----------Попап для вкладки команды----------*/
const createTeamBtn = document.getElementById('create_team');
const createTeamPopup = document.getElementById('create_team_popup');
const createTeamPopupContent = document.getElementById('create_team_container');
const createTeamCloseBtn = document.getElementById('close_create_team');

const createTeamBtnList = [createTeamBtn, createTeamCloseBtn];


function togglePopUp(e) {
    createTeamPopup.classList.toggle('open');
    //body_hidden.classList.toggle('hidden');
};

for (let element of createTeamBtnList) {
    element.addEventListener('click', function(e){
        togglePopUp();
    });
};

document.addEventListener('click', function (e){
    const target = e.target;

    let its_create_menu = target ==  createTeamPopupContent || createTeamPopupContent.contains(target);
    let its_create_btnMenu = target == createTeamBtn;

    if (!its_create_menu && !its_create_btnMenu && is_open(createTeamPopup)) {
        togglePopUp();
    }
});
