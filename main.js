document.getElementById("searchBtn").onclick = async () => {
  const artist = document.getElementById("artist").value;
  const song = document.getElementById("song").value;
  const lyricsBox = document.getElementById("lyrics");

  if (!artist || !song) return;

  lyricsBox.textContent = "Loading...";

  try {
    const res = await fetch(
      `https://lrclib.net/api/search?track_name=${encodeURIComponent(song)}&artist_name=${encodeURIComponent(artist)}`
    );
    const data = await res.json();

    const lyrics =
      data?.[0]?.plainLyrics ||
      data?.[0]?.syncedLyrics ||
      "Lyrics not found";

    lyricsBox.textContent = lyrics;
  } catch {
    lyricsBox.textContent = "Error fetching lyrics.";
  }
};
