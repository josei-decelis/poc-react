import React from 'react'

const Nav = () =>{
    return(
        <nav>
            <ul>
                <li><a href="#">Gaming</a>
                </li>
                <li><a href="#">Streaming</a></li>
            </ul>
            <form>
                <label>Buscador</label>
                <input type="text" />
                <input type="button" value="Buscar" />
            </form>
        </nav>
    )
}

const Header = () => {
    return (
        <div>
            <h1>Titulo principal</h1>
            <Nav></Nav>
        </div>
    )
}

export default Header