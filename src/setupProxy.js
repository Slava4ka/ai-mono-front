/* eslint-disable no-console */
const { createProxyMiddleware } = require('http-proxy-middleware');

const enableLogs = process.env.REACT_APP_ENABLE_PROXY_SERVER_LOGS;

const path = 'http://158.160.9.146:8080';

const logs = enableLogs === 'true' ? {
	onProxyReq: function onProxyReq(proxyReq, req) {
		// Log outbound request to remote target
		console.log('-->  ', req.method, req.path, '->', path + proxyReq.path);
	},
	onError: function onError(err, req, res) {
		console.error(err);
		res.status(500);
		res.json({error: 'Error when connecting to remote server.'});
	},
} : undefined;

module.exports = (app) => {
	app.use(
		'/api',
		createProxyMiddleware({
			target: path,
			changeOrigin: true,
			...logs,
		}),
	);
};
