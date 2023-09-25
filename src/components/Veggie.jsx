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
    
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_SECRET}&number=9&tags=vegetarian`);
  const data = await api.json();
  localStorage.setItem("veggie",JSON.stringify(data.recipes))
  setVeggie(data.recipes)
  console.log(data)
  }
      

  }
  return (
      <div >
         <Wrapper  >

      <h3>OUR VEGETARIAN PICKS</h3>
<Splide options={{
  perPage: 4,
  arrows: false,
  pagination:false,
  drag: "free",
  // gap:"4rem",
}}>

  {veggie.map((recipe) => {
    const words = recipe.title.split(" ");
    // const displayTitle = words.slice(0, 3).join(" ");
    return (
      <SplideSlide key={recipe.id}>

        <Card key={recipe.id}>
       
          <p>{recipe.title}</p>
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
position:relative;
margin:2rem 0rem;

h3{
  font-size:1rem;
color:grey;
letter-spacing:3px;

  text-align:center;

}


`;


const Card = styled.div`

margin-top: -50px;
min-height:20rem;
min-width:20rem;
padding:3rem;
z-index:1;
overflow:hidden;
position:relative;

p{
  text-align: justify;
  text-justify: inter-word;
  z-index:5;
position:absolute;
  top:60%;
  left:15%;
  // overflow:hidden;
  font-family:Verdana;
 
  font-size:0.9rem;
  font-weight:500;
  color:white
}
img{

  background:linear-gradient(to left top, blue, red);
  top: 20%;
  left: 10%;
  background-fit:cover;
position:absolute;



  width: 21rem;
  height: 14rem;
  border-radius: 3rem;
}
`;


export default Veggie
