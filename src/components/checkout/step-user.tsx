import { CheckoutSteps } from "@/types/checkout-steps"
import { Dispatch, SetStateAction } from "react"
import { Form, useForm } from "react-hook-form"
import { z } from 'zod'
import { zodResolver} from '@hookform/resolvers/zod'
import { useCheckoutStore } from "@/store/checkout-store"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type Props = {
    setStep: Dispatch<SetStateAction<CheckoutSteps>>
}

const formSchema = z.object({
    name: z.string().min(2, "Preeencha com seu nome")
})



export const StepUser = ({setStep}: Props) => {
    const {name, setName} = useCheckoutStore(state => state)


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { name }
    })

    const onSubmit = (value: z.infer<typeof formSchema>) => {
        setName(value.name);
        setStep('addres');
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Seu nome</FormLabel>
                            <FormControl>
                                <Input
                                    autoFocus
                                    {...field}
                                    placeholder="Qual o seu nome"
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}

                />
                <Button type="submit" variant='outline'>Próximo</Button>
            </form>
        </Form>
    )
}