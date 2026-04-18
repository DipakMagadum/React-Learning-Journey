import React from 'react'
import styled from "styled-components"
function App() {

    // if you want to use styled-component then  you have to write the first letter variable in capital 
    const Heading = styled.h1`
    text-align:center;
    color:cyan;
    background-color:gray;
    `; 

    const Paragraph = styled.p`
    text-align:center;
    color:pink;
    background-color:gray;
    border:1px solid black;
    `;

    // In object way to write Style-componet
    const Heading2 = styled.h2 (
      {
        color:"purple",
        backgroundColor:"gray",
      }
    )

    const Btn = styled.button`
    text-align:center;
    padding:3px;
    border:1px solid green;
    cursor:pointer;
    `
  return (
    <>
    <h1>Styled-Component In React-js</h1>
    {/* Styled-Component Heading */}
    <Heading> This heading is created by using styled-component</Heading>
    <Heading>This is second heading</Heading>

{/* styled-component Paragraph */}

    <Paragraph>This is a paragraph created by using styled-component <br/> <br/>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus numquam iusto aliquid sapiente maiores consectetur explicabo a fugiat assumenda harum doloribus quasi cum sed voluptatibus quod quos velit, incidunt debitis!
      Distinctio optio quas dolorum facilis ut totam corrupti facere obcaecati magni illum magnam doloremque repudiandae, neque ex delectus exercitationem rem harum veniam. Delectus vel commodi non porro accusamus laudantium consectetur?
      Sunt nobis doloribus fugiat in deleniti! Facilis vitae consequuntur amet quidem reprehenderit autem voluptate. Repellendus ipsam tempore, tempora officia soluta dolore sequi culpa deserunt et aliquam cum dolorum laborum expedita!
      Ducimus ullam nam, quaerat est cumque deleniti, iusto dignissimos voluptatibus, explicabo sed neque enim in quod totam? Optio fugiat ipsa voluptatibus atque iusto. Asperiores, vero tempore est explicabo qui beatae.
      Quo natus numquam ipsum quam optio porro illum assumenda amet ratione ullam debitis sequi ducimus perferendis, reprehenderit sit in ad saepe rem aspernatur facere. Doloribus pariatur cum optio quisquam tenetur.
    </Paragraph>

    {/* styled-component heading using boject */}
    <Heading2>This is a Heading Created by Styled-component and write css in object way</Heading2>

    {/* Button using styled-component */}
    <Btn>Styled-component</Btn> <br />
    <Btn>Button two</Btn>
    </>
  )
}

export default App;