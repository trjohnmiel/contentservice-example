import Axios from 'axios';

const url = 'https://uat.contentservice.io/api/2.0/API14ICABHVWQWVQMUTWOULMU58IX/element';

export const postContent = payload => {
	return new Promise((resolve, reject) => {
		Axios.post(url, payload, { headers: { 'Content-Type': 'application/json' } })
			.then(response => resolve(response))
			.catch(err => {
				console.error(err);
				reject(err);
			});
	});
};
