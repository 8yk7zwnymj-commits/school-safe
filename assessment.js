
const QUESTION_BANK = [{"skill": "observation", "type": "knowledge", "q": "ก่อนเริ่มกิจกรรมในห้องทดลอง สิ่งใดควรสังเกตก่อนเป็นอันดับแรก?", "opts": ["ตำแหน่งทางออกและอุปกรณ์ความปลอดภัย", "จำนวนเพื่อนในห้อง", "สีของโต๊ะ", "เวลาเลิกเรียน"], "a": 0}, {"skill": "risk", "type": "scenario", "q": "เห็นพื้นทางเดินเปียกและมีนักเรียนเดินผ่านจำนวนมาก ควรประเมินอย่างไร?", "opts": ["เป็นความเสี่ยงต่อการลื่น ควรแจ้งและหลีกเลี่ยงพื้นที่", "ไม่เป็นไรถ้ายังไม่มีใครล้ม", "เดินเร็วผ่านไปก่อน", "ยืนดูเฉย ๆ"], "a": 0}, {"skill": "decision", "type": "scenario", "q": "ได้ยินสัญญาณเตือนในโรงเรียนและครูแจ้งให้อพยพ คุณควรเลือกอะไร?", "opts": ["ทำตามคำแนะนำและเคลื่อนไปอย่างเป็นระเบียบ", "กลับไปเก็บของก่อน", "วิ่งแยกไปคนเดียว", "รอเพื่อนในห้อง"], "a": 0}, {"skill": "planning", "type": "knowledge", "q": "แผนการอพยพที่ดีควรมีสิ่งใด?", "opts": ["เส้นทางสำรองและจุดรวมพล", "เส้นทางเดียวเท่านั้น", "เฉพาะชื่อผู้รับผิดชอบ", "เฉพาะเบอร์โทร"], "a": 0}, {"skill": "management", "type": "scenario", "q": "มีเพื่อนล้มลงและดูไม่สบายในห้องเรียน สิ่งแรกที่เหมาะสมคืออะไร?", "opts": ["แจ้งครูหรือผู้ใหญ่ใกล้ที่สุดเพื่อขอความช่วยเหลือ", "ให้ทุกคนมามุง", "ถ่ายคลิป", "ย้ายเพื่อนทันทีโดยไม่ประเมิน"], "a": 0}, {"skill": "observation", "type": "scenario", "q": "ระหว่างเดินขึ้นบันได คุณพบกล่องวางกีดขวางทาง สิ่งใดเป็นการสังเกตที่ถูกต้อง?", "opts": ["เป็นสิ่งกีดขวางที่อาจทำให้สะดุดและขวางการอพยพ", "เป็นเพียงของวางชั่วคราวจึงไม่เกี่ยวกับความปลอดภัย", "ใช้เป็นที่นั่งได้", "ไม่จำเป็นต้องสนใจ"], "a": 0}, {"skill": "risk", "type": "knowledge", "q": "วิธีคิดเรื่องความเสี่ยงที่เหมาะสมคือข้อใด?", "opts": ["ดูทั้งโอกาสเกิดและผลกระทบที่อาจตามมา", "ดูเฉพาะว่าเคยเกิดหรือไม่", "ดูเฉพาะความรู้สึกกลัว", "ดูเฉพาะจำนวนคน"], "a": 0}, {"skill": "decision", "type": "scenario", "q": "มีควันอยู่ใกล้เส้นทางออกที่คุณกำลังจะใช้ แต่ครูชี้ทางออกอีกด้าน คุณควรทำอย่างไร?", "opts": ["ใช้เส้นทางที่ได้รับคำแนะนำและอยู่ห่างจากควัน", "ใช้ทางเดิมเพราะใกล้กว่า", "กลับไปหยิบโทรศัพท์", "เดินเข้าไปดูต้นเหตุ"], "a": 0}, {"skill": "planning", "type": "scenario", "q": "ก่อนกิจกรรมกีฬากลางแจ้ง มีประกาศเตือนพายุฝน คุณควรวางแผนอย่างไร?", "opts": ["เตรียมย้ายกิจกรรมตามคำสั่งและรู้จุดหลบภัยที่กำหนด", "ทำต่อจนฝนตกหนัก", "แยกย้ายกลับเอง", "รอดูโดยไม่มีแผน"], "a": 0}, {"skill": "management", "type": "knowledge", "q": "เมื่อเกิดเหตุฉุกเฉิน การสื่อสารที่ดีควรเป็นอย่างไร?", "opts": ["สั้น ชัดเจน บอกสิ่งที่สังเกตและตำแหน่ง", "พูดหลายคนพร้อมกัน", "ใส่ข้อมูลที่ไม่แน่ใจให้ครบ", "ส่งต่อข่าวลือก่อน"], "a": 0}, {"skill": "observation", "type": "scenario", "q": "ในห้องเรียนมีกระเป๋าวางขวางหน้าประตู คุณควรสังเกตประเด็นใด?", "opts": ["อาจขวางทางออกและทำให้สะดุด", "สีของกระเป๋า", "เจ้าของกระเป๋าอยู่ห้องไหน", "กระเป๋าหนักหรือเบา"], "a": 0}, {"skill": "risk", "type": "scenario", "q": "ปลั๊กไฟมีสายชำรุดเล็กน้อยแต่ยังใช้งานได้ คุณควรคิดอย่างไร?", "opts": ["ถือว่าเป็นความเสี่ยงและควรหยุดใช้/แจ้งผู้รับผิดชอบ", "ใช้ต่อได้จนกว่าจะเสีย", "ซ่อมเองทุกกรณี", "ให้เพื่อนลองก่อน"], "a": 0}, {"skill": "decision", "type": "knowledge", "q": "หลักในการตัดสินใจเมื่อข้อมูลยังไม่ครบคืออะไร?", "opts": ["เลือกทางที่ลดความเสี่ยงและขอคำแนะนำจากผู้รับผิดชอบ", "เลือกทางที่เร็วที่สุดเสมอ", "ทำตามเพื่อนส่วนใหญ่", "ตัดสินใจโดยไม่ต้องสังเกต"], "a": 0}, {"skill": "planning", "type": "scenario", "q": "คุณต้องพาเพื่อนไปจุดรวมพลจากอาคารเรียน ควรวางแผนอย่างไร?", "opts": ["ใช้เส้นทางที่กำหนดและมีทางสำรองหากเส้นทางหลักใช้ไม่ได้", "เลือกทางลัดที่ไม่เคยใช้", "แยกกลุ่มเพื่อเร็วขึ้น", "กลับไปเก็บของก่อน"], "a": 0}, {"skill": "management", "type": "scenario", "q": "เมื่อถึงจุดรวมพลหลังอพยพแล้ว สิ่งใดเหมาะสมที่สุด?", "opts": ["อยู่กับกลุ่มและรอการตรวจสอบ/คำแนะนำ", "กลับเข้าอาคารเอง", "ออกจากโรงเรียนโดยไม่แจ้ง", "เดินไปดูเหตุการณ์ใกล้ ๆ"], "a": 0}, {"skill": "observation", "type": "knowledge", "q": "ป้ายทางออกฉุกเฉินมีประโยชน์อย่างไร?", "opts": ["ช่วยระบุทิศทางออกเมื่อจำเป็น", "ใช้ตกแต่งอาคาร", "บอกชื่อห้องเรียน", "ใช้เฉพาะตอนกลางคืน"], "a": 0}, {"skill": "risk", "type": "scenario", "q": "มีคนจำนวนมากกำลังเบียดกันตรงทางออก คุณควรประเมินอะไรเป็นหลัก?", "opts": ["ความหนาแน่นและความเสี่ยงต่อการล้ม/ชนกัน", "ใครออกไปก่อน", "ใครถือของเยอะ", "ใครเสียงดัง"], "a": 0}, {"skill": "decision", "type": "scenario", "q": "ระหว่างเหตุการณ์ เพื่อนชวนแยกจากกลุ่มไปเส้นทางที่ดูสั้นกว่า แต่ไม่มีผู้รับผิดชอบแนะนำ คุณควรทำอย่างไร?", "opts": ["อยู่กับกลุ่มและใช้เส้นทางที่กำหนด", "ไปกับเพื่อนเพราะเร็วกว่า", "หยุดเถียงกันตรงทางออก", "สุ่มเลือกทางใหม่"], "a": 0}, {"skill": "planning", "type": "knowledge", "q": "เหตุใดจึงควรรู้ตำแหน่งจุดรวมพลก่อนเกิดเหตุ?", "opts": ["ช่วยให้ไปยังพื้นที่ที่กำหนดได้โดยไม่เสียเวลาค้นหา", "เพื่อใช้เป็นที่พักทั่วไป", "เพื่อจำชื่ออาคาร", "เพื่อถ่ายรูปแผนที่"], "a": 0}, {"skill": "management", "type": "scenario", "q": "คุณเห็นเหตุผิดปกติที่อาจกระทบความปลอดภัย แต่ยังไม่แน่ใจรายละเอียด ควรทำอย่างไร?", "opts": ["แจ้งครู/เจ้าหน้าที่พร้อมบอกเฉพาะสิ่งที่สังเกตได้จริง", "โพสต์ข่าวทันที", "แต่งรายละเอียดให้ครบ", "เข้าไปตรวจเองทุกกรณี"], "a": 0}];
requireLogin();
fillUser();

