import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";

/* Google authen */
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";





// thay config thành config của bạn
const firebaseConfig = {
  apiKey: "AIzaSyDCRcJbANr8ecACEFqfPvhK0eCdMycv3SU",
  authDomain: "typescript-pr-98dff.firebaseapp.com",
  projectId: "typescript-pr-98dff",
  storageBucket: "typescript-pr-98dff.appspot.com",
  messagingSenderId: "692960288298",
  appId: "1:692960288298:web:b3124e9b341d917ec22d53",
  measurementId: "G-RDZ1W9D1VQ"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function uploadFileToStorage(file: File, folderName: string) {

  if (!file) {
    return false
  }
  const fileRef = ref(storage, `${folderName}/` + file.name);

  let url = await uploadBytes(fileRef, file).then(async res => {
    return await getDownloadURL(res.ref)
      .then(url => url)
      .catch(er => false)
  })

  return url
}

const googleProvider = new GoogleAuthProvider();

export async function googleLogin() {
  let auth = getAuth(app)
  return await signInWithPopup(auth, googleProvider);
}


