class Form{
    constructor(){
      this.input = createInput("").attribute("placeholder","Enter your name...");
      this.button = createButton("PLAY");
      this.message = createElement();
    }

    position(){
        this.input.position(700,300);
        this.button.position(730,350);
        this.message.position(700,350);
    }

    handleMousePressed(){
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            var name = this.input.val();
            var greeting = `Hello ${name}, please wait for other player to join`
            this.message.html(greeting)

            //increase the player count ans switch the game state
        })
    }

    display(){
       this.position();
       this.handleMousePressed();
    }
}
