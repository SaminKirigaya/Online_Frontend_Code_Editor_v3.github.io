var htmlEditor = document.getElementById('html-editor'); // Html text area ID
var cssEditor = document.getElementById('css-editor'); // Css textarea ID
var jsEditor = document.getElementById('js-editor'); // Js textarea ID
var previewFrame = document.getElementById('preview-frame'); // Iframe div
var contentbox = document.getElementById('content'); //content box id

var startpoint = null; // We take starting of < was initially null cause nothng was there
var endpoint = 0; // we think no closing > is present

var word = "";//Adding < > a '/' to the starting tag that we got
var endtag = "";// inserting </ending tag>
var word2 = "";//Adding Js tag < > a '/' to the starting tag that we got
var endtag2 = "";// inserting Js </ending tag>

var insertpoint = 0; // html point where we insert the close tag we think at first no point
var insertpoint2 = 0; //Js  point where we insert the close tag we think at first no point

var modified = ""; // modified string that have whole html value with starting and closing tag
var modifiedjs = ""; // modified string that have whole Js value with starting and closing tag
var pointLoc = null; //html location of { ...

var startpoint2 = null; //Js starting of <
var endpoint2 = 0; // we think Js no closing > is present

//===========================================================================================================================
//html textarea tag complete function
function htmltagcomplete(){
  console.log(contentbox.innerText);
  var pointer = htmlEditor.selectionStart;
  
  
  //tag complete section :

  if (htmlEditor.value[pointer-1] === "<"){
      startpoint = pointer-1;
      
      
  }
  if (htmlEditor.value[pointer-1] === ">"){
      endpoint = pointer-1;
      
  }
  if (endpoint!=0 && startpoint >= 0){

      if(!(htmlEditor.value.slice(startpoint, endpoint).includes("/")) && !(htmlEditor.value.slice(startpoint, endpoint).includes("br")) && !(htmlEditor.value.slice(startpoint, endpoint).includes("img")) && !(htmlEditor.value.slice(startpoint, endpoint).includes("input"))){
          
          word = htmlEditor.value.slice(startpoint,endpoint+1);
          endtag = word.substring(0,1)+'/'+word.substring(1);

      }
      
      
      insertpoint = htmlEditor.selectionStart;
      modified = htmlEditor.value.substring(0,insertpoint)+endtag+htmlEditor.value.substring(insertpoint);
      htmlEditor.value = modified;

      startpoint = null;
      endpoint = 0;
      word= "";
      endtag = "";
      modified = "";

  }
  
}
//===================================================================================================================================================================-----------
//JS automatic tag complete <> </>
function jstagcomplete(){
  
  var pointer = jsEditor.selectionStart;
  
  
  //tag complete section :

  if (jsEditor.value[pointer-1] === "<"){
      startpoint2 = pointer-1;
      
      
  }
  if (jsEditor.value[pointer-1] === ">"){
      endpoint2 = pointer-1;
      
  }
  if (endpoint2!=0 && startpoint2 >= 0){

      if(!(jsEditor.value.slice(startpoint2, endpoint2).includes("/")) && !(jsEditor.value.slice(startpoint2, endpoint2).includes("br")) && !(jsEditor.value.slice(startpoint2, endpoint2).includes("img")) && !(jsEditor.value.slice(startpoint2, endpoint2).includes("input")) ){
          
          word2 = jsEditor.value.slice(startpoint2,endpoint2+1);
          endtag2 = word2.substring(0,1)+'/'+word2.substring(1);

      }
      
      
      insertpoint2 = jsEditor.selectionStart;
      modifiedjs = jsEditor.value.substring(0,insertpoint2)+endtag2+jsEditor.value.substring(insertpoint2);
      jsEditor.value = modifiedjs;

      startpoint2 = null;
      endpoint2 = 0;
      word2 = "";
      endtag2 = "";
      modifiedjs = "";

  }
  
}
//===================================================================================================================================================================------------
//Function to auto complete Html {....} :
function secondHtmlbracket(){

    //for Html {} automatic :
    var bracketStartPoint = htmlEditor.selectionStart;
    if (htmlEditor.value[bracketStartPoint-1] === "{"){
      
      startpoint = bracketStartPoint-1;
      
      pointLoc = htmlEditor.selectionStart;
      modified = htmlEditor.value.substring(0,pointLoc)+"}"+htmlEditor.value.substring(pointLoc);
      htmlEditor.value = modified;
      
    }


}

//===================================================================================================================================================================-----------
//Css { } bracket autocomplete:
function secondCssbracket(){

  //for css {} automatic :
  var bracketStartPoint = cssEditor.selectionStart;
  if (cssEditor.value[bracketStartPoint-1] === "{"){
    
    startpoint = bracketStartPoint-1;
    
    pointLoc = cssEditor.selectionStart;
    modified = cssEditor.value.substring(0,pointLoc)+"}"+cssEditor.value.substring(pointLoc);
    cssEditor.value = modified;
    
  }

}

//===================================================================================================================================================================--------
//Js { } racket autocomplete :
function secondJsbracket(){

  //for Js {} generation:
  var bracketStartPoint = jsEditor.selectionStart;
  if (jsEditor.value[bracketStartPoint-1] === "{"){
    
    startpoint = bracketStartPoint-1;
    
    pointLoc = jsEditor.selectionStart;
    modified = jsEditor.value.substring(0,pointLoc)+"}"+jsEditor.value.substring(pointLoc);
    jsEditor.value = modified;
    
  }


}

