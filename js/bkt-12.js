// Danh sách các phần tử
const questions = [
// Toán
 "<a href='toan/hocki1/de.html'>Kiểm tra học kì 1 - Toán 12</a>",
  "<a href='toan/hocki2/de.html'>Kiểm tra học kì 2 - Toán 12</a>",
// Vật lí
 "<a href='vatli/hocki1/de.html'>Kiểm tra học kì 1 - Vật lí 12</a>",
  "<a href='vatli/hocki2/de.html'>Kiểm tra học kì 2 - Vật lí 12</a>",
// Hóa học
 "<a href='hoahoc/hocki1/de.html'>Kiểm tra học kì 1 - Hóa học 12</a>",
  "<a href='hoahoc/hocki2/de.html'>Kiểm tra học kì 2 - Hóa học 12</a>",
// Ngữ Văn
 "<a href='nguvan/hocki1/de.html'>Kiểm tra học kì 1 - Ngữ Văn 12</a>",
  "<a href='nguvan/hocki2/de.html'>Kiểm tra học kì 2 - Ngữ Văn 12</a>",
// Lịch sử
 "<a href='lichsu/hocki1/de.html'>Kiểm tra học kì 1 - Lịch sử 12</a>",
  "<a href='lichsu/hocki2/de.html'>Kiểm tra học kì 2 - Lịch sử 12</a>",
// Địa lí
 "<a href='diali/hocki1/de.html'>Kiểm tra học kì 1 - Địa lí 12</a>",
  "<a href='diali/hocki2/de.html'>Kiểm tra học kì 2 - Địa lí 12</a>",
// Sinh học
 "<a href='sinhhoc/hocki1/de.html'>Kiểm tra học kì 1 - Sinh học 12</a>",
  "<a href='sinhhoc/hocki2/de.html'>Kiểm tra học kì 2 - Sinh học 12</a>",
// Tiếng anh
 "<a href='tienganh/hocki1/de.html'>Kiểm tra học kì 1 - Tiếng anh 12</a>",
  "<a href='tienganh/hocki2/de.html'>Kiểm tra học kì 2 - Tiếng anh 12</a>",
// Công nghệ
 "<a href='congnghe/hocki1/de.html'>Kiểm tra học kì 1 - Công nghệ 12</a>",
  "<a href='congnghe/hocki2/de.html'>Kiểm tra học kì 2 - Công nghệ 12</a>",
// GDQP
 "<a href='gdqp/hocki1/de.html'>Kiểm tra học kì 1 - GDQP&AN 12</a>",
  "<a href='gdqp/hocki2/de.html'>Kiểm tra học kì 2 - GDQO&AN 12</a>",
// GDCD
 "<a href='gdcd/hocki1/de.html'>Kiểm tra học kì 1 - GDCD 12</a>",
  "<a href='gdcd/hocki2/de.html'>Kiểm tra học kì 2 - GDCD 12</a>",
// TIN HỌC
 "<a href='tinhoc/hocki1/de.html'>Kiểm tra học kì 1 - Tin học 12</a>",
  "<a href='tinhoc/hocki2/de.html'>Kiểm tra học kì 2 - Tin học 12</a>",
// THPT
  "<a href='toan/thpt/de.html'>Thi tốt nghiệp THPT - Toán</a>",
  "<a href='tienganh/thpt/de.html'>Thi tốt nghiệp THPT - Tiếng Anh</a>",
  "<a href='hoahoc/thpt/de.html'>Thi tốt nghiệp THPT - Hóa học</a>",
  "<a href='vatli/thpt/de.html'>Thi tốt nghiệp THPT - Vật lí</a>",
  "<a href='sinhhoc/thpt/de.html'>Thi tốt nghiệp THPT - Sinh học</a>",
  "<a href='lichsu/thpt/de.html'>Thi tốt nghiệp THPT - Lịch sử</a>",
  "<a href='diali/thpt/de.html'>Thi tốt nghiệp THPT - Địa lí</a>",
  "<a href='gdcd/thpt/de.html'>Thi tốt nghiệp THPT - GDCD</a>",
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
