import { NewsModel } from "../models/newsModel";

const NewsController = class {
  save() {

    const kitty = new NewsModel({ title: 'Zildjian', status:false, created_at: new Date(), updated_at: new Date() });

    kitty.save().then(() => console.log('meow'));


  }
};
  
export default new NewsController();