import axios, { CancelTokenSource } from 'axios';
import { toast } from 'react-toastify';
import { baseApi } from './urls';

export default (
	file: File,
	setCancelToken: (token: CancelTokenSource | undefined) => void,
	setProgress: (process: number | undefined) => void,
	fieldName: 'audio' | 'video',
	callBack: (data: File, res?: string) => void,
) => {
	const cancelTokenSource = axios.CancelToken.source();
	const formData = new FormData();
	formData.append(fieldName, file);

	setCancelToken(cancelTokenSource);

	setProgress(0);

	baseApi.post(
		'/audio/upload',
		formData,
		{
			headers: {
				'Content-Type': 'multipart/form-data',
			},
			cancelToken: cancelTokenSource.token,
			onUploadProgress(progressEvent) {
				setProgress(Math.round((progressEvent.progress ?? 0) * 100));
			},
		},
	)
		.then((res) => {
			callBack(file, res.data);
		})
		.catch((e) => {
			if (e.code !== 'ERR_CANCELED') {
				toast.error('Ошибка при загрузке файла');
			}
		})
		.finally(() => {
			setCancelToken(undefined);
			setProgress(undefined);
		});
};
