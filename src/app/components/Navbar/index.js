"use client";
import React, { useEffect, useState } from "react";
import { NavbarListLinks, NavbarContainer } from "./styles";
import Link from "next/link";
import ButtonCustom from "../ButtonCustom";
function Navbar() {
  const [colorDiff, setColorDiff] = useState("#a83649");
  const [count, setCount] = useState(0);
  const [alt, setAlt] = useState(0);

  const handleChangeColor = () => {

  }
  
  return (
    <NavbarContainer>
      <div>
        {count}
        <ButtonCustom id="#neto" text={"Count"} color={colorDiff} onClick={handleChangeColor} set={setCount} count={count}>
          TEXTO FILHO
        </ButtonCustom>
      </div>
      <div>
        <h2>
          <Link href="/">Kain's DEV</Link>
        </h2>
      </div>
      <NavbarListLinks diff={colorDiff}> 
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/contact">Contato</Link>
        </li>
        <li>
          <Link href="/about">Sobre</Link>
        </li>
      </NavbarListLinks>
      <div>
        <Link href="/login">Login</Link>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
