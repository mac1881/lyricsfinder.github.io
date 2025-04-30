async function getLyrics() {
    const artist = document.getElementById('artist').value.trim();
    const song = document.getElementById('song').value.trim();
    const resultDiv = document.getElementById('lyrics-result');

    if (!artist || !song) {
        resultDiv.textContent = "Please enter both artist and song title.";
        return;
    }

    resultDiv.textContent = "Loading...";

    try {
        const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
        const data = await response.json();

        if (data.lyrics) {
            resultDiv.textContent = data.lyrics;
        } else {
            resultDiv.textContent = "Lyrics not found.";
        }
    } catch (error) {
        resultDiv.textContent = "Error fetching lyrics.";
        console.error(error);
    }
}