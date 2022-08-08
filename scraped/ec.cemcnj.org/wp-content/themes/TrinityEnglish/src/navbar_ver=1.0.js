document.addEventListener('DOMContentLoaded', function(){
  const navbar = document.querySelector('.navbar')
  if (navbar)  new Navmenu()  
})


class Navmenu {
  constructor(){
   
    this.navbar = document.querySelector('.navbar')
    this.breakpoint = ( this.navbar.getAttribute('data-breakpoint') )? this.navbar.getAttribute('data-breakpoint') :768
    this.mainMenu = this.navbar.querySelector('.main-menu')
    this.allUls = this.navbar.querySelectorAll('.main-menu ul')
    this.FirstUL = this.navbar.querySelector('.main-menu>ul')
    this.FirstLis = this.navbar.querySelectorAll('.main-menu>ul>li')
    
    this.btn = this.navbar.querySelector('.menu-btn')
    this.btnI = this.navbar.querySelector('.menu-btn i')  
    
    this.liChildren 
    this.title = ( typeof engc_data != 'undefined' ) ? engc_data.bloginfo: 'Home'
    this.type = this.navbar.getAttribute('data-type')
    this.side = this.navbar.getAttribute('data-side')  
    this.embed_menu = ( 'embed'== this.side )? true:false
    if (this.mainMenu ) this.events()    
  }

  toogleMenu(){
    this.btnI.classList.toggle("fa-bars")
    this.btnI.classList.toggle("fa-times")
  } 

  events() {  
    this.setupChildrenIcon()  

    if ('full' == this.type ){
      //const itemlinks = this.mainMenu.querySelector(':scope > ul').querySelectorAll('a')
      this.mainMenu.querySelectorAll('a').forEach(item=>{
        item.addEventListener('click', ()=>{
          this.mainMenu.classList.remove('show')

          document.body.classList.remove('body-no-scroll') 
          this.toogleMenu()
        } )
      })
    }

    this.btn.addEventListener('click', (e) => { 
      e.preventDefault(); 
      document.body.classList.toggle('body-no-scroll')   

      if (this.type == 'side') this.sidemenuSlide()         
      if (this.type == 'top') this.topmenuSlide()
      if (this.type == 'full') this.fullmenu() 
    });

    window.addEventListener('resize', ()=>{ this.resizeEvents() })  
    window.addEventListener('scroll', ()=>{ this.scrollEvents() }) //for sidemenu 

    const WindowScrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    if ( WindowScrollTop >0 ) {      
      if (this.embed_menu) { document.querySelector(`.navbar[data-side*=embed]`).style.backgroundColor = 'rgb(0,0,0,0.6)';  }
    }


    if (this.type == 'side') { 
      if (this.side == 'right') document.body.classList.add('absolute-body');
      document.querySelector( '.main-menu>ul>li:first-child a' ).setAttribute('data-title', this.title )
      document.body.insertAdjacentHTML( "beforeend", '<div class="overlay-menu"></div>')

      window.addEventListener('click', e =>  {      
        if ( e.target == document.querySelector('.overlay-menu') ) { 
          this.sidemenuSlide()     
          document.body.classList.remove('body-no-scroll')  
        }
      })   
    }

    if (this.type == 'top') { 
    
      document.body.insertAdjacentHTML( "beforeend", '<div class="overlay-menu"></div>')

      window.addEventListener('click', e =>  {      
        if ( e.target == document.querySelector('.overlay-menu') ) { 
          this.topmenuSlide()  
          document.body.classList.remove('body-no-scroll')  
        }
      })   
    }
     
  }

  resizeEvents() {
    if (window.innerWidth > this.breakpoint) {
      this.allUls.forEach( ul =>{
        ul.removeAttribute('style')
        ul.classList.remove('has-height')
      })

      document.body.classList.remove('body-no-scroll')
    
      this.mainMenu.style.paddingBottom = '0px'
      this.mainMenu.classList.remove('menu-show') 
      this.mainMenu.classList.remove('menu-not-show') 
     
      this.btnI.classList.remove('fa-times')
      this.btnI.classList.add('fa-bars')      
    }
  }
  

  scrollEvents() {
    if ( this.embed_menu ) {
      const WindowScrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
      if ( WindowScrollTop >50 ) {      
        if ( document.querySelector(`.navbar[data-side*=embed]`)){
          document.querySelector(`.navbar[data-side*=embed]`).style.backgroundColor = 'rgb(0,0,0,0.6)'   
        }  
      }
      else {
        if ( document.querySelector(`.navbar[data-side*=embed]`)){
          document.querySelector(`.navbar[data-side*=embed]`).style.backgroundColor = 'transparent'  
        }
      }   
    }
  }

  fullmenu(){
    this.mainMenu.classList.toggle('show')
    this.toogleMenu()
  }

  sidemenuSlide(){ 
    const rightMenu = document.querySelector('.right-menu')
    
    this.mainMenu.classList.toggle('menu-show')          
    rightMenu.classList.toggle('active')       
 
    this.toogleMenu()

    if ( this.mainMenu.classList.contains('menu-show') ){
      this.mainMenu.classList.remove('menu-not-show');               
    }
    else {
      this.mainMenu.classList.add('menu-not-show');       
    }
  }

  topmenuSlide(){
      if ( this.FirstUL.classList.contains("has-height") ){
      this.mainMenu.style.paddingBottom = '0px';
      this.FirstUL.style.maxHeight = '0px';
      this.FirstUL.classList.remove('has-height');      
    }
    else {      
      this.mainMenu.style.paddingBottom = '10px';
      this.FirstUL.style.maxHeight = this.FirstUL.scrollHeight + 'px';  
      this.FirstUL.classList.add('has-height');           
    }

    this.toogleMenu() 
  }

  setupChildrenIcon(){
    this.FirstLis.forEach( li=> {
      if ( li.classList.contains('menu-item-has-children')){  
        li.insertAdjacentHTML("beforeend", '<div class="li-children"><i class="fas fa-angle-down"></i></div>');
       }
    })

    this.liChildren = document.querySelectorAll('li.menu-item-has-children .li-children')
    this.liChildren.forEach( child => {
      child.addEventListener('click', ()=>this.lichildrenevent(child) )
   })   
  }


  lichildrenevent(child){
    const panel = child.parentElement.children[1]; 
    if ( panel.classList.contains('has-height')){
      panel.style.maxHeight = '0px'
      panel.classList.remove('has-height')
    } else {           
      panel.style.maxHeight = panel.scrollHeight + panel.parentElement.scrollHeight + 'px'
      panel.classList.add('has-height')
    }

    //only for top slide navbar.
    this.FirstUL.style.maxHeight = ( this.mainMenu.scrollHeight + this.FirstUL.scrollHeight )  + 'px'     
  } 
}

