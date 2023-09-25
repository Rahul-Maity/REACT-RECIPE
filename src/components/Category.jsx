import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles ,GiChopsticks} from 'react-icons/gi';

import { NavLink } from 'react-router-dom';
import React from 'react'
import styled from 'styled-components';



const Category = () => {
  return (
    <List>
          <NavLink to={'/cuisine/Italian'}>
              <div>
                  
              <FaPizzaSlice />
              <h4>Italian</h4>
              </div>
      </NavLink >
          <NavLink to={'/cuisine/American'}>
              <div>
                  
              <FaHamburger />
              <h4>American</h4>
            </div>
      </NavLink>
          <NavLink to={'/cuisine/Thai'}>
              <div>
                  
              <GiNoodles />
              <h4>Thai</h4>
              </div>
      </NavLink>
          <NavLink to={'/cuisine/Japanese'}>
              <div>
                  
              <GiChopsticks />
              <h4>Japanese</h4>
              </div>
      </NavLink>
    </List>
  )
}
const List = styled.div`
display:flex;
justify-content:center;
margin:2rem;

div{
text-align:center;
padding:1rem;

}
`
export default Category
