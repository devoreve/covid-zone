import {config} from './config.js';
import Map from './modules/Map.js';
import IQApi from "./modules/IQApi.js";
import LocalStorage from './modules/LocalStorage.js';
import MapCanvas from "./modules/MapCanvas.js";

document.addEventListener('DOMContentLoaded', () => {

    const storage = new LocalStorage('config');
    const settings = storage.load();

    const radiusInput = document.querySelector('#radius');

    let map;

    if (settings) {
        map = Map.fromJSON(settings);
        radiusInput.value = map.radius / 1000;
    } else {
        map = new Map(config.data.default.lat, config.data.default.lng, config.data.default.zoom, config.data.default.radius);
    }

    const api = new IQApi(config.services.iq.api_key);
    const mapCanvas = new MapCanvas(map, api, 'map');

    document.querySelector('#config form').addEventListener('submit', (e) => {
        e.preventDefault();
        const radius = radiusInput.value;
        mapCanvas.updateCircle(radius * 1000);
    });
});