<><script src="game.js"></script><noscript>
    Warning - JavaScript id Disabled.
    For full functionality of this page, it is necessary to enable JavaScript.


</noscript></>

function Bear(){
    this.dBear = 100
    this.htmlElement = document.getElementByld("bear");
    this.id = this.htmlElement.id;
    this.x = this.htmlElement.offsetLeft;
    this.y = this.htmlElement.offsetTop;

    this.move = function(xDir, yDir){
        this.x += this.dBear * xDir;
        this.y += this.dBear * yDir;
        this.display();
    };

    this.display = function(){
        this.htmlElement.style.left = this.x + "px";
        this.htmlElement.style.top = this.y + "px";
        this.htmlElement.style.display = "absolute";
    };

    class Bee {
        constructor(beeNumber){
            // the html element corresponding to the IMG of the bee
            this.htmlElement = createBeeImg(beeNumber);
            // iits HTML ID
            this.id = this.htmlElement.id;
            // the left position (x)
            this.x = this.htmlElement.offsetLeft;
            // the top postition (y)
            this.y = this.htmlElement.offsetTop;

            this.move = function(dx, dy) {
                // move the bees by dx, dy
                this.x += dx;
                this.y += dy;
                this.display();

            }

            this.display = function(){
                // adjust the position of the bee and display it
                this.fitBounds(); // add this to adjust the bounds
                this.htmlElement.style.left = this.x + "px";
                this.htmlElement.style.top = this.y + "px";
                this.htmlElement.style.display = "block";

            }
            this.fitBounds = function(){
                // check and make sure the bees stays in the board space
                let parent = this.htmlElement.parentElement;
                let iw = this.htmlElement.offsetWidth;
                let ih = this.htmlElement.offsetHeight;
                let l = parent.offsetLeft;
                let t = parent.offsetTop;
                let w = parent.offsetWidth;
                let h = parent.offsetHeight;

                if(this.x < 0)
                this.x =0
                if(this.x > w - iw)
                this.x = w - iw;
                if(this.y < 0)
                this.y = 0;
                if(this.y > h - ih)
                this.y = h - ih;
            };
        }
    }
    function createBeeImg(wNum){
        // get dimension and position od board div
        let boardDiv = document.getElementById("board");
        let boardDivW = boardDiv.offsetWidth;
        let boardDivH = boardDiv.offsetHeight;
        let boardDivX = boardDiv.offsetLeft;
        let boardDivY = boardDiv.offsetTop;

        // create the IMG element
        let img = document.createElement("img");
        img.setAttribute("src", "images/bee.gif");
        img.setAttribute("width", "100");
        img.setAttribute("alt", "A bee!");
        img.setAttribute("id", "bee" + wNum);
        img.setAttribute("class", "bee"); // set class of html tag img
        // add the IMG element to the DOM as a child of the board div

        img.style.position = "absolute";
        boardDiv.appendChild(img);
        // set initial position
        let x = getRandomInt(boardDivW);
        let y = getRandomInt(boardDivH);
        img.style.left = (boardDivX + x) + "px";
        img.style.top = (y) + "px";
        // return the img object 
        return img;

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        }
        

    }
}
