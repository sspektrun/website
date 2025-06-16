const canvas = document.getElementById("visualizer");
const ctx = canvas.getContext("2d");

canvas.width = 900;
canvas.height = 900;

let audioContext, analyser, source, dataArray;

// Automatically use a specific audio file without asking the user
const audio = new Audio('Assets/music/sample-beat.mp3'); // Replace with your audio file path
audio.controls = false;
audio.autoplay = true;
audio.loop = true; // Make sure the music loops
audio.play();
document.body.appendChild(audio);
setupAudioContext(audio);

        function setupAudioContext(audio) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            analyser = audioContext.createAnalyser();
            analyser.fftSize = 64; // Controls frequency resolution
            dataArray = new Uint8Array(analyser.frequencyBinCount);

            source = audioContext.createMediaElementSource(audio);
            source.connect(analyser);
            analyser.connect(audioContext.destination);

            animate();
        }

        function animate() {
            requestAnimationFrame(animate);
            analyser.getByteFrequencyData(dataArray);

            let avg = dataArray.reduce((a, b) => a + b, 0) / dataArray.length;
            let radius = Math.max(50, avg); // Change circle size based on beat

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgb(${avg * 2}, 50, 150)`;
            ctx.fill();
        }