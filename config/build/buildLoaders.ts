import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

    const cssLoader = {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                // для build:dev стили имплантируются прямо в js-файл при помощи style-loader
                // для build:prod для стилей генерируются отдельные css-файлы, а в js-файлах стилей нет
                isDev
                    ? 'style-loader'
                    : MiniCssExtractPlugin.loader,
                // Translates CSS into CommonJS
                {
                    loader: "css-loader",
                    // настройка css-модулей, гарантирующих изоляцию стилей компонентов
                    options : {
                        modules: {
                            // свойство auto отвечает за то для каких файлов применять модульный подход в
                            // формировании имен css селектров, а для каких оставлять селекторы в неизменном виде
                            auto: (resourcePath: string) => Boolean(resourcePath.includes('.module.')),
                            // для отображения понятных идентификаторов (с названием компонента и путем до него)
                            // в режиме dev server
                            localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:8]",
                        },

                    }
                },
                // Compiles Sass to CSS
                "sass-loader",
            ],
        };

    // последовательность лоудеров очень важна, поэтому имеет смысл выность лоудеры
    // в отдельные переменные для наглядного отображения в массиве
    // если бы не использовался typescript, тогда для обработски jsx необходимо было
    // подключить babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        typescriptLoader,
        cssLoader
    ]
}