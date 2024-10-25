import { Button } from '@/components/ui/button';
import { Add, Remove } from "@mui/icons-material";

import React, { useMemo, useState } from 'react'

interface PurchaseModalProps {
    isOpen: boolean;
    onClose: () => void;
    ticketDetails: Record<string, any>
}

const PurchaseModal = ({ isOpen, onClose, ticketDetails }: PurchaseModalProps) => {
    const [tickets, setTickets] = useState(1);
    const totalPrice = useMemo(() => {
        let priceByTickets = tickets * ticketDetails?.price

        if (tickets > ticketDetails?.minTicketForDiscount) {
            priceByTickets = (priceByTickets - (priceByTickets * (ticketDetails?.discountPercentage / 100)))
        }
        return priceByTickets
    }, [tickets])

    if (!isOpen) {
        return null
    }

    return (
        <div className='fixed top-0 left-0 w-full h-full bg-[#D9D9D980] p-5'>
            <div className='w-full h-full absolute' onClick={onClose}></div>
            <div className='w-full max-w-[420px] p-5 border bg-[#FAFAFA] border-[#CCCBCB] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg'>
                <div className='flex flex-col gap-7 w-full'>
                    <h2 className="text-base md:text-lg font-semibold text-[#0A0A0B]">Global Explorer</h2>
                    <div className='flex flex-col gap-3.5'>
                        <div>
                            <p className='text-xs md:text-sm text-[#5A5555]'>Each Ticket Costs:</p>
                            <p className='text-[#5A5555] font-bold mt-1.5'>{ticketDetails?.price}</p>
                        </div>
                        <div>
                            <p className='text-xs md:text-sm text-[#5A5555]'>Select Number of Tickets:</p>
                            <div className='flex justify-between items-center mt-1.5'>
                                <Button className='w-10 h-10' disabled={tickets === 1} onClick={() => setTickets(tickets - 1)}><Remove /></Button>
                                <p className='text-[#000]'>{tickets}</p>
                                <Button className='w-10 h-10' onClick={() => setTickets(tickets + 1)}><Add /></Button>
                            </div>
                        </div>
                        <button className="bg-[linear-gradient(98.32deg,_#505D65_20.43%,#000000_100%)] text-[#FAFAFA] h-10 px-2.5 rounded-lg p-0 text-xs md:text-sm font-semibold">You get a 10% discount for purchasing 50+ tickets.</button>
                    </div>
                    <div className='w-full h-[1px] bg-[#D9D9D980]' />
                    <div className='flex flex-col gap-1.5'>
                        <div className='flex justify-between'>
                            <p className="text-xs md:text-sm text-[#5A5555]">Ticket</p>
                            <p className="text-sm md:text-base font-bold text-[#5A5555]">{ticketDetails?.price?.toLocaleString()} FFT</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className="text-xs md:text-sm text-[#5A5555]">Number of tickets</p>
                            <p className="text-sm md:text-base font-bold text-[#5A5555]">{tickets}</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className="text-xs md:text-sm text-[#5A5555]">Subtotal</p>
                            <p className="text-sm md:text-base font-bold text-[#5A5555]">{(tickets * ticketDetails?.price).toLocaleString()} FFT</p>
                        </div>
                        {tickets > ticketDetails?.minTicketForDiscount && <div className='flex justify-between'>
                            <p className="text-xs md:text-sm text-[#5A5555]">Discount ({ticketDetails?.minTicketForDiscount.toLocaleString()}+)</p>
                            <p className="text-sm md:text-base font-bold text-[#5A5555]">{ticketDetails?.discountPercentage}%</p>
                        </div>}
                        <div className='w-full h-[1px] bg-[#D9D9D980]' />
                        <div className='flex justify-between'>
                            <p className="text-xs md:text-sm text-[#5A5555]">TOTAL</p>
                            <p className="text-sm md:text-base font-bold text-[#5A5555]">{totalPrice.toLocaleString()} FFT</p>
                        </div>
                    </div>
                    <Button onClick={onClose}>Purchase</Button>
                </div>
            </div>
        </div>
    )
}

export default PurchaseModal;
