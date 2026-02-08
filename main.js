document.getElementById("searchBtn").onclick = async () => {
  const artist = document.getElementById("artist").value;
  const song = document.getElementById("song").value;
  const lyrics = document.getElementById("lyrics");
  const video = document.getElementById("video");

  if (!artist || !song) return;

  const res = await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
  const data = await res.json();

  lyrics.textContent = data.lyrics || "Lyrics not found";

  const query = encodeURIComponent(`${artist} ${song}`);
  video.src = `https://www.youtube.com/embed/videoseries?listType=search&list=${query}`;
};
