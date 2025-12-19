// Firebase configuration - ЗАМЕНИ НА СВОИ ДАННЫЕ
const firebaseConfig = {
  apiKey: "AIzaSyDTkEqderjTrNiWO7ZLeq775NrEzOR58ew",
  authDomain: "darkcheatclient-64495.firebaseapp.com",
  projectId: "darkcheatclient-64495",
  storageBucket: "darkcheatclient-64495.firebasestorage.app",
  messagingSenderId: "489209481148",
  appId: "1:489209481148:web:22b869bd26d414d63e8db9"
};

// Инициализация Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore(); // Для будущей базы данных
