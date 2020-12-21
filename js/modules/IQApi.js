class IQApi {
    constructor(apiKey) {
        this._apiKey = apiKey;
        this._tileLayer = 'https://{s}-tiles.locationiq.com/v2/obk/r/{z}/{x}/{y}.png';
    }

    get apiKey() {
        return this._apiKey;
    }

    set apiKey(apiKey) {
        this._apiKey = apiKey;
    }

    get tileLayer() {
        return this._tileLayer;
    }

    set tileLayer(tileLayer) {
        this._tileLayer = tileLayer;
    }
}

export default IQApi;