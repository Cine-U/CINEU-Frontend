function generateVirtualAccountNumber() {
    // Generate virtual account number
    var virtualAccountNumber = "122081388263193";
  
    // Update virtual account no
    document.getElementById("virtualAccountNumber").textContent = virtualAccountNumber;
  }
  
  function startVirtualAccountTimer() {
    // timer (detik)
    var duration = 60; // 1 menit
  
    // Update timer setiap detik
    var timer = setInterval(function() {
      var minutes = Math.floor(duration / 60);
      var seconds = duration % 60;
  
      // Format timer
      var formattedTime = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
  
      // Update virtual account timer element
      document.getElementById("virtualAccountTimer").textContent = formattedTime;
  
      // durasi
      duration--;
  
      // Jika timer = 0 , stop timer
      if (duration < 0) {
        clearInterval(timer);
        // message
        document.getElementById("virtualAccountTimer").textContent= "Waktu pembayaran habis!";
        //document.getElementById("virtualAccountButton").textContent = "Selesai";
        // ...
      }
    }, 1000);
  }

  function generateVAMandiri_Number() {
    // Generate virtual account number
    var vaMandiri_Number = "133081388263193";
  
    // Update virtual account no
    document.getElementById("vaMandiri_Number").textContent = vaMandiri_Number;
  }

  function startVAMandiri_Timer() {
    // timer (detik)
    var duration = 60; // 1 menit
  
    // Update timer setiap detik
    var timer = setInterval(function() {
      var minutes = Math.floor(duration / 60);
      var seconds = duration % 60;
  
      // Format timer
      var formattedTime = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
  
      // Update virtual account timer element
      document.getElementById("vaMandiri_Timer").textContent = formattedTime;
  
      // durasi
      duration--;
  
      // Jika timer = 0 , stop timer
      if (duration < 0) {
        clearInterval(timer);
        // message
        document.getElementById("vaMandiri_Timer").textContent= "Waktu pembayaran habis!";
        // ...
      }
    }, 1000);
  }
  function bayarGoPay() {
    // input nomor gopay
    var goPayNumber = prompt("Masukkan nomor GoPay:");
  
    // validasi nomor gopay
    if (goPayNumber) {
      // Update nomor GoPay 
      document.getElementById("goPayNumber").textContent = goPayNumber;
  
      // mulai GoPay timer
      startGoPayTimer();
    } else {
      // kalau gopay tidak valid
      alert("Nomor GoPay tidak valid atau dibatalkan.");
    }
  }
  
  function startGoPayTimer() {
    // Stimer (detik)
    var duration = 60; // 1 menit
  
    // Update timer setiap detik
    var timer = setInterval(function() {
      var minutes = Math.floor(duration / 60);
      var seconds = duration % 60;
  
      // Format timer
      var formattedTime = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
  
      // Update timer GoPay timer 
      document.getElementById("goPayTimer").textContent = formattedTime;
  
      // durasi
      duration--;
  
      // Jika timer = 0 , stop timer
      if (duration < 0) {
        clearInterval(timer);
        // message
        document.getElementById("goPayTimer").textContent= "Waktu pembayaran habis!";
        document.getElementById("goPayButton").textContent = "Selesai";
        // ...
      }
    }, 1000);
  }

  function bayarOVO() {
    // input nomor OVO
    var ovoNumber = prompt("Masukkan nomor OVO:");
  
    // Validasi nomor ovo
    if (ovoNumber) {
      // Update nomor Dana 
      document.getElementById("ovoNumber").textContent = ovoNumber;
  
      // mulai timer OVO
      startOVOTimer();
    } else {
      // jika nomor OVO tidak valid
      alert("Nomor OVO tidak valid atau dibatalkan.");
    }
  }
  
  function startOVOTimer() {
    // timer (detik)
    var duration = 60; // 1 menit
  
    // Update timer setiap detik
    var timer = setInterval(function() {
      var minutes = Math.floor(duration / 60);
      var seconds = duration % 60;
  
      // Format timer
      var formattedTime = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
  
      // Update timer OVO
      document.getElementById("ovoTimer").textContent = formattedTime;
  
      // durasi
      duration--;
  
      // Jika timer = 0 , stop timer
      if (duration < 0) {
        clearInterval(timer);
        // message
        document.getElementById("ovoTimer").textContent= "Waktu pembayaran habis!";
        document.getElementById("ovoButton").textContent = "Selesai";
        // ...
      }
    }, 1000);
  }

  function bayarDANA() {
    // Get the Dana number from user input
    var danaNumber = prompt("Masukkan nomor DANA:");
  
    // Validate the input
    if (danaNumber) {
      // Update the GoPay number element
      document.getElementById("danaNumber").textContent = danaNumber;
  
      // Start the OVO timer
      startDANATimer();
    } else {
      // Handle invalid input or cancellation
      alert("Nomor DANA tidak valid atau dibatalkan.");
    }
  }
  function startDANATimer() {
    // timer (detik)
    var duration = 60; // 1 menit
  
    // Update timer setiap detik
    var timer = setInterval(function() {
      var minutes = Math.floor(duration / 60);
      var seconds = duration % 60;
  
      // Format timer
      var formattedTime = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
  
      // Update timer OVO
      document.getElementById("danaTimer").textContent = formattedTime;
  
      // durasi
      duration--;
  
      // Jika timer = 0 , stop timer
      if (duration < 0) {
        clearInterval(timer);
        // message
        document.getElementById("danaTimer").textContent= "Waktu pembayaran habis!";
        document.getElementById("danaButton").textContent = "Selesai";
        // ...
      }
    }, 1000);
  }
  // Generate nomor virtual account  dan mulai loading page
  window.onload = function() {
    generateVirtualAccountNumber();
    startVirtualAccountTimer();
    generateVAMandiri_Number();
    startVAMandiri_Timer();
  };
  
  
