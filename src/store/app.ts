import { atom } from 'recoil';

export const nowLoadingState = atom({
  key: 'app/nowLoading',
  default: false,
});
