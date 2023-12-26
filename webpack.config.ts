import * as webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnvVar, BuildPath} from "./config/build/types/config";
import path from "path";

// для добавления переменных окружения, экспортируем не просто файл конфигурации, а функцию,
// которая возващает файл конфигурации с переменными окружения
export default(env: BuildEnvVar) => {
    // пути в самой конфигурации явно нигде не указывает, а передаем их как аргументы
    // в функцию buildWebpackConfig(options)
    const paths:BuildPath = {
        entry: path.resolve(__dirname,'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html')
    };

    const mode = env.mode || 'development';
    const isDev: boolean = mode === 'development';

    const PORT = env.port || 3000;

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT
    });

    return config;
} ;
