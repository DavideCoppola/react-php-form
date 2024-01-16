import { makeObservable, observable } from "mobx";

export interface IFormStore {
  name: string;
  email:string;
  telephoneNumber: number | null;
  website: string;
  message: string;
}

class FormStore implements IFormStore {
  name = '';
  email = '';
  telephoneNumber = null;
  website = '';
  message = '';

  constructor() {
    makeObservable(this, {
      name: observable,
      email: observable,
      telephoneNumber: observable,
      website: observable,
      message: observable
    })
  }  

}

export default FormStore;