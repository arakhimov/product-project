// необходимо задавать пути до файлов, режимы сборки, номера портов и т.д. для файла конфигурации сборки
// из вне как переменные еще до этапа начала сборки

export type BuildMode = 'production' | 'development';

export interface BuildPath {
    // путь до entry point
    entry: string,
    // путь до папки со сборкой
    build: string,
    // шаблон файла html в папке public
    html: string
}
export  interface BuildOptions {
    mode: BuildMode,
    paths: BuildPath,
    isDev: boolean
}