import {BuildOptions} from "./types/config";
import {Configuration as DevServerConfiguration} from "webpack-dev-server"

export function buildDevServer(options:BuildOptions): DevServerConfiguration {
    return {
       port: options.port,
       open: true,
       // данное свойство позволяет возвращаться на ту же страницу при перезагрузке на других страницах
       historyApiFallback: true
}
}