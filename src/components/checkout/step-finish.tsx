import { useCheckoutStore } from "@/store/checkout-store"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { generateMessage } from '@/lib/generate-message'

export const StepFinish = () => {
    const { name } = useCheckoutStore(state => state)

    const message = generateMessage()
    const linkZap = `https://wa.me//${process.env.NEXT_PUBLIC_ZAP}?text=${encodeURI(message)}`
    return (
        <div>
            <p>Perfeito: <strong>{name}!</strong></p>
            <p>Agora envie o seu pedido para o nosso WhatsApp, para concluir. O nosso atendente irá te guiar!</p>
            <Button>
                <Link target="_blank" href={linkZap}>Enviar para o WhatsApp</Link>
            </Button>
        </div>
    )
}