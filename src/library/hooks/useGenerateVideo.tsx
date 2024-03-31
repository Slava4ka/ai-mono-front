import { baseApi } from 'library/utils/urls';
import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';

interface IResult {
    isLoading: boolean;
    handleGenerateVideo(payload: Payload): void;
}

export type Payload = {
    gender: string | '0';
    language: string | '0';
    text: string | '0';
    audio_path: string | '0';
    video_path: string;
}

const useGenerateVideo = (): IResult => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleGenerateVideo = useCallback((payload: Payload) => {
		setIsLoading(true);

		baseApi.post('videos/generate', payload)
			.then()
			.catch(() => toast.error('Что-то пошло не так. Повторите попытку позже'))
			.finally(() => setIsLoading(false));
	}, []);

	return {
		isLoading,
		handleGenerateVideo,
	};
};

export default useGenerateVideo;
