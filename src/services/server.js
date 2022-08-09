import firestore from "./firebase";

// export const addWines = async () => {
//     const collectionRef = firestore.collection("wine");
//     const querySnap = await collectionRef.get();
//     if (!querySnap.empty) return;
//     const promises = vino.map(async (wine) => await collectionRef.add(wine));
//     await Promise.all(promises);
// };

export const getFromDatabase = async (collection) => {
    const collectionRef = firestore.collection(collection);
    const querySnap = await collectionRef.get();
    const data = querySnap.docs;
    return data.map((wine) => {
        return collection === "wine"
            ? { id: wine.id, ...wine.data() }
            : wine.data();
    });
};

export const updateItem = async (collection, id, data) => {
    const collectionRef = firestore.collection(collection);
    const docRef = collectionRef.doc(id);
    await docRef.update(data);
};

export const createItem = async (obj) => {
    const collectionRef = firestore.collection("wine");
    return await collectionRef.add(obj);
};

export const deleteItem = async (id) => {
    const collectionRef = firestore.collection("wine");
    const docRef = collectionRef.doc(id);
    await docRef.delete();
};
