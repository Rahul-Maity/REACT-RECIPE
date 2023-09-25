import React from 'react'
import { useState,useEffect } from 'react'
import  { styled }  from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
const Popular = () => {
  const [popular, setPopular] = useState([]);
    useEffect(() => {
        getPopular();
    }, []);

  const getPopular = async () => {
      
    const check = localStorage.getItem('popular');
    if (check) {
      setPopular(JSON.parse(check));
    }
    else {
      
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_SECRET}&number=9`);
    const data = await api.json();
    localStorage.setItem("popular",JSON.stringify(data.recipes))
    setPopular(data.recipes)
    console.log(data)
    }
        

    }
  return (
    <div>
      
       
        
      <Wrapper >
        <h3>Popular picks</h3>

        <Splide options={{
          perPage: 4,
          arrows: false,
          pagination:false,
          drag: "free",
          // gap:"4rem",
        }}>

          {popular.map((recipe) => {
            const words = recipe.title.split(" ");
            const displayTitle = words.slice(0, 3).join(" ");
            return (
              <SplideSlide key={recipe.id} >

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
  );
}

const Wrapper = styled.div`
margin: -6.600000000000001rem 0rem;


`;
const Card = styled.div`
top:0%;
min-height:20rem;
min-width:20rem;
padding:3rem;
overflow:hidden;
position:relative;
p{
  position:absolute;
  z-index:3;
  top:50%;
  left:20%;
  color:white;
  overflow:hidden;
  font-family:Verdana;
 
  font-size:0.9rem;
  font-weight:500;

}
img{




  width: 21rem;
  height: 14rem;
  border-radius: 3rem;
}
`;

export default Popular
