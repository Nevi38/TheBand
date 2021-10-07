var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');

// lấy height của thẻ heaeder
const headerHeight = document.querySelector('#header').offsetHeight;

// hoặc có thể dùng : const headerHeight = header.clientHeight

// đòng và mở menu, nếu is closed = true thì set height của thẻ header là auto và ngược lại
// header.clientHeight ==== headerHeight:  return "true"
mobileMenu.onclick = function () {
    var isCLosed = header.clientHeight === headerHeight;

    if (isCLosed) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }  
}

// Tự động đóng khi chọn menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');

for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    
    menuItem.onclick = function () {
        var isParentMenu = this.nextElementSibling && menuItem.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            event.preventDefault();
        } else {
            header.style.height = null;
        }
    }
}
