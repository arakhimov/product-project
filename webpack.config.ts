import * as webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildPath} from "./config/build/types/config";
import path from "path";

// пути в самой конфигурации явно нигде не указывает, а передаем их как аргументы
// в функцию buildWebpackConfig(options)
const paths:BuildPath = {
    entry: path.resolve(__dirname,'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
};

const mode: string = 'development';
const isDev: boolean = mode === 'development';

const config: webpack.Configuration = buildWebpackConfig({
    mode: 'development',
    paths,
    isDev
});

export default config;
