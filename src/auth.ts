import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";



export const authOptions:NextAuthOptions ={
    pages:{
        signIn:'/auth/login'
    },

    providers:[
        Credentials({
            name:'credentials',
            credentials:{
                email:{},
                password:{}
            },authorize:async (credentials)=>{
                const res =await fetch(`${process.env.API}/auth/signin`,{
                    method:'POST',
                    body:JSON.stringify({
                        email:credentials?.email,
                        password:credentials?.password
                    }),
                    headers:{
                        'content-type':'application/json'
                    }
                })
                const payload = await res.json()
                if(payload.message==='success'){
                    const decode = JSON.parse(Buffer.from(payload.token.split('.')[1],'base64').toString())
                    return{
                        id:decode.id,
                        user:payload.user,
                        token:payload.token
                    }}

                  else{
                    throw new Error (payload.message || 'something went wrong')
                  }  
            }
        })
    ],
    callbacks:{
        async jwt({ token, user }) {
           
            if(user?.user && user?.token){
                token.user=user.user,
                token.token=user.token
            }
    return token
  },
  async session({ session, token }) {
    
    if (token?.user) {
      session.user = token.user;
    } else {
      session.user = null
    }
    return session
  }
    }
}