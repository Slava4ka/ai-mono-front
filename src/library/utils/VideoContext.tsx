import React from 'react';

export default React.createContext<null | { file: File| undefined, setVideoFile(file: File | undefined): void }>(null);
