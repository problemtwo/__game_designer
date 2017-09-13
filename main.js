window.onload = function()
{
  
  id('run').onclick = function()
  {
    (function()
    {
      const canvas = document.getElementById('output');
      const context = canvas.getContext('2d');
      
      function id(i){return document.getElementById(i);}
      function tag(t){return document.getElementsByTagName(t);}
      
      function fill(x){context.fillStyle = x;}
      function rect(x,y,w,h){context.fillRect(x,y,w,h);
      function circle(x,y,r)
      {
        context.beginPath();
        context.arc(x,y,r,0,2*Math.PI);
        context.closePath();
      }
      function polygon(points)
      {
        context.beginPath();
        context.moveTo(points[0][0],points[0][1]);
        for(let i=1;i<points.length;i++){context.lineTo(points[i][0],points[i][1]);}
        context.closePath();
      }
      
      try{eval(id('input').value);}catch(err){id('log').value = err.message;}
    })();
  };
};
