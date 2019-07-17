const fakeUserData = {
	'dimon@mail.com': {
		'password' : 'qwerty',
		'role' : 'krasavchik',
		'firstName' : 'Dmitry',
		'lastName' : 'Pupkin',
		'email' : 'dimon@mail.com'
	},
	'vovan@mail.com': {
		'password' : 'qwerty',
		'role' : 'alcoholic',
		'firstName' : 'Vladimir',
		'lastName' : 'Zubkin',
		'email' : 'vovan@mail.com'
	}
};

function fakeUser(email, password) {
	const emails = Object.keys(fakeUserData);
	if (emails.includes(email) && password === fakeUserData[email].password){
		return fakeUserData[email]
	}
	if (emails.includes(email) && password !== fakeUserData[email].password){
		return 'invalid password';
	}
	return 'user does not exist';
}

export default function fakeAsync(email, password) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(fakeUser(email, password));
		}, 1000);
	});
}
