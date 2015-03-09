module objects {
    // Asteroid class
    export class Asteroid extends createjs.Bitmap {
        //Public instance variables
        width: number;
        height: number;
        dy: number = 5;
        
        // Constructor
        constructor() {
            super(assets.getResult("asteroid"));

           

            this.width = this.getBounds().width * 0.5;
            this.height = this.getBounds().height * 0.5;

            this.reset();

            //this.y = 430;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;



        }
        // Public Method
        public update() {
            this.y += this.dy;

            //check if the astroid left the bottom of the screen
            if ((this.y) >= (480 + this.height))
                this.reset();
        }

        // reset the position of the asteroid
        public reset() {
            this.y = -this.height;
            this.x = Math.floor(Math.random() * 640); //canvas.stage.wdith

        }
    }
}