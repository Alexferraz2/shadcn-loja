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



export const StepAddres = ({setStep}: Props) => {
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
                                        <SelectItem value="AC">Acre (AC)</SelectItem>
                                        <SelectItem value="AL">Alagoas (AL)</SelectItem>
                                        <SelectItem value="AP">Amapá (AP)</SelectItem>
                                        <SelectItem value="AM">Amazonas (AM)</SelectItem>
                                        <SelectItem value="BA">Bahia (BA)</SelectItem>
                                        <SelectItem value="CE">Ceará (CE)</SelectItem>
                                        <SelectItem value="ES">Espírito Santo (ES)</SelectItem>
                                        <SelectItem value="GO">Goiás (GO)</SelectItem>
                                        <SelectItem value="MA">Maranhão (MA)</SelectItem>
                                        <SelectItem value="MT">Mato Grosso (MT)</SelectItem>
                                        <SelectItem value="MS">Mato Grosso do Sul (MS)</SelectItem>
                                        <SelectItem value="MG">Minas Gerais (MG)</SelectItem>
                                        <SelectItem value="PA">Pará (PA)</SelectItem>
                                        <SelectItem value="PB">Paraíba (PB)</SelectItem>
                                        <SelectItem value="PR">Paraná (PR)</SelectItem>
                                        <SelectItem value="PE">Pernambuco (PE)</SelectItem>
                                        <SelectItem value="PI">Piauí (PI)</SelectItem>
                                        <SelectItem value="RJ">Rio de Janeiro (RJ)</SelectItem>
                                        <SelectItem value="RN">Rio Grande do Norte (RN)</SelectItem>
                                        <SelectItem value="RS">Rio Grande do Sul (RS)</SelectItem>
                                        <SelectItem value="RO">Rondônia (RO)</SelectItem>
                                        <SelectItem value="RR">Roraima (RR)</SelectItem>
                                        <SelectItem value="SC">Santa Catarina (SC)</SelectItem>
                                        <SelectItem value="SP">São Paulo (SP)</SelectItem>
                                        <SelectItem value="SE">Sergipe (SE)</SelectItem>
                                        <SelectItem value="TO">Tocantins (TO)</SelectItem>
                                        <SelectItem value="DF">Distrito Federal (DF)</SelectItem>


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