import { db }  from "./FirebaseVars"
import { query, getDocs, where, collection, doc, setDoc } from "firebase/firestore";
import { async } from "@firebase/util";

const getIndoorPlants = async() => {
    const collectionPath = query(collection(db, "plantsIndoor"), where("available", "==", true));
    const indoorPlantsSnap = await getDocs(collectionPath);
    let indoorPlants = [];
    indoorPlantsSnap.forEach((doc) => {
        indoorPlants.push(doc.data());
    })
    return indoorPlants;
}

const getOutdoorPlants = async() => {
    const collectionPath = query(collection(db, "plantsOutdoor"), where("available", "==", true));
    const outdoorPlantsSnap = await getDocs(collectionPath);
    let outdoorPlants = [];
    outdoorPlantsSnap.forEach((doc) => {
        outdoorPlants.push(doc);
    })
    return outdoorPlants;
}

const getTablePlants = async() => {
    const collectionPath = query(collection(db, "plantsTable"), where("available", "==", true));
    const tablePlantsSnap = await getDocs(collectionPath);
    let tablePlants = [];
    tablePlantsSnap.forEach((doc) => {
        tablePlants.push(doc);
    })
    return tablePlants;
}



const addIndoorPlant = async() => {
    let f = 2
    while (f < 25) {
        await setDoc(doc(db, "plantsIndoor", "pi_"+f), {
            available: true,
            featureNo: f,
            name: "Sun flower",
            id: "pi_"+f,
            imageUrl: "",
            price: 0,
            storeId:101
        });
        f++;
    }
}

const addOutdoorPlant = async() => {
    let f = 1
    while (f < 25) {
        await setDoc(doc(db, "plantsOutdoor", "po_"+f), {
            available: false,
            featureNo: f,
            name: "Sun flower",
            id: "po_"+f,
            imageUrl: "",
            price: 0,
            storeId:101
        });
        f++;
    }
}

const addTablePlant = async() => {
    let f = 1
    while (f < 25) {
        await setDoc(doc(db, "plantsTable", "pt_"+f), {
            available: false,
            featureNo: f,
            name: "Sun flower",
            id: "pt_"+f,
            imageUrl: "",
            price: 0,
            storeId:101
        });
        f++;
    }
}

export { 
    getIndoorPlants,
    getOutdoorPlants,
    getTablePlants,
    addIndoorPlant,
    addOutdoorPlant,
    addTablePlant
}