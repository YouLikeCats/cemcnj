
  document.addEventListener('DOMContentLoaded', function(){
    const sermoncollection = document.querySelector('.sermons-collection')
    if ( sermoncollection )  new Sermoncollection()  
  })
  

  class Sermoncollection {
    constructor(){
      this.sermons = document.querySelector('.sermons-collection')
      if ( this.sermons ) this.getResults()
    }

    async getResults() {
      try {
        const response = await fetch("https://cn.cemcnj.org/wp-json/wp/v2/sermon?sermon-category=21", {          
        });  
        const results = await response.json(); 
        this.consoleResults( results )
      }
      catch(e){
        console.log(e)
        console.log("There was a problem fetching the data.")
      }
    }

    consoleResults( results ) {
      results.forEach(( item, key ) => {
        if (key<9) {    
          //const select = document.querySelector('.sermons-collection>div.music-source:nth-child('+ ( key+1 ) +')' )   
          const select = this.sermons.querySelector(':scope>div.music-source:nth-child('+ ( key+1 ) +')' )   
          const title = select.querySelector('span')
          const out =  item.title.rendered + ' - ' + item['post-meta-fields'].sermon_speaker[0] + ' - ' + item['post-meta-fields'].sermon_date[0]   
          const subyear =  item['post-meta-fields'].sermon_date[0].substr(0,4)
          select.setAttribute('data-file', 'http://cn.cemcnj.org/wp-content/uploads/audio/audio'+ subyear +'/'+ item['post-meta-fields'].sermon_audio[0]);
          select.setAttribute('data-title', out);          
          title.innerHTML = out    
          this.initSimpleMusic()  
        }   
      });    
    }

    initSimpleMusic() {
      const txtElements = document.querySelectorAll('.music-source');
    
      txtElements.forEach( (txtElement,key)=>{
        const songfile = txtElement.getAttribute('data-file')
        const songtitle = txtElement.getAttribute('data-title')
        const songfolder = txtElement.getAttribute('data-folder')  
        new SimpleAudioPlayer(txtElement, songfile, songtitle, songfolder, key);     
      })
    }   
    
  }
  

  
class SimpleAudioPlayer{
  constructor(txtElement, songfile, songtitle, songfolder , key){
    this.simpleaudio = document.querySelector('.simple-audio-music');
    this.txtElement = txtElement
    this.folder = songfolder
    this.title = songtitle
    this.file = songfile   
    this.key = key   
    if (this.simpleaudio) this.events()
  }
  events(){
    this.txtElement.addEventListener('click', ()=>this.load() )     
    if (this.key == 0) this.load()
  }
  load(){
   
    this.simpleaudio.querySelector('audio').src=  this.file
    this.simpleaudio.querySelector('audio').load();
    this.simpleaudio.querySelector('.audio-title').innerHTML =  this.title 
    window.scrollTo(0, 150); 
  }
}
