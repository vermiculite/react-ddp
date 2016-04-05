"use strict";

class MiniMeteor() {
    
    constructor(endPoint) {
        this.ws = new WebSocket(endPoint);
    }
}