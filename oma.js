// Fetch JSON data from the Mocky service
fetch('https://run.mocky.io/v3/c2ab10c6-caa6-49a1-aafd-efaf46c0a793')
    .then(function (response) {
    // Muunnetaan vastaus JSON-muotoon
    return response.json(); 
    })
    // Käsitellään muunnettu (eli JSON muotoinen) vastaus
    .then(function (responseJson) {
        // Kutsutaan funktiota ja välitetään sille json-vastaus
        kerro(responseJson);
        })
        
        // Jos tuli jokin virhe
        .catch(function (error) {document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
        })
    function kerro(data){
        var teksti = ""; // määritellään muuttuja, johon tulostettava tieto kerätään
        
        // otsikkotiedon hakeminen ja sijoittaminen h1-elementtiin
        teksti = "<h1>" + data.otsikko + "</h1>";

        // tähän tulee muiden tietojen käsittely kohta
        
        teksti = teksti + "<p>" + data.kuvaus + "</p>";
        teksti = teksti + "<p><img src='" + data.kuva + "'alt='kuva' ></p>";
        teksti = teksti + "<h3>Opintojakso " + data.opintojakso.nimi + " " + data.opintojakso.tunnus + " " + data.opintojakso.opintopisteet + " op" + "</h3>";
        
        // For-lause sisällön hakemiseen
        for (var i = 0; i < data.opintojakso.sisalto.length; i++) {
            teksti += "<li>" + data.opintojakso.sisalto[i] + "</li>";
        }
        teksti += "</ul>";

        //tekniikat-tiedon haku
        teksti = teksti + "<h3>Linkit</h3>";
        for (var i = 0; i < data.tekniikat.length; i++) {
            teksti = teksti + "<li>" + data.tekniikat[i].aihe + ": <a href='" + data.tekniikat[i].linkki + "'>" + data.tekniikat[i].linkki + "</a>";
        }

        teksti += "</ul>";

        
        // teksti-muuttujan sisällön tulostus
        document.getElementById("vastaus").innerHTML = teksti;
    }
        
