// 季節ごとにメイン画像を変える処理
window.addEventListener("DOMContentLoaded", function () {
	// 日付(月)を取得
	let month = new Date().getMonth() + 1;

	//季節ごとの処理
	switch (month) {
		//春
		case 3:
		case 4:
		case 5:
			$("#home").css({
				"background-image":
					'url("../images/home_images/home_image1.jpg")',
				"background-size": "cover",
				"background-repeat": "no-repeat",
				"background-pozition": "center",
			});
			break;

		//夏
		case 6:
		case 7:
		case 8:
			$("#home").css({
				"background-image":
					'url("../images/home_images/home_image2.jpg")',
				"background-size": "cover",
				"background-repeat": "no-repeat",
				"background-pozition": "center",
			});
			break;

		//秋
		case 9:
		case 10:
		case 11:
			$("#home").css({
				"background-image":
					'url("../images/home_images/home_image3.jpg")',
				"background-size": "cover",
				"background-repeat": "no-repeat",
				"background-pozition": "center",
			});
			break;

		//冬
		case 12:
		case 1:
		case 2:
			$("#home").css({
				"background-image":
					'url("../images/home_images/home_image4.jpg")',
				"background-size": "cover",
				"background-repeat": "no-repeat",
				"background-pozition": "center",
			});
			break;
	}
});
