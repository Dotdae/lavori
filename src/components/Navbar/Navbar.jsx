import { Link } from "react-router-dom";
import styled from "styled-components";
import Burguer from "./Burguer";

const Nav = styled.nav`
 
  display: flex;
    justify-content: space-between;
    width: 100%;
    height: 85px;
    padding: 0 20px;
    padding-top: 15px;
    background-color: pink;

    .logo{
        img{
            width: 130px;
            cursor: pointer;
        }
    }

    nav{
        ul{
            margin-top: 15px;
            li{
                list-style: none;
                display: inline-block;
                margin: 0 20px;
                position: relative;
                a{
                    text-decoration: none;
                    color: purple;
                    font-size: 1.2rem;
                }
                &::before{
                    content: "";
                    height: 3px;
                    width: 0%;
                    background: purple;
                    position: absolute;
                    left: 0;
                    bottom: -8px;
                    transition: 0.4s ease-out;
                }
                &:hover::before{
                    width: 100%;
                }
            }
        }
    }


    @media (min-width: 375px) and (max-width: 768px){
        .nav-menu{
            display: none;
        }
    }
`;

export default function Navbar() {
  return (
    <Nav>
      <div className="logo">
        <Link to={"/"}>
          <img src="" alt="Logo" />
        </Link>
      </div>
      <div className="nav-menu">
        <nav>
          <ul>
            <li className="nav-item">
              <Link to={"/"}>Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to={"/access"}>Acceso</Link>
            </li>
            <li className="nav-item">
              <Link to={"/about"}>Acerca de nosotros</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Burguer />
    </Nav>
  );
}
