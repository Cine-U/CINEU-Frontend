document.addEventListener("DOMContentLoaded", function() {
    const seats = document.querySelectorAll(".seat");
    const selectedSeat = document.getElementById("selected-seat");
    const cinemaSelect = document.getElementById("cinema-select");
    const priceInfo = document.getElementById("price-info");
    const price = document.getElementById("price");
  
    let selectedSeats = [];
  
    // Mengatur kursi yang telah dipilih
    seats.forEach(seat => {
     
      seat.addEventListener("click", function() {
        if (!seat.classList.contains("sold")) {
          seat.classList.toggle("selected");
          const seatNumber = seat.textContent;
          const index = selectedSeats.indexOf(seatNumber);
  
          if (index > -1) {
            selectedSeats.splice(index, 1);
          } else {
            selectedSeats.push(seatNumber);
          }
  
          selectedSeat.textContent = selectedSeats.join(", ");
          calculatePrice();
        }
      });
    });
  
    // Menghitung total harga berdasarkan tipe bioskop dan jumlah kursi yang dipilih
    function calculatePrice() {
      const cinemaType = cinemaSelect.value;
      const seatCount = selectedSeats.length;
      let ticketPrice = 50000;

  
      const totalPrice = ticketPrice * seatCount;
      price.textContent = formatCurrency(totalPrice);
    }
     // Fungsi untuk mengubah angka menjadi format mata uang dengan pemisah ribuan
    function formatCurrency(amount) {
    return amount.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
  }
    // Menangani perubahan tipe bioskop
    cinemaSelect.addEventListener("change", function() {
      calculatePrice();
    });
  });