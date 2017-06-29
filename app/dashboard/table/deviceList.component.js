"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DeviceListComponent = (function () {
    function DeviceListComponent() {
        //  this.devices = [
        //     new Device(
        //     '11.12.12.12','Black Running Shoes', '0', '0', 'ON', 'oiewfoweijfoiwejf'),
        //     new Device(
        //     '22.12.12.12','Black Running Shoes', '0', '0', 'ON', 'oiewfoweijfoiwejf'),
        //     new Device(
        //     '33.12.12.12','Black Running Shoes', '0', '0', 'ON', 'oiewfoweijfoiwejf')
        // ]; 
        //this.onDeviceSelected = new EventEmitter();
    }
    return DeviceListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], DeviceListComponent.prototype, "deviceList", void 0);
DeviceListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'device-list',
        templateUrl: 'deviceList.component.html'
    }),
    __metadata("design:paramtypes", [])
], DeviceListComponent);
exports.DeviceListComponent = DeviceListComponent;
//# sourceMappingURL=deviceList.component.js.map