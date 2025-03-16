import { Cart } from "@/types/cart"
import { CartQuantity } from "./item-cart"

type Props = {
    item: Cart,
}

export const CartItem = ({item}: Props) => {
    return(
        <div className="flex items-center gap-5">
            <div className="w-16 overflow-hidden ">
                <img src={item.product.image}/>
            </div>
            <div className="flex-1">
                <div className="text-md">
                    <p>{item.product.name}</p>
                    <p className="text-xs opacity-50">R$ {item.product.price.toFixed(2)}</p>
                </div>                        

            </div>
            <div>
                <CartQuantity cartItem={item}/>
            </div>
        </div>
    )
}