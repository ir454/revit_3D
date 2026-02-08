document.getElementById("searchBtn").onclick = async () => {
  const artist = document.getElementById("artist").value;
  const song = document.getElementById("song").value;
  const lyrics = document.getElementById("lyrics");

  if (!artist || !song) {
    lyrics.textContent = "Enter artist and song.";
    return;
  }

  lyrics.textContent = "Loading...";

  try {
    const res = await fetch(
      `https://lrclib.net/api/get?artist_name=${encodeURIComponent(artist)}&track_name=${encodeURIComponent(song)}`
    );

    if (!res.ok) throw new Error("Request failed");

    const data = await res.json();

    lyrics.textContent =
      data.plainLyrics ||
      data.syncedLyrics ||
      "Lyrics not found.";

  } catch (err) {
    lyrics.textContent = "Error fetching lyrics.";
  }
};
