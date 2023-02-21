let conversion = {
    apiKey: "ae426803bf798c952683e2f1ab950978",
    fetchConversion: function() {
      fetch(
        "https://api.frankfurter.app/latest?from=USD"
      )
        .then((response) => {
          if (!response.ok) {
            alert("No Exchange found.");
            throw new Error("No exchange found.");
          }
          return response.json();
        })
        .then((data) => this.displayCurr(data));
    },
    displayCurr: function (data) {
      const GBP = data.rates.GBP;
      const AUD = data.rates.AUD;
      const CAD = data.rates.CAD;
      const HUF = data.rates.HUF;
      const DKK = data.rates.DKK;
      const JPY = data.rates.JPY;
      document.querySelector(".GBP").innerText = GBP + " GBP";
      document.querySelector(".AUD").innerText = AUD + " AUD";
      document.querySelector(".CAD").innerText = CAD + " CAD";
      document.querySelector(".HUF").innerText = HUF + " HUF";
      document.querySelector(".DKK").innerText = DKK + " DKK";
      document.querySelector(".JPY").innerText = JPY + " JPY";
    },
  };
    
  conversion.fetchConversion();

  function showGBP() {
    var x = document.querySelector(".GBP");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else{
      x.style.display = "none";
    }
  }

  function showCAD() {
    var x = document.querySelector(".CAD");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else{
      x.style.display = "none";
    }
  }

  function showDKK() {
    var x = document.querySelector(".DKK");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else{
      x.style.display = "none";
    }
  }

  function hoverAUD() {
    var x = document.querySelector(".AUD");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else{
      x.style.display = "none";
    }
  }

  function hoverHUF() {
    var x = document.querySelector(".HUF");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else{
      x.style.display = "none";
    }
  }

  function hoverJPY() {
    var x = document.querySelector(".JPY");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else{
      x.style.display = "none";
    }
  }