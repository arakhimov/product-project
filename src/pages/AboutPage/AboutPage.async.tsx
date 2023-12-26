import {lazy} from "react";

export const AboutPageAsync = lazy(() =>
    new Promise(resolve => {
        // !!! НЕ ДЕЛАТЬ ТАК В РЕАЛЬНЫХ ПРОЕКТАХ. ТОЛЬКО ДЛЯ КУРСА!!
        // @ts-ignore
        setTimeout(() => resolve(import('./AboutPage')), 1500)
    })
);