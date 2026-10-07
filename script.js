// Function to handle sending OTP
function sendOTP() {
    const phoneNumber = document.getElementById('phone-number').value;
    
    if (phoneNumber.length < 11) {
        alert('দয়া করে সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন।');
        return;
    }

    // Hide login card and show OTP card
    document.getElementById('login-card').classList.add('hidden');
    document.getElementById('otp-card').classList.remove('hidden');

    alert('আপনার ' + phoneNumber + ' নম্বরে একটি টেস্ট ওটিপি পাঠানো হয়েছে। (উদাহরণ: 1234)');
}

// Function to handle verifying OTP
function verifyOTP() {
    const otpInput = document.getElementById('otp-input').value;

    if (otpInput.length !== 4) {
        alert('দয়া করে ৪ ডিজিটের ওটিপি কোড দিন।');
        return;
    }

    // Demo check: assuming 1234 is valid or any 4 digits
    document.getElementById('otp-card').classList.add('hidden');
    document.getElementById('feed-card').classList.remove('hidden');

    alert('লগইন সফল হয়েছে!');
}
