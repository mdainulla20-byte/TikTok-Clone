// Firebase Configuration Placeholder
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

// Google Login
function loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then((result) => {
            document.getElementById('auth-modal').classList.add('hidden');
            document.getElementById('main-app').classList.remove('hidden');
            initVideos();
        })
        .catch((error) => {
            alert("Guest Mode Activated");
            guestLogin();
        });
}

// Guest Login
function guestLogin() {
    document.getElementById('auth-modal').classList.add('hidden');
    document.getElementById('main-app').classList.remove('hidden');
    initVideos();
}

// Like Button
function likeVideo(element) {
    element.classList.toggle('liked');
}

// Play/Pause Video on Scroll
function initVideos() {
    const videos = document.querySelectorAll('.video-player');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.play().catch(()=>{});
            } else {
                entry.target.pause();
            }
        });
    }, { threshold: 0.6 });

    videos.forEach(video => {
        observer.observe(video);
        video.addEventListener('click', () => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });
    });
}
