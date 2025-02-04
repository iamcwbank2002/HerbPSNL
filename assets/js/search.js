// ข้อมูล URL ของหน้าต่างๆ และสมุนไพรที่อยู่ในแต่ละหน้า
const herbPages = {
    'กระชาย': 'product1.html',
    'กระถิน': 'product2.html',
    'กระบก': 'product3.html',
    'กระวาน': 'product4.html',
    'กระเจี๊ยบแดง': 'product5.html',
    'กระเทียม': 'product6.html',
    'กะทกรก': 'product7.html',
    'กะเพรา': 'product8.html',
    'กันเกรา': 'product9.html',
    'กานพลู': 'product10.html',
    'กาหลง': 'product11.html',
    'ขมิ้นขัน': 'product12.html',
    'ขิง': 'product13.html',
    'ข่า': 'product14.html',
    'คว่ำตายหงายเป็น': 'product15.html',
    'คำฝอย': 'product16.html',
    'ชงโค': 'product17.html',
    'ชะพลู': 'product18.html',
    'ชะมวง': 'product19.html',
    'ชะเอมเทศ': 'product20.html',
    'ดอกแค': 'product21.html',
    'ดีปลี': 'product22.html',
    'ตะไคร้': 'product23.html',
    'บอระเพ็ด': 'product24.html',
    'บัวบก': 'product25.html',
    'ปีบ': 'product26.html',
    'ผักกูด': 'product27.html',
    'ผักปลัง': 'product28.html',
    'ผักแพว': 'product29.html',
    'ผักแว่น': 'product30.html',
    'พลับผลึงดอกขาว': 'product31.html',
    'ฟ้าทะลายโจร': 'product32.html',
    'มะกรูด': 'product33.html',
    'มะกอก': 'product34.html',
    'มะขามป้อม': 'product35.html',
    'มะตูม': 'product36.html',
    'มะม่วงหาวมะนาวโห่': 'product37.html',
    'มะระขี้นก': 'product38.html',
    'มะรุม': 'product39.html',
    'มะหาด': 'product40.html',
    'มะอึก': 'product41.html',
    'มะเดื่อปล้อง': 'product42.html',
    'มะแขว่น': 'product43.html',
    'มะแว้งเครือ': 'product44.html',
    'ย่านาง': 'product45.html',
    'รางจืด': 'product46.html',
    'ลูกยอ': 'product47.html',
    'ลูกใต้ใบ': 'product48.html',
    'ว่านกาบหอย': 'product49.html',
    'ว่านธรณีสาร': 'product50.html',
    'ว่านหางจระเข้': 'product51.html',
    'สมอไทย': 'product52.html',
    'สะระแหน่': 'product53.html',
    'สะเดา': 'product54.html',
    'ส้มป่อย': 'product55.html',
    'ส้มแขก': 'product56.html',
    'หญ้าดอกขาว': 'product57.html',
    'หญ้าหนวดแมว': 'product58.html',
    'หมามุ่ย': 'product59.html',
    'หอมแดง': 'product60.html',
    // เพิ่มรายการสมุนไพรและ URL ตามต้องการ
};

// ฟังก์ชันสำหรับการค้นหาแบบ Real-time (เฉพาะกรองในหน้าปัจจุบัน)
function handleRealTimeSearch(event) {
    const keyword = event.target.value.toLowerCase();
    const items = document.querySelectorAll('.trending-items');
    
    items.forEach(item => {
        const title = item.querySelector('.down-content h4').innerText.toLowerCase();
        const isMatch = title.includes(keyword);
        item.style.display = isMatch ? '' : 'none';
    });
}

// ฟังก์ชันสำหรับจัดการการส่งฟอร์มค้นหา
function handleSearchSubmit(event) {
    event.preventDefault();
    
    const keyword = document.getElementById('searchText').value.toLowerCase();
    const items = document.querySelectorAll('.trending-items');
    let foundInCurrentPage = false;
    let foundInOtherPage = false;
    
    // ค้นหาในหน้าปัจจุบัน
    items.forEach(item => {
        const title = item.querySelector('.down-content h4').innerText.toLowerCase();
        const isMatch = title.includes(keyword);
        
        if (isMatch) {
            item.style.display = '';
            foundInCurrentPage = true;
        } else {
            item.style.display = 'none';
        }
    });
    
    // ถ้าไม่พบในหน้าปัจจุบัน ค้นหาในหน้าอื่น
    if (!foundInCurrentPage) {
        for (const [herb, url] of Object.entries(herbPages)) {
            if (herb.toLowerCase().includes(keyword)) {
                foundInOtherPage = true;
                if (confirm(`พบสมุนไพร "${herb}" ในหน้าอื่น ต้องการไปที่หน้านั้นหรือไม่?`)) {
                    window.location.href = url;
                    return;
                }
                break;
            }
        }
        
        // แสดง alert ถ้าไม่พบผลลัพธ์ทั้งหมด
        if (!foundInOtherPage) {
            alert('ไม่พบสมุนไพรที่ค้นหา');
        }
    }
}

// เพิ่ม Event Listeners
document.getElementById('searchForm').addEventListener('submit', handleSearchSubmit);
document.getElementById('searchText').addEventListener('input', handleRealTimeSearch);