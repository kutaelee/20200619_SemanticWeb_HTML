		//메뉴 토글
/*		$("#menu-toggle").click(function() {
			var name = $(this).prop('class');
			if (name == 'menu-toggle') {
				$(this).attr('class', 'change');
				$('.nav-body').fadeIn('slow');
			} else {
				$(this).attr('class', 'menu-toggle');
				$('.nav-body').fadeOut('slow');
			}
        }); */
window.onload = function(){
    document.getElementById('menu-toggle').onclick = function(){
        var nav=document.getElementsByClassName('nav');
        var menu=document.getElementById('nav-menu');
        if(this.className==='menu-toggle'){
            this.className='change';
            nav[0].style.minHeight='42%';
            menu.style.display='block';
        }else{
            this.className='menu-toggle';
            nav[0].style.minHeight='6%';
            menu.style.display='none';
        }
    
    };
}
