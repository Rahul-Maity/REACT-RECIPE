import React from 'react'
import { useState,useEffect } from 'react'
import  { styled }  from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
const Veggie = () => {
  const [veggie, setVeggie] = useState([]);
  useEffect(() => {
      getVeggie();
  }, []);

const getVeggie = async () => {
    
  const check = localStorage.getItem('veggie');
  if (check) {
    setVeggie(JSON.parse(check));
  }
  else {
    
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_SECRET}&number=9`);
  const data = await api.json();
  localStorage.setItem("veggie",JSON.stringify(data.recipes))
  setVeggie(data.recipes)
  console.log(data)
  }
      

  }
  return (
      <div >
         <Wrapper  >

<h3>Our vegiterian picks</h3>
<Splide options={{
  perPage: 4,
  arrows: false,
  pagination:false,
  drag: "free",
  // gap:"4rem",
}}>

  {veggie.map((recipe) => {
    const words = recipe.title.split(" ");
    const displayTitle = words.slice(0, 3).join(" ");
    return (
      <SplideSlide key={recipe.id}>

        <Card key={recipe.id}>
       
          <p>{displayTitle}</p>
          <img src={recipe.image} alt={recipe.title} />
        </Card>
      </SplideSlide>
    );
  })}
</Splide>
</Wrapper>
      
    </div>
  )
}



const Wrapper = styled.div`

margin:2rem 0rem;
`;
const Card = styled.div`
margin-top: -60px;
min-height:20rem;
min-width:20rem;
padding:3rem;
overflow:hidden;
position:relative;
p{
  position:relative;
  top:60%;
  overflow:hidden;
  font-family:Verdana;
 
  font-size:0.8rem;
  font-weight:500;
  color:rgb(128,128,128);
}
img{




  width: 21rem;
  height: 14rem;
  border-radius: 3rem;
}
`;


export default Veggie
