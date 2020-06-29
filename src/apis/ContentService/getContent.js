import Axios from 'axios';

const url = 'https://uat.contentservice.io/api/2.0/API14ICABHVWQWVQMUTWOULMU58IX/elements';


export const getContent = (params = {
	type: 'post',
	offset: 0,
	limit: 1,
	status: 'active-test'
}) => {
	console.log('params', params);
	return new Promise((resolve, reject) => {
		Axios.get(url, {
			headers: {
				'Content-Type': 'application/json'
			},
			params
		}).then(({ data: content }) => {
			resolve(content);
		}).catch(err => {
			console.error(err);
			reject(err);
		});		
	});
};
