import { action, makeObservable, observable } from "mobx";

export interface IFormStore {
  name: string;
  email:string;
  telephoneNumber: string;
  website: string;
  message: string;
  setEmail: (v: string) => void;
  setName: (v: string) => void;
  setTelephone: (v: string) => void;
  setMessage: (v: string) => void;
  setWebsite: (v: string) => void;
}

class FormStore implements IFormStore {
  name = '';
  email = '';
  telephoneNumber = '';
  website = '';
  message = '';

  constructor() {
    makeObservable(this, {
      name: observable,
      email: observable,
      telephoneNumber: observable,
      website: observable,
      message: observable,
      setEmail: action,
      setName: action,
      setTelephone: action,
      setMessage: action,
      setWebsite: action
    })
  }
  
  setEmail(value: string) {
    console.log('email');
    this.email = value;
  }

  setName(value: string) {
    console.log('name');
    this.name = value;
  }

  setTelephone(value: string) {
    console.log('telephone');
    this.telephoneNumber = value;
  }

  setMessage(value: string) {
    console.log('message');
    this.message = value;
  }

  setWebsite(value: string) {
    console.log('website');
    this.website = value;
  }

}

export default FormStore;