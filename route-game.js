
requireLogin();fillUser();
const coords={start:[550,416],a:[470,370],b:[380,430],c:[500,290],goal:[310,500]};
const allowed={start:["a","b"],a:["b","goal"],b:["a","goal"],goal:[]};
let current="start",path=["start"],finished=false;
const line=document.getElementById("routeLine"),fb=document.getElementById("routeFeedback"),player=document.getElementById("mapPlayer");
function draw(){
  line.setAttribute("points",path.map(n=>coords[n].join(",")).join(" "));
  const [x,y]=coords[current];player.style.left=(x/10)+"%";player.style.top=(y/6.6)+"%";
  document.querySelectorAll(".map-node").forEach(b=>b.classList.toggle("visited",path.includes(b.dataset.node)));
}
document.querySelectorAll(".map-node").forEach(b=>b.addEventListener("click",()=>{
  const n=b.dataset.node;if(n==="start"||finished)return;
  if(n==="c"){fb.className="feedback show bad";fb.textContent="จุด C ถูกปิดตามโจทย์ ลองเลือกเส้นทางอื่น";return}
  if(!allowed[current].includes(n)){fb.className="feedback show bad";fb.textContent="จุดนี้ยังเชื่อมจากตำแหน่งปัจจุบันไม่ได้ เลือกจุดที่ต่อจากเส้นทาง";return}
  current=n;path.push(n);draw();
  if(n==="goal"){
    finished=true;fb.className="feedback show good";fb.textContent="ถึงจุดปลอดภัยแล้ว • เส้นทางนี้ผ่านเงื่อนไขของภารกิจ";
    updateUser(u=>{const g=u.progress.games.route;g.plays++;g.best=Math.max(g.best,100);u.progress.trainings++;u.progress.xp+=50;u.progress.passedScenarios++;u.progress.history.unshift({type:"safe-route",score:100,at:new Date().toISOString()})});
  }else{fb.className="feedback show";fb.textContent="ดีมาก เลือกจุดถัดไปเพื่อไปยัง SAFE"}
}));
document.getElementById("routeReset").addEventListener("click",()=>{current="start";path=["start"];finished=false;fb.className="feedback show";fb.textContent="โจทย์กำหนดให้จุด C ใช้งานไม่ได้ • เลือก A หรือ B";draw()});
draw();
