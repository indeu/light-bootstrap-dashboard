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
var http_2 = require("@angular/http");
var device_model_1 = require("./device.model");
var TableComponent = (function () {
    function TableComponent(http) {
        var _this = this;
        this.http = http;
        this.devices = [];
        this.http = http;
        this.onDeviceSelected = new core_1.EventEmitter();
        var link = 'http://nodejs-mongo-persistent-checkmd.7e14.starter-us-west-2.openshiftapps.com/';
        var apiLink = link + 'getalldb';
        var headers = new http_2.Headers({ 'Access-Control-Allow-Origin': '*', 'Content-type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        console.log('get http : ' + apiLink);
        //this.http.get('http://.../test.php') .subscribe(data => data.json());
        var req = this.http.get(apiLink); //, options);
        req.subscribe(function (response) {
            _this.data = response.json();
            _this.loading = false;
            ;
            console.log('this.data : ' + _this.data['db']);
            var obj = JSON.parse(_this.data['db'].toString());
            console.log(obj);
            //var a = (Array)(obj).length;
            var i = 0;
            //for(var i = 0; i < a ; i++){
            while (true) {
                if (obj[i] == null)
                    break;
                var date_start = new Date(null);
                date_start.setSeconds(obj[i].startTime / 1000);
                var date_end = new Date(null);
                date_end.setSeconds(obj[i].endTime / 1000);
                _this.devices.push(new device_model_1.Device(obj[i].addr.replace("1", "*").replace("3", "*").replace("4", "*").replace("2", "*").replace("22", "*").replace("9.", "*."), obj[i].name, date_start.toISOString().substr(11, 8), date_end.toISOString().substr(11, 8), obj[i].status, obj[i].token));
                i++;
            }
        }, function (err) { return _this.handleErrorObservable(err); });
    }
    TableComponent.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return null;
    };
    TableComponent.prototype.deviceWasSelected = function (device) {
        console.log('Product clicked: ', device);
    };
    return TableComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], TableComponent.prototype, "deviceList", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], TableComponent.prototype, "onDeviceSelected", void 0);
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