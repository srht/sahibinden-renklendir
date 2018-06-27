document.querySelectorAll(".searchResultsAttributeValue")
.forEach(function(item, x){ 
    item.bgColor=changeCellColor(item.innerText);  

})


function changeCellColor(name){
    switch(name){
      case "Siyah":return "#000"; 
      case "Beyaz":return "#fff"; 
      case "Gri":return "#ccc"; 
      case "Yeşil":return "#13a238"; 
      case "Gümüş Gri":return "#e6e6e6"; 
      case "Kırmızı":return "#c70101"; 
      case "Mavi":return "#1261ff"; 
      case "Turuncu":return "#e88d04"; 
      default:return "transparent";
    }
  }