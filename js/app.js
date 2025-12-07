const songs = [
    { name: "逆光", singer: "林宥嘉" },
    { name: "句號", singer: "鄧紫棋" },
    { name: "光年之外", singer: "鄧紫棋" },
    { name: "赤伶", singer: "HITA" },
    { name: "River", singer: "Bishop Briggs" }
];

const listEl = document.getElementById("songList");

listEl.innerHTML = songs.map(s => `
    <div class="song-item">
        <div class="song-title">${s.name}</div>
        <div class="song-singer">${s.singer}</div>
    </div>
`).join("");

document.getElementById("randomBtn").addEventListener("click", () => {
    const s = songs[Math.floor(Math.random() * songs.length)];

    document.getElementById("resultName").innerText = s.name;
    document.getElementById("resultSinger").innerText = s.singer;

    document.getElementById("resultBox").classList.remove("hidden");
});

document.getElementById("closeResult").addEventListener("click", () => {
    document.getElementById("resultBox").classList.add("hidden");
});