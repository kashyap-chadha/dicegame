function Random() {
    var random1=Math.random();
    var random1=Math.floor(random1*6)+1;
    var random2=Math.random();
    var random2=Math.floor(random2*6)+1;
    document.querySelector(".img1").src="./images/dice"+random1+".png";
    document.querySelector(".img2").src="./images/dice"+random2+".png";
    if(random1>random2){
        document.querySelector(".win").innerHTML="winner is player 1!";
    }
    else if(random1<random2){
        document.querySelector(".win").innerHTML="winner is player 2!";
    }
    else{
        document.querySelector(".win").innerHTML="It's a Draw!";
    }

}
Random();

