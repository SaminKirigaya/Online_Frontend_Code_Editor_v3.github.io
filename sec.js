var htmlEditor = document.getElementById('html-editor');
var cssEditor = document.getElementById('css-editor');
var jsEditor = document.getElementById('js-editor');
var previewFrame = document.getElementById('preview-frame');
var curentinp = ""; //location of newest >
var lastletinp =""; // location of last <
var lastletinp1 =""; // for css { location
var startindex = ""; 
var startindex1 = ""; // Js last } location
var finishindex = "";
var word = []; // to insert anything which was inside < > inside textarea input field so we can insert </...>
var condition = 1; // test variable
var lastletinp2= ""; // last { location in css area
var startindex2 = ""; // last } location in css area
var evenodd = "";
var line = "";


function updatePreview(){
    //html textarea input <></> generate
    var pointer = htmlEditor.selectionStart;
    console.log(pointer);
    var inp = htmlEditor.value;
    if (inp.includes("<") && inp.includes(">")){
        lastletinp = inp.lastIndexOf("<");
        curentinp = inp.lastIndexOf(">");

        console.log(lastletinp, curentinp);
        
        if (!(inp.slice(lastletinp, curentinp).includes("/")) && !(inp.slice(lastletinp, curentinp).includes("br")) && !(inp.slice(lastletinp, curentinp).includes("img")) ) {
            
            if(curentinp>lastletinp){
                var condition = 2;
                console.log(condition);

                for (let j=lastletinp; j<=curentinp; j++){
                    word.push(inp[j]);
                }
                console.log(word);
                word.splice(1,0,'/');
                for(let p=0; p<word.length; p++){
                    
                    line += word[p];
                }
                console.log(line);
                var modifiedString = htmlEditor.value.substring(0, pointer) + line + htmlEditor.value.substring(pointer);
                htmlEditor.value = modifiedString;
                word=[];
                line=[];
            }

          }

        }  

        //html input area "" generate ..............
        

        //css auto { }
        var csp = cssEditor.value;
        if (csp.includes("{") && !(csp.includes("}"))){
            lastletinp1 = csp.lastIndexOf("{");
            

            cssEditor.value += "}";
            

        }
        if (csp.includes("{") && csp.includes("}")){
            lastletinp1 = csp.lastIndexOf("{");
            var startindex1 = csp.lastIndexOf("}");;
            
            if (lastletinp1 > startindex1){
                cssEditor.value += "}";

            } 
            
        }

        //javascript auto brackets {}
        var jsp= jsEditor.value;
        if (jsp.includes("{") && !(jsp.includes("}"))){
            lastletinp2 = jsp.lastIndexOf("{");

            
            jsEditor.value += "}";
            

        }
        if (jsp.includes("{") && jsp.includes("}")){
            lastletinp2 = jsp.lastIndexOf("{");
            startindex2 = jsp.lastIndexOf("}");;
            
            if (lastletinp2 > startindex2){
                jsEditor.value += "}";

            } 
           
        }

        //javascript auto bracket ()
        if (jsp.includes("(") && !(jsp.includes(")"))){
            lastletinp2 = jsp.lastIndexOf("(");

            
            jsEditor.value += ")";
            

        }
        if (jsp.includes("(") && jsp.includes(")")){
            lastletinp2 = jsp.lastIndexOf("(");
            startindex2 = jsp.lastIndexOf(")");;
            
            if (lastletinp2 > startindex2){
                jsEditor.value += ")";

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
