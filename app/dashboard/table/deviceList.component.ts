import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Device } from './device.model';

@Component({
    selector: 'device-list',
    templateUrl: '/app/dashboard/table/deviceList.component.html'
})

export class DeviceListComponent {

    @Input() deviceList:Device[];

    @Output() onDeviceSelected: EventEmitter<Device>;

    //devices :Device[];

    // constructor() { this.deviceList = [
    //     new Device(
    //     '11.12.12.12','Black Running Shoes', '0', '0', 'ON', 'oiewfoweijfoiwejf'),
    //     new Device(
    //     '22.12.12.12','Black Running Shoes', '0', '0', 'ON', 'oiewfoweijfoiwejf'),
    //     new Device(
    //     '33.12.12.12','Black Running Shoes', '0', '0', 'ON', 'oiewfoweijfoiwejf')
    //     ]; 

    //     this.onDeviceSelected = new EventEmitter();
    // }

    deviceWasSelected(device: Device): void { 
        console.log('Product clicked: ', device);
    }

}