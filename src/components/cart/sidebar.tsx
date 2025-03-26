import { CarrotIcon, ShoppingCartIcon} from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {UseCartStore} from "@/store/cart-store";
import { Cart } from "@/types/cart"
import { CartItem } from "./item";
import { useState } from "react";
import { CheckouDialog } from "@/components/checkout/dialog";




const CartSideBar = () => {
    const [checkoutOpen, setCheckoutOpen] = useState(false)
    const {cart} = UseCartStore(state => state)
    
    let subtotal = 0
    
    for(let item of cart ) {
        subtotal += item.quantity * item.product.price
    }
    return(
        <Sheet>
            <SheetTrigger asChild>
                <Button className="flex relative">
                    <ShoppingCartIcon className="mr-2"/>
                    <p>Carrinho</p>
                    {cart.length > 0 &&
                        <div className="absolute size-3 rounded-full bg-red-600 -right-1 -top-1"></div>
                    }
                </Button>
            </SheetTrigger>

            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        Carrinho
                    </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-5 my-3">
                    {cart.map(item => 
                        <CartItem key={item.product.id} item={item}/>
                    )}
                </div>

                <Separator className="my-4"/>
                <div className="flex justify-between items-center text-xs">
                    <div>Subtotal:</div>
                    <div>R$ {subtotal.toFixed(2)}</div>
                </div>
                <Separator className="my-4"/>
                <div className="text-center">
                    
                    <Button 
                        onClick={()=> (setCheckoutOpen(true))}
                        
                        disabled={cart.length === 0}>
                            Finalizar compra
                    </Button>
                    
                    
                </div>
                
                

                
            </SheetContent>
            <CheckouDialog
                    open={checkoutOpen}
                    onOpenChange={setCheckoutOpen}
                >

            </CheckouDialog>
        </Sheet>
    )
}

export default CartSideBar;