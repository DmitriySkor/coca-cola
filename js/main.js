// Block delay 3s.
setTimeout(function() {
    document.getElementById('delay_block').style.display = 'flex';
 }, 3000);


 

 function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu_button', '.burger-menu_lines');
    let links = menu.find('.burger-menu_link');
    let overlay = menu.find('.burger-menu_overlay');
    
    button.on('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });
    
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
    
    function toggleMenu(){
      menu.toggleClass('burger-menu_active');
      
      if (menu.hasClass('burger-menu_active')) {
        $('body').css('overlow', 'hidden');
      } else {
        $('body').css('overlow', 'visible');
      }
    }
  }
  
  burgerMenu('.burger-menu');

  // TABS
  +function () {

    document.querySelector('.tab').classList.add('active')
    document.querySelector('.tab-panel').classList.add('active')
    
    function selectPanel (e) {
        var target = e.target.dataset.target
    
        document.querySelectorAll('.tab, .tab-panel').forEach(el => el.classList.remove('active'))
        e.target.classList.add('active')
        console.log(document.querySelector('.' + target))
        document.querySelector('.' + target).classList.add('active')
    }
    
    document.querySelectorAll('.tab').forEach(el => {
        el.addEventListener('click', selectPanel)
    })
    
    }();

    if (document.documentElement.clientWidth > 768) {
      new fullpage('#fullpage', {
        //options here
        licenseKey: 'gplv3-license',
        autoScrolling:true,
        scrollHorizontally: true
    });
    }

    