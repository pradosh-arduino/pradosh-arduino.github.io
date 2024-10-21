function getIPInfo() {
  const infoDiv = document.getElementById("ipInfo");

  fetch(`http://ip-api.com/json/`)
    .then(response => response.json())
    .then(data => {
      if (data.status === 'success') {
        const infoHTML = `
          <p><b>IP Address:</b> ${data.query || 'Unavailable'}</p>
          <p><b>Continent:</b> ${data.continent || 'Unavailable'}</p>
          <p><b>Country:</b> ${data.country || 'Unavailable'}</p>
          <p><b>Country Code:</b> ${data.countryCode || 'Unavailable'}</p>
          <p><b>City:</b> ${data.city || 'Unavailable'}</p>
          <p><b>District:</b> ${data.district || 'Unavailable'}</p>
          <p><b>Zip Code:</b> ${data.zip || 'Unavailable'}</p>
          <p><b>Region:</b> ${data.region || 'Unavailable'}</p>
          <p><b>Region Name:</b> ${data.regionName || 'Unavailable'}</p>
          <p><b>Latitude:</b> ${data.lat || 'Unavailable'}</p>
          <p><b>Longitude:</b> ${data.lon || 'Unavailable'}</p>
          <p><b>Timezone:</b> ${data.timezone || 'Unavailable'}</p>
          <p><b>Organization:</b> ${data.org || 'Unavailable'}</p>
          <p><b>ISP:</b> ${data.isp || 'Unavailable'}</p>
          <p><b>Mobile (Hotspot):</b> ${data.mobile || 'Unavailable'}</p>
          <p><b>Proxy:</b> ${data.proxy || 'Unavailable'}</p>
          <p><b>Hosting:</b> ${data.hosting || 'Unavailable'}</p>`;

          infoDiv.innerHTML = infoHTML;
      } else {
        console.error('Error:', data.message);
        infoDiv.innerHTML = '<p>Failed to retrieve IP information.</p>';
      }
    })
    .catch(error => {
      console.error('Network error:', error);
      infoDiv.innerHTML = '<p>Network error. Please try again later.</p>';
    });
}

getIPInfo();