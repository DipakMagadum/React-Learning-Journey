import React from 'react'
import styled from "styled-components"

 const Header = styled.header`
    display:flex;
    justify-content: space-between;
    background-color:cyan;
    padding:10px 20px;
    `
    const Nav = styled.nav`
   display:flex;
   gap:15px;
    `
    const Anchar = styled.a`
    color:black;
    text-decoration:none;
    `
function Navbar() {
  return (
    <>
    <Header>
    <Nav>
       <Anchar href="#">Home</Anchar>
       <Anchar href="#">About</Anchar>
       <Anchar href="#">Login</Anchar>
    </Nav>
    </Header>
    </>
  )
}

export default Navbar