# SCHOOL SAFE v5 — Green & Gold Prototype

เวอร์ชันนี้มี:
- Login / Register ด้วยอีเมล + รหัสผ่าน
- โปรไฟล์นักเรียนและตัวละครชาย/หญิง
- ม.1–ม.3 ห้อง 1–15 / ม.4–ม.6 ห้อง 1–13
- บัญชีใหม่เริ่ม 0
- Dashboard ส่วนตัว
- แบบประเมิน 20 ข้อ พร้อมโจทย์สถานการณ์
- เกม 4 แบบที่วิธีเล่นไม่เหมือนกัน
- แผนผังโรงเรียนสระแก้ว
- ปุ่มเปิดค้นหาโรงพยาบาลใกล้ฉัน
- เบอร์ฉุกเฉิน
- ธีมเขียว–ทอง + ตราโรงเรียน

สำคัญ: รอบนี้บัญชีทำงานในโหมด DEMO_LOCAL เพื่อให้เปิดและทดสอบได้ทันที ข้อมูลจะอยู่ในเบราว์เซอร์เครื่องนั้นก่อน เวอร์ชันถัดไปค่อยต่อ Supabase Auth + Database เพื่อใช้บัญชีเดิมข้ามเครื่องและบันทึกจริงบนคลาวด์

เริ่ม: เปิด register.html → สร้างบัญชี → ทดสอบแบบประเมิน/เกม → ดู profile.html


## v6 fixes
- แก้หน้าแบบทดสอบให้ทำงานได้แม้เปิดไฟล์ HTML โดยตรงจากเครื่อง (ไม่ต้อง fetch questions.json)
- ปุ่มโรงพยาบาลเปลี่ยนเป็นค้นหาภายในจังหวัดสระแก้ว
- Emergency Decision มีฉากและ animation แยกตามเหตุการณ์:
  - ไฟไหม้: ควัน ไฟ สัญญาณเตือน และการเดินไปทางออก
  - อาคารสั่น: ฉากสั่น เศษวัตถุ และท่าป้องกันตัว
  - เหตุฉุกเฉินทางการแพทย์: เพื่อนในฉาก ครู และท่าเรียก/สื่อสาร
  - พายุ: ฉากกลางแจ้ง ฝน และการเคลื่อนเข้าพื้นที่ที่กำหนด

## v7
- แก้แบบประเมิน 20 ข้อให้โหลดคำถามจากตัวไฟล์ JS โดยตรง ไม่ใช้ fetch
- ป้องกันผล NaN และซ่อน Result จนกว่าจะตอบครบและกดส่ง
- Emergency Challenge ขยายเป็น 6 สถานการณ์ (เพิ่ม 5 สถานการณ์จากเดิม)
- จำกัดเวลา 30 วินาทีต่อสถานการณ์
- เพิ่มข้อความเตือนสติและข้อความเร่งเวลาแบบไม่รุนแรงในช่วง 20/10/5 วินาที
- เกม Spot the Risk และ Safe Route ถูกพักไว้ชั่วคราวในหน้าเมนู เพื่อรอออกแบบใหม่ให้สมจริงกว่าเดิม

## v8 serious games
- Survival Choice 5 scenarios / 20 sec / 3 lives
- recognizable desk, glass cabinet, door, window, electrical wire, outdoor shelter, adult/helper and student objects
- Safe Route uses the supplied Sakaeo School map
- Safety News page with source links
- serious games hub restored with four distinct game modes

## v9 TESTED
- Emergency Decision rewritten to be self-contained and no longer depends on missing scene elements.
- Emergency Decision now has 5 scenarios and inline SVG classroom objects (door, desks, glass cabinet, window, wire, teacher, student).
- Survival Choice uses recognizable SVG objects, 5 scenarios, 20-second timer, 3 lives.
- Safe Route keeps the supplied Sakaeo School map.
- Emergency Challenge remains 6 rounds / 30 seconds.
- Added a visible Safety News page and top navigation link, with verified-source links.
- Added Safety News teaser on dashboard.
