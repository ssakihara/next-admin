import { atom, atomFamily } from 'recoil';

export const entityState = atomFamily({
  key: 'entity',
  default: undefined,
});

export const listState = atom({
  key: 'entity/list',
  default: [],
});
