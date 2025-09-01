# ted-redesign-bolt

โปรเจกต์นี้เป็นการรีดีไซน์ TED โดยใช้ [bolt.ai](https://www.bolt.ai/) ซึ่งเป็นแพลตฟอร์มสำหรับการสร้างและปรับแต่ง AI ได้อย่างรวดเร็ว

## คุณสมบัติหลัก

- สร้างและฝึกโมเดล AI ได้ง่ายด้วย bolt.ai
- อินเทอร์เฟซสวยงาม ใช้งานง่าย
- รองรับการปรับแต่งและขยายฟีเจอร์เพิ่มเติม

## การติดตั้ง

1. โคลนโปรเจกต์นี้
   ```bash
   git clone https://github.com/rratchapol/ted-redesign-bolt.git
   cd ted-redesign-bolt
   ```
2. ติดตั้ง dependencies
   ```bash
   npm install
   ```
3. สมัครและตั้งค่าบัญชี bolt.ai ([ดูรายละเอียดที่นี่](https://www.bolt.ai/))
4. ตั้งค่า environment variables ที่จำเป็น (เช่น API KEY ของ bolt.ai)

## การใช้งาน

- รันโปรเจกต์
  ```bash
  npm start
  ```
- เข้าถึงอินเทอร์เฟซผ่านเบราว์เซอร์ที่ `http://localhost:3000`
- ปรับแต่งการตั้งค่าของ bolt.ai ตามความต้องการ

## โครงสร้างโปรเจกต์

- `/src` - โค้ดหลักของโปรเจกต์
- `/public` - ไฟล์ static
- `README.md` - ไฟล์นี้

## ข้อมูลเพิ่มเติม

- เว็บไซต์ bolt.ai: [https://www.bolt.ai/](https://www.bolt.ai/)
- หากพบปัญหาหรือข้อสงสัย สามารถเปิด issue ใน GitHub repository นี้ได้

---

ขอบคุณที่ใช้งานโปรเจกต์นี้!
