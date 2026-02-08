document.getElementById("searchBtn").onclick = async () => {
  const artist = document.getElementById("artist").value;
  const song = document.getElementById("song").value;
  const lyrics = document.getElementById("lyrics");

  if (!artist || !song) {
    lyrics.textContent = "Please enter both artist and song.";
    return;
  }

  const res = await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
  const data = await res.json();
  lyrics.textContent = data.lyrics || "Lyrics not found";
};
