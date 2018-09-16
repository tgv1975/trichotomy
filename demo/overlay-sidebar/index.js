document.getElementById('toggleSidebar').onclick = function (event) {
    var sb = document.querySelector('.demo-left');
    if (!sb.style.width || sb.style.width === '0px') {
        sb.style.width = '20%';
    } else {
        sb.style.width = '0px';
    }
};