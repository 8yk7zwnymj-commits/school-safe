
requireLogin();fillUser();
const levels=[
 {title:"อาคารกำลังสั่น",prompt:"เลือกตำแหน่งที่เหมาะสมกว่าในฉาก",show:["window","glass","door","desk"],good:"desk",why:"โต๊ะที่แข็งแรงและอยู่ห่างจากกระจกเหมาะสมกว่าจุดอื่นในฉากนี้",bad:{window:"ควรอยู่ห่างจากกระจก",glass:"ตู้กระจกเป็นจุดเสี่ยงกว่า",door:"ไม่ควรรีบเคลื่อนที่โดยไม่ประเมินขณะอาคารยังสั่น"}},
 {title:"พบสายไฟชำรุดในทางเดิน",prompt:"เลือกจุดที่ควรไปเพื่อขอความช่วยเหลือ",show:["wire","adult","door"],good:"adult",why:"เว้นระยะจากสายไฟและแจ้งครูหรือผู้รับผิดชอบให้จัดการ",bad:{wire:"ไม่ควรเข้าใกล้หรือสัมผัสสายไฟที่ดูชำรุด",door:"การเดินผ่านไปเฉย ๆ ทำให้จุดเสี่ยงยังไม่ได้รับการแจ้ง"}},
 {title:"เพื่อนล้มลงและดูไม่สบาย",prompt:"เลือกใครเป็นจุดแรกในการขอความช่วยเหลือ",show:["friend","adult","door"],good:"adult",why:"แจ้งผู้ใหญ่หรือเจ้าหน้าที่ใกล้ที่สุดเพื่อให้เข้ามาช่วยและทำตามคำแนะนำ",bad:{friend:"อยู่กับเพื่อนอย่างเดียวไม่แทนการเรียกผู้ใหญ่หรือเจ้าหน้าที่",door:"ไม่ควรออกไปโดยไม่แจ้งผู้รับผิดชอบ"}},
 {title:"มีประกาศเตือนพายุระหว่างกิจกรรมกลางแจ้ง",prompt:"เลือกพื้นที่ที่ควรเคลื่อนไปตามคำแนะนำของโรงเรียน",show:["field","shelter"],good:"shelter",why:"ไปยังพื้นที่ที่โรงเรียนกำหนดและอยู่กับกลุ่ม",bad:{field:"พื้นที่เปิดไม่ใช่จุดที่ควรเลือกเมื่อมีประกาศให้ย้ายพื้นที่"}},
 {title:"มีสัญญาณเตือนและครูชี้ทางออกที่ปลอดภัย",prompt:"เลือกจุดที่ควรเคลื่อนไปตามคำแนะนำ",show:["door","desk","window"],good:"door",why:"เมื่อมีเส้นทางที่ผู้รับผิดชอบยืนยันแล้ว ควรใช้ทางออกที่กำหนดอย่างเป็นระเบียบ",bad:{desk:"ในฉากนี้มีคำสั่งให้อพยพและมีเส้นทางที่กำหนดแล้ว",window:"ไม่ควรเลือกเส้นทางอื่นเองเมื่อมีทางออกที่กำหนด"}}
];
let level=0,lives=3,time=20,total=0,locked=false,timer=null;
const $=id=>document.getElementById(id);
const targets=[...document.querySelectorAll(".sv-target")];
function moveTo(el){
 const bb=el.getBBox(); $("svPlayer").style.transition="transform .6s ease"; $("svPlayer").setAttribute("transform",`translate(${bb.x+bb.width/2} ${Math.min(410,bb.y+bb.height/2)}) scale(.9)`);
}
function setScene(){
 clearInterval(timer);locked=false;time=20;
 const l=levels[level];
 $("svRound").textContent=`MISSION ${level+1}/${levels.length}`;$("svTitle").textContent=l.title;$("svPrompt").textContent=l.prompt;$("svLives").textContent="❤️".repeat(lives)+"♡".repeat(3-lives);$("svTime").textContent=time;
 $("svFeedback").className="feedback";$("svFeedback").textContent="";$("svNext").style.display="none";$("svMindset").className="mindset-line";$("svMindset").textContent="ตั้งสติ • มองรอบตัว • เลือกจุดที่ลดความเสี่ยง";
 $("svCaption").textContent="เลือกจุดในฉาก"; $("svPlayer").setAttribute("transform","translate(435 315)");
 targets.forEach(t=>{const on=l.show.includes(t.dataset.choice);t.style.display=on?"block":"none";t.classList.remove("sv-good","sv-bad")});
 timer=setInterval(()=>{time--;$("svTime").textContent=time;if(time===10){$("svMindset").className="mindset-line pressure";$("svMindset").textContent="เหลือ 10 วินาที — อย่าเลือกเพราะรีบ ให้ดูจุดเสี่ยงก่อน"}if(time===5){$("svMindset").className="mindset-line pressure strong";$("svMindset").textContent="5 วินาที! เลือกจุดที่ลดความเสี่ยงที่สุด"}if(time<=0){clearInterval(timer);timeout()}},1000);
}
function choose(el){
 if(locked||el.style.display==="none")return;locked=true;clearInterval(timer);moveTo(el);
 const l=levels[level],c=el.dataset.choice;
 if(c===l.good){el.classList.add("sv-good");total+=Math.max(10,time);$("svFeedback").className="feedback show good";$("svFeedback").textContent="ผ่านด่าน • "+l.why;$("svCaption").textContent="เลือกได้เหมาะสม";$("svNext").style.display="inline-flex"}
 else{el.classList.add("sv-bad");lives--;$("svLives").textContent="❤️".repeat(Math.max(0,lives))+"♡".repeat(3-Math.max(0,lives));$("svFeedback").className="feedback show bad";$("svFeedback").textContent=l.bad[c]||"จุดนี้มีความเสี่ยงมากกว่า";$("svCaption").textContent="ลองประเมินฉากอีกครั้ง";if(lives<=0){setTimeout(gameOver,500)}else{setTimeout(()=>{locked=false;el.classList.remove("sv-bad");resume()},900)}}
}
function resume(){timer=setInterval(()=>{time--;$("svTime").textContent=time;if(time<=0){clearInterval(timer);timeout()}},1000)}
function timeout(){locked=true;lives--;$("svLives").textContent="❤️".repeat(Math.max(0,lives))+"♡".repeat(3-Math.max(0,lives));$("svFeedback").className="feedback show bad";$("svFeedback").textContent="หมดเวลา • ตั้งสติให้ได้ แต่ต้องตัดสินใจให้ทันสถานการณ์ด้วย";if(lives<=0)setTimeout(gameOver,500);else $("svNext").style.display="inline-flex"}
function gameOver(){$("svTitle").textContent="MISSION FAILED";$("svFeedback").className="feedback show bad";$("svFeedback").textContent="หมด 3 ชีวิต ลองใหม่เพื่อฝึกการสังเกตและการตัดสินใจ";$("svNext").style.display="inline-flex";$("svNext").textContent="เริ่มใหม่";$("svNext").onclick=()=>{level=0;lives=3;total=0;$("svNext").textContent="ด่านต่อไป →";$("svNext").onclick=null;setScene()}}
function finish(){const score=Math.min(100,Math.round(total/(levels.length*20)*100));updateUser(u=>{const g=u.progress.games.survival;g.plays++;g.best=Math.max(g.best,score);u.progress.trainings++;u.progress.xp+=score;if(score>=60)u.progress.passedScenarios++;u.progress.history.unshift({type:"survival",score,at:new Date().toISOString()})});$("svTitle").textContent="MISSION COMPLETE";$("svPrompt").textContent=`คะแนน ${score}% • เหลือ ${lives}/3 ชีวิต`;$("svFeedback").className="feedback show good";$("svFeedback").textContent="ผลการฝึกถูกบันทึกในโปรไฟล์แล้ว";$("svNext").style.display="inline-flex";$("svNext").textContent="เล่นใหม่";$("svNext").onclick=()=>{level=0;lives=3;total=0;$("svNext").textContent="ด่านต่อไป →";$("svNext").onclick=null;setScene()}}
targets.forEach(el=>el.addEventListener("click",()=>choose(el)));
$("svNext").addEventListener("click",()=>{if(level<levels.length-1){level++;setScene()}else finish()});
setScene();
