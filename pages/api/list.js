
import firebase from "../../lib/firebase";


export default async function handler(req, res) {
  try {
    const snapshot = await firebase.collection("people").get();
    let output = [];
    snapshot.forEach(
      (doc) => {
        output.push( { id:doc.id, data:doc.data() } );
      }
    );
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({ output });
  } catch(error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }

}
