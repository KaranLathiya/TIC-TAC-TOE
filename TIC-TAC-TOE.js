let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
    let start=document.getElementById('no')
    function select(e){
        // music.play()
        // console.log(e)
        var name="PLAYER 1's"
        if(e.textContent=="COMPUTER 🤖"){
            name="YOUR"
        }
        start.innerHTML=` <div class="center" id="content">${name} TURN & SIGN IS :  ❌</div>
        <hr>
        <div class="grid">
    <button class="bt"  onclick="val(this)"></button>
    <button class="bt" onclick="val(this)"></button>
    <button class="bt" onclick="val(this)"></button>
    <button class="bt" onclick="val(this)"></button>
    <button class="bt" onclick="val(this)"></button>
    <button class="bt" onclick="val(this)"></button>
    <button class="bt" onclick="val(this)"></button>
    <button class="bt" onclick="val(this)"></button>
    <button class="bt" onclick="val(this)"></button>
</div><hr>
<div class="center down"><span class="up" >WANT TO PLAY AGAIN  👉 </span> <input type="button" value="REPLAY" class="bt2" onclick="neww(this)" ><span class="up" >&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;TO RESTART THE GAME  👉 </span> <input type="button" value="RESET" class="bt2" onclick="restart()" ></div>`
var content=document.getElementById('content')
// neww();
    }
   
    var flag=true
    var move=1,comp=true;
    let fin=0
    function val(z){
        // console.log(content.textContent)
            if(content.textContent=="PLAYER 1's TURN & SIGN IS :  ❌"){
            comp=false  
            // console.log(comp)
        }
        if(move<10 && flag ){
            
        audioTurn.play()
          let pl= move%2
        if(pl==0 && !comp){
        content.innerHTML=`PLAYER 1's TURN & SIGN IS : ❌`
        z.innerHTML=`⭕`
        z.disabled=true;
        move+=1
        fin=finish()
        }
        else if (!comp){
        content.innerHTML=`PLAYER 2's TURN & SIGN IS : ⭕`
        z.innerHTML=`❌` 
        z.disabled=true;
        move+=1
        fin=finish()  
        }
        else if(comp){
            console.log('computer')
            if(pl==1){
                // console.log('comp')
        
        z.innerHTML=`❌` 
        z.disabled=true;
        move+=1
        fin=finish()
        // console.log('computer')
        console.log(fin)
        if (fin==0 && move!=10){
            content.innerHTML=`WAIT FOR COMPUTER'S TURN & SIGN IS : ⭕`
            let bt=document.getElementsByClassName('bt')
            for(let i=0;i<bt.length;i++){
                bt[i].disabled=true
                // console.log("disable")
                }
                // console.log(bt)
            setTimeout(()=>{
                audioTurn.play()
                re=true
                while(re){
        let random=Math.floor(Math.random()*9)
        if(bt[random].textContent==""){
            bt[random].textContent="⭕"
            re=false
            content.innerHTML=`YOUR TURN & SIGN IS : ❌`
        }
                }
        move+=1
        fin=finish()
        for(let i=0;i<bt.length;i++){
                if(bt[i].textContent==""){
                bt[i].disabled=false
                // console.log("enable")
                }
                }
            },1000);
        }
        }
        }
       if(move==10 && flag){
            content.innerHTML=`GAME OVER : IT'S A TIE` 
            content.style="color:red"
        }
    }
}
    function finish(){
        let bt=document.getElementsByClassName('bt')
        // console.log(bt[0].textContent);
        // console.log(bt[1].textContent);
        // console.log(bt[2].textContent);
        if(compare(bt[0],bt[1],bt[2]) || 
        compare(bt[3],bt[4],bt[5]) || 
        compare(bt[6],bt[7],bt[8]) || 
        compare(bt[0],bt[3],bt[6]) || 
        compare(bt[1],bt[4],bt[7]) || 
        compare(bt[2],bt[5],bt[8]) || 
        compare(bt[0],bt[4],bt[8]) || 
        compare(bt[2],bt[4],bt[6])){
            // console.log("xaax")
            for(let i=0;i<bt.length;i++){
                bt[i].disabled=true
                // console.log("disable final")
                }
            return 1;
        }
        function compare(a,b,c){
            if(a.textContent==b.textContent && b.textContent==c.textContent && c.textContent=="❌"){ 
                gameover.play();
                if(comp){
                    content.innerHTML=`GAME OVER : YOU WIN THE GAME&nbsp;&nbsp;&nbsp;&nbsp;<img class="imgbox" src="excited.gif" alt="" />`
                } else{
                    content.innerHTML=`GAME OVER : PLAYER 1 WINS THE GAME&nbsp;&nbsp;&nbsp;&nbsp;<img class="imgbox" src="excited.gif" alt="" />`
                }
                change(a,b,c)      
                return 1;
            }
            else if(a.textContent==b.textContent && b.textContent==c.textContent && c.textContent=="⭕"){
                gameover.play();
                if(comp){
                    content.innerHTML=`GAME OVER : COMPUTER WIN THE GAME`
                } else{
                    content.innerHTML=`GAME OVER : PLAYER 2 WINS THE GAME`
                }change(a,b,c)
                return 1;
            }
        }
        return 0;
    }
    function change(a,b,c){
                flag=false
                content.style="color:red"
                a.style="border: 10px double cyan;background-color:white;"
                b.style="border: 10px double cyan;background-color:white;"
                c.style="border: 10px double cyan;background-color:white;"
                // console.log(a)
    }
    function restart(){
                        window.location.reload();
                         }
    function neww(e){
                content.style="color:cyan"
                let bt=document.getElementsByClassName('bt')
                flag=true
                move=1;
                for(let i=0;i<bt.length;i++){
                bt[i].textContent=""
                bt[i].disabled=false
                bt[i].style="border: 0px;background-color:white;"
                if(comp){
                content.innerHTML=`YOUR TURN & SIGN IS :  ❌`
                }
                else{
                content.innerHTML=`PLAYER 1's TURN & SIGN IS :  ❌`
                }
                // console.log(bt)
                }
}
