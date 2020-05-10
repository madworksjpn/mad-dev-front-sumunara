//cognitoのログインURLを生成して、そこへ移動する（OAuth2）
document.getElementById('loginBtn').addEventListener('click', () => {
    //Cognitoがホストするログインページのドメイン。ユーザープールで設定したやつ。最後に\loginをつける。
    const loginEndPoint = 'https://dev-mad-sumunara.auth.ap-northeast-1.amazoncognito.com/login';
    const params = new URLSearchParams({
        //implicitなのでresponse_typeはtoken
        response_type: 'token',
        client_id: '7ejl0oi8jli7874hudi420nl52',
        scope: 'email',
        redirect_uri: 'https://sumunara-app.herokuapp.com/sumunara_apps/address_form/',
    });
    location.href = `${loginEndPoint}?${params.toString()}`;
});
