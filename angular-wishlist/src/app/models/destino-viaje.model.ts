import {v4 as uuid} from 'uuid';

export class DestinoViaje {
    
    private selected: boolean = false;
    public servicios: string[];
    id = uuid();

    constructor(public nombre: string, public imageUrl: string) { 
        this.servicios = ['pileta', 'desayuno']
     }

    isSelected(): boolean {
        return this.selected;
    }

    setSelected(s: boolean) {
        this.selected = s;
    }
}