//===================================================================================================================================================================--------
//First bracket ( ) html function :
function firstHtmlbracket(){
  var bracketStartPoint = htmlEditor.selectionStart;
  if (htmlEditor.value[bracketStartPoint-1] === "("){
    
    startpoint = bracketStartPoint-1;
   
    pointLoc = htmlEditor.selectionStart;
    modified = htmlEditor.value.substring(0,pointLoc)+")"+htmlEditor.value.substring(pointLoc);
    htmlEditor.value = modified;
    
  }
}
//===================================================================================================================================================================--------
// First bracket ( ) js function :
function firstJsbracket(){
  var bracketStartPoint = jsEditor.selectionStart;
  if (jsEditor.value[bracketStartPoint-1] === "("){
    
    startpoint = bracketStartPoint-1;
    
    pointLoc = jsEditor.selectionStart;
    modified = jsEditor.value.substring(0,pointLoc)+")"+jsEditor.value.substring(pointLoc);
    jsEditor.value = modified;
    
  }
}
//============================================================================================================================================================================
function upsemihtmlcolon(){
  var bracketStartPoint = htmlEditor.selectionStart;
  if (htmlEditor.value[bracketStartPoint-1] == "\""){
    
    startpoint = bracketStartPoint-1;
   
    pointLoc = htmlEditor.selectionStart;
    modified = htmlEditor.value.substring(0,pointLoc)+'\"'+htmlEditor.value.substring(pointLoc);
    htmlEditor.value = modified;
    
  }

}
//===========================================================================================================================================================================
function upsemijscolon(){
  var bracketStartPoint = jsEditor.selectionStart;
  if (jsEditor.value[bracketStartPoint-1] == "\""){
    
    startpoint = bracketStartPoint-1;
   
    pointLoc = jsEditor.selectionStart;
    modified = jsEditor.value.substring(0,pointLoc)+'\"'+jsEditor.value.substring(pointLoc);
    jsEditor.value = modified;
    
  }

}
//===================================================================================================================================================================--------
//updating only html input when given

function updateHtmlPreview(){
    //html textarea input <></> generate
    htmltagcomplete();
    secondHtmlbracket();
    firstHtmlbracket();
    upsemihtmlcolon();


    //full textarea value taking at the end
    var htmlCode = htmlEditor.value;
    var cssCode = cssEditor.value;
    var jsCode = jsEditor.value;


    var previewContent = `
    <html>
      <head>
        <style>${cssCode}</style>
        
        
      </head>
      <body>${htmlCode}
      
      <script>${jsCode}</script>
      </body>
      
    </html>
  `;
  

  try{  previewFrame.contentDocument.open();
        previewFrame.contentDocument.write(previewContent);
        previewFrame.contentDocument.close();
  }catch(e){
    console.log(e);
  }      
  // to show item ebside display


}

//===================================================================================================================================================================----
//css input when given function :
function updateCssPreview(){
  //Css {} generate

  secondCssbracket();
  
  

  //full textarea value taking at the end
  var htmlCode = htmlEditor.value;
  var cssCode = cssEditor.value;
  var jsCode = jsEditor.value;


  var previewContent = `
  <html>
    <head>
      <style>${cssCode}</style>
      
      
    </head>
    <body>${htmlCode}
    
    <script>${jsCode}</script>
    </body>
    
  </html>
`;


try{  previewFrame.contentDocument.open();
      previewFrame.contentDocument.write(previewContent);
      previewFrame.contentDocument.close();
}catch(e){
  console.log(e);
}      
// to show item ebside display


}

//===================================================================================================================================================================----
//update Js input when given function :
function updateJsPreview(){
  //Js auto tag complete :
  jstagcomplete();
  //Js textarea input { } generate
  secondJsbracket();
  // Js textarea input ( ) generate automatic :
  firstJsbracket();
  // Js textarea input ( ) generate " "
  upsemijscolon();


  //full textarea value taking at the end
  var htmlCode = htmlEditor.value;
  var cssCode = cssEditor.value;
  var jsCode = jsEditor.value;


  var previewContent = `
  <html>
    <head>
      <style>${cssCode}</style>
      
      
    </head>
    <body>${htmlCode}
    
    <script>${jsCode}</script>
    </body>
    
  </html>
`;


try{  previewFrame.contentDocument.open();
      previewFrame.contentDocument.write(previewContent);
      previewFrame.contentDocument.close();
}catch(e){
  console.log(e);
}      
// to show item ebside display


}

//===================================================================================================================================================================
//normal update all function :
function updatePreview(){
  //html textarea input <></> generate
  

  //full textarea value taking at the end
  var htmlCode = htmlEditor.value;
  var cssCode = cssEditor.value;
  var jsCode = jsEditor.value;


  var previewContent = `
  <html>
    <head>
      <style>${cssCode}</style>
      
      
    </head>
    <body>${htmlCode}
    
    <script>${jsCode}</script>
    </body>
    
  </html>
`;


try{  previewFrame.contentDocument.open();
      previewFrame.contentDocument.write(previewContent);
      previewFrame.contentDocument.close();
}catch(e){
  console.log(e);
}      
// to show item ebside display


}

//================================================================================================
//calling the function each time we input  
cssEditor.addEventListener('input', updateCssPreview);
jsEditor.addEventListener('input', updateJsPreview);
htmlEditor.addEventListener('input', updateHtmlPreview);
htmlEditor.addEventListener('input', ()=>{contentbox.innerText = htmlEditor.value;});

//showing colored tag near so user can easily see
htmlEditor.addEventListener("input", function() {
  var text = contentbox.innerHTML;
  
  var coloredText = text.replace(/&lt;\/?([^&]+?)&gt;/g, '<span style="color: rgb(255, 97, 234);">$&</span>');
  contentbox.innerHTML = coloredText;
});
//initial input
//=================================================================================================
updatePreview(); // make the whole thing live even if no input is on focus

