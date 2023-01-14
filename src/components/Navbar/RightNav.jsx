import styled from "styled-components"

const UL = styled.ul`

display: none;
   
   @media (min-width: 375px) and (max-width: 768px){
       list-style: none; 
       display: flex;
       flex-flow: row nowrap;
    
       li {
           padding: 18px 30px;
           color: #FFF;
       }
       flex-flow: column nowrap;
       background-color: #f69999;
       position: fixed;
       transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
       top: 0;
       right: 0;
       height: 100vh;
       width: 300px;
       padding-top: 3.5rem;
       z-index: 3;
       transition: trasnform 0.3s ease-in-out;
   }


`;


export default function RightNav({open}) {
    return(
        <UL open ={open}>
            <li>Inicio</li>
            <li>Acceso</li>
            <li>Acerca de nosotros</li>
        </UL>
    )
}
