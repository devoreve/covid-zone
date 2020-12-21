class LocalStorage {
    constructor(storageName) {
        this._storageName = storageName;
    }

    save(data) {
        localStorage.setItem(this.storageName, JSON.stringify(data));
    }

    load() {
        return JSON.parse(localStorage.getItem(this.storageName));
    }

    get storageName() {
        return this._storageName;
    }

    set storageName(storageName) {
        this._storageName = storageName;
    }
}

export default LocalStorage;