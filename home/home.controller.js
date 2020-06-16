class SliderCtrl {
  constructor($scope) {
    'ngInject';

    this.images = [{
    	src: 'https://via.placeholder.com/600/92c952'
    }, {
    	src: 'https://via.placeholder.com/600/24f355'
    }, {
    	src: 'https://via.placeholder.com/600/771796'
    }];

    this.currentImage = 0; 
    this.images[0].display = true;

    this.next = () => {
        this.images[this.currentImage].display = false;

        if(this.currentImage < Object.keys(this.images).length-1){	
			    this.currentImage ++; 	
        }else{
          this.currentImage = 0; 
        }
        
        this.images[this.currentImage].display = true;
    };

    this.prev = () => {
      	this.images[this.currentImage].display = false;
        
         if(this.currentImage >0){	
			    this.currentImage --; 	
        }else{
            this.currentImage = Object.keys(this.images).length-1; 
        }
		this.images[this.currentImage].display = true;
    };
  }
}

export default SliderCtrl;