import express from "express" 
import dotenv from "dotenv"
import routerProduct from "./routes/products.router.js"
import morgan from "morgan"

dotenv.config()
const app = express()

// middleware
app.use(express.json())

// todo: endpoints aqui 
app.use(routerProduct)

app.use(morgan("dev"))

// todo: run server!
const bootstrap = () => {
    app.listen(process.env.PORT)
    console.log(`http://localhost:${process.env.PORT}`);
}

bootstrap()

// TODO: NOTAS DE LA CLASE
// ! TEMA DEL VSCODE: BROGRAMMER THEME
// ! FUENTE DE LETRA: 'Monaspace Radon SemiBold'

// ! SSR --> server side rendering: renderizado del lado del servidor

// ! SSG --> server side generate