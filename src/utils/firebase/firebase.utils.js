import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAAB4WxcU06FodUOa98C8xm_A5jvKLocUQ",
  authDomain: "jays-clothing.firebaseapp.com",
  projectId: "jays-clothing",
  storageBucket: "jays-clothing.firebasestorage.app",
  messagingSenderId: "420462479593",
  appId: "1:420462479593:web:ed6e70f417fe04f9630878",
  measurementId: "G-EF6GJFJE4V"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Authentication
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

// Firestore Database
export const db = getFirestore(firebaseApp);

// Collections Operations
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  try {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object);
    });

    await batch.commit();
    console.log('Batch write completed successfully');
  } catch (error) {
    console.error('Error in batch operation:', error);
    throw error;
  }
};

export const getCategoriesAndDocuments = async () => {
  try {
    const collectionRef = collection(db, 'collections');
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);

    // Return array with both document ID and data
    return querySnapshot.docs.map(docSnapshot => ({
      id: docSnapshot.id, // Include document ID
      ...docSnapshot.data() // Spread document data
    }));
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

// User Operations
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.error('Error creating user document:', error.message);
      throw error;
    }
  }

  return userDocRef;
};

// Auth Operations
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    throw new Error('Email and password are required');
  }
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    throw new Error('Email and password are required');
  }
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
};

// Auth State Listeners
export const onAuthStateChangedListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth, 
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};