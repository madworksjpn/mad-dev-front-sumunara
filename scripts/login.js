// cognitoのログインURLを生成して、そこへ移動する（OAuth2）
document.getElementById("loginBtn").addEventListener("click", e => {
	e.preventDefault();

	// Cognitoがホストするログインページのドメイン。ユーザープールで設定したやつ。最後に\loginをつける。
	const loginEndPoint =
		"https://sumunara-test1.auth.ap-northeast-1.amazoncognito.com/login";
	const params = new URLSearchParams({
		// implicitなのでresponse_typeはtoken
		response_type: "token",
		client_id: "476hj5kunmf68ab5maas3qmv53",
		// state: "STATE",      // 「この値は、CSRF 攻撃を防ぐために、クライアントで使用する必要があります。オプションですが、強くお勧めします。」
		scope: "email",
		redirect_uri:
			"https://sumunara-app.herokuapp.com/sumunara_apps/address_form/",
	});

	location.href = `${loginEndPoint}?${params.toString()}`;
});
