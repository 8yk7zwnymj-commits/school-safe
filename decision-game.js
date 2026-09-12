
requireLogin(); fillUser();

const scenarios = {
  fire:{intro:"มีสัญญาณเตือนและพบควันบริเวณหนึ่งของห้อง", scene:"fire", steps:[
    {q:"ได้ยินสัญญาณเตือนและเห็นควันอยู่ด้านหนึ่ง คุณควรทำอะไรก่อน?", a:0, choices:["ตั้งสติ ดูทิศทางที่ปลอดภัย และฟังคำแนะนำของครู","รีบวิ่งไปทางประตูที่ใกล้ที่สุดทันที","ย้อนกลับไปเก็บของส่วนตัว"], action:["observe","rush-smoke","bag"]},
    {q:"ครูชี้ทางออกอีกด้านที่ไม่มีควัน คุณควรทำอย่างไร?", a:0, choices:["เคลื่อนไปตามเส้นทางที่ครูกำหนดและอยู่กับกลุ่ม","แยกไปอีกทางเพราะคิดว่าสั้นกว่า","ยืนรออยู่คนเดียว"], action:["exit","wrong-way","freeze"]},
    {q:"เมื่อถึงพื้นที่ที่กำหนดแล้วควรทำอะไร?", a:0, choices:["อยู่กับกลุ่มและรอการตรวจสอบ/คำแนะนำ","ย้อนกลับเข้าอาคารเอง","ออกจากพื้นที่โดยไม่แจ้งใคร"], action:["group","back","leave"]}
  ]},
  quake:{intro:"อาคารเริ่มสั่นและมีสิ่งของบางชิ้นเคลื่อน", scene:"quake", steps:[
    {q:"ขณะอาคารกำลังสั่น จุดใดในฉากเหมาะสมกว่าจุดอื่น?", a:0, choices:["บริเวณใต้โต๊ะที่แข็งแรงและห่างจากกระจก","ใกล้ตู้กระจกเพื่อมองสถานการณ์","ยืนตรงประตูแล้วรีบออกทันที"], action:["under-desk","glass","door-rush"]},
    {q:"เมื่อการสั่นหยุดและได้รับคำสั่งให้อพยพ คุณควร?", a:0, choices:["ใช้เส้นทางที่กำหนดและอยู่กับกลุ่ม","กลับไปเก็บของก่อน","เลือกเส้นทางใหม่เอง"], action:["exit","bag","wrong-way"]},
    {q:"ถึงจุดรวมพลแล้วควร?", a:0, choices:["อยู่กับกลุ่มและรอคำแนะนำ","กลับเข้าอาคารเอง","เดินออกจากบริเวณโรงเรียนเอง"], action:["group","back","leave"]}
  ]},
  medical:{intro:"เพื่อนล้มลงและดูไม่สบาย ขณะที่ครูอยู่ใกล้ ๆ", scene:"medical", steps:[
    {q:"คุณควรทำอะไรก่อน?", a:0, choices:["รีบแจ้งครู/ผู้ใหญ่หรือเจ้าหน้าที่ใกล้ที่สุด","ให้เพื่อนหลายคนเข้ามามุงดู","พยายามจัดการทุกอย่างคนเดียว"], action:["call-teacher","crowd","alone"]},
    {q:"ระหว่างรอผู้ใหญ่เข้ามาช่วย ควรทำอย่างไร?", a:0, choices:["เปิดพื้นที่ให้โล่งและทำตามคำแนะนำ","เคลื่อนย้ายเพื่อนเองทันทีโดยไม่มีคำแนะนำ","ถ่ายคลิปเหตุการณ์"], action:["make-space","move-alone","film"]},
    {q:"เมื่อผู้ใหญ่หรือเจ้าหน้าที่มาถึงควร?", a:0, choices:["บอกสิ่งที่สังเกตเห็นอย่างสั้น ชัด และเป็นข้อเท็จจริง","พูดพร้อมกันหลายคน","เดินออกไปโดยไม่บอกข้อมูล"], action:["report","noise","leave"]}
  ]},
  storm:{intro:"มีกิจกรรมกลางแจ้งและมีประกาศเตือนพายุ", scene:"storm", steps:[
    {q:"เมื่อมีประกาศให้หยุดกิจกรรม คุณควร?", a:0, choices:["หยุดกิจกรรมและเคลื่อนไปยังพื้นที่ที่โรงเรียนกำหนด","เล่นต่อจนฝนตกหนัก","แยกออกจากกลุ่มกลับเอง"], action:["shelter","stay-field","leave"]},
    {q:"เมื่อฝนและลมแรงขึ้น ควร?", a:0, choices:["อยู่กับกลุ่มในพื้นที่ที่กำหนดและรอคำแนะนำ","กลับออกไปเก็บของกลางสนาม","ยืนดูสถานการณ์ในพื้นที่เปิด"], action:["shelter","rush-field","stay-field"]},
    {q:"สภาพอากาศดีขึ้นแต่ยังไม่มีประกาศให้กลับ ควร?", a:0, choices:["รอคำยืนยันจากผู้รับผิดชอบก่อน","กลับไปทำกิจกรรมทันที","ออกจากโรงเรียนเอง"], action:["wait","stay-field","leave"]}
  ]},
  electric:{intro:"พบสายไฟที่ดูชำรุดบริเวณทางเดิน", scene:"electric", steps:[
    {q:"สิ่งแรกที่ควรทำคืออะไร?", a:0, choices:["เว้นระยะจากจุดเสี่ยงและแจ้งครู/ผู้รับผิดชอบ","เดินเข้าไปดูสายไฟใกล้ ๆ","จับสายไฟออกจากทางเดินเอง"], action:["report-wire","approach-wire","touch-wire"]},
    {q:"ระหว่างรอผู้รับผิดชอบควร?", a:0, choices:["เตือนคนใกล้เคียงไม่ให้เข้าใกล้จุดเสี่ยง","ปล่อยไว้โดยไม่บอกใคร","ชวนเพื่อนมาดู"], action:["warn","ignore","crowd-wire"]},
    {q:"เมื่อผู้รับผิดชอบเข้ามาจัดการแล้วควร?", a:0, choices:["ทำตามคำแนะนำและหลีกเลี่ยงพื้นที่จนกว่าจะยืนยันว่าปลอดภัย","เดินผ่านทันทีเพราะมีคนมาดูแล้ว","ย้ายอุปกรณ์เองเพื่อช่วย"], action:["wait-safe","approach-wire","touch-wire"]}
  ]}
};

