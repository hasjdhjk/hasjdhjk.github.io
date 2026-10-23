document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{const category=button.dataset.filter;document.querySelectorAll('.filter').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));let count=0;document.querySelectorAll('.project-card').forEach(card=>{card.hidden=category!=='all'&&card.dataset.category!==category;if(!card.hidden)count++});const status=document.getElementById('filter-status');if(status)status.textContent=`Showing ${count} projects`;}));
const lightbox=document.getElementById('figure-dialog');if(lightbox){let trigger;document.querySelectorAll('.image-button').forEach(button=>button.addEventListener('click',()=>{trigger=button;const source=button.querySelector('img');lightbox.querySelector('img').src=source.src;lightbox.querySelector('img').alt=source.alt;lightbox.querySelector('.lightbox-caption').textContent=button.closest('figure').querySelector('figcaption')?.textContent||source.alt;lightbox.showModal();}));lightbox.querySelector('.lightbox-close').addEventListener('click',()=>lightbox.close());lightbox.addEventListener('click',e=>{if(e.target===lightbox){const r=lightbox.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)lightbox.close()}});lightbox.addEventListener('close',()=>trigger?.focus());}
const gameVideos=[...document.querySelectorAll('video[data-autoplay]')];
const motionPreference=window.matchMedia('(prefers-reduced-motion: reduce)');
let videosEnabled=!motionPreference.matches;
const videoToggle=document.querySelector('.video-toggle');
const videoStates=new Map(gameVideos.map(video=>[video,{visible:false,userPaused:false,automaticPause:false}]));
function loadGameVideo(video){const source=video.querySelector('source[data-src]');if(source&&!source.src){source.src=source.dataset.src;video.load();}}
function pauseGameVideo(video){if(!video.paused){videoStates.get(video).automaticPause=true;video.pause();}}
function playGameVideo(video){loadGameVideo(video);video.play().catch(()=>{});}
function updateVideoToggle(){if(videoToggle){videoToggle.textContent=videosEnabled?'Pause all videos':'Play videos';videoToggle.setAttribute('aria-pressed',String(!videosEnabled));}}
function syncGameVideos(){gameVideos.forEach(video=>{const state=videoStates.get(video);if(state.visible&&videosEnabled&&!state.userPaused&&!document.hidden)playGameVideo(video);else pauseGameVideo(video);});}
if(gameVideos.length){
 gameVideos.forEach(video=>{video.defaultMuted=true;video.muted=true;video.addEventListener('pause',()=>{const state=videoStates.get(video);if(state.automaticPause){state.automaticPause=false;return;}if(state.visible&&videosEnabled&&!document.hidden)state.userPaused=true;});video.addEventListener('play',()=>{videoStates.get(video).userPaused=false;});});
 if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{const state=videoStates.get(entry.target);state.visible=entry.isIntersecting;});syncGameVideos();},{threshold:0.12});gameVideos.forEach(video=>observer.observe(video));}
 else{gameVideos.forEach(video=>videoStates.get(video).visible=true);syncGameVideos();}
 videoToggle?.addEventListener('click',()=>{videosEnabled=!videosEnabled;if(videosEnabled)gameVideos.forEach(video=>videoStates.get(video).userPaused=false);updateVideoToggle();syncGameVideos();});
 document.addEventListener('visibilitychange',syncGameVideos);
 motionPreference.addEventListener('change',()=>{videosEnabled=!motionPreference.matches;updateVideoToggle();syncGameVideos();});
 updateVideoToggle();
}
