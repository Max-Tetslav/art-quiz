(()=>{"use strict";const t=class{constructor(t,e,s,i,a,r,n,o,c){this.target=t,this.categoryType=e,this.categoryData=s,this.roundData=i,this.nextQuestionNum=r,this.score=o,this.roundId=c,"true"===localStorage.getItem("notify")&&n?(this.audio=new Audio("./assets/audio/right-answer.wav"),localStorage.getItem("volume")&&(this.audio.volume=Number(localStorage.getItem("volume"))/100),this.audio.addEventListener("canplay",(t=>{this.audio.play()}))):"true"!==localStorage.getItem("notify")||n||(this.audio=new Audio("./assets/audio/wrong-answer.mp3"),localStorage.getItem("volume")&&(this.audio.volume=Number(localStorage.getItem("volume"))/100),this.audio.addEventListener("canplay",(t=>{this.audio.play()}))),this.screen=`\n\t\t<div class="modal-overlay">\n\t\t\t<div class="modal-content">\n\t\t\t\t<img class="answer-status" src="${n?"./assets/svg/right-answer.svg":"./assets/svg/wrong-answer.svg"}"/>\n\t\t\t\t<img class="answer-img" src="./assets/img/${a.imageNum}.jpg"/>\n\t\t\t\t<p class="modal-text answer-name">${a.name}</p>\n\t\t\t\t<p class="modal-text answer-author">${a.author}</p>\n\t\t\t\t<p class="modal-text answer-year">${a.year}</p>\n\t\t\t\t<a class="modal-text modal-btn" >Продолжить</a>\n\t\t\t</div>\n\t\t</div>`,this.target.innerHTML=this.screen,this.target.querySelector(".modal-overlay").classList.add("fadein"),this.target.querySelector(".modal-content").classList.add("gelatine"),this.target.querySelector(".modal-btn").addEventListener("click",this.nextQuestion.bind(this))}nextQuestion(){this.nextQuestionNum<10?new e(this.target,this.categoryType,this.categoryData,this.roundData,this.nextQuestionNum,this.score,this.roundId):(console.log(this.categoryData),new class{constructor(t,e,s,i,a,r){this.target=t,this.categoryType=e,this.categoryData=s,this.roundData=i,this.score=a,this.roundId=r,this.score>5&&(localStorage.setItem(`${this.categoryType}${this.roundId}`,"true"),localStorage.setItem(`score${this.categoryType}${this.roundId}`,`${this.score}`)),console.log(localStorage.getItem(`${this.categoryType}${this.roundId}`)),"true"===localStorage.getItem("notify")&&this.score>5?(this.audio=new Audio("./assets/audio/success-round.mp3"),localStorage.getItem("volume")&&(this.audio.volume=Number(localStorage.getItem("volume"))/100),this.audio.addEventListener("canplay",(t=>{this.audio.play()}))):"true"===localStorage.getItem("notify")&&this.score<6&&(this.audio=new Audio("./assets/audio/fail-round.mp3"),localStorage.getItem("volume")&&(this.audio.volume=Number(localStorage.getItem("volume"))/100),this.audio.addEventListener("canplay",(t=>{this.audio.play()}))),this.stars=this.setStars(this.score),this.screen=`\n\t\t<div class="modal-overlay">\n\t\t\t<div class="modal-content">\n\t\t\t\t<p class="modal-text answer-name">${10===this.score?"Супер!":this.score>7?"Отлично!":this.score>5?"Молодец!":"Попробуй еще"}</p>\n\t\t\t\t<div class="stars-container">\n\t\t\t\t\t${this.stars.length?this.stars.map((t=>'<img class="star" src="./assets/svg/star.svg"/>')).join(""):'<img class="star" src="./assets/svg/poo.svg"/>'}\n\t\t\t\t</div>\n\t\t\t\t<p class="modal-text answer-author">Ваш результат: ${this.score}</p>\n\t\t\t\t<a class="modal-text modal-btn">Далее</a>\n\t\t\t</div>\n\t\t</div>`,this.target.innerHTML=this.screen,this.target.querySelector(".modal-overlay").classList.add("fadein"),this.target.querySelector(".modal-content").classList.add("grow"),this.target.querySelector(".modal-btn").addEventListener("click",this.finishRound.bind(this))}setStars(t){let e=[];return 10===t?e=["","",""]:t>7?e=["",""]:t>5&&(e=[""]),e}finishRound(){new s(this.categoryData,this.categoryType)}}(this.target,this.categoryType,this.categoryData,this.roundData,this.score,this.roundId))}},e=class{constructor(t,e,i,a,r,n,o){this.target=t,this.categoryType=e,this.categoryData=i,this.roundData=a,this.questionNum=r,this.score=n,this.roundId=o,this.rightAnswer="arts"===this.categoryType?Number(a[this.questionNum].imageNum):a[this.questionNum].author,this.allVariants=this.setVariants(this.categoryType),this.screen="arts"===this.categoryType?`\t<div class="question">\n\t\t<p class="question__text" >${this.roundData[this.questionNum].question}</p>\n\t\t${"true"===localStorage.getItem("timer")?`<p class="question__timer">${localStorage.getItem("seconds")}</p>`:""}\n\t\t<div class="variants__container">${this.allVariants.map(((t,e)=>`\n\t\t<div class="variant">\n\t\t<img class="variant-img" src="./assets/img/${t}.jpg" id="a${e}"/>\n\t\t</div>`)).join("")}\n\t\t</div>\n\t\t</div>`:`\t<div class="question artist-question">\n\t\t<p class="question__text" >${this.roundData[this.questionNum].question}</p>\n\t\t${"true"===localStorage.getItem("timer")?`<p class="question__timer">${localStorage.getItem("seconds")}</p>`:""}\n\t\t<img class="question-image" src="./assets/img/${this.roundData[this.questionNum].imageNum}.jpg"/>\n\t\t<div class="variants__container artists_container">${this.allVariants.map(((t,e)=>`\n\t\t<div class="artist-variant " id="a${e}">${t}</div>`)).join("")}\n\t\t</div>\n\t\t</div>`,this.target.innerHTML=this.screen,this.target.querySelector(".question").classList.add("fadein"),this.timer=this.target.querySelector(".question__timer"),this.variants_container=this.target.querySelector(".variants__container"),this.variants_container.addEventListener("click",this.chooseAnswer.bind(this)),clearTimeout(this.timerGlobal),this.timer&&(this.timerAudio=new Audio("./assets/audio/timer.mp3"),this.timerAudio.volume=Number(localStorage.getItem("volume"))/100,this.timerAudio.play(),this.timer.classList.add("shake"),this.tiktac(this.timer.textContent)),this.timerGlobal=0,console.log(this.timerGlobal),this.header=new class{constructor(t,e){this.target=document.querySelector("#header"),this.categoryType=t,this.categoryData=e,console.log(localStorage.getItem("seconds")),this.screen=`\n\t\t<div class="question__header">\n\t\t\t<a class="back-btn exit-question"></a>\n\t\t\t<h2 class="category-title">${"arts"===t?"Картины":"Художники"}</h2>\n\t\t</div > `,this.target.innerHTML=this.screen,this.target.querySelector(".question__header").classList.add("fadein"),this.target.querySelector(".exit-question").addEventListener("click",this.returnScreen.bind(this))}returnScreen(){new s(this.categoryData,this.categoryType)}}(this.categoryType,this.categoryData)}chooseAnswer(e){clearTimeout(this.timerGlobal);let s=Number(e.target.id.charAt(1))===this.allVariants.indexOf(this.rightAnswer),i=this.questionNum,a=this.score;s&&(a+=1),i+=1,this.questionNum<10&&new t(this.target,this.categoryType,this.categoryData,this.roundData,this.roundData[this.questionNum],i,s,a,this.roundId)}tiktac(e){let s=Number(e);console.log(s),this.timer.innerHTML=s,s>=0&&(s-=1);let i=this.questionNum,a=setTimeout(this.tiktac.bind(this,[s]),1e3);this.timerGlobal=a,-1===s&&(clearTimeout(a),i+=1,new t(this.target,this.categoryType,this.categoryData,this.roundData,this.roundData[this.questionNum],i,!1,this.score))}setVariants(t){let e=[this.rightAnswer];if("arts"===t)for(let t=0;e.length<4;t++){let t=Math.round(120*Math.random());e.includes(t)||e.push(t)}else for(let t=0;e.length<4;t++){let t=Math.round(120*Math.random());e.includes(this.categoryData.flat()[t].author)||e.push(this.categoryData.flat()[t].author)}return(t=>{for(var e=t.length-1;e>0;e--){var s=Math.floor(Math.random()*(e+1)),i=t[e];t[e]=t[s],t[s]=i}return t})(e)}},s=class{constructor(t,e){for(let t=0;t<1e4;t++)clearTimeout(t);this.target=document.querySelector("#content"),this.rounds=t,this.categoryType=e,new class{constructor(t){this.target=document.querySelector("#header"),this.screen=`\n\t\t<div class="categories__header">\n\t\t\t<a class="back-btn exit-category"></a>\n\t\t\t<h2 class="category-title">${"arts"===t?"Картины":"Художники"}</h2>\n\n\t\t</div>`,this.target.innerHTML=this.screen,this.target.querySelector(".categories__header").classList.add("fadein"),this.target.querySelector(".exit-category").addEventListener("click",this.returnScreen)}returnScreen(){return new a}}(this.categoryType),this.covers=this.setCovers(),this.onload,this.screen=`\n\t\t<div class="categories_container">\n\t\t${this.covers.map(((t,e)=>`\n\t\t\t\t\t<div class="card noplayed-card">\n\n\t\t\t\t\t\t<p class="card-number">${e+1}</p>\n\n\t\t\t\t\t\t${localStorage.getItem(`score${this.categoryType}${e}`)?`\t\n\t\t\t\t\t\t\t\t<p class="card-score">${localStorage.getItem(`score${this.categoryType}${e}`)}</p>\n\t\t\t\t\t\t\t`:""}\n\t\t\t\t\t\t\t <div class="card-img" id="${e}"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t`)).join("")}\n\t\t\t\t\t\t\t</div >`,this.target.innerHTML=this.screen,this.cardsImg=this.target.querySelectorAll(".card-img"),this.covers.map(((t,e)=>function(t,e){let s=new Image;s.src=`./assets/img/${e}.jpg`,s.onload=()=>t.style.backgroundImage=`url(${s.src})`}(this.cardsImg[e],t))),this.cards=this.target.querySelectorAll(".card"),this.cards.forEach(((t,e)=>{"true"===localStorage.getItem(`${this.categoryType}${e}`)&&(t.classList.remove("noplayed-card"),t.classList.add("played-card"))})),this.round_container=this.target.querySelector(".categories_container"),document.addEventListener("click",this.chooseRound.bind(this))}setCovers(){let t=this.rounds.flat(),e=[];for(let s=0;e.length<12;s++){let s=Math.round(Math.random()*t.length);e.includes(s)||e.push(s)}return e}chooseRound(t){if(console.log(t.target.parentNode.classList.contains("card")),t.target.parentNode.classList.contains("card")){let s=t.target.id,i=this.rounds[s];new class{constructor(t,s,i,a,r){this.target=t,this.questionNum=0,this.score=0,this.categoryData=s,this.roundData=i,this.categoryType=a,this.roundId=r,new e(this.target,this.categoryType,this.categoryData,this.roundData,this.questionNum,this.score,this.roundId)}}(this.target,this.rounds,i,this.categoryType,s)}}},i=class{constructor(t,e,s){this.target=document.querySelector("#header"),this.screen='\n\t\t<div class="homescreen__header">\n\t\t\t<div class="settings-btn" id=\'settings\'></div>\n\t\t</div>',this.target.innerHTML=this.screen,this.target.querySelector(".homescreen__header").classList.add("fadein"),this.target.querySelector("#settings").addEventListener("click",this.openSettings.bind(this))}openSettings(){new class{constructor(){this.target=document.querySelector("#content"),this.header=new class{constructor(){this.target=document.querySelector("#header"),this.screen='\n\t\t<div class="settings__header">\n\t\t\t<a class="back-btn" href="#/"></a>\n\t\t\t<p class="settings-title">Настройки</p>\n\t\t</div>',this.target.innerHTML=this.screen,this.target.querySelector(".settings__header").classList.add("fadein"),this.target.querySelector(".back-btn").addEventListener("click",this.returnScreen)}returnScreen(){new a}},this.screen='\n\t\t<div class="settings__container">\n\t\t\t<form class="settings__form">\n\t\t\t\t<div class="notify__container">\n\t\t\t\t\t<div class="turn-notify_container">\n\t\t\t\t\t<label class="container__label" for="notify">Оповещения</label>\n\t\t\t\t\t<input class="timer__input notify__checker" type="checkbox" name="notify" id="notify">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="range_container">\n\t\t\t\t\t<input class="notify__input" type="range" name="notify-range" id="notify" value="50" min="0" max="100">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="turn-time_container">\n\t\t\t\t<div class="timer__container">\n\t\t\t\t\t<label class="container__label" for="timer_checked">Таймер</label>\n\t\t\t\t\t<input class="timer__input" id="timer_checked" type="checkbox" name="timer">\n\t\t\t\t</div>\n\t\t\t\t<div class="time__container">\n\t\t\t\t\t<label class="container__label" for="time">Время</label>\n\t\t\t\t\t<div class="time-input__container">\n\t\t\t\t\t\t<button class="time-btn" id="minus-btn" type="button">-</button>\n\t\t\t\t\t\t<input class="time__input" id="time" type="number" min="10" max="30" value="15" readonly>\n\t\t\t\t\t\t<button class="time-btn" id="plus-btn" type="button">+</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>',this.target.innerHTML=this.screen,this.target.querySelector(".settings__container").classList.add("fadein"),this.notifyChecker=document.querySelector(".notify__checker"),this.notifyVolume=document.querySelector(".notify__input"),this.timerChecker=document.querySelector("#timer_checked"),this.secondsCounter=document.querySelector(".time__input"),this.plusBtn=document.querySelector("#plus-btn"),this.minusBtn=document.querySelector("#minus-btn"),"true"===localStorage.getItem("notify")&&(this.notifyChecker.checked=!0),localStorage.getItem("volume")&&(this.notifyVolume.value=localStorage.getItem("volume")),this.notifyChecker.checked||(this.notifyVolume.disabled=!0),console.log(localStorage.getItem("timer")),"true"===localStorage.getItem("timer")&&(this.timerChecker.checked=!0),localStorage.getItem("seconds")&&this.secondsCounter.setAttribute("value",localStorage.getItem("seconds")),this.notifyChecker.addEventListener("input",this.turnNotify.bind(this)),this.notifyVolume.addEventListener("input",this.changeVolume.bind(this)),this.timerChecker.addEventListener("input",this.turnTimer.bind(this)),this.secondsCounter.addEventListener("input",this.setSeconds.bind(this)),this.plusBtn.addEventListener("click",this.plusSeconds.bind(this)),this.minusBtn.addEventListener("click",this.minusSeconds.bind(this))}turnNotify(){this.notifyVolume.disabled?this.notifyVolume.disabled=!1:this.notifyVolume.disabled||(this.notifyVolume.disabled=!0),this.notifyChecker.checked||localStorage.setItem("volume",0),console.log(localStorage.getItem("volume")),localStorage.setItem("notify",this.notifyChecker.checked)}changeVolume(){this.notifyChecker.checked&&(localStorage.setItem("volume",this.notifyVolume.value),this.notifyVolume.setAttribute("value",localStorage.getItem("volume")),console.log(localStorage.getItem("volume")))}turnTimer(){localStorage.setItem("timer",this.timerChecker.checked)}setSeconds(){localStorage.setItem("seconds",this.secondsCounter.value)}plusSeconds(){if(this.secondsCounter.value<this.secondsCounter.max){let t=Number(this.secondsCounter.value);t+=5,this.secondsCounter.setAttribute("value",t),localStorage.setItem("seconds",this.secondsCounter.value)}console.log(this.secondsCounter.value)}minusSeconds(){if(this.secondsCounter.value>this.secondsCounter.min){let t=Number(this.secondsCounter.value);t-=5,this.secondsCounter.setAttribute("value",t),localStorage.setItem("seconds",this.secondsCounter.value)}console.log(this.secondsCounter.value)}}}},a=class{constructor(){this.target=document.querySelector("#content"),this.header=new i("home"),this.screen='\t\n\t\t\t<div class="homescreen">\n\t\t\t\t<img class="logo-big" src="./assets/svg/main-logo.svg" alt="logo" >\n\t\t\t\t<div href="#/arts/" class="quiz-category arts-btn" id="arts">Картины</div>\n\t\t\t\t<div href="#/artists/" class="quiz-category artists-btn" id="artists">Художники</div>\n\t\t\t</div>',this.target.innerHTML=this.screen,this.target.querySelector(".homescreen").classList.add("fadein"),this.categories=document.querySelectorAll(".quiz-category"),this.categories.forEach((t=>t.addEventListener("click",this.choseCategory.bind(this))))}async choseCategory(t){let e=await this.fetchData("./images.json"),i=[...e];const a=[];"arts"===t.target.id?(i=e.slice(0,e.length/2),i.forEach((t=>t.question=`Автором какой из этих картин является <br/> ${t.author}?`))):(i=e.slice(e.length/2),i.forEach((t=>t.question=`Кто написал картину <br/> ${t.name}?`)));for(let t=0;t<i.length;t+=10){let e=[...i];a.push(e.slice(t,t+10))}new s(a,t.target.id)}async fetchData(t){const e=await fetch(t);return await e.json()}},r=document.querySelector(".header"),n=document.querySelector("#content"),o=document.querySelector("#footer");new i(r),new a(n),new class{constructor(t){this.target=t,this.screen='\n\t\t<div class="footer__container" id="footer">\n\t\t\t<a class="rss" href="" target="_blank"></a>\n\t\t\t<div class="developer__container">\n\t\t\t\t<p class="developer_text">Developer: </p>\n\t\t\t\t<a class="github" href="https://github.com/Max-Tetslav" target="_blank">Max-Tetslav</a>\n\t\t\t</div>\n\t\t\t<p class="year">© 2021</p>\n\t\t</div>',this.target.innerHTML=this.screen}}(o)})();