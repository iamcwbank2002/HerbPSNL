function handleSearch(event) {
    event.preventDefault(); // ป้องกันการรีเฟรชหน้า
    const keyword = document.getElementById('searchText').value.toLowerCase();
  
    // รายการสมุนไพร (ตัวอย่าง)
    const herbs = {
      "กระชาย": "product1.html",
      "ขิง": "product2.html",
      "ข่า": "product3.html",
      "เถาวัลย์เปรียง": "products.html",
      "กระเจี๊ยบแดง": "product5.html",
      "กระวาน": "product6.html",
      "ขมิ้นชัน": "product7.html",
      "กะเพรา": "product8.html"
    };
  
    // ค้นหาสมุนไพร
    if (herbs[keyword]) {
      window.location.href = herbs[keyword]; // เปลี่ยนเส้นทางไปยังหน้าที่ตรงกัน
    } else {
      alert("ไม่พบสมุนไพรที่คุณค้นหา : ${keyword}");
    }
  }