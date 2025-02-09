export class Todo{
    sno: number
    title: string
    desc: string
    active: boolean

    constructor(sno: number, title: string, desc: string){
        this.sno = sno;
        this.title = title;
        this.desc = desc;
        this.active = true;
    }
}