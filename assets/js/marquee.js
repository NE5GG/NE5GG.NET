const callsign = "ne5gg";
const marqueeElement = document.querySelector(".marquee");

async function fetchReport() {
  const url = `https://ne5gg.net/wsprreport`; // Replace with your Worker route
  const response = await fetch(url);

  if (!response.ok) {
    console.error("Error fetching data:", response.statusText);
    return;
  }

  const data = await response.json();

  if (data) {
    marqueeElement.textContent = `Callsign: ${data.callsign}, Location: ${data.locator}, Signal Strength: ${data.snr}`;
  } else {
    marqueeElement.textContent = "No recent reports found.";
  }
}

fetchReport();
setInterval(fetchReport, 60000000); // Update every 60 seconds (adjust as needed)
