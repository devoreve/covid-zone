class Map {
    constructor(lat, lng, zoom, radius) {
        this._lat = lat;
        this._lng = lng;
        this._zoom = zoom;
        this._radius = radius;
    }

    toJSON() {
        return {
            lat: this.lat,
            lng: this.lng,
            zoom: this.zoom,
            radius: this.radius
        }
    }

    static fromJSON(data) {
        return Object.create(Map.prototype, Object.getOwnPropertyDescriptors(data));
    }

    get lat() {
        return this._lat;
    }

    set lat(lat) {
        return this._lat;
    }

    get lng() {
        return this._lng;
    }

    set lng(lng) {
        this._lng = lng;
    }

    get zoom() {
        return this._zoom;
    }

    set zoom(zoom) {
        this._zoom = zoom;
    }

    get radius() {
        return this._radius;
    }

    set radius(radius) {
        this._radius = radius;
    }
}

export default Map;