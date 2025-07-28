+++
title = "Dogeathon Hackathons"
date = "2022-11-01"
aliases = ["dogeathon"]
draft = false

[_build]
  render = "false"
  list = "false" 
+++
<style>
body {
    background-color: #000 !important;
    color: #fff !important;
}
strong{
  color: #fff !important;
}
.card-button-hackathon{
 border-radius: 25px;
}
button, .button, a.button{
 margin-bottom: 0px;
}
.video-btn{
  background-color: transparent;
  color: #fff;
  float: right;
}
.video-btn:hover{
  background-color: transparent !important;
  color: #C18C37 !important;
  float: right;
}
</style>

<!-- Your existing cards -->
<div class="card-row-hackathon">
  <div class="card-hackathon">
    <a href="/dogeathon-2025"><img src="/assets/images/dogeathon-2025.png" height="auto" width="100%" alt="..." /></a>
    <div style="background-color: #444; margin-bottom: 5px; text-align: center; border-radius: 0px">Closed. Very Success</div>     
    <div class="card-body-hackathon"> 
      <h2 class="comic-neue" style="font-weight: bold; margin: 0;">Ericeira, Portugal</h2>
      <p><strong>Date:</strong> July 22–24, 2025</p>
      <div style="gap: 10px;">
        <a href="/dogeathon-2025" class="btn card-button-hackathon"><i class="fa-solid fa-eye"></i> View</a> 
        <!--<button class="btn card-button-hackathon video-btn" data-event="2025" style="align:rigth"><i class="fa-brands fa-youtube"></i> Videos</button>-->
      </div>
    </div>
  </div>

  <div class="card-hackathon">
    <a href="/dogeathon-2022"><img src="/assets/images/dogeathon-2022.png" height="auto" width="100%" alt="..." /></a>
    <div style="background-color: #444; margin-bottom: 5px; text-align: center; border-radius: 0px">Closed. Very Success</div>         
    <div class="card-body-hackathon"> 
      <h2 class="comic-neue" style="font-weight: bold; margin: 0;">Victoria, Australia</h2>
      <p><strong>Date:</strong> November 15–19, 2022</p> 
      <div style="gap: 10px;">
        <a href="/dogeathon-2022" class="btn card-button-hackathon"><i class="fa-solid fa-eye"></i> View</a>
        <button class="btn card-button-hackathon video-btn" data-event="2022"><i class="fa-brands fa-youtube"></i> Videos</button>
      </div>
    </div>
  </div>
</div>


<div id="videoModal" class="modal" style="display:none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.7); z-index: 1000;">
  <div class="modal-content" style="background: #201F1D; margin: 50px auto; padding: 20px; width: 90%; max-width: 700px; max-height: 80vh; overflow-y: auto; border-radius: 10px; position: relative;">
    <button id="closeModal" style="position: absolute; top: 10px; right: 10px;">✖</button>
    <div id="videoList">
      <!-- YouTube videos will be loaded here -->
    </div>
  </div>
</div>


<script>
  const videosByEvent = {
    "2025": [
      "https://www.youtube.com/embed/_KVZmS_UO5I"
    ],
    "2022": [
      "https://www.youtube.com/embed/lovEHh0c_04",
      "https://www.youtube.com/embed/pwA74vHkpT0",
      "https://www.youtube.com/embed/GpnfQiTIqPM",
      "https://www.youtube.com/embed/r6iUNSn4l-0",
      "https://www.youtube.com/embed/0EoSlcUN8PU",
      "https://www.youtube.com/embed/67-AOlBiLLs",
      "https://www.youtube.com/embed/jAShj-sZI-s",
      "https://www.youtube.com/embed/_sSbXCh1Z14"
    ]
  };

  document.querySelectorAll('.video-btn').forEach(button => {
    button.addEventListener('click', () => {
      const eventId = button.getAttribute('data-event');
      const videoList = document.getElementById('videoList');
      videoList.innerHTML = '';

      const videos = videosByEvent[eventId] || [];

      videos.forEach(url => {
        const iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.width = "100%";
        iframe.height = "315";
        iframe.frameBorder = "0";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;
        iframe.style.marginBottom = "20px";
        videoList.appendChild(iframe);
      });

      document.getElementById('videoModal').style.display = 'block';
    });
  });

  document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('videoModal').style.display = 'none';
    document.getElementById('videoList').innerHTML = '';
  });

  window.addEventListener('click', (e) => {
    if (e.target.id === 'videoModal') {
      document.getElementById('videoModal').style.display = 'none';
      document.getElementById('videoList').innerHTML = '';
    }
  });
</script>

