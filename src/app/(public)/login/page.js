"use client"
import { useRouter } from "next/navigation";
import React from "react";

function LoginPage() {

  const router = useRouter();

  const handleLogin = () =>{

    if(email && senha){
      router.push("/")
    }
  }

  return (
    <>
      <div>LoginPage</div>
      <input type="text"/>
      <input type="password"/>
      <button onClick={handleLogin}>Entrar</button>
    </>
  );
}

export default LoginPage;
