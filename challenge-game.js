
requireLogin();
fillUser();

const rounds = [
  {
    title:"สัญญาณเตือนดังขึ้นและครูประกาศให้อพยพ",
    steps:[
      ["observe","ตั้งสติและฟังคำแนะนำของครู/เจ้าหน้าที่"],
      ["follow","เคลื่อนไปตามเส้นทางที่กำหนดอย่างเป็นระเบียบ"],
      ["group","อยู่กับกลุ่มและไม่กีดขวางทาง"],
      ["assemble","ถึงจุดรวมพลและรอการตรวจสอบ/คำแนะนำ"]
    ],
    correct:["observe","follow","group","assemble"]
  },
  {
    title:"พบพื้นเปียกบริเวณทางเดินที่มีคนใช้จำนวนมาก",
    steps:[
      ["notice","สังเกตและยืนยันว่าบริเวณนั้นมีความเสี่ยงต่อการลื่น"],
      ["avoid","หลีกเลี่ยงการเดินผ่านจุดเสี่ยงหากทำได้"],
      ["report","แจ้งครูหรือผู้รับผิดชอบให้ทราบ"],
      ["warn","เตือนคนใกล้เคียงไม่ให้เดินผ่านบริเวณนั้น"]
    ],
    correct:["notice","avoid","warn","report"]
  },
  {
    title:"เพื่อนล้มลงและดูไม่สบายระหว่างเรียน",
    steps:[
      ["assess","สังเกตสถานการณ์และดูว่าพื้นที่รอบตัวปลอดภัยหรือไม่"],
      ["call","รีบแจ้งครู/ผู้ใหญ่หรือเจ้าหน้าที่ให้มาช่วย"],
      ["space","ช่วยเปิดพื้นที่รอบเพื่อนให้โล่ง"],
      ["report","บอกสิ่งที่สังเกตเห็นแก่ผู้ใหญ่หรือเจ้าหน้าที่อย่างชัดเจน"]
    ],
    correct:["assess","call","space","report"]
  },
  {
    title:"มีประกาศเตือนพายุระหว่างกิจกรรมกลางแจ้ง",
    steps:[
      ["listen","หยุดกิจกรรมและฟังคำสั่งจากผู้รับผิดชอบ"],
      ["move","เคลื่อนไปยังพื้นที่ที่โรงเรียนกำหนด"],
      ["stay","อยู่กับกลุ่มในพื้นที่ที่กำหนด"],
      ["wait","รอคำยืนยันก่อนกลับไปทำกิจกรรม"]
    ],
    correct:["listen","move","stay","wait"]
  },
  {
    title:"เห็นสิ่งของวางกีดขวางหน้าทางออก",
    steps:[
      ["notice","สังเกตว่าสิ่งของอาจขวางทางและทำให้สะดุด"],
      ["avoid","หลีกเลี่ยงการทำให้บริเวณนั้นแออัดเพิ่ม"],
      ["report","แจ้งครูหรือผู้รับผิดชอบให้จัดการ"],
      ["confirm","ตรวจดูภายหลังว่าทางออกกลับมาใช้งานได้ตามปกติ"]
    ],
    correct:["notice","avoid","report","confirm"]
  },
  {
    title:"ได้ยินข้อมูลเหตุการณ์จากเพื่อนหลายคน แต่รายละเอียดไม่ตรงกัน",
    steps:[
      ["calm","ตั้งสติและไม่ส่งต่อข้อมูลที่ยังไม่ยืนยัน"],
      ["source","ฟังประกาศจากครู/เจ้าหน้าที่หรือแหล่งที่เชื่อถือได้"],
      ["follow","ทำตามคำแนะนำที่ได้รับ"],
      ["share","หากต้องบอกผู้อื่น ให้บอกเฉพาะข้อมูลที่ยืนยันแล้ว"]
    ],
    correct:["calm","source","follow","share"]
  }
];

const calmLines = [
  "ตั้งสติ แล้วจัดลำดับทีละขั้น",
  "อย่ารีบจนพลาด — ดูสถานการณ์ก่อน",
  "คิดให้ชัด: อะไรควรมาก่อน อะไรควรตาม",
  "จำไว้ว่าเป้าหมายคือการลดความเสี่ยง",
  "ฟังข้อมูลที่เชื่อถือได้ แล้วค่อยตัดสินใจ"
];

const pressureLines = [
  "เหลือเวลาไม่มากแล้ว แต่ยังต้องคิดให้เป็นลำดับ",
  "เวลาลดลง — อย่าเลือกเพราะความรีบ",
  "อีกไม่กี่วินาที! ตั้งสติและเลือกขั้นที่สำคัญที่สุด",
  "กดดันได้ แต่อย่าให้ความกดดันทำให้ข้ามการประเมินสถานการณ์"
];

let roundIndex = 0;
let remaining = [];
let chosen = [];
let time = 30;
let ended = false;
let totalScore = 0;
let timerId = null;

const pool = document.getElementById("pool");
const chosenEl = document.getElementById("chosen");
const fb = document.getElementById("challengeFeedback");
const timerEl = document.getElementById("timer");
const mindset = document.getElementById("mindsetLine");
const titleEl = document.getElementById("challengeTitle");
const roundBadge = document.getElementById("roundBadge");
const nextRoundBtn = document.getElementById("nextRound");
const submitBtn = document.getElementById("submitOrder");
const undoBtn = document.getElementById("undo");

