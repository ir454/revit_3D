const searchBtn = document.getElementById("searchBtn");
const lyricsDiv = document.getElementById("lyrics");

searchBtn.addEventListener("click", async () => {
  const artist = document.getElementById("artist").value.trim();
  const song = document.getElementById("song").value.trim();

  if (!artist || !song) {
    lyricsDiv.textContent = "Please enter both an artist and a song title.";
    return;
  }

  lyricsDiv.textContent = "Loading lyrics...";

  try {
    const response = await fetch(
      `https://api.lyrics.ovh/v1/${artist}/${song}`
    );

    const data = await response.json();

    if (data.lyrics) {
      lyricsDiv.textContent = data.lyrics;
    } else {
      lyricsDiv.textContent = "Lyrics not found.";
    }
  } catch (error) {
    lyricsDiv.textContent = "Error fetching lyrics. Please try again later.";
    console.error(error);
  }
});
