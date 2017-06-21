"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Device = (function () {
    function Device(addr, name, startTime, dueTime, status, token) {
        this.addr = addr;
        this.name = name;
        this.startTime = startTime;
        this.dueTime = dueTime;
        this.status = status;
        this.token = token;
    }
    return Device;
}());
exports.Device = Device;
//# sourceMappingURL=device.model.js.map