const $=id=>document.getElementById(id);
let key="fire", step=0, score=0, locked=false;
const scene=$("decisionScene"), player=$("playerFx");

function show(id,on=true){const el=$(id); if(el) el.setAttribute("opacity",on?"1":"0")}
function playerAt(x,y,scale=1,rotate=0){player.style.transition="transform .65s ease";player.setAttribute("transform",`translate(${x} ${y}) scale(${scale}) rotate(${rotate})`)}
function resetScene(){
  ["fireFx","smokeFx","rainFx","friendFx","teacherFx","shelterFx","debrisFx","objWire"].forEach(x=>show(x,false));
  ["objWindow","objCabinet","objDoor","objDesk1","objDesk2","exitSign"].forEach(x=>show(x,true));
  playerAt(425,325,1,0);
  const s=scenarios[key].scene;
  if(s==="fire"){show("fireFx");show("smokeFx");}
  if(s==="quake"){show("debrisFx");}
  if(s==="medical"){show("friendFx");show("teacherFx");}
  if(s==="storm"){show("rainFx");show("shelterFx");show("teacherFx");}
  if(s==="electric"){show("objWire");show("teacherFx");}
}
function caption(t){$("sceneCaption").textContent=t}
function animate(action){
  resetScene();
  const map={
    "observe":[425,325,"ตัวละครหยุดประเมินและฟังคำแนะนำ"],
    "rush-smoke":[675,300,"ตัวละครรีบเข้าใกล้บริเวณที่มีควัน — เสี่ยงกว่า"],
    "bag":[235,330,"ตัวละครย้อนกลับไปเก็บของ ทำให้เสียเวลา"],
    "exit":[760,290,"ตัวละครเคลื่อนไปตามทางออกที่กำหนด"],
    "wrong-way":[90,310,"ตัวละครแยกออกจากเส้นทางที่กำหนด"],
    "freeze":[425,325,"ตัวละครหยุดอยู่คนเดียวแทนที่จะอยู่กับกลุ่ม"],
    "group":[700,310,"ตัวละครอยู่กับกลุ่มและรอคำแนะนำ"],
    "back":[420,320,"ตัวละครย้อนกลับเข้าไปเอง"],
    "leave":[835,300,"ตัวละครแยกออกจากพื้นที่โดยไม่แจ้งผู้รับผิดชอบ"],
    "under-desk":[235,405,"ตัวละครไปยังบริเวณใต้โต๊ะที่แข็งแรงและห่างจากกระจก"],
    "glass":[390,245,"ตัวละครเข้าใกล้ตู้กระจก — จุดเสี่ยงกว่า"],
    "door-rush":[790,285,"ตัวละครรีบไปที่ประตูขณะอาคารยังสั่น"],
    "call-teacher":[665,300,"ตัวละครไปแจ้งครู/ผู้ใหญ่ให้เข้ามาช่วย"],
    "crowd":[530,390,"คนเข้าใกล้เพื่อนมากขึ้น ทำให้พื้นที่แออัด"],
    "alone":[520,390,"ตัวละครพยายามจัดการคนเดียวแทนการเรียกผู้ใหญ่"],
    "make-space":[470,355,"ตัวละครช่วยเปิดพื้นที่และรอคำแนะนำ"],
    "move-alone":[520,390,"ตัวละครพยายามเคลื่อนย้ายเองโดยไม่มีคำแนะนำ"],
    "film":[610,340,"ตัวละครใช้เวลาไปกับการบันทึกภาพแทนการขอความช่วยเหลือ"],
    "report":[650,305,"ตัวละครบอกข้อมูลที่สังเกตเห็นแก่ผู้ใหญ่"],
    "noise":[585,330,"มีหลายคนพูดพร้อมกัน ทำให้สื่อสารยากขึ้น"],
    "shelter":[750,300,"ตัวละครเคลื่อนไปยังพื้นที่ที่โรงเรียนกำหนด"],
    "stay-field":[260,330,"ตัวละครยังอยู่ในพื้นที่เปิด"],
    "rush-field":[180,330,"ตัวละครกลับออกไปในพื้นที่เปิด"],
    "wait":[735,315,"ตัวละครอยู่ในพื้นที่กำหนดและรอคำยืนยัน"],
    "report-wire":[665,300,"ตัวละครเว้นระยะจากสายไฟและไปแจ้งผู้รับผิดชอบ"],
    "approach-wire":[620,390,"ตัวละครเข้าใกล้สายไฟที่ดูชำรุด — เสี่ยงกว่า"],
    "touch-wire":[655,400,"ตัวละครเข้าไปจัดการสายไฟเอง — ไม่เหมาะสม"],
    "warn":[510,330,"ตัวละครเตือนคนใกล้เคียงให้เว้นระยะ"],
    "ignore":[790,310,"ตัวละครเดินผ่านไปโดยไม่แจ้งจุดเสี่ยง"],
    "crowd-wire":[600,380,"มีคนเข้าใกล้บริเวณสายไฟมากขึ้น"],
    "wait-safe":[690,315,"ตัวละครทำตามคำแนะนำและรอการยืนยันว่าพื้นที่ปลอดภัย"]
  };
  const [x,y,t]=map[action]||[425,325,"ตัวละครหยุดประเมินสถานการณ์"];
  playerAt(x,y,action==="under-desk"?.75:1,0); caption(t);
}
function render(){
  locked=false; resetScene();
  const s=scenarios[key], item=s.steps[step];
  $("stepBadge").textContent=`STEP ${step+1}/${s.steps.length}`;
  $("decisionQ").textContent=item.q;
  $("decisionScore").textContent=score;
  $("decisionChoices").innerHTML="";
  $("decisionFeedback").className="feedback";
  $("decisionFeedback").textContent="";
  $("decisionNext").disabled=true;
  caption(s.intro);
  item.choices.forEach((text,i)=>{
    const b=document.createElement("button"); b.type="button"; b.className="choice-btn"; b.textContent=text;
    b.addEventListener("click",()=>pick(i)); $("decisionChoices").appendChild(b);
  });
}
function pick(i){
  if(locked)return; locked=true;
  const item=scenarios[key].steps[step];
  $("decisionChoices").querySelectorAll("button").forEach(b=>b.disabled=true);
  animate(item.action[i]);
  if(i===item.a){score+=10;$("decisionFeedback").className="feedback show good";$("decisionFeedback").textContent="เหมาะสม • เน้นการตั้งสติ ประเมินสถานการณ์ และทำตามแนวทางของผู้รับผิดชอบ"}
  else{$("decisionFeedback").className="feedback show bad";$("decisionFeedback").textContent="ทางเลือกนี้เสี่ยงกว่า ลองดูฉากและคิดว่าทางเลือกใดลดความเสี่ยงได้มากกว่า"}
  $("decisionScore").textContent=score; $("decisionNext").disabled=false;
}
function finish(){
  const pct=Math.round(score/(scenarios[key].steps.length*10)*100);
  updateUser(u=>{const g=u.progress.games.decision;g.plays++;g.best=Math.max(g.best,pct);u.progress.trainings++;u.progress.xp+=Math.round(pct*.8);if(pct>=67)u.progress.passedScenarios++;u.progress.history.unshift({type:`decision-${key}`,score:pct,at:new Date().toISOString()})});
  $("decisionQ").textContent=`จบสถานการณ์ • ${pct}%`; $("decisionChoices").innerHTML="";
  $("decisionFeedback").className="feedback show "+(pct>=67?"good":"bad");
  $("decisionFeedback").textContent=pct>=67?"ผ่านสถานการณ์นี้แล้ว คะแนนถูกบันทึกในโปรไฟล์":"ลองอีกครั้งเพื่อฝึกการตัดสินใจในฉากนี้";
  $("decisionNext").textContent="เล่นใหม่"; $("decisionNext").disabled=false;
  $("decisionNext").onclick=()=>{step=0;score=0;$("decisionNext").textContent="ขั้นต่อไป →";$("decisionNext").onclick=null;render()};
}
$("decisionNext").addEventListener("click",()=>{step++;if(step>=scenarios[key].steps.length)finish();else render()});
$("scenarioSelect").addEventListener("change",e=>{key=e.target.value;step=0;score=0;$("decisionNext").textContent="ขั้นต่อไป →";$("decisionNext").onclick=null;render()});
render();
