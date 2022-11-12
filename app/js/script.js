(function() {

    
    /**
    *  Utils
    **/
    // Set random value between min and max
    function between(min, max) {  
        return Math.floor(
            Math.random() * (max - min) + min
        )
    }

    // Clamp value between min and max
    Number.prototype.clamp = function(min, max) {
        return Math.min(Math.max(this, min), max);
    }
    
    /**
    *  setTimeout via promise
    **/
    function delay(ms) {
        return new Promise((resolve, reject) => {
          setTimeout(resolve, ms);
        });
    }
    /* 
    Using ->

    delay(500)
    .then(() => {
        console.log("Some heavy operation")
    }).then(() => {
        console.log('New action that goes after heavy operation')
    })

    */

    /**
     * Sizes
     */
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }



}());
