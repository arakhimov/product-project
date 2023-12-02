import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {

    // последовательность лоудеров очень важна, поэтому имеет смысл выность лоудеры
    // в отдельные переменные для наглядного отображения в массиве
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        typescriptLoader,
    ]
}