/**@jsx jsx */
import { jsx, Box, Image, Button, Flex } from 'theme-ui'
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'

const Product = (product) => {
  const { addItem, checkoutSingleItem } = useShoppingCart()
  const { name, price, image, currency } = product

  const handleCheckout = async (product) => {
    try {
      const response = await fetch('/.netlify/functions/create-session', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          [product.sku]: { ...product, quantity: 10 }
        })
      })

      const data = await response.json()

      checkoutSingleItem({ sessionId: data.sessionId })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Image src={image} />
      <Box>
        <p>{name}</p>
        <p>{formatCurrencyString({ value: price, currency })}</p>
      </Box>
      <Button onClick={() => addItem(product)} backgroundColor={'black'}>
        Add To Cart
      </Button>
      <Button onClick={() => handleCheckout(product)} backgroundColor={'black'}>
        Checkout
      </Button>
    </Flex>
  )
}

export default Product
