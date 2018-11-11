document.getElementById('toggleSidebar').onclick = function (event) {
    var sb = document.querySelector('.demo-left');
    if (!sb.style.width || sb.style.width === '0px') {
        sb.style.width = '20%';
    } else {
        sb.style.width = '0px';
    }
};

document.getElementById('toggleHeader').onclick = function (event) {
    var sb = document.querySelector('.main-top');
    if (!sb.style.height || sb.style.height === '0px') {
        sb.style.height = 'auto';
    } else {
        sb.style.height = '0px';
    }
};

document.getElementById('toggleRightHeader').onclick = function (event) {
    var sb = document.querySelector('.right-top');
    if (sb.classList.contains('overlay-horizontal')) {
        sb.classList.remove('overlay-horizontal');
    } else {
        sb.classList.add('overlay-horizontal');
    }
};