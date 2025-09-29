function hitung(op) {
      let angka1 = parseFloat(document.getElementById("angka1").value);
      let angka2 = parseFloat(document.getElementById("angka2").value);
      let hasilBox = document.getElementById("hasil");
      let hasil;

      if (isNaN(angka1) || isNaN(angka2)) {
        hasilBox.innerText = "Error!";
        hasilBox.style.color = "red";
        return;
      }

      switch(op) {
        case '+':
          hasil = angka1 + angka2;
          break;
        case '-':
          hasil = angka1 - angka2;
          break;
        case '*':
          hasil = angka1 * angka2;
          break;
        case '/':
          if (angka2 === 0) {
            hasilBox.innerText = "Error!";
            hasilBox.style.color = "red";
            return;
          }
          hasil = angka1 / angka2;
          break;
      }

      if (hasil === 0) {
        hasilBox.innerText = "Error!";
        hasilBox.style.color = "red";
      } else {
        hasilBox.innerText = hasil;
        hasilBox.style.color = "#222";
      }
    }