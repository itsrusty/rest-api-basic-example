export const handleGetProducts = (req, res) => {
  res.json({
    response: "shampoo loreal paris",
    descripcion:
      "un shampoo que te ayuda a mejorar el cabello y las cosas del cabello xdxd",
    price: 30,
  });
};

// request, response
// request --> petición del producto que vamos a guardar
// response --> respuesta que le daremos al cliente desde el servidor
export const createProduct = (req, res) => {
    try {
        const { productName } = req.body

        console.log(productName);

        res.status(200).json({ response: "funciona", details: productName })

    } catch (error){
        res.status(500).json({ responseError: error })
    }
}