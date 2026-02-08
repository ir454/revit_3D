document.getElementById("searchBtn").onclick = async () => {
  const artist = document.getElementById("artist").value;
  const song = document.getElementById("song").value;
  const lyrics = document.getElementById("lyrics");
  const ytLink = document.getElementById("ytLink");

  if (!artist || !song) return;

  const res = await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
  const data = await res.json();

  lyrics.textContent = data.lyrics || "Lyrics not found";

  const query = encodeURIComponent(`${artist} ${song}`);
  ytLink.textContent = "Open YouTube video";
  ytLink.href = `https://www.youtube.com/results?search_query=${query}`;
};
