

export class Troublemaker {
    static total:number = 0
    public resolved:boolean
    public date_added:number
    id:number
    constructor(public name:string, public phone_num:string, public location:string, 
                public reportedBy:string, public extra_info?:string,
                public image_link:string = "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg") {
        this.resolved = false;
        this.date_added = new Date().getTime()
        this.id = Troublemaker.total
        Troublemaker.total++
    }
}