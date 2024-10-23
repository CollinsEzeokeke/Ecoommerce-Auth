"use client"
import client from "@/lib/auth-Client"; //import the auth client
import { useState } from 'react';
import Loading from "@/app/loading";
import { useRouter } from "next/navigation";
 
export default function SignUp() {
  const router = useRouter()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
 
  const signUp = async () => {
    const { data, error } = await client.signUp.email({ 
        email, 
        password, 
        name
     }, { 
        onRequest: (ctx) => { 
         //show loading
         <Loading/>
         console.log(data)
         console.log(error)
        }, 
        onSuccess: (ctx) => { 
          //redirect to the dashboard
          router.replace('/dashboard');
          console.log("i was meant to be redirected but i did not want to" + ctx)
        }, 
        onError: (ctx) => { 
          alert(ctx.error.message); 
        }, 
      }); 
  };
 
  return (
    <div>
      <input type="name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={signUp}>Sign Up</button>
    </div>
  );
}