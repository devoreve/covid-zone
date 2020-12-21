import LocalStorage from "./LocalStorage.js";

class MapCanvas {
    constructor(map, api, element) {
        this._map = map;
        this._api = api;
        this.storage = new LocalStorage('config');
        this._canvas = L.map(element).setView([this.map.lat, this.map.lng], this.map.zoom);
        L.tileLayer(this._api.tileLayer + '?key=' + this._api.apiKey).addTo(this._canvas);

        this._circle = L.circle([map.lat, map.lng], {
            color: 'purple',
            stroke: false,
            fillColor: 'purple',
            fillOpacity: 0.2,
            radius: this.map.radius
        }).addTo(this._canvas);

        this._marker = L.marker([map.lat, map.lng]).addTo(this._canvas);

        L.control.geocoder(this._api.apiKey, {
            markers: false
        }).addTo(this._canvas).on('select', (e) => {
            this.map.lat = e.latlng.lat;
            this.map.lng = e.latlng.lng;

            this.updatePosition();

            this.storage.save(this.map);
        });

        L.control.locate({
            setView: false,
            clickBehavior: {inView: 'stop', outOfView: 'stop', inViewNotFollowing: 'stop'},
            strings: {
                title: "Où suis-je ?",
                popup: "Vous êtes dans un rayon de {distance} {unit} de ce point",
                metersUnit: "mètres",
            }
        }).addTo(this._canvas);
    }

    updatePosition() {
        this._circle.setLatLng([this.map.lat, this.map.lng]);
        this._marker.setLatLng([this.map.lat, this.map.lng]);
        this._canvas.setZoom(this.map.zoom);
    }

    updateCircle(radius) {
        this.map.radius = radius;
        this._circle.setRadius(this.map.radius);

        this.map.zoom = this._canvas.getBoundsZoom(this._circle.getBounds());
        this._canvas.setZoom(this.map.zoom);

        this.storage.save(this.map);
    }

    get map () {
        return this._map;
    }

    set map(map) {
        this._map = map;
    }

    get api() {
        return this._api;
    }

    set api(api) {
        this._api = api;
    }
}

export default MapCanvas;