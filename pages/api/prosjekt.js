import { app, database } from "/lib/firebaseConfig";
import {
  collection,
  doc,
  setDoc,
  query,
  getDocs,
  addDoc,
} from "firebase/firestore";

const dbInstance = collection(database, "prosjekt");

export default async function handler(req, res) {
  let lis = [];
  const q = query(collection(database, "prosjekt"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    lis.push(doc.data());
  });

  res.status(200).json(lis);
}
