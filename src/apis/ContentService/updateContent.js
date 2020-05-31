import Axios from 'axios';
const url = 'https://uat.contentservice.io/api/2.0/API14ICABHVWQWVQMUTWOULMU58IX/element';

export const updateContent = payload => {
	return new Promise((resolve, reject) => {
		Axios.put(url, payload, {
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(responseStatus => {
			resolve(responseStatus);
		}).catch(err => {
			console.error(err);
			reject(err);
		});
	});
};
