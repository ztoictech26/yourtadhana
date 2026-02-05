function goToProfile() {
    const input = document.getElementById("nameInput").value.trim().toLowerCase();
    const message = document.getElementById("message");

    const profileMap = {
        "john lester": "https://www.facebook.com/media/set/?set=a.105051247626905&type=3",
        "john wayne": "https://www.facebook.com/altheamillandiane.anilao.7",
        "althea": "https://www.facebook.com/johnwayne.bigsat",
        "ismar": "https://www.facebook.com/yskajhdee",
        "myka": "https://www.facebook.com/ismar.genodia.2024",
        "troy": "https://www.facebook.com/tsegura.x",
        "edmar": "https://www.facebook.com/profile.php?id=100087624863597",
        "kenneth": "https://www.facebook.com/hershelyn.debel"
    };

    if (profileMap[input]) {
        window.location.href = profileMap[input];
    } else {
        message.textContent = "No Facebook link found for this name.";
    }
}