const skillsTH = {
  observation:"การสังเกต",
  risk:"ประเมินความเสี่ยง",
  decision:"การตัดสินใจ",
  planning:"การวางแผน",
  management:"การจัดการสถานการณ์"
};

const qs = QUESTION_BANK;
let idx = 0;
let ans = Array(qs.length).fill(null);

const qText = document.getElementById("qText");
const opts = document.getElementById("options");
const qType = document.getElementById("qType");
const qSkill = document.getElementById("qSkill");
const resultBox = document.getElementById("assessmentResult");

function renderDots() {
  const box = document.getElementById("qDots");
  box.innerHTML = "";
  qs.forEach((_, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "q-dot";
    b.textContent = i + 1;
    b.addEventListener("click", () => { idx = i; render(); });
    box.appendChild(b);
  });
}

function render() {
  const q = qs[idx];
  if (!q) return;

  // Important: hide result until the user actually submits.
  resultBox.style.display = "none";

  qText.textContent = `${idx+1}. ${q.q}`;
  qType.textContent = q.type === "scenario" ? "🎭 สถานการณ์จำลอง" : "📘 ความรู้";
  qSkill.textContent = skillsTH[q.skill];

  opts.innerHTML = "";
  q.opts.forEach((o, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "option" + (ans[idx] === i ? " selected" : "");
    b.textContent = o;
    b.addEventListener("click", () => {
      ans[idx] = i;
      render();
    });
    opts.appendChild(b);
  });

  document.getElementById("prevBtn").disabled = idx === 0;
  document.getElementById("nextBtn").textContent =
    idx === qs.length - 1 ? "ส่งคำตอบและดูผล" : "ข้อต่อไป →";

  document.getElementById("answeredCount").textContent =
    ans.filter(x => x !== null).length;

  document.querySelectorAll(".q-dot").forEach((b, i) => {
    b.className =
      "q-dot" +
      (ans[i] !== null ? " done" : "") +
      (i === idx ? " active" : "");
  });
}

