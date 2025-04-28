// filepath: /password-protected-website/password-protected-website/src/script.js

const correctPassword = "tone"; // パスワードを設定

document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault(); // フォームのデフォルト動作を防ぐ
    const userInput = document.getElementById("password").value;

    if (userInput === correctPassword) {
        document.getElementById("passwordForm").style.display = "none";
        document.getElementById("message").style.display = "none";
        document.getElementById("mainHeading").innerText = "曜日を選択してください";
        document.getElementById("daysContainer").style.display = "block";
    } else {
        document.getElementById("message").innerText = "パスワードが間違っています。もう一度お試しください。";
        document.getElementById("message").style.color = "red";
    }
});