  var cols = 10;
  var rows = 10;

  var canvas = document.createElement('canvas');

  canvas.id = "CursorLayer";
  canvas.width = 300;
  canvas.height = 300;
  canvas.style.zIndex = 8;
  canvas.style.position = "absolute";
  canvas.style.border = "1px solid";


  var body = document.getElementsByTagName("body")[0];
  body.appendChild(canvas);

  var ctx = canvas.getContext("2d");
  var coordinates = [
  [2,1],[3,1],[4,1],[5,1],
  [2,2],[6,2],
  [2,3],[6,3],
  [2,4],[4,4],[5,4],
  [2,5],[6,5],
  [2,6],[6,6],
  [2,7],[3,7],[4,7],[5,7]
  ];


  function fill(x,y) {
    for (var i = coordinates.length - 1; i >= 0; i--) {
      if (x == coordinates[i][0] && y == coordinates[i][1]) {
        return 1;
      }
    }
    return 0;
  }

  function drawBorder(xPos, yPos, width, height, thickness = 1){
    ctx.fillStyle='#000';
    ctx.fillRect(xPos - (thickness), yPos - (thickness), width + (thickness * 2), height + (thickness * 2));
  }

  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      var x = i * 30;
      var y = j * 30;
      drawBorder(x, y, 30, 30);
      ctx.beginPath();
      ctx.fillStyle = ["#fff", "#000"][fill(i,j)];
      ctx.fillRect(x, y, 30, 30);
      ctx.closePath();
    }
  }