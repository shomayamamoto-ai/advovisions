!function(){const e=document.querySelector(".preloader");if(!e)return;setTimeout(()=>e.classList.add("done"),6e3),setTimeout(()=>e.classList.add("done"),3200)}(),function(){const e=document.querySelector(".hero-title");if(!e)return;const t=[];let n=0;const o=e=>{if(e.nodeType===Node.TEXT_NODE){const o=e.textContent;for(const e of o)" "===e||"　"===e?t.push(`<span class="letter space" style="--i:${n++}"> </span>`):t.push(`<span class="letter" style="--i:${n++}">${e}</span>`)}else if(e.nodeType===Node.ELEMENT_NODE){const n=e.tagName.toLowerCase(),a=Array.from(e.attributes).map(e=>` ${e.name}="${e.value}"`).join("");t.push(`<${n}${a}>`),e.childNodes.forEach(o),t.push(`</${n}>`)}};e.childNodes.forEach(o),e.innerHTML=t.join("")}(),function(){document.querySelectorAll(".scroll-cue").forEach(function(n){n.remove()})}(),function(){var v=document.querySelector(".hero-video");if(!v)return;try{v.muted=!0;v.defaultMuted=!0;v.playsInline=!0;v.setAttribute("muted","");v.setAttribute("playsinline","")}catch(e){}var played=!1;function go(){if(played||v.readyState<1)return;var p=v.play();if(p&&typeof p.then==="function")p.then(function(){played=!0}).catch(function(){})}function onInteract(){if(played)return;var p=v.play();if(p&&typeof p.then==="function")p.then(function(){played=!0;rm()}).catch(function(){});else{played=!0;rm()}}function rm(){["pointerdown","touchstart","keydown","scroll","mousemove"].forEach(function(e){window.removeEventListener(e,onInteract,{passive:!0,capture:!0})})}v.addEventListener("loadedmetadata",go);v.addEventListener("loadeddata",go);v.addEventListener("canplay",go);v.addEventListener("canplaythrough",go);document.addEventListener("visibilitychange",function(){if(!document.hidden)go()});["pointerdown","touchstart","keydown","scroll","mousemove"].forEach(function(e){window.addEventListener(e,onInteract,{passive:!0,capture:!0,once:!1})});go();setTimeout(go,400);setTimeout(go,1500)}(),function(){const e=document.querySelector(".scroll-progress");if(!e)return;const t=()=>{const t=document.documentElement,n=t.scrollHeight-t.clientHeight,o=n>0?window.scrollY/n*100:0;e.style.width=o+"%"};t(),window.addEventListener("scroll",t,{passive:!0})}(),function(){const e=document.querySelector(".site-header");if(!e)return;const t=e.classList.contains("on-hero"),n=()=>{const n=window.scrollY;if(e.classList.toggle("scrolled",n>40),t){const t=document.querySelector(".hero"),o=t?t.offsetHeight-80:120;e.classList.toggle("on-hero",n<o)}};n(),window.addEventListener("scroll",n,{passive:!0})}(),function(){const e=document.querySelectorAll(".reveal, .stagger");if(!("IntersectionObserver"in window)||!e.length)return void e.forEach(e=>e.classList.add("in"));const t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add("in"),t.unobserve(e.target))})},{threshold:.12,rootMargin:"0px 0px -40px 0px"});e.forEach(e=>t.observe(e))}(),function(){const e=document.querySelectorAll("[data-count]");if(!e.length||!("IntersectionObserver"in window))return;const t=new IntersectionObserver(e=>{e.forEach(e=>{if(!e.isIntersecting)return;const n=e.target,o=parseInt(n.dataset.count,10)||0,a=performance.now(),s=e=>{const t=Math.min(1,(e-a)/1600),r=1-Math.pow(1-t,3);n.textContent=Math.round(o*r).toLocaleString(),t<1&&requestAnimationFrame(s)};requestAnimationFrame(s),t.unobserve(n)})},{threshold:.3});e.forEach(e=>t.observe(e))}(),function(){document.querySelectorAll(".work-card").forEach(a=>{const s=a.querySelector("video");s&&(a.addEventListener("mouseenter",()=>{try{s.currentTime=0,s.play().catch(()=>{})}catch(e){}}),a.addEventListener("mouseleave",()=>{try{s.pause()}catch(e){}})),a.addEventListener("click",()=>function(a){if(!e)return;const s=a.querySelector("video source")?.getAttribute("src"),r=a.querySelector("video")?.getAttribute("poster")||a.querySelector("img")?.getAttribute("src"),i=a.querySelector(".info .title")?.textContent||"",c=a.querySelector(".info .client")?.textContent||"";if(t)if(t.innerHTML="",s){const e=document.createElement("source");e.src=s,e.type="video/mp4",t.appendChild(e),t.poster=r||"",t.load(),t.play().catch(()=>{})}else t.poster=r||"";n&&(n.textContent=i);o&&(o.textContent=c);e.classList.add("open"),document.body.style.overflow="hidden"}(a))});const e=document.getElementById("video-modal"),t=e?.querySelector("video"),n=e?.querySelector(".modal-caption .title"),o=e?.querySelector(".modal-caption .client");function a(){if(e&&(e.classList.remove("open"),document.body.style.overflow="",t))try{t.pause()}catch(e){}}e&&(e.addEventListener("click",t=>{(t.target===e||t.target.classList.contains("modal-close"))&&a()}),document.addEventListener("keydown",e=>{"Escape"===e.key&&a()}))}(),function(){const e=document.getElementById("members-grid");if(!e||!window.ADVO_MEMBERS)return;const t=window.ADVO_MEMBERS,n=document.getElementById("members-count"),o=document.getElementById("members-search"),a=document.querySelectorAll(".filter-chips .chip"),s=document.getElementById("members-pager");let r={query:"",dept:"ALL",page:1};function i(e){return`\n      <a class="talent-card" data-cat="${e.dept}" href="member.html?id=${e.id}">\n        <div class="talent-photo">\n          <img src="${e.portrait}" alt="${e.name}" loading="lazy"\n               onerror="this.onerror=null;this.src='${e.fallback}'">\n          <span class="talent-badge">${e.dept}</span>\n          <div class="talent-hover">\n            <div class="talent-hover-skills">${e.expertise.join(" · ")}</div>\n            <div class="talent-hover-view">View Profile →</div>\n          </div>\n        </div>\n        <div class="talent-meta">\n          <div class="talent-name">${e.name}</div>\n          <div class="talent-role">${e.role}</div>\n        </div>\n      </a>\n    `}function c(){const o=function(){const e=r.query.trim().toLowerCase();return t.filter(t=>("ALL"===r.dept||t.dept===r.dept)&&(!e||t.name.toLowerCase().includes(e)||t.nameKana.toLowerCase().includes(e)||t.role.toLowerCase().includes(e)||t.id.includes(e)||t.dept.includes(e)))}(),a=Math.max(1,Math.ceil(o.length/30));r.page>a&&(r.page=a);const l=30*(r.page-1),d=o.slice(l,l+30);n&&(n.innerHTML=`<strong>${o.length.toString().padStart(3,"0")}</strong> / ${t.length.toString().padStart(3,"0")} Talents`),e.innerHTML=d.map(i).join(""),s&&function(e){const t=[];t.push(`<button ${1===r.page?"disabled":""} data-page="${r.page-1}">Prev</button>`);const n=new Set([1,e,r.page-1,r.page,r.page+1]);let o=0;for(let a=1;a<=e;a++)n.has(a)&&(a-o>1&&t.push("<button disabled>…</button>"),t.push(`<button class="${a===r.page?"active":""}" data-page="${a}">${a}</button>`),o=a);t.push(`<button ${r.page===e?"disabled":""} data-page="${r.page+1}">Next</button>`),s.innerHTML=t.join(""),s.querySelectorAll("button[data-page]").forEach(e=>{e.addEventListener("click",()=>{r.page=parseInt(e.dataset.page,10),c(),document.getElementById("members")?.scrollIntoView({behavior:"smooth",block:"start"})})})}(a)}if(o){let e;o.addEventListener("input",t=>{clearTimeout(e),e=setTimeout(()=>{r.query=t.target.value,r.page=1,c()},120)})}a.forEach(e=>{e.addEventListener("click",()=>{a.forEach(e=>e.classList.remove("active")),e.classList.add("active"),r.dept=e.dataset.dept||"ALL",r.page=1,c()})}),c()}(),function(){const root=document.getElementById("profile-root");if(!root||!window.ADVO_MEMBERS)return;const M=window.ADVO_MEMBERS;const id=new URLSearchParams(location.search).get("id");const m=M.find(x=>x.id===id)||M[0];document.title=`${m.name} ／ ${m.role} — 合同会社 AdvoVisions`;const meta=document.querySelector('meta[name="description"]');if(meta)meta.content=`${m.name}（${m.role}）のプロフィール／出演実績／SNS — 合同会社 AdvoVisions 所属。`;const og=document.querySelector('meta[property="og:image"]');if(og)og.setAttribute("content",m.portrait);const related=M.filter(x=>x.dept===m.dept&&x.id!==m.id).slice(0,6);const sns=m.sns||{instagram:"#",x:"#",tiktok:"#",youtube:"#"};const gallery=m.gallery||[];const SVG_IG='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>';const SVG_X='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 3H22l-7.6 8.7L23 21h-6.8l-5.3-6.7L4.7 21H1.6l8.1-9.3L1 3h7l4.8 6.2L18.9 3zm-1.2 16h1.7L6.4 5H4.6l13.1 14z"/></svg>';const SVG_TT='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.6 7.7c-1.6 0-3-.9-3.8-2.2V15a5 5 0 1 1-5-5v2.7a2.3 2.3 0 1 0 2.3 2.3V2h2.5c.2 1.7 1.5 3 3.2 3.2v2.5z"/></svg>';const SVG_YT='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.2c-.3-1-1-1.8-2-2C19.1 4.8 12 4.8 12 4.8s-7.1 0-9 .4c-1 .2-1.7 1-2 2C.7 9 .7 12 .7 12s0 3 .4 4.8c.3 1 1 1.8 2 2 1.9.4 9 .4 9 .4s7.1 0 9-.4c1-.2 1.7-1 2-2 .4-1.8.4-4.8.4-4.8s0-3-.4-4.8zM9.6 15.6V8.4L15.9 12l-6.3 3.6z"/></svg>';root.innerHTML=`
    <section class="profile-hero-v2">
      <div class="profile-hero-bg" style="background-image:url('${m.portrait}')"></div>
      <div class="container">
        <nav class="breadcrumb breadcrumb-on-dark" aria-label="パンくずリスト"><ol class="breadcrumb-list" itemscope itemtype="https://schema.org/BreadcrumbList"><li class="breadcrumb-item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"><a itemprop="item" href="index.html"><span itemprop="name">ホーム</span></a><meta itemprop="position" content="1"></li><li class="breadcrumb-item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"><a itemprop="item" href="members.html"><span itemprop="name">タレント</span></a><meta itemprop="position" content="2"></li><li class="breadcrumb-item" aria-current="page" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"><span itemprop="name">${m.name}</span><meta itemprop="position" content="3"></li></ol></nav>
        <a class="back-link" href="members.html">← 所属タレント一覧へ戻る</a>
        <div class="profile-grid-v2">
          <div class="profile-portrait-col">
            <div class="profile-portrait-v2">
              <img src="${m.portrait}" alt="${m.name}"
                   onerror="this.onerror=null;this.src='${m.fallback}'">
              <span class="profile-id-tag">ADV–${m.id}</span>
            </div>
            <div class="profile-social-v2" aria-label="Social links">
              <a href="${sns.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${SVG_IG}<span>Instagram</span></a>
              <a href="${sns.x}" target="_blank" rel="noopener" aria-label="X">${SVG_X}<span>X (Twitter)</span></a>
              <a href="${sns.tiktok}" target="_blank" rel="noopener" aria-label="TikTok">${SVG_TT}<span>TikTok</span></a>
              <a href="${sns.youtube}" target="_blank" rel="noopener" aria-label="YouTube">${SVG_YT}<span>YouTube</span></a>
            </div>
          </div>
          <div class="profile-info-col">
            <span class="profile-eyebrow">${m.dept}　·　Talent Profile</span>
            <h1 class="profile-name-v2">${m.name}</h1>
            <div class="profile-name-kana-v2">${m.nameKana}</div>
            <div class="profile-role-v2">${m.role}</div>
            <div class="profile-tags-v2">
              ${m.expertise.map(e=>`<span class="profile-tag-v2">${e}</span>`).join("")}
            </div>
            <p class="profile-bio-v2">${m.bio}</p>
            <div class="profile-stats-v2">
              <div class="pstat"><span class="pstat-label">身長</span><span class="pstat-value">${m.height}<small>cm</small></span></div>
              <div class="pstat"><span class="pstat-label">体重</span><span class="pstat-value">${m.weight}<small>kg</small></span></div>
              <div class="pstat"><span class="pstat-label">足サイズ</span><span class="pstat-value">${m.shoe}<small>cm</small></span></div>
              <div class="pstat"><span class="pstat-label">血液型</span><span class="pstat-value">${m.blood}<small>型</small></span></div>
              <div class="pstat"><span class="pstat-label">出身</span><span class="pstat-value pstat-text">${m.birthCity}</span></div>
              <div class="pstat"><span class="pstat-label">所属年</span><span class="pstat-value">${m.joined}<small>年〜</small></span></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="profile-section profile-gallery-section">
      <div class="container">
        <div class="profile-section-head">
          <span class="eyebrow">PORTFOLIO</span>
          <h2>フォトギャラリー</h2>
        </div>
        <div class="profile-gallery">
          ${gallery.map((g,i)=>`<a class="profile-gallery-item" href="${g}" target="_blank" rel="noopener" style="--gi:${i}"><img src="${g}" alt="${m.name} portfolio ${i+1}" loading="lazy"></a>`).join("")}
        </div>
      </div>
    </section>

    <section class="profile-section profile-films-section">
      <div class="container">
        <div class="profile-section-head">
          <span class="eyebrow">FILMOGRAPHY</span>
          <h2>主な出演・参加作品</h2>
        </div>
        <ul class="filmography-list-v2">
          ${m.filmography.map(([cat,work])=>`
            <li>
              <span class="film-cat-v2">${cat}</span>
              <span class="film-work-v2">${work}</span>
            </li>
          `).join("")}
        </ul>
      </div>
    </section>

    <section class="profile-section profile-news-section">
      <div class="container">
        <div class="profile-section-head">
          <span class="eyebrow">LATEST</span>
          <h2>最新情報</h2>
        </div>
        <ul class="talent-news-list-v2">
          ${m.news.map(n=>`
            <li>
              <span class="news-date-v2">${n.date}</span>
              <span class="news-text-v2">${n.text}</span>
            </li>
          `).join("")}
        </ul>
      </div>
    </section>

    <section class="profile-section profile-meta-section">
      <div class="container">
        <div class="profile-section-head">
          <span class="eyebrow">CASTING SHEET</span>
          <h2>キャスティング情報</h2>
        </div>
        <div class="casting-grid">
          <dl class="casting-meta">
            <dt>タレントID</dt><dd>ADV–${m.id}</dd>
            <dt>カテゴリ</dt><dd>${m.dept}</dd>
            <dt>役職</dt><dd>${m.role}</dd>
            <dt>身体スペック</dt><dd>身長 ${m.height} / 体重 ${m.weight} / 足 ${m.shoe}cm</dd>
            <dt>使用言語</dt><dd>${(m.languages||["日本語"]).join(" ／ ")}</dd>
            <dt>担当マネージャー</dt><dd>${m.manager}</dd>
            <dt>得意分野</dt><dd>${m.expertise.join("、")}</dd>
            <dt>SNSアカウント</dt><dd>@${(m.id?"adv_"+m.id:"advovisions")}（IG / X / TikTok / YouTube）</dd>
          </dl>
          <aside class="casting-cta">
            <div class="casting-cta-photo">
              <img src="${m.portrait}" alt="${m.name}" loading="lazy"
                   onerror="this.onerror=null;this.src='${m.fallback}'">
            </div>
            <div class="casting-cta-body">
              <span class="eyebrow">CASTING</span>
              <h3><strong>${m.name}</strong>を<br>キャスティングする</h3>
              <p class="casting-cta-meta">${m.dept}　／　${m.role}<br>ID：ADV–${m.id}　・　所属：${m.joined}年〜</p>
              <a href="mailto:casting@advovisions.com?subject=${encodeURIComponent("[キャスティング] "+m.name+" / ADV-"+m.id)}&body=${encodeURIComponent("ご担当者様\n\n下記タレントのキャスティングについてご相談させてください。\n\nタレント名：" + m.name + "\nID：ADV-" + m.id + "\nカテゴリ：" + m.dept + "\n\n企画概要：\n撮影日程：\n撮影場所：\n媒体：\nお見積りご希望日：\n\nよろしくお願いいたします。")}" class="btn-primary casting-cta-btn">このタレントについて問い合わせる</a>
              <a href="audition.html" class="btn-outline casting-cta-btn">同カテゴリのタレントを探す</a>
            </div>
          </aside>
        </div>
      </div>
    </section>

    ${related.length?`
    <section class="profile-section profile-related-section">
      <div class="container">
        <div class="profile-section-head">
          <span class="eyebrow">SAME CATEGORY</span>
          <h2>同カテゴリのタレント</h2>
        </div>
        <div class="talents-grid">
          ${related.map(r=>`
            <a class="talent-card" data-cat="${r.dept}" href="member.html?id=${r.id}">
              <div class="talent-photo">
                <img src="${r.portrait}" alt="${r.name}" loading="lazy"
                     onerror="this.onerror=null;this.src='${r.fallback}'">
                <span class="talent-badge">${r.dept}</span>
              </div>
              <div class="talent-meta">
                <div class="talent-name">${r.name}</div>
                <div class="talent-role">${r.role}</div>
              </div>
            </a>
          `).join("")}
        </div>
      </div>
    </section>
    `:""}
  `;}(),function(){const e=document.querySelector(".hero-title");if(!e||"1"===e.dataset.split)return;e.dataset.split="1";const t=[];let n=0;const o=e=>{if(3===e.nodeType)for(const o of e.textContent)" "===o||"　"===o?t.push(`<span class="letter space" style="--i:${n++}"> </span>`):t.push(`<span class="letter" style="--i:${n++}">${o}</span>`);else if(1===e.nodeType){const n=e.tagName.toLowerCase(),a=Array.from(e.attributes).map(e=>` ${e.name}="${e.value}"`).join("");t.push(`<${n}${a}>`),e.childNodes.forEach(o),t.push(`</${n}>`)}};e.childNodes.forEach(o),e.innerHTML=t.join("")}(),function(){const e=document.querySelectorAll("[data-count]");if(!e.length||!("IntersectionObserver"in window))return;const t=new IntersectionObserver(e=>{e.forEach(e=>{if(!e.isIntersecting)return;const n=e.target;if(n.dataset.done)return;n.dataset.done="1";const o=parseInt(n.dataset.count,10)||0,a=performance.now(),s=e=>{const t=Math.min(1,(e-a)/1600),r=1-Math.pow(1-t,3);if(n.textContent=Math.round(o*r).toLocaleString(),t<1)requestAnimationFrame(s);else{const e=n.closest(".num");e&&e.classList.add("finish")}};requestAnimationFrame(s),t.unobserve(n)})},{threshold:.3});e.forEach(e=>t.observe(e))}(),window.matchMedia&&window.matchMedia("(hover: hover) and (pointer: fine)").matches&&(document.addEventListener("mousemove",e=>{const t=e.target.closest(".talent-card");if(!t)return;const n=t.getBoundingClientRect(),o=(e.clientX-n.left)/n.width-.5,a=(e.clientY-n.top)/n.height-.5;t.style.setProperty("--tilt-x",(8*-a).toFixed(2)+"deg"),t.style.setProperty("--tilt-y",(8*o).toFixed(2)+"deg"),t.classList.add("is-tilting")}),document.addEventListener("mouseover",e=>{document.querySelectorAll(".talent-card.is-tilting").forEach(t=>{t.contains(e.target)||(t.classList.remove("is-tilting"),t.style.removeProperty("--tilt-x"),t.style.removeProperty("--tilt-y"))})})),function(){const e=document.querySelector(".hero");if(!e||e.querySelector(".hero-particles"))return;const t=document.createElement("div");t.className="hero-particles";let n="";for(let e=0;e<22;e++){const e=Math.floor(100*Math.random()),t=2+5*Math.random(),o=14+16*Math.random(),a=10*Math.random(),s=(120*Math.random()-60).toFixed(0),r=(.3+.5*Math.random()).toFixed(2);n+=`<i style="left:${e}%;width:${t.toFixed(1)}px;height:${t.toFixed(1)}px;animation-duration:${o.toFixed(1)}s;animation-delay:${a.toFixed(1)}s;--sway:${s}px;opacity:${r};"></i>`}t.innerHTML=n,e.appendChild(t)}(),function(){if(document.querySelector(".back-to-top"))return;const e=document.createElement("button");e.className="back-to-top",e.setAttribute("aria-label","Back to top"),e.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',document.body.appendChild(e),window.addEventListener("scroll",()=>{e.classList.toggle("visible",window.scrollY>400)},{passive:!0}),e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})}(),function(){if(document.getElementById("contact-modal"))return;const e=document.createElement("div");e.id="contact-modal",e.className="contact-modal",e.innerHTML='\n    <div class="contact-modal-inner">\n      <button class="contact-modal-close" aria-label="Close"></button>\n      <span class="eyebrow">CONTACT</span>\n      <h3 data-ja="お問い合わせ" data-en="Get in touch">お問い合わせ</h3>\n      <p data-ja="キャスティング・取材・採用のご相談は下記フォームよりご連絡ください。" data-en="For casting, press, or careers, please use the form below.">キャスティング・取材・採用のご相談は下記フォームよりご連絡ください。</p>\n      <form id="contact-form">\n        <label data-ja="お名前" data-en="Your name">お名前</label>\n        <input type="text" name="name" required>\n        <label data-ja="会社名" data-en="Company">会社名</label>\n        <input type="text" name="company">\n        <label data-ja="メールアドレス" data-en="Email">メールアドレス</label>\n        <input type="email" name="email" required>\n        <label data-ja="ご用件" data-en="Subject">ご用件</label>\n        <select name="subject">\n          <option value="キャスティング" data-en="Casting">キャスティング</option>\n          <option value="取材・広報" data-en="Press">取材・広報</option>\n          <option value="採用・オーディション" data-en="Audition / Careers">採用・オーディション</option>\n          <option value="その他" data-en="Other">その他</option>\n        </select>\n        <label data-ja="詳細・メッセージ" data-en="Message">詳細・メッセージ</label>\n        <textarea name="message" required></textarea>\n        <div class="contact-modal-actions">\n          <button type="submit" data-ja="送信" data-en="Send">送信</button>\n        </div>\n      </form>\n    </div>\n  ',document.body.appendChild(e);const t=()=>{e.classList.remove("open"),document.body.style.overflow=""};document.addEventListener("click",t=>{const n=t.target.closest("a");if(!n)return;const o=n.getAttribute("href")||"";o.startsWith("mailto:")&&(o.includes("contact@")||o.includes("casting@"))?(t.preventDefault(),e.classList.add("open"),document.body.style.overflow="hidden"):"#contact"===o||o.endsWith("#contact")}),e.addEventListener("click",n=>{(n.target===e||n.target.classList.contains("contact-modal-close"))&&t()}),document.addEventListener("keydown",n=>{"Escape"===n.key&&e.classList.contains("open")&&t()}),e.querySelector("#contact-form").addEventListener("submit",e=>{e.preventDefault();const n=e.target,o=Object.fromEntries(new FormData(n).entries()),a=n.querySelector('[name="subject"] option:checked')?.textContent||o.subject,s=encodeURIComponent(`お名前: ${o.name}\n会社名: ${o.company||"-"}\nメール: ${o.email}\nご用件: ${a}\n\n${o.message}`),r="キャスティング"===o.subject?"casting@advovisions.com":"contact@advovisions.com";window.location.href=`mailto:${r}?subject=${encodeURIComponent("[Web] "+a)}&body=${s}`,setTimeout(t,300)})}(),function(){
var btn=document.querySelector(".nav-toggle"),
    origNav=document.querySelector(".nav");
if(!btn||!origNav)return;
/* Hide the legacy .nav entirely; we control everything from scratch. */
origNav.style.setProperty("display","none","important");

/* Collect links from original nav HTML (preserves any active state) */
var origLinks=Array.prototype.slice.call(origNav.querySelectorAll("a"));
if(!origLinks.length){origLinks=[
 {textContent:"Home",href:"index.html"},
 {textContent:"Services",href:"index.html#services"},
 {textContent:"Talents",href:"members.html"},
 {textContent:"Works",href:"index.html#works"},
 {textContent:"News",href:"news.html"},
 {textContent:"Contact",href:"index.html#contact"}
];}

/* Build a brand-new drawer that has NO inherited CSS conflicts */
var drawer=document.createElement("aside");
drawer.setAttribute("aria-label","Primary");
drawer.id="av-drawer";
var sp=function(el,k,v){el.style.setProperty(k,v,"important");};
sp(drawer,"position","fixed");
sp(drawer,"top","0");
sp(drawer,"right","0");
sp(drawer,"bottom","0");
sp(drawer,"left","auto");
sp(drawer,"width","min(86vw,360px)");
sp(drawer,"max-width","360px");
sp(drawer,"height","100vh");
sp(drawer,"background","#ffffff");
sp(drawer,"box-shadow","-26px 0 70px rgba(19,30,122,.18)");
sp(drawer,"z-index","9999");
sp(drawer,"padding","96px 32px 40px");
sp(drawer,"margin","0");
sp(drawer,"overflow-y","auto");
sp(drawer,"-webkit-overflow-scrolling","touch");
sp(drawer,"transform","translateX(100%)");
sp(drawer,"transition","transform .5s cubic-bezier(.77,0,.18,1)");
sp(drawer,"box-sizing","border-box");
sp(drawer,"font-family",'"Noto Sans JP",sans-serif');

origLinks.forEach(function(a,i){
  var link=document.createElement("a");
  link.textContent=(a.textContent||"").trim();
  var href=a.getAttribute?a.getAttribute("href"):a.href;
  link.setAttribute("href",href||"#");
  var active=a.classList&&(a.classList.contains("active")||a.getAttribute("aria-current")==="page");
  sp(link,"display","block");
  sp(link,"width","100%");
  sp(link,"padding","18px 4px");
  sp(link,"color",active?"#2437c8":"#0f1430");
  sp(link,"-webkit-text-fill-color",active?"#2437c8":"#0f1430");
  sp(link,"background","transparent");
  sp(link,"font-size","17px");
  sp(link,"font-weight",active?"700":"500");
  sp(link,"letter-spacing",".02em");
  sp(link,"text-decoration","none");
  sp(link,"border-bottom","1px solid #e4e8f4");
  sp(link,"text-shadow","none");
  sp(link,"opacity","1");
  sp(link,"visibility","visible");
  sp(link,"box-sizing","border-box");
  if(i===origLinks.length-1)sp(link,"border-bottom","0");
  drawer.appendChild(link);
});
document.body.appendChild(drawer);

/* Backdrop overlay */
var backdrop=document.createElement("div");
backdrop.id="av-drawer-backdrop";
sp(backdrop,"position","fixed");
sp(backdrop,"top","0");sp(backdrop,"left","0");sp(backdrop,"right","0");sp(backdrop,"bottom","0");
sp(backdrop,"background","rgba(15,20,48,.45)");
sp(backdrop,"-webkit-backdrop-filter","blur(4px)");
sp(backdrop,"backdrop-filter","blur(4px)");
sp(backdrop,"z-index","9998");
sp(backdrop,"opacity","0");
sp(backdrop,"visibility","hidden");
sp(backdrop,"transition","opacity .4s ease, visibility 0s linear .4s");
document.body.appendChild(backdrop);

function setOpen(open){
  btn.classList.toggle("open",open);
  document.body.classList.toggle("nav-open",open);
  sp(drawer,"transform",open?"translateX(0)":"translateX(100%)");
  if(open){
    sp(backdrop,"opacity","1");sp(backdrop,"visibility","visible");
    sp(backdrop,"transition","opacity .4s ease");
    document.documentElement.style.overflow="hidden";
  }else{
    sp(backdrop,"opacity","0");
    sp(backdrop,"transition","opacity .4s ease, visibility 0s linear .4s");
    setTimeout(function(){sp(backdrop,"visibility","hidden");},420);
    document.documentElement.style.overflow="";
  }
}

btn.addEventListener("click",function(ev){ev.stopPropagation();setOpen(!document.body.classList.contains("nav-open"));});
drawer.addEventListener("click",function(ev){
  if(ev.target.tagName==="A")setOpen(false);
});
backdrop.addEventListener("click",function(){setOpen(false);});
document.addEventListener("keydown",function(ev){
  if(ev.key==="Escape"&&document.body.classList.contains("nav-open"))setOpen(false);
});
}(),function(){const e=document.getElementById("video-modal");e&&document.addEventListener("keydown",t=>{if(e.classList.contains("open")&&" "===t.key){t.preventDefault();const n=e.querySelector("video");if(!n)return;n.paused?n.play().catch(()=>{}):n.pause()}})}(),function(){const e=document.querySelector(".preloader-brand");if(!e)return;const t=e.textContent.trim();e.innerHTML="";const n=document.createElement("span");n.className="brand-glyph",n.textContent="",e.appendChild(n),e.setAttribute("data-text",t),e.classList.add("shown");const o="AVadviosnSKJQXZWY$@#*/0123456789",a=t.length;const s=performance.now();function r(i){const c=i-s,l=Math.min(1,c/(36e3/28)),d=Math.floor(l*a);let u="";for(let e=0;e<a;e++)e<d?u+=t[e]:" "===t[e]?u+=" ":u+=o[Math.floor(32*Math.random())];n.textContent=u,e.setAttribute("data-text",u),l<1?requestAnimationFrame(r):(n.textContent=t,e.setAttribute("data-text",t))}setTimeout(()=>requestAnimationFrame(r),1800)}(),function(){const t=document.getElementById('testimonial-track'),d=document.getElementById('testimonial-dots');if(!t||!d)return;const cards=Array.from(t.children);d.innerHTML=cards.map((_,i)=>`<button data-i="${i}" aria-label="Go to ${i+1}"${i===0?' class="active"':''}></button>`).join('');const btns=d.querySelectorAll('button');btns.forEach(b=>b.addEventListener('click',()=>{const i=parseInt(b.dataset.i,10);const card=cards[i];const target=card.offsetLeft-t.offsetWidth/2+card.offsetWidth/2;t.scrollTo({left:Math.max(0,target),behavior:'smooth'})}));let sTo;t.addEventListener('scroll',()=>{clearTimeout(sTo);sTo=setTimeout(()=>{const c=t.scrollLeft+t.offsetWidth/2;let near=0,min=1e9;cards.forEach((cd,i)=>{const d=Math.abs(cd.offsetLeft+cd.offsetWidth/2-c);if(d<min){min=d;near=i}});btns.forEach((b,i)=>b.classList.toggle('active',i===near))},80)})}(),function(){const b=document.querySelector('.to-top');if(!b)return;b.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));window.addEventListener('scroll',()=>b.classList.toggle('show',window.scrollY>400),{passive:!0})}(),function(){const v=document.querySelector('.hero-video');if(!v||matchMedia('(prefers-reduced-motion:reduce)').matches)return;let tf=null;window.addEventListener('scroll',()=>{if(tf)return;tf=requestAnimationFrame(()=>{const y=Math.min(window.scrollY,800);v.style.transform=`translate3d(0,${y*.15}px,0) scale(${1+y*.0002})`;tf=null})},{passive:!0})}()
,function(){}(),function(){const items=document.querySelectorAll('.profile-gallery-item');if(!items.length)return;const urls=Array.from(items).map(a=>a.getAttribute('href'));const lb=document.createElement('div');lb.className='lightbox';lb.innerHTML=`<button class="lightbox-close" aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg></button><button class="lightbox-prev" aria-label="Previous"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg></button><button class="lightbox-next" aria-label="Next"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg></button><div class="lightbox-content"><img class="lightbox-img" src="" alt=""></div><div class="lightbox-counter"></div>`;document.body.appendChild(lb);const img=lb.querySelector('.lightbox-img'),counter=lb.querySelector('.lightbox-counter');let cur=0;function show(i){cur=(i+urls.length)%urls.length;img.src=urls[cur];counter.textContent=String(cur+1).padStart(2,'0')+' / '+String(urls.length).padStart(2,'0')}function open(i){show(i);lb.classList.add('open');document.body.style.overflow='hidden'}function close(){lb.classList.remove('open');document.body.style.overflow=''}items.forEach((a,i)=>{a.addEventListener('click',e=>{e.preventDefault();open(i)})});lb.querySelector('.lightbox-close').addEventListener('click',close);lb.querySelector('.lightbox-prev').addEventListener('click',()=>show(cur-1));lb.querySelector('.lightbox-next').addEventListener('click',()=>show(cur+1));lb.addEventListener('click',e=>{if(e.target===lb)close()});document.addEventListener('keydown',e=>{if(!lb.classList.contains('open'))return;if(e.key==='Escape')close();else if(e.key==='ArrowLeft')show(cur-1);else if(e.key==='ArrowRight')show(cur+1)})}(),function(){}(),function(){const track=document.getElementById('testimonial-track');if(!track)return;const cards=Array.from(track.children);if(cards.length<2)return;let cur=0,timer=null,paused=false;function go(i){cur=(i+cards.length)%cards.length;const card=cards[cur];const target=card.offsetLeft-track.offsetWidth/2+card.offsetWidth/2;track.scrollTo({left:Math.max(0,target),behavior:'smooth'})}function play(){if(paused)return;timer=setTimeout(()=>{go(cur+1);play()},6500)}function pause(){clearTimeout(timer);paused=true;setTimeout(()=>{paused=false;play()},10000)}track.addEventListener('mouseenter',()=>{clearTimeout(timer);paused=true});track.addEventListener('mouseleave',()=>{paused=false;play()});track.addEventListener('scroll',pause,{passive:true});play()}(),function(){if(!document.querySelector('.filter-chips .chip'))return;const cat=new URLSearchParams(location.search).get('cat');if(!cat)return;setTimeout(()=>{const btn=document.querySelector('.filter-chips .chip[data-dept="'+cat+'"]');if(btn){btn.click();window.scrollTo({top:Math.max(0,btn.getBoundingClientRect().top+window.scrollY-140),behavior:'smooth'})}},120)}(),function(){
var FORM=document.getElementById("match-form");
if(!FORM||!window.ADVO_MEMBERS)return;
var RESULT=document.getElementById("match-results");

/* selection state */
var state={media:null,category:"any",gender:"any",skills:[],rights:null,budget:null,hMin:null,hMax:null};

function bind(){
  FORM.querySelectorAll(".match-chips").forEach(function(grp){
    var key=grp.getAttribute("data-key"),multi=grp.classList.contains("multi");
    grp.querySelectorAll(".m-chip").forEach(function(c){
      c.addEventListener("click",function(){
        var val=c.getAttribute("data-val");
        if(multi){
          c.classList.toggle("active");
          state[key]=Array.prototype.map.call(grp.querySelectorAll(".m-chip.active"),function(x){return x.getAttribute("data-val")});
        } else {
          grp.querySelectorAll(".m-chip").forEach(function(x){x.classList.remove("active")});
          c.classList.add("active");
          state[key]=val;
        }
      });
    });
  });
  document.getElementById("match-h-min").addEventListener("input",function(e){state.hMin=parseInt(e.target.value,10)||null});
  document.getElementById("match-h-max").addEventListener("input",function(e){state.hMax=parseInt(e.target.value,10)||null});
  document.getElementById("match-budget").addEventListener("input",function(e){state.budget=parseInt(e.target.value,10)||null});
  document.getElementById("match-go").addEventListener("click",run);
  document.getElementById("match-reset").addEventListener("click",reset);
}

function reset(){
  state={media:null,category:"any",gender:"any",skills:[],rights:null,budget:null,hMin:null,hMax:null};
  FORM.querySelectorAll(".m-chip").forEach(function(x){x.classList.remove("active")});
  ["match-h-min","match-h-max","match-budget"].forEach(function(id){var el=document.getElementById(id);if(el)el.value=""});
  RESULT.innerHTML="";
}

/* dept -> category */
var DEPT_CAT={
  "男性アクター":"actor","女性アクター":"actor",
  "男性モデル":"model","女性モデル":"model",
  "男性歌手":"singer","女性歌手":"singer",
  "男性声優":"voice","女性声優":"voice"
};
/* media -> preferred categories */
var MEDIA_BOOST={
  "CM":["actor","model"],"WebCM":["actor","model","singer"],
  "MV":["singer","actor","model"],"Drama":["actor"],"Film":["actor"],
  "Stage":["actor","singer"],"Event":["model","singer"],
  "Photo":["model","actor"],"Voice":["voice"]
};
/* base fee by dept (yen, 1 talent, baseline) */
var FEE_BASE={
  "男性アクター":380000,"女性アクター":420000,
  "男性モデル":280000,"女性モデル":320000,
  "男性歌手":450000,"女性歌手":480000,
  "男性声優":220000,"女性声優":240000
};
/* media multiplier */
var FEE_MEDIA={
  "CM":1.6,"WebCM":1.1,"MV":1.0,"Drama":1.2,"Film":1.3,
  "Stage":0.95,"Event":0.9,"Photo":0.8,"Voice":0.85
};
/* rights multiplier */
var FEE_RIGHTS={"buyout1y":1.4,"buyout2y":1.8,"buyout3y":2.3,"none":1.0};

function feeFor(m){
  var base=FEE_BASE[m.dept]||300000;
  var media=state.media?(FEE_MEDIA[state.media]||1):1;
  var rights=state.rights?(FEE_RIGHTS[state.rights]||1):1;
  /* experience premium */
  var years=2026-(m.joined||2024);
  var expMul=1+Math.max(0,Math.min(years,15))*0.04;
  /* skill premium: each matched skill +5% */
  var matched=(m.expertise||[]).filter(function(s){return state.skills.indexOf(s)>=0}).length;
  var skillMul=1+matched*0.05;
  var fee=base*media*rights*expMul*skillMul;
  /* round to 10k */
  return Math.round(fee/10000)*10000;
}

function score(m){
  var s=50; /* base */
  /* category */
  var cat=DEPT_CAT[m.dept];
  if(state.category!=="any"){
    if(cat===state.category)s+=20; else s-=20;
  }
  /* gender */
  if(state.gender!=="any"){
    if(m.gender===state.gender)s+=12; else s-=30;
  }
  /* media fit */
  if(state.media){
    var pref=MEDIA_BOOST[state.media]||[];
    if(pref.indexOf(cat)===0)s+=18;
    else if(pref.indexOf(cat)>0)s+=10;
    else if(pref.length&&pref.indexOf(cat)<0)s-=8;
  }
  /* skills */
  var skillsMatched=(m.expertise||[]).filter(function(x){return state.skills.indexOf(x)>=0}).length;
  if(state.skills.length){
    var ratio=skillsMatched/state.skills.length;
    s+=Math.round(ratio*25);
    if(skillsMatched===0)s-=15;
  }
  /* height */
  if(state.hMin&&m.height<state.hMin)s-=10;
  if(state.hMax&&m.height>state.hMax)s-=10;
  if(state.hMin&&state.hMax&&m.height>=state.hMin&&m.height<=state.hMax)s+=6;
  /* experience */
  var yrs=2026-(m.joined||2024);
  s+=Math.min(yrs*0.6,10);
  /* budget */
  if(state.budget){
    var f=feeFor(m);
    if(f<=state.budget)s+=8;
    else {
      var over=(f-state.budget)/state.budget;
      s-=Math.min(over*30,25);
    }
  }
  /* deterministic small jitter from id so equal scores rank stably */
  var idn=parseInt(m.id,10);
  s+=((idn*97)%17-8)*0.1;
  return Math.max(0,Math.min(100,s));
}

function rankOf(sc){
  if(sc>=92)return{r:"S",label:"圧倒的に推奨"};
  if(sc>=84)return{r:"A",label:"強くおすすめ"};
  if(sc>=76)return{r:"B",label:"十分に候補"};
  if(sc>=68)return{r:"C",label:"検討の余地あり"};
  if(sc>=58)return{r:"D",label:"条件次第で可"};
  if(sc>=48)return{r:"E",label:"優先度低め"};
  if(sc>=38)return{r:"F",label:"参考候補"};
  return{r:"G",label:"非推奨"};
}

function yen(n){return "¥"+n.toLocaleString()}

var CAT_LABEL={any:"指定なし",actor:"俳優・女優",model:"モデル",singer:"歌手・アーティスト",voice:"声優"};
var RIGHTS_LABEL={buyout1y:"1年買取",buyout2y:"2年買取",buyout3y:"3年買取",none:"買取なし"};
function run(){
  var btn=document.getElementById("match-go");
  if(btn){btn.disabled=true;btn.classList.add("is-loading");btn.textContent="診断中…";}

  /* small async to let UI breath */
  setTimeout(function(){
    var list=window.ADVO_MEMBERS.map(function(m){
      var sc=score(m),rk=rankOf(sc),f=feeFor(m);
      return{m:m,sc:sc,rk:rk,fee:f};
    }).sort(function(a,b){
      if(b.sc!==a.sc)return b.sc-a.sc;
      return a.fee-b.fee;
    });

    /* group by rank */
    var groups={S:[],A:[],B:[],C:[],D:[],E:[],F:[],G:[]};
    list.forEach(function(x){groups[x.rk.r].push(x)});

    var labels={S:"圧倒的に推奨",A:"強くおすすめ",B:"十分に候補",C:"検討の余地あり",D:"条件次第で可",E:"優先度低め",F:"参考候補",G:"非推奨"};
    var defaultOpen={S:true,A:true,B:true,C:false,D:false,E:false,F:false,G:false};

    /* summary */
    var html='<div class="match-summary"><div class="ms-eyebrow">RESULT — '+list.length+' TALENTS RANKED</div>'+
      '<h3 class="ms-title">Sランク <strong>'+groups.S.length+'</strong>名 ／ Aランク <strong>'+groups.A.length+'</strong>名 ／ Bランク <strong>'+groups.B.length+'</strong>名</h3>'+
      '<p class="ms-sub">条件：'+
        (state.media?'<span class="ms-tag">'+state.media+'</span>':'')+
        (state.category!=="any"?'<span class="ms-tag">'+CAT_LABEL[state.category]+'</span>':'')+
        (state.gender!=="any"?'<span class="ms-tag">'+(state.gender==="M"?"男性":"女性")+'</span>':'')+
        (state.skills.length?'<span class="ms-tag">スキル '+state.skills.length+'件</span>':'')+
        (state.hMin||state.hMax?'<span class="ms-tag">身長 '+(state.hMin||"-")+'〜'+(state.hMax||"-")+'cm</span>':'')+
        (state.rights?'<span class="ms-tag">'+RIGHTS_LABEL[state.rights]+'</span>':'')+
        (state.budget?'<span class="ms-tag">予算 '+yen(state.budget)+'</span>':'')+
      '</p></div>';

    /* legend */
    html+='<div class="match-legend">';
    ["S","A","B","C","D","E","F","G"].forEach(function(r){
      html+='<div class="ml-cell rk-'+r+'"><div class="ml-r">'+r+'</div><div class="ml-c">'+groups[r].length+'名</div></div>';
    });
    html+='</div>';

    /* grouped rank sections */
    html+='<div class="match-groups">';
    ["S","A","B","C","D","E","F","G"].forEach(function(r){
      var arr=groups[r];
      if(!arr.length)return;
      var open=defaultOpen[r]?" is-open":"";
      html+='<details class="match-group rk-'+r+open+'"'+(defaultOpen[r]?" open":"")+'>'+
        '<summary><span class="mg-r">'+r+'</span><span class="mg-label">'+labels[r]+'</span><span class="mg-count">'+arr.length+'名</span><span class="mg-fee-range">'+
          yen(Math.min.apply(null,arr.map(function(x){return x.fee})))+' 〜 '+yen(Math.max.apply(null,arr.map(function(x){return x.fee})))+
        '</span><span class="mg-icon" aria-hidden="true"></span></summary>'+
        '<div class="match-list">';
      arr.forEach(function(x){
        var m=x.m;
        html+='<a class="match-card rk-'+x.rk.r+'" href="member.html?id='+m.id+'">'+
          '<div class="mc-rank"><span>'+x.rk.r+'</span></div>'+
          '<div class="mc-photo"><img src="'+m.portrait+'" alt="" loading="lazy"></div>'+
          '<div class="mc-body">'+
            '<div class="mc-id">ADV-'+m.id+'</div>'+
            '<div class="mc-dept">'+m.dept+'</div>'+
            '<div class="mc-skills">'+(m.expertise||[]).slice(0,3).join(' · ')+'</div>'+
            '<div class="mc-meta"><span>身長 '+(m.height||'-')+'cm</span><span>経験 '+(2026-(m.joined||2024))+'年</span></div>'+
          '</div>'+
          '<div class="mc-fee"><div class="mc-fee-label">推定見積</div><div class="mc-fee-val">'+yen(x.fee)+'</div><div class="mc-fee-note">'+x.sc.toFixed(0)+' / 100 pt</div></div>'+
        '</a>';
      });
      html+='</div></details>';
    });
    html+='</div>';

    html+='<div class="match-footer"><p class="match-disc">※ 推定見積は媒体・買取条件・スキル一致度・経験年数を元にした参考値です。実際の出演料は拘束時間・撮影内容・二次使用範囲などにより変動します。正式お見積りはキャスティング担当へお問い合わせください。</p><a href="#contact" class="btn-primary match-contact">上位候補で正式見積を依頼する →</a></div>';

    RESULT.innerHTML=html;
    if(btn){btn.disabled=false;btn.classList.remove("is-loading");btn.textContent="候補を診断する →";}
    setTimeout(function(){RESULT.scrollIntoView({behavior:"smooth",block:"start"})},120);
  },180);
}

bind();
}();
