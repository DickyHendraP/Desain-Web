var myImg = document.querySelector('img');

myImg.onclick = function(){
    var mySrc = myImg.getAttribute('src');

    if(mySrc== 'minion.jpg'){
        myImg.setAttribute('src', 'minion2.jpg');
    }else{
        myImg.setAttribute('src', 'minion.jpg');
    }
}