document.getElementById("prevBtn").addEventListener("click", () => {
  if (idx > 0) { idx--; render(); }
});

document.getElementById("nextBtn").addEventListener("click", () => {
  if (ans[idx] === null) {
    alert("เลือกคำตอบก่อนนะ");
    return;
  }

  if (idx < qs.length - 1) {
    idx++;
    render();
    return;
  }

  if (ans.some(x => x === null)) {
    alert("ยังตอบไม่ครบ 20 ข้อ");
    return;
  }

  finishAssessment();
});

function finishAssessment() {
  let correct = 0;
  const bySkill = {
    observation:[0,0], risk:[0,0], decision:[0,0],
    planning:[0,0], management:[0,0]
  };

  qs.forEach((q, i) => {
    bySkill[q.skill][1]++;
    if (ans[i] === q.a) {
      correct++;
      bySkill[q.skill][0]++;
    }
  });

  const score = Math.round((correct / qs.length) * 100);
  const skillScores = {};

  Object.keys(bySkill).forEach(k => {
    const [right, total] = bySkill[k];
    skillScores[k] = total ? Math.round((right / total) * 100) : 0;
  });

  updateUser(u => {
    u.progress.assessment.done = true;
    u.progress.assessment.score = score;
    u.progress.assessment.attempts++;
    u.progress.assessment.lastAt = new Date().toISOString();
    u.progress.assessment.skills = skillScores;
    u.progress.xp += Math.round(score * 1.5);
    u.progress.history.unshift({
      type:"assessment", score, at:new Date().toISOString()
    });
  });

  resultBox.style.display = "block";
  resultBox.innerHTML = `
    <span class="badge badge-gold">RESULT</span>
    <h2>คะแนน ${score}%</h2>
    <p>ตอบถูก ${correct} จาก ${qs.length} ข้อ</p>
    <div class="grid grid-3">
      ${Object.keys(skillScores).map(k => `
        <div class="stat">
          <strong>${skillScores[k]}%</strong>
          <span>${skillsTH[k]}</span>
        </div>
      `).join("")}
    </div>
    <div style="margin-top:14px">
      <button class="btn btn-outline" id="retryAssessment" type="button">ทำแบบประเมินใหม่</button>
      <a class="btn btn-green" href="games.html">ไปฝึกผ่านเกม →</a>
    </div>`;

  document.getElementById("retryAssessment").addEventListener("click", () => {
    idx = 0;
    ans = Array(qs.length).fill(null);
    render();
    window.scrollTo({top:0,behavior:"smooth"});
  });

  resultBox.scrollIntoView({behavior:"smooth"});
}

renderDots();
render();
