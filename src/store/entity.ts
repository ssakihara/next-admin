import { atomFamily } from 'recoil';

export const entityState = atomFamily({
  key: 'entity',
  default: undefined,
});
