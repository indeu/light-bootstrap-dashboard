import { Component, OnInit,AfterViewInit,trigger,state,style,transition,animate,keyframes,EventEmitter,NgModule,Input, Output } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Headers } from '@angular/http';

import { Device } from './device.model';

@Component({
    moduleId: module.id,
    selector: 'table-cmp',
    templateUrl: 'table.component.html',
    animations: [
        trigger('cardtable1', [
            state('*', style({
                '-ms-transform': 'translate3D(0px, 0px, 0px)',
                '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                '-moz-transform': 'translate3D(0px, 0px, 0px)',
                '-o-transform':'translate3D(0px, 0px, 0px)',
                transform:'translate3D(0px, 0px, 0px)',
                opacity: 1})),
                transition('void => *', [
                    style({opacity: 0,
                        '-ms-transform': 'translate3D(0px, 150px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                        '-moz-transform': 'translate3D(0px, 150px, 0px)',
                        '-o-transform':'translate3D(0px, 150px, 0px)',
                        transform:'translate3D(0px, 150px, 0px)',
                    }),
                    animate('0.3s 0s ease-out')
                ])
        ]),
        trigger('cardtable2', [
            state('*', style({
                '-ms-transform': 'translate3D(0px, 0px, 0px)',
                '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                '-moz-transform': 'translate3D(0px, 0px, 0px)',
                '-o-transform':'translate3D(0px, 0px, 0px)',
                transform:'translate3D(0px, 0px, 0px)',
                opacity: 1})),
                transition('void => *', [
                    style({opacity: 0,
                        '-ms-transform': 'translate3D(0px, 150px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                        '-moz-transform': 'translate3D(0px, 150px, 0px)',
                        '-o-transform':'translate3D(0px, 150px, 0px)',
                        transform:'translate3D(0px, 150px, 0px)',
                    }),
                    animate('0.3s 0.25s ease-out')
                ])
        ])
    ]
})

export class TableComponent{ 

    //http: Http;

    data: Object; 
    loading: boolean;

    @Input() deviceList: Device[];
    //@Output() onDeviceSelected: EventEmitter<Device>;

    devices :Device[] = [];

    constructor(private http: Http) { 
        
        this.http = http;

        //this.onDeviceSelected = new EventEmitter();

        let link = 'http://nodejs-mongo-persistent-checkmd.7e14.starter-us-west-2.openshiftapps.com/';
        let apiLink = link + 'getalldb';


        let headers = new Headers({'Access-Control-Allow-Origin' : '*', 'Content-type' : 'application/json' }); 
        let options = new RequestOptions({ headers: headers }); 

        console.log('get http : ' + apiLink );

        //this.http.get('http://.../test.php') .subscribe(data => data.json());

        let req = this.http.get(apiLink);//, options);

        req.subscribe(
            response => { 

                this.data = response.json();

                this.loading = false; 

                interface device {
                    addr: string,
                    name: string,
                    startTime: string,
                    endTime: string,
                    status: string,
                    token: string
                };

                console.log('this.data : ' + this.data['db']);

                interface MyObj {
                    name: string
                    description: string
                }

                let obj : { dev: device[] } = JSON.parse(this.data['db'].toString());
                
                console.log( obj );

                //var a = (Array)(obj).length;
                
                var i = 0;
                //for(var i = 0; i < a ; i++){
                while (true) {
                    if ( obj[i] == null )
                        break;

                    var date_start = new Date(null);
                    date_start.setSeconds(obj[i].startTime / 1000);
                    var date_end = new Date(null);
                    date_end.setSeconds(obj[i].endTime / 1000);

                    this.devices.push( 
                        new Device(obj[i].addr.replace("1", "*").replace("3", "*").replace("4", "*").replace("2", "*").replace("22", "*").replace("9.", "*."), 
                                   obj[i].name, date_start.toISOString().substr(11, 8), date_end.toISOString().substr(11, 8), 
                                   obj[i].status, obj[i].token )
                    );
                    i++;
                }
                
            },
            err => this.handleErrorObservable(err)
        );
    }

    private handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return null;
    } 
    // deviceWasSelected(device: Device): void { 
    //     console.log('Product clicked: ', device);
    // }
}
