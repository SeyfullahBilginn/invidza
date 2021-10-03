import {getAllInvitersLists} from "../firebase/firestore"

class ListsStore {
    lists = [];

    async initializeLists() {
        this.lists = await getAllInvitersLists()
    }
    getLists() {
        return this.lists;
    }
}
export const listsStore = new ListsStore();