// Firebase Config placeholder (Replace with your Firebase Project details)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

// Google Sign-In Function
function loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            document.getElementById('user-avatar-side').src = user.photoURL || 'https://via.placeholder.com/50';
            document.getElementById('video-author').innerText = '@' + (user.displayName ? user.displayName.toLowerCase().replace(/\s+/g, '') : 'user');
            
            document.getElementById('auth-modal').classList.add('hidden');
            document.getElementById('main-app').classList.remove('hidden');
        })
        .catch((error) => {
            console.error("Login Error:", error);
            alert("Google Sign-in popup closed or restricted on mobile browser. Continuing as Guest.");
            guestLogin();
        });
}

// Guest Login
function guestLogin() {
    document.getElementById('auth-modal').classList.add('hidden');
    document.getElementById('main-app').classList.remove('hidden');
}

// Like Button Toggle
function likeVideo(element) {
    element.classList.toggle('liked');
    let span = element.querySelector('span');
    if (element.classList.contains('liked')) {
        span.innerText = '124.6K';
    } else {
        span.innerText = '124.5K';
    }
}

// Auto play/pause when swiping
document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('.video-player');
    if(video) {
        video.play().catch(() => {});
    }
});
