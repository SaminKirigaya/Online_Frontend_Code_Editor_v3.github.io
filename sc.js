var htmlEditor = document.getElementById('html-editor');
var cssEditor = document.getElementById('css-editor');
var jsEditor = document.getElementById('js-editor');
var previewFrame = document.getElementById('preview-frame');
var curentinp = "";
var lastletinp ="";
var startindex = "";
var finishindex = "";
var word = [];
var condition = 1;


function updatePreview(){
    var inp = htmlEditor.value;
    if (inp.includes("<") && inp.includes(">")){
        lastletinp = inp.lastIndexOf("<");
        curentinp = inp.lastIndexOf(">");
        console.log(lastletinp, curentinp);
        
        if (!(inp.slice(lastletinp, curentinp).includes("/"))) {
            if(curentinp>lastletinp){
                var condition = 2;
                console.log(condition);

                for (let j=lastletinp; j<=curentinp; j++){
                    word.push(inp[j]);
                }
                console.log(word);
                word.splice(1,0,'/');
                for(let p=0; p<word.length; p++){
                    htmlEditor.value += word[p];
                }
                word=[];
            }

          }

        

        }  

    




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

    

  

//calling the function each time we input  
cssEditor.addEventListener('input', updatePreview);
jsEditor.addEventListener('input', updatePreview);
htmlEditor.addEventListener('input', updatePreview);

//initial input
updatePreview();
