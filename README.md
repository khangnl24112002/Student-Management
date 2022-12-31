# Student Management
## 1. Giới thiệu Project
Phần mềm quản lý học sinh (Learn Management System – LMS) được lập trình trên nền tảng Web, là một phần mềm giúp giáo viên, người quản lý có thể dễ dàng quản lý được thông tin học sinh như họ tên, địa chỉ, ngày sinh, lớp,… Phần mềm cho phép tạo ra các lớp học, tạo lập thời khoá biểu, theo dõi quá trình học tập và kết quả học tập của học sinh. Ngoài ra, nó còn giúp thống kê, sắp xếp, tìm kiếm và thực hiện các thao tác để giúp giáo viên dễ dàng quản lý các học sinh trong môn học của mình. Phần mềm được lập trình trên các nền tảng HTML, CSS, Javascript và các Framework như ReactJS, ngoài ra còn sử dụng thêm NodeJS và MySQL để cài đặt phần server. Với giao diện thân thiện và tốc độ nhanh chóng, phần mềm sẽ giúp công việc quản lý học sinh của các thầy cô trở nên dễ dàng hơn bao giờ hết.
## 2. Môi trường thực thi
- Phiên bản HĐH: Windows 10
- Dev Tools: Visual Studio Code
- Database: MySQL Workbench
- Framework: ReactJS (Front-End), ExpressJS (Back-End)
## 3. Hướng dẫn cấu hình Project chạy trên Local PC
- Clone Project về máy bằng lệnh: git clone https://github.com/Nofm22/student_management.git
- Cài đặt ứng dụng MySQL Workbench, VS Code
- Vào thư mục student_management.
- Cài đặt server: Vào thư mục server, gõ: npm install -> npx sequelize-cli db:migrate -> Import dữ liệu trong file datas vào trong database MySQL -> vào file config trong thư mục config, sửa lại tên database, password sao cho giống với khi cài đặt MySQL -> gõ npm run dev để chạy server.
- Cài đặt client: vào thư mục client, gõ: npm install -> npm start
## 4. Hướng dẫn Deploy Project
### Server
- Vì Heroku tính phí nên ta tạm thời sẽ dùng công cụ là ngrok để deploy project.
- Cài đặt: https://ngrok.com/download
- Khởi tạo project bằng ngrok
- Chạy local server
- Tạo tunnel
- Lúc này ta sẽ truy cập vào đường dẫn để truy cập đến server.
### Client
## Kiệt sửa phần này giúp tui nhan
- Ta sẽ sử dụng trang web render.com để render cho client.
- Thực hiện tạo tài khoản và làm theo hướng dẫn trên web để up file client lên, sau đó chạy client.
## 5. Link demo
### Minh làm phần này nhan.
### Bỏ link drive vào đây
## 6. Current Status:
- Hoàn thành chức năng đăng ký, chuyển lớp, nhập điểm, xem thông tin, chỉnh sửa thông tin học sinh.
- Hoàn thành chức năng tạo danh sách, thay đổi tên, sĩ số cho lớp học.
- Hoàn thành chức năng thống kê điểm cho học sinh.
- Hoàn thành chức năng tạo mới, chỉnh sửa thông tin môn học.
- Hoàn thành các phần xử lí ngoại lệ các trường hợp lỗi.
- Hoàn thành chức năng phân quyền cho Giáo viên và Admin.
## 7. Future Works:
- Chức năng import điểm từ file Excel.
- Chức năng xếp thời khoá biểu cho giáo viên, học sinh.
- Chức năng thông báo cho học sinh, giáo viên.
- Chức năng trò chuyện trực tiếp (real-time chat) cho người dùng.
- Chức năng xác thực thông qua Google, Facebook.