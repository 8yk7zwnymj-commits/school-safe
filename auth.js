const USERS_KEY="schoolSafeV5Users";const CURRENT_KEY="schoolSafeV5Current";
const GAME_KEYS=["decision","survival","route","challenge"];
function num(v,d=0){v=Number(v);return Number.isFinite(v)?v:d}
function getUsers(){try{return JSON.parse(localStorage.getItem(USERS_KEY)||"[]")}catch{return[]}}
function saveUsers(x){localStorage.setItem(USERS_KEY,JSON.stringify(x))}
function getCurrent(){try{return JSON.parse(localStorage.getItem(CURRENT_KEY)||"null")}catch{return null}}
function setCurrent(x){localStorage.setItem(CURRENT_KEY,JSON.stringify(x))}
async function hashPassword(t){if(window.crypto?.subtle){const b=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(t));return Array.from(new Uint8Array(b)).map(x=>x.toString(16).padStart(2,"0")).join("")}return btoa(unescape(encodeURIComponent(t)))}
function defaultProgress(){return{assessment:{done:false,score:0,attempts:0,lastAt:null,firstScore:null,skills:{observation:0,risk:0,decision:0,planning:0,management:0},avgDecisionTime:0},games:{decision:{best:0,plays:0},survival:{best:0,plays:0},route:{best:0,plays:0},challenge:{best:0,plays:0}},trainings:0,passedScenarios:0,xp:0,badges:[],history:[],routeStars:{}}}
function cleanHistory(h){if(!Array.isArray(h))return[];return h.filter(x=>x&&typeof x.type==="string"&&Number.isFinite(Number(x.score))).map(x=>({...x,score:Math.max(0,Math.min(100,num(x.score))),at:x.at||new Date().toISOString()})).slice(0,80)}
function normalizeUser(u){const d=defaultProgress();if(!u.progress)u.progress=d;const p=u.progress;if(!p.assessment)p.assessment=d.assessment;const a=p.assessment;a.score=Math.max(0,Math.min(100,num(a.score)));a.attempts=Math.max(0,num(a.attempts));a.avgDecisionTime=Math.max(0,num(a.avgDecisionTime));if(a.firstScore==null&&a.done&&a.score>0)a.firstScore=a.score;if(!a.skills)a.skills=d.assessment.skills;for(const k of Object.keys(d.assessment.skills))a.skills[k]=Math.max(0,Math.min(100,num(a.skills[k])));
if(!p.games)p.games={};if(p.games.risk){const old=p.games.risk;p.games.survival=p.games.survival||{best:0,plays:0};p.games.survival.best=Math.max(num(p.games.survival.best),num(old.best));p.games.survival.plays=Math.max(num(p.games.survival.plays),num(old.plays));delete p.games.risk}
for(const k of GAME_KEYS){if(!p.games[k])p.games[k]={best:0,plays:0};p.games[k].best=Math.max(0,Math.min(100,num(p.games[k].best)));p.games[k].plays=Math.max(0,num(p.games[k].plays))}
p.trainings=Math.max(0,num(p.trainings));p.passedScenarios=Math.max(0,num(p.passedScenarios));p.xp=Math.max(0,num(p.xp));p.badges=Array.isArray(p.badges)?[...new Set(p.badges.filter(Boolean))]:[];p.history=cleanHistory(p.history);p.routeStars=p.routeStars&&typeof p.routeStars==='object'?p.routeStars:{};
if(!u.profile)u.profile={nickname:u.name||"",fullName:"",grade:"ม.1",room:"1",number:"",gender:"male"};return u}
function getFullCurrent(){const c=getCurrent();if(!c)return null;const us=getUsers(),i=us.findIndex(u=>u.email===c.email);if(i<0)return null;us[i]=normalizeUser(us[i]);saveUsers(us);return us[i]}
function requireLogin(){const u=getFullCurrent();if(!u){location.href="login.html";return null}return u}
function updateUser(fn){const c=getCurrent();if(!c)return;const us=getUsers(),i=us.findIndex(u=>u.email===c.email);if(i<0)return;us[i]=normalizeUser(us[i]);fn(us[i]);us[i]=normalizeUser(us[i]);saveUsers(us)}
function logout(){localStorage.removeItem(CURRENT_KEY);location.href="login.html"}
function gameAverage(u){const v=GAME_KEYS.map(k=>num(u.progress.games[k]?.best));return Math.round(v.reduce((s,x)=>s+x,0)/v.length)}
function overallScore(u){const a=num(u.progress.assessment.score),g=gameAverage(u);if(!u.progress.assessment.done&&g===0)return 0;return Math.round(a*.6+g*.4)}
function readinessInfo(u){const score=overallScore(u);const label=score>=80?"พร้อมเรียนรู้ระดับสูง":score>=60?"พร้อมเรียนรู้ระดับดี":score>=40?"กำลังพัฒนา":"เริ่มต้นฝึก";return{score,label}}
function levelInfo(u){const xp=num(u.progress.xp),l=Math.floor(xp/250)+1;return{level:l,xp,next:l*250,within:xp%250}}
function fillUser(){const u=getFullCurrent();if(!u)return;const n=u.profile.nickname||u.profile.fullName||u.email.split("@")[0];document.querySelectorAll("[data-user-name]").forEach(e=>e.textContent=n);document.querySelectorAll("[data-user-initial]").forEach(e=>e.textContent=n.charAt(0).toUpperCase());const character=u.profile.gender==="female"?"assets/student-girl.png":"assets/student-boy.png";document.querySelectorAll("[data-character-image]").forEach(e=>{e.src=character;e.alt=`ตัวละครนักเรียน${u.profile.gender==="female"?"หญิง":"ชาย"} SCHOOL SAFE`})}
