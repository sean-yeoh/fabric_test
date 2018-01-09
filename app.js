$("document").ready(function() {
  var data = {"objects":[{"type":"text","originX":"center","originY":"center","left":250,"top":20,"width":42.2265625,"height":22.599999999999998,"fill":"#ff00ff","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"text":"Mike","fontSize":20,"fontWeight":"normal","fontFamily":"Arial","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","charSpacing":0},{"type":"text","originX":"center","originY":"center","left":250,"top":120,"width":133.4765625,"height":135.6,"fill":"#ff00ff","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"text":"00","fontSize":120,"fontWeight":"normal","fontFamily":"Arial","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","charSpacing":0}],"width":500,"height":500}

  var name = "john"
  var number = "00"
  var imageUrl = "http://www.androidwallpper.com/wp-content/uploads/2017/01/camo-patterns-hd-wallpaper-for-android-phone.jpg"
  var canvas = this.__canvas = new fabric.Canvas("c");
  // canvas.setBackgroundImage(imageUrl, canvas.renderAll.bind(canvas));

  fabric.Image.fromURL(imageUrl, function(oImg) {
    if (oImg.width > oImg.height) {
      oImg.scaleToHeight(canvas.getHeight())
    } else {
      oImg.scaleToWidth(canvas.getWidth())
    }
    oImg.center();
    oImg.setCoords();
    canvas.add(oImg);
    var canvasName = new fabric.Text(name, {
      top: 120,
      fontSize: 30,
      originX: 'center',
      originY: 'center',
      fill: "#00ffff",
      fontFamily: 'Arial'
    });

    var canvasNumber = new fabric.Text(number, {
      top: 275,
      originX: 'center',
      originY: 'center',
      fontSize: 250,
      fill: "#00ffff",
      fontFamily: "Arial"
    });


  canvas.add(canvasName, canvasNumber)
  canvasName.centerH();
  canvasName.setCoords()
  canvasNumber.centerH();
  canvasNumber.setCoords()
  });



  $("button").click(function() {
    console.log(JSON.stringify(canvas.toJSON(["width", "height"])));
    var canvasD = this.__canvas = new fabric.Canvas("d");
  })

})


