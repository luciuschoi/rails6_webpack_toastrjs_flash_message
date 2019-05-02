import { Controller } from 'stimulus';
import toastr from 'toastr';

export default class extends Controller {
  static targets = [ 'toastr_info' ]

  connect(){
    console.log(this.data.get("messages"))
    if(this.data.get("messages")){
      toastr.success(this.data.get("messages")) 
    }

  }
}