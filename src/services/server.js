import firestore from "./firebase";
import vino from "./winelist";

export const addWines = async () => {
    const collectionRef = firestore.collection("wine");
    const querySnap = await collectionRef.get();
    if (!querySnap.empty) return;
    const promises = vino.map(async (wine) => await collectionRef.add(wine));
    await Promise.all(promises);
};

export const getFromDatabase = async (collection) => {
    const collectionRef = firestore.collection(collection);
    const querySnap = await collectionRef.get();
    const data = querySnap.docs;
    return data.map((wine) => {
        return { id: wine.id, ...wine.data() };
    });
};
