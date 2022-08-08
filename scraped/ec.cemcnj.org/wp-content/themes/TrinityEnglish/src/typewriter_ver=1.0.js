document.addEventListener('DOMContentLoaded', initTypeWritter);

function initTypeWritter() {
  const txtElements = document.querySelectorAll('.txt-type');  
  txtElements.forEach( (txtElement)=>{
    new TypeWriter(txtElement)
  })  
}

class TypeWriter {
  constructor(txtElement) {
    this.txtElement = txtElement;
    this.words = JSON.parse(txtElement.getAttribute('data-words'));
    this.words = ( this.words )? this.words : ['']
    this.wait = parseInt(txtElement.getAttribute('data-wait'), 10);
    this.wait = (this.wait) ? this.wait : 3000
    this.txt = '';
    this.wordIndex = 0;
    this.isDeleting = false;
    if (this.txtElement) this.type();
  }

  type() {    
    const current = this.wordIndex % this.words.length; // Current index of word   
    const fullTxt = this.words[current];  // Get full text of current word
    let typeSpeed = 300;

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1); // Remove char
    } else {      
      this.txt = fullTxt.substring(0, this.txt.length + 1); // Add char
    }
   
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
    if ( this.txt === ''){
      typeSpeed *= 2;
      this.isDeleting = false;
      this.wordIndex++;
    } else if ( this.txt === fullTxt ) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting) {
      typeSpeed /= 2;      
    } 
    setTimeout(() => this.type(), typeSpeed);
  }
}

