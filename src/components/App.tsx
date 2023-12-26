import React, {Suspense, useContext} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import '../styles/index.scss';
import {MainPageAsync} from "../pages/MainPage/MainPage.async";
import {AboutPageAsync} from "../pages/AboutPage/AboutPage.async";
import {Theme, ThemeContext} from "../theme/ThemeContext";
import {useTheme} from "../theme/useTheme";



const App = () => {

const {theme, toggleTheme} = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>
                Изменить тему
            </button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            {/*Suspense предназначен для отображения индикации загрузки при асинхронной подгрузке*/}
            {/*компонента*/}
            <Suspense fallback={<div>Загрузка...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync />}></Route>
                    <Route path={'/about'} element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;