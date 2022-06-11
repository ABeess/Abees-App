import { recoilPersist } from 'recoil-persist';
import { atom } from 'recoil';

const { persistAtom } = recoilPersist();
const isAuthenticatedAtom = atom({
  key: 'isAuthenticated',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export default isAuthenticatedAtom;
