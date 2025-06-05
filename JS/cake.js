const scene=document.getElementById('cakeScene');
let rotX=-25, rotY=20, startX=0,startY=0,drag=false;

scene.addEventListener('pointerdown',e=>{
  drag=true;startX=e.clientX;startY=e.clientY;scene.style.cursor='grabbing';
});
window.addEventListener('pointermove',e=>{
  if(!drag) return;
  const dx=e.clientX-startX, dy=e.clientY-startY;
  scene.style.transform=`rotateX(${rotX-dy/2}deg) rotateY(${rotY+dx/2}deg)`;
});
window.addEventListener('pointerup',e=>{
  if(!drag) return;
  const dx=e.clientX-startX, dy=e.clientY-startY;
  rotX-=dy/2; rotY+=dx/2; drag=false; scene.style.cursor='grab';
});
