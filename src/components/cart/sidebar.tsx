import { CarrotIcon, ShoppingCartIcon} from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const CartSideBar = () => {
    return(
        <Sheet>
            <SheetTrigger asChild>
                <Button className="flex">
                    <ShoppingCartIcon className="mr-2"/>
                    <p>Carrinho</p>
                </Button>
            </SheetTrigger>

            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        Carrinho
                    </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-5 my-3">
                    ...
                </div>

                <Separator className="my-4"/>
                <div className="flex justify-between items-center text-xs">
                    <div>Subtotal:</div>
                    <div>...</div>
                </div>
                <Separator className="my-4"/>
                <div className="text-center">
                    <Button>Finalizar compra</Button>
                </div>
                
            </SheetContent>
        </Sheet>
    )
}

export default CartSideBar;