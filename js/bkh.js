// Danh sách các phần tử
const questions = [
    "<a href='../canhdieu/lop10.html'>Khoá học Lớp 10 - Cánh diều</a>",
    "<a href='../canhdieu/lop11.html'>Khoá học Lớp 11 - Cánh diều</a>",
    "<a href='../chantroisangtao/lop10.html'>Khoá học Lớp 10 - Chân trời sáng tạo</a>",
    "<a href='../chantroisangtao/lop11.html'>Khoá học Lớp 11 - Chân trời sáng tạo</a>",
    "<a href='../ketnoitrithuc/lop10.html'>Khoá học Lớp 10 - Kết nối tri thức</a>",
    "<a href='../ketnoitrithuc/lop11.html'>Khoá học Lớp 11 - Kết nối tri thức</a>",
    "<a href='../lop12.html'>Khoá học Lớp 12</a>",
     
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
    