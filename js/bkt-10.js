// Danh sách các phần tử
const questions = [
// Toán
 "<a href='toan/canhdieu/hocki1/de.html'>Kiểm tra học kì 1 - Toán 10 - Cánh diều</a>",
 "<a href='toan/canhdieu/hocki2/de.html'>Kiểm tra học kì 2 - Toán 10 - Cánh diều</a>",
 "<a href='toan/chantroisangtao/hocki1/de.html'>Kiểm tra học kì 1 - Toán 10 - Chân trời sáng tạo</a>",
 "<a href='toan/chantroisangtao/hocki2/de.html'>Kiểm tra học kì 2 - Toán 10 - Chân trời sáng tạo</a>",
 "<a href='toan/ketnoitrithuc/hocki1/de.html'>Kiểm tra học kì 1 - Toán 10 - Kết nối tri thức</a>",
 "<a href='toan/ketnoitrithuc/hocki2/de.html'>Kiểm tra học kì 2 - Toán 10 - Kết nối tri thức</a>",
 // Vật lí
  "<a href='vatli/canhdieu/hocki1/de.html'>Kiểm tra học kì 1 - Vật lí 10 - Cánh diều</a>",
 "<a href='vatli/canhdieu/hocki2/de.html'>Kiểm tra học kì 2 - Vật lí 10 - Cánh diều</a>",
 "<a href='vatli/chantroisangtao/hocki1/de.html'>Kiểm tra học kì 1 - Vật lí 10 - Chân trời sáng tạo</a>",
 "<a href='vatli/chantroisangtao/hocki2/de.html'>Kiểm tra học kì 2 - Vật lí 10 - Chân trời sáng tạo</a>",
 "<a href='vatli/ketnoitrithuc/hocki1/de.html'>Kiểm tra học kì 1 - Vật lí 10 - Kết nối tri thức</a>",
 "<a href='vatli/ketnoitrithuc/hocki2/de.html'>Kiểm tra học kì 2 - Vật lí 10 - Kết nối tri thức</a>",
 // Hóa học
  "<a href='hoahoc/canhdieu/hocki1/de.html'>Kiểm tra học kì 1 - Hóa học 10 - Cánh diều</a>",
 "<a href='hoahoc/canhdieu/hocki2/de.html'>Kiểm tra học kì 2 - Hóa học 10 - Cánh diều</a>",
 "<a href='hoahoc/chantroisangtao/hocki1/de.html'>Kiểm tra học kì 1 - Hóa học 10 - Chân trời sáng tạo</a>",
 "<a href='hoahoc/chantroisangtao/hocki2/de.html'>Kiểm tra học kì 2 - Hóa học 10 - Chân trời sáng tạo</a>",
 "<a href='hoahoc/ketnoitrithuc/hocki1/de.html'>Kiểm tra học kì 1 - Hóa học 10 - Kết nối tri thức</a>",
 "<a href='hoahoc/ketnoitrithuc/hocki2/de.html'>Kiểm tra học kì 2 - Hóa học 10 - Kết nối tri thức</a>",
 // Ngữ Văn
   "<a href='nguvan/canhdieu/hocki1/de.html'>Kiểm tra học kì 1 - Ngữ Văn 10 - Cánh diều</a>",
 "<a href='nguvan/canhdieu/hocki2/de.html'>Kiểm tra học kì 2 - Ngữ Văn 10 - Cánh diều</a>",
 "<a href='nguvan/chantroisangtao/hocki1/de.html'>Kiểm tra học kì 1 - Ngữ Văn 10 - Chân trời sáng tạo</a>",
 "<a href='nguvan/chantroisangtao/hocki2/de.html'>Kiểm tra học kì 2 - Ngữ Văn 10 - Chân trời sáng tạo</a>",
 "<a href='nguvan/ketnoitrithuc/hocki1/de.html'>Kiểm tra học kì 1 - Ngữ Văn 10 - Kết nối tri thức</a>",
 "<a href='nguvan/ketnoitrithuc/hocki2/de.html'>Kiểm tra học kì 2 - Ngữ Văn 10 - Kết nối tri thức</a>",
  // Lịch sử
   "<a href='lichsu/canhdieu/hocki1/de.html'>Kiểm tra học kì 1 - Lịch sử 10 - Cánh diều</a>",
 "<a href='lichsu/canhdieu/hocki2/de.html'>Kiểm tra học kì 2 - Lịch sử 10 - Cánh diều</a>",
 "<a href='lichsu/chantroisangtao/hocki1/de.html'>Kiểm tra học kì 1 - Lịch sử 10 - Chân trời sáng tạo</a>",
 "<a href='lichsu/chantroisangtao/hocki2/de.html'>Kiểm tra học kì 2 - Lịch sử 10 - Chân trời sáng tạo</a>",
 "<a href='lichsu/ketnoitrithuc/hocki1/de.html'>Kiểm tra học kì 1 - Lịch sử 10 - Kết nối tri thức</a>",
 "<a href='lichsu/ketnoitrithuc/hocki2/de.html'>Kiểm tra học kì 2 - Lịch sử 10 - Kết nối tri thức</a>",
  // Địa lí
   "<a href='diali/canhdieu/hocki1/de.html'>Kiểm tra học kì 1 - Địa lí 10 - Cánh diều</a>",
 "<a href='diali/canhdieu/hocki2/de.html'>Kiểm tra học kì 2 - Địa lí 10 - Cánh diều</a>",
 "<a href='diali/chantroisangtao/hocki1/de.html'>Kiểm tra học kì 1 - Địa lí 10 - Chân trời sáng tạo</a>",
 "<a href='diali/chantroisangtao/hocki2/de.html'>Kiểm tra học kì 2 - Địa lí 10 - Chân trời sáng tạo</a>",
 "<a href='diali/ketnoitrithuc/hocki1/de.html'>Kiểm tra học kì 1 - Địa lí 10 - Kết nối tri thức</a>",
 "<a href='diali/ketnoitrithuc/hocki2/de.html'>Kiểm tra học kì 2 - Địa lí 10 - Kết nối tri thức</a>",
 // Sinh học
   "<a href='sinhhoc/canhdieu/hocki1/de.html'>Kiểm tra học kì 1 - Sinh học 10 - Cánh diều</a>",
 "<a href='sinhhoc/canhdieu/hocki2/de.html'>Kiểm tra học kì 2 - Sinh học 10 - Cánh diều</a>",
 "<a href='sinhhoc/chantroisangtao/hocki1/de.html'>Kiểm tra học kì 1 - Sinh học 10 - Chân trời sáng tạo</a>",
 "<a href='sinhhoc/chantroisangtao/hocki2/de.html'>Kiểm tra học kì 2 - Sinh học 10 - Chân trời sáng tạo</a>",
 "<a href='sinhhoc/ketnoitrithuc/hocki1/de.html'>Kiểm tra học kì 1 - Sinh học 10 - Kết nối tri thức</a>",
 "<a href='sinhhoc/ketnoitrithuc/hocki2/de.html'>Kiểm tra học kì 2 - Sinh học 10 - Kết nối tri thức</a>",
 // Tiếng anh 
   "<a href='tienganh/canhdieu/hocki1/de.html'>Kiểm tra học kì 1 - Tiếng anh 10 - Explore New World</a>",
 "<a href='tienganh/canhdieu/hocki2/de.html'>Kiểm tra học kì 2 - Tiếng anh 10 - Explore New Worlds</a>",
 "<a href='tienganh/chantroisangtao/hocki1/de.html'>Kiểm tra học kì 1 - Tiếng anh 10 - Friend global</a>",
 "<a href='tienganh/chantroisangtao/hocki2/de.html'>Kiểm tra học kì 2 - Tiếng anh 10 - Friend global</a>",
 "<a href='tienganh/ketnoitrithuc/hocki1/de.html'>Kiểm tra học kì 1 - Tiếng anh 10 - Global success</a>",
 "<a href='tienganh/ketnoitrithuc/hocki2/de.html'>Kiểm tra học kì 2 - Tiếng anh 10 - Global success</a>",
 // Công nghệ 
   "<a href='congnghe/tt/canhdieu/hocki1/de.html'>Kiểm tra học kì 1 - Công nghệ 10 - Trồng trọt- Cánh diều</a>",
 "<a href='congnghe/tt/canhdieu/hocki2/de.html'>Kiểm tra học kì 2 - Công nghệ 10 - Trồng trọt - Cánh diều</a>",
 "<a href='congnghe/tk/canhdieu/hocki1/de.html'>Kiểm tra học kì 1 - Công nghệ 10 - Thiết kế - Cánh diều</a>",
 "<a href='congnghe/tk/canhdieu/hocki2/de.html'>Kiểm tra học kì 2 - Công nghệ 10 - Thiết kế - Cánh diều</a>",
 "<a href='congnghe/tt/ketnoitrithuc/hocki1/de.html'>Kiểm tra học kì 1 - Công nghệ 10 - Trồng trọt - Kết nối tri thức</a>",
 "<a href='congnghe/tt/ketnoitrithuc/hocki2/de.html'>Kiểm tra học kì 2 - Công nghệ 10 - Trồng trọt - Kết nối tri thức</a>",
 "<a href='congnghe/tk/ketnoitrithuc/hocki1/de.html'>Kiểm tra học kì 1 - Công nghệ 10 - Thiết kế - Kết nối tri thức</a>",
 "<a href='congnghe/tk/ketnoitrithuc/hocki2/de.html'>Kiểm tra học kì 2 - Công nghệ 10 - Thiết kế - Kết nối tri thức</a>",
 // GDQP
   "<a href='gdqp/canhdieu/hocki1/de.html'>Kiểm tra học kì 1 - GDQP&AN 10 - Cánh diều</a>",
 "<a href='gdqp/canhdieu/hocki2/de.html'>Kiểm tra học kì 2 - GDQP&AN 10 - Cánh diều</a>",
 "<a href='gdqp/ketnoitrithuc/hocki1/de.html'>Kiểm tra học kì 1 - GDQP&AN 10 - Kết nối tri thức</a>",
 "<a href='gdqp/ketnoitrithuc/hocki2/de.html'>Kiểm tra học kì 2 - GDQP&AN 10 - Kết nối tri thức</a>",
 // GDKT&PL
   "<a href='gdktpl/canhdieu/hocki1/de.html'>Kiểm tra học kì 1 - GDKT&PL 10 - Cánh diều</a>",
 "<a href='gdktpl/canhdieu/hocki2/de.html'>Kiểm tra học kì 2 - GDKT&PL 10 - Cánh diều</a>",
 "<a href='gdktpl/chantroisangtao/hocki1/de.html'>Kiểm tra học kì 1 - GDKT&PL 10 - Chân trời sáng tạo</a>",
 "<a href='gdktpl/chantroisangtao/hocki2/de.html'>Kiểm tra học kì 2 - GDKT&PL 10 - Chân trời sáng tạo</a>",
 "<a href='gdktpl/ketnoitrithuc/hocki1/de.html'>Kiểm tra học kì 1 - GDKT&PL 10 - Kết nối tri thức</a>",
 "<a href='gdktpl/ketnoitrithuc/hocki2/de.html'>Kiểm tra học kì 2 - GDKT&PL 10 - Kết nối tri thức</a>",
 // Tin học
   "<a href='tinhoc/canhdieu/hocki1/de.html'>Kiểm tra học kì 1 - Tin học 10 - Cánh diều</a>",
 "<a href='tinhoc/canhdieu/hocki2/khmt/de.html'>Kiểm tra học kì 2 - Tin học 10 - - Khoa học máy tính - Cánh diều</a>",
 "<a href='tinhoc/canhdieu/hocki2/thud/de.html'>Kiểm tra học kì 2 - Tin học 10 - Tin học ứng dụng - Cánh diều </a>",
 "<a href='tinhoc/ketnoitrithuc/hocki1/khmt/de.html'>Kiểm tra học kì 1 - Tin học 10 - Khoa học máy tính - Kết nối tri thức </a>",
 "<a href='tinhoc/ketnoitrithuc/hocki1/thud/de.html'>Kiểm tra học kì 1 - Tin học 10 - Tin học ứng dụng - Kết nối tri thức</a>",
 "<a href='tinhoc/ketnoitrithuc/hocki2/de.html'>Kiểm tra học kì 2 - Tin học 10 - Kết nối tri thức</a>",

];

// Lấy số lượng phần tử muốn hiển thị
const numQuestionsToShow = 5;

// Tạo mảng để lưu trữ các phần tử được chọn ngẫu nhiên
const selectedQuestions = [];

// Lặp lại cho đến khi có đủ số lượng phần tử được chọn
while (selectedQuestions.length < numQuestionsToShow) {
  // Tạo số ngẫu nhiên trong phạm vi chỉ mục của danh sách
  const randomIndex = Math.floor(Math.random() * questions.length);

  // Kiểm tra nếu phần tử tại chỉ mục ngẫu nhiên đã được chọn
  if (!selectedQuestions.includes(questions[randomIndex])) {
    // Thêm phần tử vào mảng các phần tử được chọn
    selectedQuestions.push(questions[randomIndex]);
  }
}

// Hiển thị các phần tử được chọn
document.write("<p>");
for (const question of selectedQuestions) {
  document.write(`<p>${question}</p>`);
}
document.write("</p>");
