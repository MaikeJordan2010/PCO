var imported = document.createElement('script');
imported.src = 'jQuery.js';
document.head.appendChild(imported); 

var imported2 = document.createElement('script');
imported.src = 'html2canvas.min.js';
document.head.appendChild(imported2); 

var imported3 = document.createElement('script');
imported.src = 'canvas2Image.js';
document.head.appendChild(imported3); 

var imported4 = document.createElement('script');
imported.src = 'html2canvas.js';
document.head.appendChild(imported4); 

{/* <script src="jQuery.js"></script>
<script src="html2canvas.min.js"></script>
<script src="canvas2Image.js"></script>
<script src="html2canvas.js"></script> */}


$(document.getElementById("#paginaReceita")).ready(function(){
  $("#salvar").on('click',function(e){
    canvas2Imagem(document.body,{
      taintTest:true,
      onrendered:function(canvas){
        $('#paginaReceita').attr('src', canvas.toDataUrl());
      }
    });
  })
});

// $('#salvar').click(function(){
//   var elm = $('#paginaReceita').get(0);
//   var type = "png";
//   var lebar = "400";
//   var tingger = "500";
//   var filename = "Imagen01";  

//   html2canvas(elm).then(function(canvas){
//     var canWidth = canvas.width;
//     var canHeigth = canvas.heigth;
//     var img = Canvas2Image.ConvertToImagen(canvas,canWidth, canHeigth);
//     $('#preview').after(img);
//     Canvas2Image.saveImage(canvas, lebar,tingger,filename);
//   });
// });

// download_img = function(el) {
  
//   var image = canvas.ConvertToImagen("image/jpg");
//   el.href = image;
// };
