export class Project {
  _id: number;
   imageUrl: string;
   title: string;
   year: number;
   blurb: string;
   images: Array<object>;
   
  constructor(values: Object ={}){
    Object.assign(this, values);
  }
}


