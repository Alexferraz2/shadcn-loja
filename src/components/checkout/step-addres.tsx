import { CheckoutSteps } from "@/types/checkout-steps"
import { Dispatch, SetStateAction } from "react"
import { Form, FormProvider, useForm } from "react-hook-form"
import { z } from 'zod'
import { zodResolver} from '@hookform/resolvers/zod'
import { useCheckoutStore } from "@/store/checkout-store"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import { StatesBrazil } from "@/data/statesBrazil"

type Props = {
    setStep: Dispatch<SetStateAction<CheckoutSteps>>
}



const formSchema = z.object({
    street: z.string().min(2, "Preeencha o endereço"),
    number: z.string().min(2, "Preeencha o número"),
    complement: z.string().optional(),
    district: z.string().min(2, "Preeencha o bairro"),
    city: z.string().min(2, "Preeencha a cidade"),
    state: z.string().min(2, "Preeencha o estado"),
})



export const StepAddres = ({ setStep }: Props) => {
    const {address, setAddress} = useCheckoutStore(state => state)


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { ...address }
    })

    const onSubmit = (value: z.infer<typeof formSchema>) => {
        setAddress(value);
        setStep('finish');
    }
    

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                
                <div className="grid grid-cols-2 gap-4">                  
                
                    <FormField
                        control={form.control}
                        name="street"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Rua</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}

                    />

                    <FormField
                        control={form.control}
                        name="number"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Número</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}

                    />

                    <FormField
                        control={form.control}
                        name="complement"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Complemento</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}

                    />

                    <FormField
                        control={form.control}
                        name="district"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Bairro</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}

                    />

                    <FormField
                        control={form.control}
                        name="city"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Cidade</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}

                    />

                    <FormField
                        control={form.control}
                        name="state"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Estado</FormLabel>
                                <FormControl>
                                    <Select defaultValue={field.value} onValueChange={field.onChange}>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Estado" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {StatesBrazil.map((item) => (
                                                <SelectItem key={item.id} value={item.value}>
                                                    {item.name}
                                                </SelectItem>
                                            ))}                          

                                        </SelectContent>
                                    </Select>

                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}

                    />


                </div>
                <div className="flex justify-between mt-4">
                    <Button type="submit" variant='link' onClick={() => setStep('user')}>Voltar</Button>
                    <Button type="submit">Concluir</Button>
                </div>
                
            </form>

        </FormProvider>


    )
}