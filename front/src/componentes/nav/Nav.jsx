import style from './Nav.module.css'
import SearchBar from "../searchBar/SearchBar";
import { NavLink } from 'react-router-dom';
import favoriteIcon from '../Images/favoriteIcon.svg'
import { useLocation, useNavigate } from 'react-router-dom';
import searchIcon from '../Images/searchIcon.svg'
import randomIcon from '../Images/randomIcon.svg'
import { useState } from 'react';
import filterIcon from '../Images/filterIcon.svg'

const Nav = ({ onSearchRandom, onSearch, logout, menuBurger, handleMenuBurger, handleFilterResponsive, filterResponsive }) => {
    const location = useLocation().pathname;
    const navigate = useNavigate();
    const [id, setId] = useState("")
    const handleChangeId = (event) => {
        setId(event.target.value)
    }

    const handleEnter = (event) => {
        if(event.keyCode === 13) {
           onSearch(id)
           setId('')
        }
     }

    return (
        <nav className={style.nav}>
            <NavLink to={('/home')}>
                <button className={style.button}>Home</button>
            </NavLink>
            <SearchBar onSearch={onSearch} />
            <button className={style.button} onClick={() => {
                onSearchRandom()
            }
            }>Id Random</button>
            <NavLink to={('/favorites')}>
                <button className={style.button}>Favorites</button>
            </NavLink>
            <NavLink to={('/about')}>
                <button className={style.button}>About</button>
            </NavLink>
            <NavLink to={('/')}>
                <button logout={logout} className={style.button}>Logout</button>
            </NavLink>
            <div className={style.responsive}>
                <div onClick={() => {
                    if (filterResponsive) {
                        handleFilterResponsive()
                    }
                    handleMenuBurger()
                    return
                }} className={`${style.imagesButton} ${menuBurger ? style.open : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={style.containerSearch}>
                    <button onClick={() => {
                        if (menuBurger) {
                            handleMenuBurger()
                        }
                        onSearchRandom()
                        navigate("/home")
                        return
                    }} className={style.inputRandom}><img src={randomIcon} className={style.imageRandom} /></button>
                    <input onKeyDown={handleEnter} value={id} onChange={handleChangeId} className={style.input} placeholder='Search Id..' type="search" />
                    <button onClick={() => {
                        if (menuBurger) {
                            handleMenuBurger()
                        }
                        onSearch(id)
                        setId("")
                        if (id) {
                            navigate("/home")
                        }
                        return
                    }} className={style.inputSearch}><img src={searchIcon} className={style.image} /></button>
                </div>
                {location !== "/favorites" ? <img onClick={() => {
                    navigate("/favorites")
                    if (menuBurger) {
                        handleMenuBurger()
                    }
                    return;
                }} className={style.filterImage} src={favoriteIcon} alt="" /> : null}
                {(!menuBurger && location === "/favorites") ? <img onClick={handleFilterResponsive} className={style.filterImage} src={filterIcon}></img> : null}
                {(menuBurger && location === "/favorites") ? <div className={style.filterImage}></div> : null}
            </div>
        </nav>
    )
}

export default Nav;