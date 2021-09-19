function showContent(newName){
    console.log("newName app.js" + newName);
}

function init(){

    $("nav a").click(function(e){
        
        let btnId = e.currentTarget.id;
        console.log(btnId);
        MODEL.getMyVariable(btnId, showContent);        
        
    });

}
    
    
    $(document).ready(function(){
        console.log("ready");
        init();
    })