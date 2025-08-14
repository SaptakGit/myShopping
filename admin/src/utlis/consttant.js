export const BEARER_TOKEN = localStorage.getItem('token');
const IMG_URL = import.meta.env.VITE_CLIENT_END_IMG_URL;

export const CLIENT_AVATAR = IMG_URL+'/uploads/profile/avatar.png';
export const CLIENT_AVATAR_FEMALE = IMG_URL+'/uploads/profile/avatar-female.png';
export const CLIENT_AVATAR_MALE = IMG_URL+'/uploads/profile/avatar-male.png';