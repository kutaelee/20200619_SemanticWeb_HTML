window.onload = function () {
   // 모바일 네비게이션 토글
    document.getElementById('menu-toggle').onclick = () => {
        let nav = document.getElementsByClassName('nav');
        let menu = document.getElementById('nav-menu');
        if (this.className === 'menu-toggle') {
            this.className = 'change';
            nav[0].style.minHeight = '42%';
            menu.style.display = 'block';
        } else {
            this.className = 'menu-toggle';
            nav[0].style.minHeight = '6%';
            menu.style.display = 'none';
        }

    };
    window.addEventListener("resize", menuToggle);
    function menuToggle() {
        let nav = document.getElementsByClassName('nav');
        let menu = document.getElementById('nav-menu');
        let toggleBtn = document.getElementById('menu-toggle');
        if (window.innerWidth > 600) {
            toggleBtn.className = 'menu-toggle';
            nav[0].style.minHeight = '6%';
            menu.style.display = 'block';
        } else {
            toggleBtn.className.className = 'menu-toggle';
            nav[0].style.minHeight = '6%';
            menu.style.display = 'none';
        }
    }
}