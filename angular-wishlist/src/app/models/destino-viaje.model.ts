export class DestinoViaje {
    private selected: boolean = false;
    public servicios: string[];

    constructor(public nombre:string, imageUrl:string) { 
        this.servicios = ['pileta', 'desayuno']
     }

    isSelected(): boolean {
        return this.selected;
    }

    setSelected(s: boolean) {
        this.selected = s;
    }
}