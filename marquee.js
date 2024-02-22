const callsign = "ne5gg";
const updateInterval = 5000; // Update every 5 seconds (adjust as needed)

function fetchCallsignReports() {
  const url = `https://db1.wspr.live/?query=SELECT * FROM wspr.rx WHERE callsign='${callsign}' LIMIT 10 FORMAT JSONCompact`;

  fetch(url)
    .then(function (data) {
      if (data.ok) {
        return data.json();
      } else {
        return data.text().then(text => Promise.reject(new Error("Request error: " + text)));
      }
    })
    .then(jso => {
      // Process and display the retrieved data
      updateMarquee(jso);
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
}

function updateMarquee(data) {
  const marqueeElement = document.querySelector(".marquee");
  let message = "";

  if (data && data.length > 0) {
    const latestReport = data[0];
    message = `Callsign ${latestReport.callsign} heard at location ${latestReport.locator} with signal strength ${latestReport.snr}.`;
  } else {
    message = "No recent reports found.";
  }

  marqueeElement.textContent = message;
}

// Initial fetch and start periodic updates
fetchCallsignReports();
setInterval(fetchCallsignReports, updateInterval);