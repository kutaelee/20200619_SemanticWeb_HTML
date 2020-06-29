window.onload = function () {

    (function () {
        header = document.getElementById('header');

        let xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                header.innerHTML = xmlhttp.responseText;
            }
        }

        xmlhttp.open("GET", "view/header.html", "true");
        xmlhttp.send();

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
