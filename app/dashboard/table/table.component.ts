import { Component, OnInit,AfterViewInit,trigger,state,style,transition,animate,keyframes,EventEmitter,NgModule } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Device } from './device.model';

// import { DeviceListComponent } from './deviceList.component';

// @NgModule({ 
//     declarations: [ DeviceListComponent ]
// })

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

    //@Input() deviceList: Device[];
    devices :Device[];

    constructor(private http: Http) { 
        
        //this.http = http;
        
        // this.devices = [
        // new Device(
        // '11.12.12.12','Black Running Shoes', '0', '0', 'ON', 'oiewfoweijfoiwejf'),
        // new Device(
        // '22.12.12.12','Black Running Shoes', '0', '0', 'ON', 'oiewfoweijfoiwejf'),
        // new Device(
        // '33.12.12.12','Black Running Shoes', '0', '0', 'ON', 'oiewfoweijfoiwejf')
        // ];

        this.http.request('http://nodejs-mongo-persistent-checkmd.7e14.starter-us-west-2.openshiftapps.com/getalldb') .subscribe((res: Response) => {
            this.data = res.json();

            console.log('data : ' + this.data );
            //this.devices = this.data['db'];

            this.loading = false; 
        });

    }

    // deviceWasSelected(device: Device): void { 
    //     console.log('Product clicked: ', device);
    // }
}
