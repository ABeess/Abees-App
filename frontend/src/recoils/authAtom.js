import { recoilPersist } from 'recoil-persist';
import { atom } from 'recoil';

const { persistAtom } = recoilPersist();
const authAtom = atom({
  key: 'auth',
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export default authAtom;
