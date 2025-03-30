import { UseCartStore } from "@/store/cart-store"
import { useCheckoutStore } from "@/store/checkout-store"

export const generateMessage = () => {
    const { name, address } = useCheckoutStore(state => state)
    const { cart } = UseCartStore(state => state)

    let orderproduct = []

    for(let item of cart){
        orderproduct.push(`${item.quantity}x ${item.product.name}`)
    }

    return `**Dados do cliente
    Nome: ${name}
    Endereço: ${address.street} ${address.number} (${address.complement}) ${address.district} ${address.city} ${address.city}${address.state}
    -------
    **Pedido**
    ${orderproduct.join('\n')}

    `
}