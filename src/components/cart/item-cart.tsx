import {UseCartStore} from "@/store/cart-store"
import { Cart } from "@/types/cart"
import { Button } from "../ui/button"
import { MinusIcon, PlusIcon } from "lucide-react"

type Props = {
    cartItem: Cart
}

export const CartQuantity = ( { cartItem }: Props) =>{
    const {upsertCartItem} = UseCartStore(state => state)

    const handlePlusButton = () => {
        upsertCartItem(cartItem.product, 1)
    }

    const handleMinusButton = () => {
        upsertCartItem(cartItem.product, -1)
        
    }
    return(
        <div className="flex items-center gap-2">
            <Button 
                variant='outline'
                size='icon'
                className="size-5" 
                onClick={handleMinusButton}
                
            >
                <MinusIcon  className="size-6"/>
            </Button>
            <div>
                {cartItem.quantity}
            </div>
            <Button
                variant='outline'
                size='icon'
                className="size-5" 
                onClick={handlePlusButton}
                >
                <PlusIcon className="size-6"/>
            </Button>
            
        </div>
    )
}