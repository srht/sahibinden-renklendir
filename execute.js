var eoflen=document.querySelectorAll('#eofElm').length;
if(eoflen==0){
  /*
document.body.innerHTML='<div id="fb-root"></div>'+document.body.innerHTML;
document.body.innerHTML='<script>(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id;js.src = "https://connect.facebook.net/tr_TR/sdk.js#xfbml=1&version=v3.1&appId=727274540745146&autoLogAppEvents=1";fjs.parentNode.insertBefore(js, fjs);}(document, "script", "facebook-jssdk"));</script>'+document.body.innerHTML;
*/
var commentsTab=document.createElement('li');
var commentsDetail=document.createElement('div');
var closerBtn=document.createElement('button');
closerBtn.innerText='Kapat';
closerBtn.addEventListener("click",function(){
  commentsDetail.style.display="none";
}); 

commentsDetail.setAttribute('id','commentsDetail');
commentsDetail.setAttribute('class','mini-tab-content');
commentsDetail.style.display='none';
commentsDetail.innerHTML='<h3>Yorumlar</h3>';
commentsDetail.style.background='#fff';
commentsDetail.style.width="100%";
commentsDetail.style.height="400px";
commentsDetail.style.margin="3px";
commentsDetail.appendChild(closerBtn);

commentsTab.setAttribute('id','commentsTab');
commentsTab.innerHTML='<a id="commentsDetailBtn"><strong>Yorumlar</strong></a>';
commentsTab.addEventListener('click',function(){
  commentsDetail.style.display='block';
  var cldetail = document.getElementById('classified-detail');
  cldetail.style.position='relative';
  commentsDetail.style.top=0;
  commentsDetail.style.position='absolute';
})

var classTabs=document.querySelector('#classified-tabs > ul');
if(classTabs!=null){
  classTabs.appendChild(commentsTab);
  document.querySelector('#classified-detail').appendChild(commentsDetail);
}

document.querySelectorAll(".searchResultsAttributeValue")
.forEach(function(item, x){ 
    changeCellColor(item);  
})

document.querySelectorAll(".searchResultsPriceValue > div")
.forEach(function(item,x){
  emphasisPrice(item);
})

var eofElement=document.createElement('div');
eofElement.setAttribute('id','eofElm')
document.body.appendChild(eofElement)

}

function changeCellColor(item){
    switch(item.innerText){
      case "Siyah":item.bgColor="#000"; item.style.color="#fff"; break;
      case "Beyaz":item.bgColor= "#fff"; item.style.color="#000";break;
      case "Gri":item.bgColor= "#ccc"; item.style.color="#000";break;
      case "Yeşil":item.bgColor= "#13a238"; item.style.color="#fff";break;
      case "Gümüş Gri":item.bgColor= "#e6e6e6"; item.style.color="#000";break;
      case "Kırmızı":item.bgColor= "#c70101"; item.style.color="#fff";break;
      case "Mavi":item.bgColor= "#1261ff"; item.style.color="#fff";break;
      case "Turuncu":item.bgColor= "#e88d04"; item.style.color="#000";break;
      case "Füme":item.bgColor= "#879a9e";item.style.color="#fff";break;
      case "Lacivert":item.bgColor= "#013686"; item.style.color="#fff";break;
      case "Şampanya":item.bgColor= "#f4ede5"; item.style.color="#000";break;
      default: item.bgColor= "transparent"; item.style.color="#000";break;
    }
  }

  function emphasisPrice(item){
    item.style.fontWeight="bold";
    item.style.fontSize="medium";
  }
