"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Progress } from '@/components/ui/progress'
import { useState } from 'react'
import { StepUser } from '@/components/checkout/step-user'
import { StepAddres } from '@/components/checkout/step-addres'
import { StepFinish } from '@/components/checkout/step-finish'
import { CheckoutSteps } from '@/types/checkout-steps'

type Props = {
    open: boolean,
    onOpenChange: (open: boolean) => void
}



export const CheckouDialog = ({ open, onOpenChange }: Props) => {
    const [step, setStep] = useState<CheckoutSteps>('user')

    let progressPct = 0;
    switch(step){ 
        case "user": 
            progressPct = 33;
            break;
        case "addres": 
            progressPct = 66;
            break;
        case "finish": 
            progressPct = 100;
            break
    }
    return(
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {step === "user" && 'Dados Pessoais'}
                        {step === "addres" && 'Endereço de entrega'}
                        {step === "finish" && 'Enviu para o Whatsapp'}
                    </DialogTitle>
            
                </DialogHeader>
                <Progress value={progressPct}/>
            
                <div className='flex flex-col gap-3'>
                    {step === "user" && <StepUser setStep={setStep}/>}
                    {step === "addres" && <StepAddres setStep={setStep}/>}
                    {step === "finish" && <StepFinish/>}
                </div>
            </DialogContent>
            
            
        </Dialog>
    )
}