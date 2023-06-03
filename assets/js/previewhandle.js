var htmledit = document.getElementById('html-editor'); // Html text area ID
var cssedit = document.getElementById('css-editor'); // Css textarea ID
var jsedit = document.getElementById('js-editor'); // Js textarea ID
var prevfrm = document.getElementById('preview-frame2'); // Iframe div
var widinp =  document.getElementById('inpwidth');
var heightinp =  document.getElementById('inpheight');


function readpreview(){
  
  var wid = prevfrm.style.width.length -2;
  var val = Number(prevfrm.style.width.substring(0,wid));
  widinp.value = val;
  
  var hei = prevfrm.style.height.length -2;
  var val2 = Number(prevfrm.style.height.substring(0,hei));
  heightinp.value = val2;
  
}


function updateprv(){
    //html textarea input <></> generate
    
    
    //full textarea value taking at the end
    var htmCod = htmledit.value;
    var csscod = cssedit.value;
    var jscod = jsedit.value;
  
  
    var content = `
    <html>
      <head>
        <style>${csscod}</style>
        
        
      </head>
      <body>${htmCod}
      
      <script>${jscod}</script>
      </body>
      
    </html>
  `;
  
  
  try{  prevfrm.contentDocument.open();
        prevfrm.contentDocument.write(content);
        prevfrm.contentDocument.close();
  }catch(e){
    console.log(e);
  }      
  // to show item ebside display
  
  
}



  
widinp.addEventListener("input",()=>{
    
     

  prevfrm.style.width = widinp.value+"px";
    
  })
heightinp.addEventListener("input",()=>{
    
   
  prevfrm.style.height = heightinp.value+"px";
 
})

setInterval(readpreview,500);
cssedit.addEventListener('input', updateprv);
jsedit.addEventListener('input', updateprv);
htmledit.addEventListener('input', updateprv);

updateprv();