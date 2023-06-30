import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const userPhoto = await uploadPhoto();
    const userCreate = await createUser();
    return ({ photo: userPhoto, user: userCreate });
  } catch (err) {
    return ({ photo: null, user: null });
  }
}
