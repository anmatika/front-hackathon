const service = {
	fetchNodes: () => {
		const url = 'http://anttim.northeurope.cloudapp.azure.com:3003/api/result';
		fetch(url)
			.then((response) => {
				return response.json();
			})
			.then((r) => console.log(r));
	},
	fetchNodesMock: () => {
		return new Promise((resolve) => {
			const data = {
				nodes: [
					{
						statusCode: 'UP',
						nodeName: 'QV-Node-v1'
					},
					{
						statusCode: 'DOWN',
						nodeName: 'QV-Node-v2'
					},
					{
						statusCode: 'UP',
						nodeName: 'QV-Node-v3'
					},
					{
						statusCode: 'UP',
						nodeName: 'QV-Node-v4'
					}
				]
			};

			setTimeout(function() {
				resolve(data);
			}, 500);
		});
	}
};

export default service;
