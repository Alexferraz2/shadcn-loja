import { Cart } from "@/types/cart"

type Props = {
    cartItem: Cart
}

export const CartQuantity = ( { cartItem }: Props) =>{
    return(
        <div>
            {cartItem.quantity}
        </div>
    )
}