function shuffle(arr){
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

function startRound(){
  clearInterval(timerId);
  const r = rounds[roundIndex];

  remaining = shuffle(r.steps.map(([id,t])=>({id,t})));
  chosen = [];
  time = 30;
  ended = false;

  roundBadge.textContent = `ROUND ${roundIndex+1}/${rounds.length}`;
  titleEl.textContent = `สถานการณ์: ${r.title}`;
  timerEl.textContent = time;
  mindset.textContent = calmLines[roundIndex % calmLines.length];
  fb.className = "feedback";
  fb.textContent = "";
  nextRoundBtn.style.display = "none";
  submitBtn.style.display = "inline-flex";
  undoBtn.disabled = false;

  render();

  timerId = setInterval(()=>{
    time--;
    timerEl.textContent = time;

    if(time === 20){
      mindset.textContent = "ยังมีเวลา — เรียงตามหลักคิด ไม่ต้องเดาสุ่ม";
      mindset.className = "mindset-line calm";
    }else if(time === 10){
      mindset.textContent = pressureLines[roundIndex % pressureLines.length];
      mindset.className = "mindset-line pressure";
    }else if(time === 5){
      mindset.textContent = "5 วินาทีสุดท้าย! เลือกอย่างมีสติ";
      mindset.className = "mindset-line pressure strong";
    }

    if(time <= 0){
      finishRound(true);
    }
  },1000);
}

function render(){
  pool.innerHTML = "";
  remaining.forEach(s=>{
    const b=document.createElement("button");
    b.type="button";
    b.className="priority-card";
    b.textContent=s.t;
    b.addEventListener("click",()=>{
      if(ended)return;
      chosen.push(s);
      remaining=remaining.filter(x=>x.id!==s.id);
      render();
    });
    pool.appendChild(b);
  });

  chosenEl.innerHTML = chosen.length
    ? chosen.map((s,i)=>`<div class="priority-card selected">${i+1}. ${s.t}</div>`).join("")
    : '<p class="small muted">ยังไม่ได้เลือกขั้นตอน</p>';
}

undoBtn.addEventListener("click",()=>{
  if(!chosen.length || ended)return;
  remaining.push(chosen.pop());
  render();
});

submitBtn.addEventListener("click",()=>{
  if(chosen.length < 4){
    fb.className="feedback show bad";
    fb.textContent="เลือกให้ครบ 4 ขั้นก่อน แล้วค่อยตรวจคำตอบ";
    return;
  }
  finishRound(false);
});

nextRoundBtn.addEventListener("click",()=>{
  roundIndex++;
  if(roundIndex >= rounds.length){
    showFinal();
  }else{
    startRound();
  }
});

function finishRound(timedOut){
  if(ended)return;
  ended=true;
  clearInterval(timerId);
  undoBtn.disabled=true;
  submitBtn.style.display="none";

  const r=rounds[roundIndex];
  let ok=0;
  chosen.forEach((s,i)=>{
    if(s && s.id===r.correct[i]) ok++;
  });

  const pct=Math.round((ok/r.correct.length)*100);
  totalScore += pct;

  fb.className="feedback show "+(pct>=75?"good":"bad");
  fb.innerHTML = timedOut
    ? `หมดเวลา • ข้อนี้ได้ <strong>${pct}%</strong><br><span class="small">ในสถานการณ์จริง ความเร็วสำคัญ แต่การตั้งสติและเรียงลำดับให้ถูกสำคัญกว่า</span>`
    : `ข้อนี้ได้ <strong>${pct}%</strong> • เรียงถูก ${ok}/${r.correct.length} ขั้น`;

  mindset.textContent = pct>=75
    ? "ดีมาก — คุณยังรักษาลำดับการคิดภายใต้เวลาจำกัดได้"
    : "ไม่เป็นไร รอบต่อไปให้เริ่มจาก “สังเกต → ขอคำแนะนำ/ความช่วยเหลือ → ลงมือ → ติดตามผล”";
  mindset.className="mindset-line calm";

  nextRoundBtn.style.display="inline-flex";
  nextRoundBtn.textContent = roundIndex===rounds.length-1 ? "ดูคะแนนรวม →" : "ข้อต่อไป →";
}

function showFinal(){
  clearInterval(timerId);
  const finalPct=Math.round(totalScore/rounds.length);

  updateUser(u=>{
    const g=u.progress.games.challenge;
    g.plays++;
    g.best=Math.max(g.best,finalPct);
    u.progress.trainings++;
    u.progress.xp+=Math.round(finalPct*.9);
    if(finalPct>=75)u.progress.passedScenarios++;
    u.progress.history.unshift({
      type:"challenge",
      score:finalPct,
      at:new Date().toISOString()
    });
  });

  titleEl.textContent="จบ Emergency Challenge";
  roundBadge.textContent="COMPLETE";
  pool.innerHTML="";
  chosenEl.innerHTML="";
  timerEl.textContent="✓";
  mindset.textContent="การฝึกภายใต้เวลาไม่ได้วัดว่าใครเร็วที่สุด แต่ดูว่าคุณยังคิดเป็นระบบได้หรือไม่";
  mindset.className="mindset-line calm";
  fb.className="feedback show "+(finalPct>=75?"good":"bad");
  fb.innerHTML=`คะแนนรวม <strong>${finalPct}%</strong> จาก 6 สถานการณ์`;
  nextRoundBtn.style.display="inline-flex";
  nextRoundBtn.textContent="เล่นใหม่";
  nextRoundBtn.onclick=()=>{
    roundIndex=0;
    totalScore=0;
    nextRoundBtn.onclick=null;
    startRound();
  };
}

startRound();
