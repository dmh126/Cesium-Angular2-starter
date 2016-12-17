import {Component, ViewChild} from 'angular2/core';


@Component({
    selector: 'viewer',
    styles: [require('./viewer.scss')],
    template: require('./viewer.html')
})
export class Viewer {
    @ViewChild('cesiumViewer') container;
    public viewer: Cesium.Viewer;

    ngOnInit() {
        // this.title.getData().subscribe(data => this.data = data);
        this.viewer = new Cesium.Viewer('cesiumContainer');
    }
}
