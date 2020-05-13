import scrollNav from "./modules/scrollNav.js";
// import Amplify, { Auth } from "aws-amplify";
// import awsconfig from "./aws-exports";
// Amplify.configure(awsconfig);
import { Auth } from "aws-amplify";

// let username = document.getElementById("inputUserName");
// let email = document.getElementById("inputEmail");
// let password = document.getElementById("inputPassword");

// Amplify.configure({
// 	Auth: {
// 		// REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
// 		identityPoolId: "ap-northeast-1:681b2623-3f49-42ba-87ea-c6592a9c5a3e",

// 		// REQUIRED - Amazon Cognito Region
// 		region: "ap-northeast-1",

// 		// OPTIONAL - Amazon Cognito User Pool ID
// 		userPoolId: "ap-northeast-1_qJEFJEOfE",

// 		// OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
// 		userPoolWebClientId: "69hbu70but8h3dsdq579l44jpi",

// 		// OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
// 		mandatorySignIn: false,

// 		// // OPTIONAL - Configuration for cookie storage
// 		// // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
// 		// cookieStorage: {
// 		// // REQUIRED - Cookie domain (only required if cookieStorage is provided)
// 		//     domain: '.yourdomain.com',
// 		// // OPTIONAL - Cookie path
// 		//     path: '/',
// 		// // OPTIONAL - Cookie expiration in days
// 		//     expires: 365,
// 		// // OPTIONAL - Cookie secure flag
// 		// // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
// 		//     secure: true
// 		// },

// 		// // OPTIONAL - customized storage object
// 		// storage: new MyStorage(),

// 		// // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
// 		// authenticationFlowType: 'USER_PASSWORD_AUTH',

// 		// // OPTIONAL - Manually set key value pairs that can be passed to Cognito Lambda Triggers
// 		// clientMetadata: { myCustomKey: 'myCustomValue' },

// 		//  // OPTIONAL - Hosted UI configuration
// 		// oauth: {
// 		//     domain: 'your_cognito_domain',
// 		//     scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
// 		//     redirectSignIn: 'http://localhost:3000/',
// 		//     redirectSignOut: 'http://localhost:3000/',
// 		//     responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
// 		// }
// 	},
// });

// // You can get the current config object
// const currentConfig = Auth.configure();
// console.log(currentConfig);

async function signUp() {
	try {
		const user = await Auth.signUp({
			username,
			password,
			attributes: {
				email,
			},
		});

		console.log({ user });
	} catch (error) {
		console.log("error signing up:", error);
	}
}

// --------------------------------------------------------------------
// Navbar shrink effect
window.onload = () => {
	scrollNav();
};

window.onscroll = () => {
	scrollNav();
};

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior: "smooth",
		});
	});
});

// Get the current year
document.getElementById("year").innerHTML = new Date().getFullYear();
