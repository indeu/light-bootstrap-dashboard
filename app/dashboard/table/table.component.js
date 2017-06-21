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
var http_1 = require("@angular/http");
// import { DeviceListComponent } from './deviceList.component';
// @NgModule({ 
//     declarations: [ DeviceListComponent ]
// })
var TableComponent = (function () {
    function TableComponent(http) {
        //this.http = http;
        var _this = this;
        this.http = http;
        // this.devices = [
        // new Device(
        // '11.12.12.12','Black Running Shoes', '0', '0', 'ON', 'oiewfoweijfoiwejf'),
        // new Device(
        // '22.12.12.12','Black Running Shoes', '0', '0', 'ON', 'oiewfoweijfoiwejf'),
        // new Device(
        // '33.12.12.12','Black Running Shoes', '0', '0', 'ON', 'oiewfoweijfoiwejf')
        // ];
        this.http.request('http://nodejs-mongo-persistent-checkmd.7e14.starter-us-west-2.openshiftapps.com/getalldb').subscribe(function (res) {
            _this.data = res.json();
            console.log('data : ' + _this.data);
            //this.devices = this.data['db'];
            _this.loading = false;
        });
    }
    return TableComponent;
}());
TableComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'table-cmp',
        templateUrl: 'table.component.html',
        animations: [
            core_1.trigger('cardtable1', [
                core_1.state('*', core_1.style({
                    '-ms-transform': 'translate3D(0px, 0px, 0px)',
                    '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                    '-moz-transform': 'translate3D(0px, 0px, 0px)',
                    '-o-transform': 'translate3D(0px, 0px, 0px)',
                    transform: 'translate3D(0px, 0px, 0px)',
                    opacity: 1
                })),
                core_1.transition('void => *', [
                    core_1.style({ opacity: 0,
                        '-ms-transform': 'translate3D(0px, 150px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                        '-moz-transform': 'translate3D(0px, 150px, 0px)',
                        '-o-transform': 'translate3D(0px, 150px, 0px)',
                        transform: 'translate3D(0px, 150px, 0px)',
                    }),
                    core_1.animate('0.3s 0s ease-out')
                ])
            ]),
            core_1.trigger('cardtable2', [
                core_1.state('*', core_1.style({
                    '-ms-transform': 'translate3D(0px, 0px, 0px)',
                    '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                    '-moz-transform': 'translate3D(0px, 0px, 0px)',
                    '-o-transform': 'translate3D(0px, 0px, 0px)',
                    transform: 'translate3D(0px, 0px, 0px)',
                    opacity: 1
                })),
                core_1.transition('void => *', [
                    core_1.style({ opacity: 0,
                        '-ms-transform': 'translate3D(0px, 150px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                        '-moz-transform': 'translate3D(0px, 150px, 0px)',
                        '-o-transform': 'translate3D(0px, 150px, 0px)',
                        transform: 'translate3D(0px, 150px, 0px)',
                    }),
                    core_1.animate('0.3s 0.25s ease-out')
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [http_1.Http])
], TableComponent);
exports.TableComponent = TableComponent;
//# sourceMappingURL=table.component.js.map