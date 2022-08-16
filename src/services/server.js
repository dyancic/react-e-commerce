import firestore from "./firebase";

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

export const createItem = async (collection, obj) => {
    const collectionRef = firestore.collection(collection);
    return await collectionRef.add(obj);
};

export const deleteItem = async (collection, id) => {
    const collectionRef = firestore.collection(collection);
    const docRef = collectionRef.doc(id);
    await docRef.delete();
};
