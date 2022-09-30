import firebase from './firebase';

export async function getNamesIds() {
    let output = [];
    try {

        const snapshot = await firebase.collection("people").get();
        snapshot.forEach(
            (doc) => {
                output.push(
                    {
                        params: {
                            id: doc.id
                        }
                    }
                );
            }
        );

    } catch(error){
        console.log(error);
    }
    return output;
}


export async function getPeopleData(idRequested) {
    const doc = await firebase.collection("people").doc(idRequested).get();

    let output;

    if(!doc.empty) {
        output = {id:doc.id, data:doc.data()};
    } else {
        output = null;
    }
    return output;
}

export async function getSortedList(){
    let output = [];

    try {
        const snapshot = await firebase.collection("people").get();
        snapshot.forEach(
            (doc) => {
                output.push(
                    {
                        id: doc.id,
                        name: doc.data()
                    }
                );
            }
        );

    } catch (error) {
        console.log(error);
        res.status(error.status).end(error.message);
    }
    return output;
}