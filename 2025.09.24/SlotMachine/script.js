// ---------- Simple Slot Machine (plain JS) ----------
// Design goals: clear structure, readable code, tiny helpers, minimal globals.
(function(){
    const $ = (sel, ctx=document) => ctx.querySelector(sel);
    const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));
  
    const reelsEl = $$('.reel');
    const balanceEl = $('#balance');
    const betEl = $('#bet');
    const msgEl = $('#message');
    const spinBtn = $('#spinBtn');
    const autoBtn = $('#autoBtn');
    const burstEl = $('#winBurst');
  
    // Symbol set with multipliers (three-of-a-kind)
    // "render" may be emoji or HTML string. name used for logic.
    const SYMBOLS = [
      { name:'cherry',   render:'🍒',                           pay:3 },
      { name:'lemon',    render:'🍋',                           pay:2 },
      { name:'orange',   render:'🍊',                           pay:2 },
      { name:'star',     render:'⭐',                           pay:6 },
      { name:'bell',     render:'🔔',                           pay:8 },
      { name:'diamond',  render:'💎',                           pay:15 },
      { name:'seven',    render:'7',                            pay:50, cls:'seven' },
    ];
    const CYCLE = SYMBOLS.length; // one visible loop length
  
    let balance = 1000;
    let spinning = false;
    let symbolSize = 88; // updated after layout
    let autoLeft = 0;
  
    // --- Build strips ---
    const REPEAT = 30; // times we repeat the base symbol cycle for smooth long spins
    reelsEl.forEach(reel => buildStrip(reel));
  
    // Measure symbol height after first paint
    requestAnimationFrame(()=>{
      const first = $('.symbol');
      if(first){ symbolSize = first.getBoundingClientRect().height; }
    });
  
    function buildStrip(reel){
      const strip = $('.strip', reel);
      strip.innerHTML = '';
      for(let r=0; r<REPEAT; r++){
        for (const sym of SYMBOLS){
          const cell = document.createElement('div');
          cell.className = 'symbol' + (sym.cls ? (' ' + sym.cls) : '');
          cell.innerHTML = sym.render;
          cell.dataset.name = sym.name;
          strip.appendChild(cell);
        }
      }
      // ensure resting at start of cycle
      strip.style.transition = 'none';
      strip.style.transform = 'translateY(0)';
    }
  
    // --- Spin logic ---
    spinBtn.addEventListener('click', spin);
    autoBtn.addEventListener('click', () => {
      if(spinning && autoLeft>0) return; // ignore while already autospinning
      autoLeft = 10; autoBtn.setAttribute('aria-pressed','true');
      autoBtn.textContent = 'AUTO…';
      spin();
    });
  
    document.addEventListener('keydown', (e)=>{
      if(e.code === 'Space'){ e.preventDefault(); spin(); }
      if(e.key === 'ArrowUp') { betEl.stepUp(); }
      if(e.key === 'ArrowDown') { betEl.stepDown(); }
    });
  
    function spin(){
      const bet = clamp(parseInt(betEl.value || '0', 10), 1, 10000);
      betEl.value = bet;
      if(spinning) return;
      if(balance < bet){
        setMessage('Not enough balance', 'lose');
        autoStop();
        return;
      }
  
      // deduct bet, lock UI
      balance -= bet; updateBalance();
      spinning = true; setControls(false); setMessage('Good luck!');
  
      const resultIndexes = [randInt(0, CYCLE-1), randInt(0, CYCLE-1), randInt(0, CYCLE-1)];
      const reelDur = [2.0, 2.4, 2.8]; // seconds
  
      const landedNames = [];
      let finished = 0;
  
      reelsEl.forEach((reel, i) => {
        reel.classList.add('spinning');
        const strip = $('.strip', reel);
  
        // How many full loops before final symbol
        const loops = 6 + i * 2; // staggered
        const targetIndexInLongStrip = loops * CYCLE + resultIndexes[i];
        const targetOffset = targetIndexInLongStrip * symbolSize;
  
        // animate using CSS transition
        strip.style.transition = `transform ${reelDur[i]}s cubic-bezier(.15,.8,.1,1)`;
        // small async to ensure transition is applied
        requestAnimationFrame(()=>{
          strip.style.transform = `translateY(-${targetOffset}px)`;
          beep(220 + i*110, 0.05); // start whoosh blip per reel
        });
  
        strip.addEventListener('transitionend', onEnd);
        function onEnd(ev){
          if(ev.propertyName !== 'transform') return;
          strip.removeEventListener('transitionend', onEnd);
  
          // Normalize: snap back to the same symbol within the first cycle, without visible jump
          const finalIndex = resultIndexes[i];
          const finalOffset = finalIndex * symbolSize;
          const landed = SYMBOLS[finalIndex].name;
          landedNames[i] = landed;
  
          // remove transition and snap
          strip.style.transition = 'none';
          strip.style.transform = `translateY(-${finalOffset}px)`;
          // Force reflow so next spins re-apply transitions cleanly
          strip.getBoundingClientRect();
  
          reel.classList.remove('spinning');
          finished++; beep(330 + i*140, 0.06);
          if(finished === reelsEl.length){
            // evaluate result after a brief beat
            setTimeout(()=> evaluateSpin(landedNames, bet), 120);
          }
        }
      });
    }
  
    function evaluateSpin(names, bet){
      const [a,b,c] = names;
      let win = 0;
      if(a===b && b===c){
        win = bet * (SYMBOLS.find(s=>s.name===a).pay);
      }
      if(win>0){
        balance += win; updateBalance();
        setMessage(`WIN ${formatMoney(win)} — ${a.toUpperCase()} ×3!`, 'win');
        burst();
        melodyWin();
      }else{
        setMessage('No win. Try again!', 'lose');
      }
  
      spinning = false; setControls(true);
  
      // Auto mode
      if(autoLeft>0){
        autoLeft--; if(autoLeft<=0 || balance <= 0){ autoStop(); return; }
        setTimeout(spin, 450); // short pause between auto spins
      }
    }
  
    // --- UI helpers ---
    function setControls(enabled){
      spinBtn.disabled = !enabled; betEl.disabled = !enabled; if(!enabled) spinBtn.blur();
    }
    function updateBalance(){ balanceEl.textContent = formatMoney(balance); }
    function setMessage(text, type){
      msgEl.textContent = text || '';
      msgEl.classList.remove('win','lose');
      if(type) msgEl.classList.add(type);
      $('#aria-live').textContent = text || '';
    }
    function autoStop(){ autoLeft = 0; autoBtn.setAttribute('aria-pressed','false'); autoBtn.textContent = 'AUTO ×10'; }
  
    function burst(){
      burstEl.classList.remove('show'); void burstEl.offsetWidth; // restart animation
      burstEl.classList.add('show');
    }
  
    const clamp = (n,min,max)=> Math.max(min, Math.min(max, n));
    const randInt = (min,max)=> Math.floor(Math.random()*(max-min+1))+min;
    const formatMoney = n => n.toLocaleString(undefined, {maximumFractionDigits:0});
  
    // --- Tiny WebAudio beeps for feedback (no external assets) ---
    let audioCtx;
    function ensureAudio(){ try{ audioCtx = audioCtx || new (window.AudioContext||window.webkitAudioContext)(); }catch{} }
    function beep(freq=440, secs=.05){ ensureAudio(); if(!audioCtx) return; const o = audioCtx.createOscillator(); const g = audioCtx.createGain();
      o.type='triangle'; o.frequency.value=freq; o.connect(g); g.connect(audioCtx.destination); g.gain.setValueAtTime(0.0001, audioCtx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.2, audioCtx.currentTime + 0.005);
      g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + secs);
      o.start(); o.stop(audioCtx.currentTime + secs);
    }
    function melodyWin(){ // simple 3-note arpeggio
      [523,659,784].forEach((f,i)=> setTimeout(()=>beep(f, .08), i*110));
    }
  
    // Public tip: tiny devtools API
    window.slots = { spin, balance:()=>balance, setBalance:(v)=>{balance=v; updateBalance();}, symbols: SYMBOLS };
  })();
  