class BackToTop {
  constructor(){
    document.body.insertAdjacentHTML( "beforeend", '<a id="back-to-top" title="Back to top" href="#"><i class="fa-solid fa-angle-up"></i></a>');
    this.backToTop = document.querySelector('#back-to-top')
    
    this.events()
  }

  events(){
    window.addEventListener('scroll', ()=>{
      const WindowScrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
      if ( WindowScrollTop  > 100) {     
        this.backToTop.style.opacity = "1";            
      } 
      else {     
        this.backToTop.style.opacity = "0";        
      } 
    })

    this.backToTop.addEventListener('click', function(e){
      e.preventDefault(); 
      window.scrollTo(0, 0);
    })
  }


}
//export default BackToTop
const newBackToTop = new BackToTop()