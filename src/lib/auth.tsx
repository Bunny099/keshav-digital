import  CredentialsProvider  from "next-auth/providers/credentials";
import { AuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";
import {prisma} from "./db"
import bcrypt from "bcryptjs";



export const authOptions:AuthOptions={
    providers:[
        CredentialsProvider({
            credentials:{
                email:{},
                password:{},
                role:{}
            },
            async authorize(credentials) {
                if(!credentials?.email || !credentials.password){
                    throw new Error("Missing email or password")
                }
                const user = await prisma.admin.findUnique({where:{email:credentials.email}});

                if(!user || !user.password){
                    throw new Error("User not found")
                }
                const corretPass = await bcrypt.compare(credentials.password,user.password)
                if(!corretPass){
                    throw new Error("Invalid email or password")
                }
               
                return {id:user.id, email:user.email, role:user.role}
            },

        })
    ],
    secret:process.env.NEXTAUTH_SECRET,
    session:{strategy:"jwt"},
    callbacks:{
        async jwt({token,user}:{token:JWT;user?:any}){
            if(user){
                token.id = user.id;
                token.email = user.email;
                token.role = user.role

            }
          
            return token
        },
        async session({session,token}:{session:Session;token:JWT}){
            if(session.user){
                session.user.id = token.id;
                session.user.email = token.email;
                session.user.role = token.role as string
            }
           
            return session;
        }
    }
} 
