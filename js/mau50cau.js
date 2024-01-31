<script>
					// VÔ HIỆU HÓA PHẦN TỬ
					function disableInputs(callback) {
							// Lấy div có class="thongtin"
							const thongtinElement = document.querySelector(".thongtin");
							// Lấy tất cả các phần tử input và select trong div này
							const inputs = thongtinElement.querySelectorAll("input, select");
							// Lặp qua tất cả các phần tử input và select
							for (let i = 0; i < inputs.length; i++) {
								// Kiểm tra xem phần tử có id là username, lop,truong,tinh hay không
								if (inputs[i].id === "username" || inputs[i].id === "lop" || inputs[i].id === "truong" || inputs[i].id === "tinh") {
									// Vô hiệu hóa phần tử này
									inputs[i].disabled = true;
								}
							}
							if (callback && typeof (callback) === "function") {
								callback();
							}
						}
						//LƯU THÔNG TIN
					function saveInfo() {
							var username = document.getElementById("username")
								.value;
							var lop = document.getElementById("lop")
								.value;
							var truong = document.getElementById("truong")
								.value;
							var tinh = document.getElementById("tinh")
								.value;
							if (username === "" || lop === "" || truong === "" || tinh === "") {
								document.getElementById('vlndtt')
									.style.display = 'block';
								document.getElementById('dntt')
									.style.display = 'none';
								document.getElementById('vlndda')
									.style.display = 'none';
								document.getElementById('dndda')
									.style.display = 'none';
								setTimeout(function () {
									document.getElementById('vlndtt')
										.style.display = 'none';
								}, 5000); // 5000 ms = 5 seconds
							} else {
								const noidunganElement = document.querySelector(".noidungan");
								if (noidunganElement.style.display === "none") {
									// Code để lưu thông tin và tính đồng hồ đếm ngược
									disableInputs(function () {
							document.getElementById('dntt')
											.style.display = 'block';
										document.getElementById('vlndtt')
											.style.display = 'none';
										document.getElementById('saveButton')
											.style.display = 'none';
										document.getElementById('khoang-cach')
											.style.display = 'none';
										document.getElementById('vlndda')
											.style.display = 'none';
										document.getElementById('dndda')
											.style.display = 'none';
										setTimeout(function () {
											document.getElementById('dntt')
												.style.display = 'none';
										}, 5000); // 5000 ms = 5 seconds
										// Hiển thị phần tử có class="noidungan"
										const endTime = new Date()
											.getTime() + 45 * 60 * 1000;
										const timerElement = document.getElementById("timer");
										const messageElement = document.querySelector(".message");
										timerElement.style.display = "block";
										setInterval(function () {
											if (timeLeft < 0) {
												timerElement.style.display = "none";
												messageElement.style.display = "block";
											} else {
												timerElement.style.display = "block";
												messageElement.style.display = "none";
											}
										}, 1000);
										noidunganElement.style.display = "block";
																			});
								}
							}
						}
						// TÍNH ĐIỂM
					function showResult() {
							// KIỂM TRA ĐÃ LÀM HẾT CHƯA
							if (document.quiz.question1.value === "" || document.quiz.question2.value === "" || document.quiz.question3.value === "" || document.quiz.question4.value === "" || document.quiz.question5.value === "" || document.quiz.question6.value === "" || document.quiz.question7.value === "" || document.quiz.question8.value === "" || document.quiz.question9.value === "" || document.quiz.question10.value === "" || document.quiz.question11.value === "" || document.quiz.question12.value === "" || document.quiz.question13.value === "" || document.quiz.question14.value === "" || document.quiz.question15.value === "" || document.quiz.question16.value === "" || document.quiz.question17.value === "" || document.quiz.question18.value === "" || document.quiz.question19.value === "" || document.quiz.question20.value === "" || document.quiz.question21.value === "" || document.quiz.question22.value === "" || document.quiz.question23.value === "" || document.quiz.question24.value === "" || document.quiz.question25.value === "" || document.quiz.question26.value === "" || document.quiz.question27.value === "" || document.quiz.question28.value === "" || document.quiz.question29.value === "" || document.quiz.question30.value === "" || document.quiz.question31.value === "" || document.quiz.question32.value === "" || document.quiz.question33.value === "" || document.quiz.question34.value === "" || document.quiz.question35.value === "" || document.quiz.question36.value === "" || document.quiz.question37.value === "" || document.quiz.question38.value === "" || document.quiz.question39.value === "" || document.quiz.question40.value === "" || document.quiz.question41.value === "" || document.quiz.question42.value === "" || document.quiz.question43.value === "" || document.quiz.question44.value === "" || document.quiz.question45.value === "" || document.quiz.question46.value === "" || document.quiz.question47.value === "" || document.quiz.question48.value === "" || document.quiz.question49.value === "" || document.quiz.question50.value === "" ) {
								document.getElementById('vlndda')
									.style.display = 'block';
								document.getElementById('dndda')
									.style.display = 'none';
								document.getElementById('vlndtt')
									.style.display = 'none';
								document.getElementById('dntt')
									.style.display = 'none';
								setTimeout(function () {
									document.getElementById('vlndda')
										.style.display = 'none';
								}, 5000); // 5000 ms = 5 seconds
								return;
							} else {
							
	document.getElementById('dndda')
									.style.display = 'block';
								document.getElementById('vlndda')
									.style.display = 'none';
								document.getElementById('vlndtt')
									.style.display = 'none';
								document.getElementById('dntt')
									.style.display = 'none';
																document.getElementById('nop-bai')
									.style.display = 'none';
									document.getElementById('hidden-content-1').style.display = 'none';

							};
							const username = document.getElementById("username")
								.value;
							const lop = document.getElementById("lop")
								.value;
							const truong = document.getElementById("truong")
								.value;
							const tinh = document.getElementById("tinh")
								.value;
							var score = 0; // Điểm ban đầu
							// lấy dữ liệu từ các input radio
							var question1 = document.quiz.question1.value;
							var question2 = document.quiz.question2.value;
							var question3 = document.quiz.question3.value;
							var question4 = document.quiz.question4.value;
							var question5 = document.quiz.question5.value;
							var question6 = document.quiz.question6.value;
							var question7 = document.quiz.question7.value;
							var question8 = document.quiz.question8.value;
							var question9 = document.quiz.question9.value;
							var question10 = document.quiz.question10.value;
														var question11 = document.quiz.question11.value;
							var question12 = document.quiz.question12.value;
							var question13 = document.quiz.question13.value;
							var question14 = document.quiz.question14.value;
							var question15 = document.quiz.question15.value;
							var question16 = document.quiz.question16.value;
							var question17 = document.quiz.question17.value;
							var question18 = document.quiz.question18.value;
							var question19 = document.quiz.question19.value;
							var question20 = document.quiz.question20.value;
						var question21 = document.quiz.question21.value;
							var question22 = document.quiz.question22.value;
							var question23 = document.quiz.question23.value;
							var question24 = document.quiz.question24.value;
							var question25 = document.quiz.question25.value;
							var question26 = document.quiz.question26.value;
							var question27 = document.quiz.question27.value;
							var question28 = document.quiz.question28.value;
							var question29 = document.quiz.question29.value;
							var question30 = document.quiz.question30.value;
							var question31 = document.quiz.question31.value;
							var question32 = document.quiz.question32.value;
							var question33 = document.quiz.question33.value;
							var question34 = document.quiz.question4.value;
							var question35 = document.quiz.question35.value;
							var question36 = document.quiz.question36.value;
							var question37 = document.quiz.question37.value;
							var question38 = document.quiz.question38.value;
							var question39 = document.quiz.question39.value;
							var question40 = document.quiz.question40.value;
													var question41 = document.quiz.question41.value;
							var question42 = document.quiz.question42.value;
							var question43 = document.quiz.question43.value;
							var question44 = document.quiz.question44.value;
							var question45 = document.quiz.question45.value;
							var question46 = document.quiz.question46.value;
							var question47 = document.quiz.question47.value;
							var question48 = document.quiz.question48.value;
							var question49 = document.quiz.question49.value;
							var question50 = document.quiz.question50.value;
	
							//So sánh đáp án
							if (question1 === q1) {
								score++;
							}
							if (question2 === q2) {
								score++;
							}
							if (question3 === q3) {
								score++;
							}
							if (question4 === q4) {
								score++;
							}
							if (question5 === q5) {
								score++;
							}
							if (question6 === q6) {
								score++;
							}
							if (question7 === q7) {
								score++;
							}
							if (question8 === q8) {
								score++;
							}
							if (question9 === q9) {
								score++;
							}
							if (question10 === q10) {
								score++;
							}
							if (question11 === q11) {
								score++;
							}
							if (question12 === q12) {
								score++;
							}
							if (question13 === q13) {
								score++;
							}
							if (question14 === q14) {
								score++;
							}
							if (question15 === q15) {
								score++;
							}
							if (question16 === q16) {
								score++;
							}
							if (question17 === q17) {
								score++;
							}
							if (question18 === q18) {
								score++;
							}
							if (question19 === q19) {
								score++;
							}
							if (question20 === q20) {
								score++;
							}
							if (question21 === q21) {
								score++;
							}
							if (question22 === q22) {
								score++;
							}
							if (question23 === q23) {
								score++;
							}
							if (question24 === q24) {
								score++;
							}
							if (question25 === q25) {
								score++;
							}
							if (question26 === q26) {
								score++;
							}
							if (question27 === q27) {
								score++;
							}
							if (question28 === q28) {
								score++;
							}
							if (question29 === q29) {
								score++;
							}
							if (question30 === q30) {
								score++;
							}
							if (question31 === q31) {
								score++;
							}
							if (question32 === q32) {
								score++;
							}
							if (question33 === q33) {
								score++;
							}
							if (question34 === q34) {
								score++;
							}
							if (question35 === q35) {
								score++;
							}
							if (question36 === q36) {
								score++;
							}
							if (question37 === q37) {
								score++;
							}
							if (question38 === q38) {
								score++;
							}
							if (question39 === q39) {
								score++;
							}
							if (question40 === q40) {
								score++;
							}
							if (question41 === q41) {
								score++;
							}
							if (question42 === q42) {
								score++;
							}
							if (question43 === q43) {
								score++;
							}
							if (question44 === q44) {
								score++;
							}
							if (question45 === q45) {
								score++;
							}
							if (question46 === q46) {
								score++;
							}
							if (question47 === q47) {
								score++;
							}
							if (question48 === q48) {
								score++;
							}
							if (question49 === q49) {
								score++;
							}
							if (question50 === q50) {
								score++;
							}
							// Display the results
							if (score === 10 * 5) {
								ketqua = "Tốt!";
							} else if (score >= 8 * 5) {
								ketqua = "Khá tốt!";
							} else if (score >= 5 * 5) {
								ketqua = "Ổn!";
							} else {
								ketqua = "Bạn cần cố gắng hơn!";
							}
							var message = "Chúc mừng bạn đã hoàn thành!<br>" + tbkt + "<br>" + tgkt + "<br>" + mkt + "<hr><table width='100%' border='0'><tr><th colslan='5'>Đáp án<th></tr><tr><th width='20%'>01 - " + q1.toUpperCase() + " </th><th width='20%'>02 - " + q2.toUpperCase() + " </th><th width='20%'>03 - " + q3.toUpperCase() + " </th><th width='20%'>04 - " + q4.toUpperCase() + "</th><th width='20%'>05 - " + q5.toUpperCase() + "</th></tr><tr><th width='20%'>06 - " + q6.toUpperCase() + "</th><th width='20%'>07 - " + q7.toUpperCase() + "</th><th width='20%'>08 - " + q8.toUpperCase() + "</th><th width='20%'>09 - " + q9.toUpperCase() + "</th><th width='20%'>10 - " + q10.toUpperCase() + "</th></tr><tr><th width='20%'>11 - " + q11.toUpperCase() + " </th><th width='20%'>12 - " + q12.toUpperCase() + " </th><th width='20%'>13 - " + q13.toUpperCase() + " </th><th width='20%'>14 - " + q14.toUpperCase() + "</th><th width='20%'>15 - " + q15.toUpperCase() + "</th></tr><tr><th width='20%'>16 - " + q16.toUpperCase() + "</th><th width='20%'>17 - " + q17.toUpperCase() + "</th><th width='20%'>18 - " + q18.toUpperCase() + "</th><th width='20%'>19 - " + q19.toUpperCase() + "</th><th width='20%'>20 - " + q20.toUpperCase() + "</th></tr><tr><th width='20%'>21 - " + q21.toUpperCase() + " </th><th width='20%'>22 - " + q22.toUpperCase() + " </th><th width='20%'>23 - " + q23.toUpperCase() + " </th><th width='20%'>24 - " + q24.toUpperCase() + "</th><th width='20%'>25 - " + q25.toUpperCase() + "</th></tr><tr><th width='20%'>26 - " + q26.toUpperCase() + "</th><th width='20%'>27 - " + q27.toUpperCase() + "</th><th width='20%'>28 - " + q28.toUpperCase() + "</th><th width='20%'>29 - " + q29.toUpperCase() + "</th><th width='20%'>30 - " + q30.toUpperCase() + "</th></tr><tr><th width='20%'>31 - " + q31.toUpperCase() + " </th><th width='20%'>32 - " + q32.toUpperCase() + " </th><th width='20%'>33 - " + q33.toUpperCase() + " </th><th width='20%'>34 - " + q34.toUpperCase() + "</th><th width='20%'>35 - " + q35.toUpperCase() + "</th></tr><tr><th width='20%'>36 - " + q36.toUpperCase() + "</th><th width='20%'>37 - " + q37.toUpperCase() + "</th><th width='20%'>38 - " + q38.toUpperCase() + "</th><th width='20%'>39 - " + q39.toUpperCase() + "</th><th width='20%'>40 - " + q40.toUpperCase() + "</th></tr><tr><th width='20%'>41 - " + q41.toUpperCase() + " </th><th width='20%'>42 - " + q42.toUpperCase() + " </th><th width='20%'>43 - " + q43.toUpperCase() + " </th><th width='20%'>44 - " + q44.toUpperCase() + "</th><th width='20%'>45 - " + q45.toUpperCase() + "</th></tr><tr><th width='20%'>46 - " + q46.toUpperCase() + "</th><th width='20%'>47 - " + q47.toUpperCase() + "</th><th width='20%'>48 - " + q48.toUpperCase() + "</th><th width='20%'>49 - " + q49.toUpperCase() + "</th><th width='20%'>50 - " + q50.toUpperCase() + "</th></tr></div></div></table>" + "<hr>" + "Người làm kiểm tra: " + (username ? username.toUpperCase() : "Không xác định") + "<br>Lớp: " + (lop ? lop.toUpperCase() : "Không xác định") + "<br>Truờng: " + (truong ? truong.toUpperCase() : "Không xác định") + "<br>Tỉnh/TP: " + (tinh ? tinh.toUpperCase() : "Không xác định") + "<br>Số câu đúng: " + score + "<br>Điểm số: " + score / 5 + "/10" + "<br>Nhận xét: " + ketqua.toUpperCase();
														setTimeout(function () {
														    document.getElementById('dndda')
									.style.display = 'none';

document.getElementById("ketqua")
								.innerHTML = message;
								}, 3000); // 5000 ms = 5 seconds
				document.getElementById('ketqua')
								.style.display = 'block';
							document.getElementById('id02')
								.style.display = 'none';
							document.getElementById('id03')
								.style.display = 'none';
						}
						// Tự động xuất kết quả nếu người dùng không nhấn nút "Xuất kết quả" trong vòng 45 phút
					setTimeout(showResult, 45 * 60 * 1000 + 3000);
					//TÍNH THỜI GIAN        
					// Tính thời gian kết thúc
					const endTime = new Date()
						.getTime() + 45 * 60 * 1000;
					// Lấy thẻ div timer
					const timerElement = document.getElementById("timer");
					// Cập nhật thời gian sau mỗi giây
					setInterval(function () {
						// Tính toán thời lượng còn lại
						const now = new Date()
							.getTime();
						const timeLeft = endTime - now;
						// Tính toán phút và giây
						const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
							.toString()
							.padStart(2, "0");
						const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)
							.toString()
							.padStart(2, "0");
						// Hiển thị thời gian
						timerElement.innerHTML = minutes + ":" + seconds;
					}, 1000); // Cập nhật sau mỗi giây

					</script>
