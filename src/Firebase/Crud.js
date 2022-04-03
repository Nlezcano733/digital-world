import firebase from "firebase";
import { getFirestore } from "./index";

class Crud {
	constructor() {
		this.db = getFirestore();
	}

	list(collection) {
		return this.db.collection(collection).get();
	}

	post(collection, data) {
		this.db.collection(collection).set(data);
	}

	getId(collection, data) {
		return this.db.collection(collection).where(
			firebase.firestore.FieldPath.documentId(),
			"in",
			data?.map((d) => d.id)
		);
	}

	update(id, data) {
		const batch = this.db.batch();

		this.list().then((snapshot) => {
			snapshot.docs.forEach((doc) => {
				if (doc.id === id) {
					batch.update(doc.ref, { ...data });
				}
			});
		});
	}
}

export const database = new Crud();
