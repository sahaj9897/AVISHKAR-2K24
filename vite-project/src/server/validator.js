import * as zod from 'zod';
const Userschema = zod.object({
    Name: zod.string({message: "Name is required" }),
    Email: zod.string().email({message:"invalid email format"}),
    Password: zod.string({ message: "Password is required" }).min(8, { message: "Minimum 8 character required" })
});

export { Userschema };