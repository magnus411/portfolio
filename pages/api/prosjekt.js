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
  //Find the absolute path of the json directory

  let lis = [];
  const q = query(collection(database, "prosjekt"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    lis.push(doc.data());
  });

  res.status(200).json(lis);
}
