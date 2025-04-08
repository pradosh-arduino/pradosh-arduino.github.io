function getDNSInfo() {
    fetch('http://edns.ip-api.com/json')
        .then(response => response.json())
        .then(data => {
            var infoHTML = '';
            try{
                infoHTML = `
                <h3>DNS :</h3>
                <p><b>&nbsp;&nbsp;IP Address:</b> ${data.dns.ip || 'Unavailable'}</p>
                <p><b>&nbsp;&nbsp;Geolocation:</b> ${data.dns.geo || 'Unavailable'}</p>
                <h3>eDNS :</h3>
                <p><b>&nbsp;&nbsp;IP Address:</b> ${data.edns.ip || 'Unavailable'}</p>
                <p><b>&nbsp;&nbsp;Geolocation:</b> ${data.edns.geo || 'Unavailable'}</p>`;
            }catch(error){
                console.warn('eDNS not found. refer : ', error);
                infoHTML = `
                <h3>DNS :</h3>
                <p><b>&nbsp;&nbsp;IP Address:</b> ${data.dns.ip || 'Unavailable'}</p>
                <p><b>&nbsp;&nbsp;Geolocation:</b> ${data.dns.geo || 'Unavailable'}</p>`;
            }
            document.getElementById('dnsInfo').innerHTML = infoHTML;

        })
        .catch(error => {
            console.error('Error fetching DNS information:', error);
            document.getElementById('dnsInfo').innerHTML = '<p>Error fetching data.</p>';
        });
}

getDNSInfo();