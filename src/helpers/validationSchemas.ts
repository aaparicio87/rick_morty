import { REGEX_PASSWORD } from './constants'
import { z } from "zod";


const LOGIN_VALIDATION_SCHEMA = z.object({
    email: z.string()
            .min(1, "E-mail is required")
            .email({ message: "Invalid email address" }), 
            
    password: z.string()
               .min(1,"Password is required")
               .regex(REGEX_PASSWORD, 'Password must contain Upper case, lower case, special character and min length 6') 
})



  const SIGN_UP_VALIDATION_SCHEMA = z.object({
  
    email: z.string()
    .min(1, "E-mail is required")
    .email({ message: "Invalid email address" }),
  
    password: z.string()
                 .min(1, 'Password is required')
                .regex(REGEX_PASSWORD, 'Password must contain Upper case, lower case, special character and min length 6'),
  
    confirm: z
            .string()
            .min(1, 'Confirm password is required')
    }).refine((data) => data.password === data.confirm, {
      message: "Passwords must match",
      path:["confirm"]
    })


export {
    LOGIN_VALIDATION_SCHEMA,
    SIGN_UP_VALIDATION_SCHEMA,
}