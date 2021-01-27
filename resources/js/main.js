$(document).ready(function(){
    //sticky
    $(".js--service-section").waypoint(function(direction){
        
        if(direction== "down"){
           $("nav").addClass("sticky");
           
           }
           else{
           $("nav").removeClass("sticky");
           }
    });
    
    //mixitup
    var mixer = mixitup('.sohan');
    //smooth scroll
//    $("a").on('click',function (event){
//       if(this.hash!==""){
//           event.preventDefault();
//           var hash =this.hash;
//           $('html,body').animate({
//               scrollTop:$(hash).offset().top},800,function(){
//               window.location.hash= hash;
//           });
//       } 
//    });
});
function opennav()
{
    document.getElementById("mynav").style.width="100%";
}
function closenav()
{
    document.getElementById("mynav").style.width="0%";
}