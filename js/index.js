window.onload = function () {

    (function () {
        header=document.getElementById('header');
        
        let xmlhttp = new XMLHttpRequest();
         xmlhttp.open("GET", "../html/header.html", "true");
         xmlhttp.send();
        header.append(xmlhttp)
    }());

    // 비디오 재생,일시정지 토글
    document.getElementById('video-cover').onclick = () => {
        const video = document.getElementById('index-video');
        if (video.className == 'stop') {
            video.className = 'play';
            video.play();
        } else {
            video.className = 'stop';
            video.pause();
        }

    }
}
