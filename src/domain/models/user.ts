import { FormField } from "./form.field";

export class User {

  username?: FormField<string> = new FormField<string>()
  password?: FormField<string> = new FormField<string>()
  remember?: boolean = false
  
}