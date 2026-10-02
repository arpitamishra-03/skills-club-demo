// Countdown to next Sunday 7 PM (local time)
function target(){var t=new Date();t.setHours(19,0,0,0);t.setDate(t.getDate()+((7-t.getDay())%7));if(t<new Date())t.setDate(t.getDate()+7);return t}
var T=target();
function tick(){var d=Math.max(0,T-new Date()),v=[Math.floor(d/864e5),Math.floor(d/36e5)%24,Math.floor(d/6e4)%60,Math.floor(d/1e3)%60];
document.querySelectorAll("#count b").forEach(function(b,i){b.textContent=String(v[i]).padStart(2,"0")})}
tick();setInterval(tick,1000);

// Quiz
var Q=[["Talk to people to understand what's needed","You lean towards communication and people-facing work, such as sales, support or training."],
["Research and collect information","You lean towards analysis and research, such as data work, content or consulting."],
["Think up a creative way to solve it","You lean towards creative thinking, such as design, branding or content."],
["Make a plan and start executing","You lean towards action and organising, such as operations, project work or business."]];
var opts=document.getElementById("opts"),res=document.getElementById("result");
Q.forEach(function(q,i){var b=document.createElement("button");b.className="opt";b.type="button";b.setAttribute("aria-pressed","false");b.textContent=String.fromCharCode(65+i)+". "+q[0];
b.onclick=function(){opts.querySelectorAll(".opt").forEach(function(o){o.setAttribute("aria-pressed","false")});b.setAttribute("aria-pressed","true");res.textContent=q[1]};opts.appendChild(b)});

// Curriculum
var D=[["Career & niche clarity","Understand where you are and where you could go."],["Self discovery","Work on interests, strengths and preferences."],["Personality understanding","Learn your working style."],["Communication skills","Professional communication basics."],["Spoken English for work","Practice everyday work conversations."],["Digital basics","Core digital skills for modern workplaces."],["Zoom & online meetings","Take part in online meetings professionally."],["Telecalling skills","Turn conversation into a practical skill."],["Customer understanding","Understand customer needs and problems."],["Sales fundamentals","Value, problem-solving and basic selling."],["Personal branding","Present your professional identity."],["AI & modern work","Basics of AI and digital tools."],["Career pathways","Explore jobs, freelancing and business."],["Practical assignment","Apply what you've learned."],["Review & next step","Review progress and plan ahead."]];
var days=document.getElementById("days");
D.forEach(function(d,i){var e=document.createElement("div");e.className="day";e.innerHTML="<small>Day "+String(i+1).padStart(2,"0")+"</small><h3>"+d[0]+"</h3><p>"+d[1]+"</p>";days.appendChild(e)});

// Join button (demo only)
document.getElementById("joinBtn").onclick=function(){document.getElementById("joinMsg").textContent="Demo only: connect this button to your registration or Zoom link."};
