"use client"

import { Product } from "@/types/product"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"


type Props = {
    item: Product
}

export const ProductItem = ({item}: Props) => {
    
    const handleAddButton = () => {
        toast('Adicionado ao carrinho', {
            description: item.name,
            action: (
                <Button variant="link" onClick={() => toast.dismiss()} className="ml-auto border">
                    Fechar
                </Button>
            ),
        })
    }
    return (
        <div>
            <div className="rounded-md overflow-hidden">
                <img 
                    src= {item.image}
                    alt={item.name}
                    className="w-full h-32 object-cover" 
                />
            </div>
            <div className="mt-3 flex flex-col gap-2">
                <p className="text-lg">{item.name}</p>
                <p className="text-sm opacity-50">R$ {item.price.toFixed(2)}</p> 
                <Button
                    variant="outline"
                    onClick={handleAddButton}
                    >Adcionar
                </Button>
            </div>
        </div>
    )
}


