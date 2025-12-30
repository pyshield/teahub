import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { PaymentMethod } from '../../types';
import { CreditCard, Bitcoin, Globe, CheckCircle2, QrCode } from 'lucide-react';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
  creatorName: string;
}

export const SupportModal: React.FC<SupportModalProps> = ({ isOpen, onClose, creatorName }) => {
  const [amount, setAmount] = useState<number>(5);
  const [method, setMethod] = useState<PaymentMethod>(PaymentMethod.STRIPE);
  const [step, setStep] = useState<'select' | 'confirm' | 'success'>('select');

  const handleSupport = () => {
    setStep('success');
    // In a real app, this would trigger the payment API
  };

  const reset = () => {
    setStep('select');
    setAmount(5);
    onClose();
  };

  const renderPaymentContent = () => {
    switch (method) {
      case PaymentMethod.STRIPE:
        return (
          <div className="space-y-4 animate-in fade-in duration-300">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-600">Total</span>
                <span className="text-lg font-bold text-slate-900">${amount}.00</span>
              </div>
              <div className="h-px bg-slate-200 my-2"></div>
              <p className="text-xs text-slate-500">Secure payment via Stripe. Cards, Apple Pay, Google Pay supported.</p>
            </div>
            <Button fullWidth onClick={handleSupport}>
              Pay with Card
            </Button>
          </div>
        );
      case PaymentMethod.CRYPTO:
        return (
          <div className="space-y-4 animate-in fade-in duration-300">
             <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-lg border border-slate-200">
                <QrCode size={120} className="text-slate-800 mb-4" />
                <p className="text-sm font-mono bg-white px-3 py-1 rounded border border-slate-200 text-slate-600 break-all text-center">
                  0x71C7656EC7ab88b098defB751B7401B5f6d8976F
                </p>
                <p className="text-xs text-slate-500 mt-2">Send USDT (ERC20) or ETH</p>
             </div>
             <Button fullWidth onClick={handleSupport} variant="secondary">
              I have sent the crypto
            </Button>
          </div>
        );
      case PaymentMethod.LOCAL:
        return (
           <div className="space-y-4 animate-in fade-in duration-300">
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 text-orange-900">
                <p className="text-sm font-medium mb-1">Local Payment (UPI / Mobile Money)</p>
                <p className="text-xs">Pay using your local banking app and enter the transaction ID below.</p>
              </div>
              <input 
                type="text" 
                placeholder="Enter Transaction ID / Reference" 
                className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Button fullWidth onClick={handleSupport} variant="outline">
                Confirm Transfer
              </Button>
           </div>
        );
    }
  };

  if (step === 'success') {
    return (
      <Modal isOpen={isOpen} onClose={reset} title="Thank You!">
        <div className="flex flex-col items-center justify-center py-6 text-center space-y-4">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
            <CheckCircle2 size={32} />
          </div>
          <div>
            <h4 className="text-xl font-bold text-slate-900">Payment Successful!</h4>
            <p className="text-slate-500 mt-1">You just supported {creatorName}.</p>
          </div>
          <Button onClick={reset} variant="outline">Close</Button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={reset} title={`Support ${creatorName}`}>
      <div className="space-y-6">
        {/* Amount Selection */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Select Amount</label>
          <div className="grid grid-cols-3 gap-2">
            {[3, 5, 10].map((val) => (
              <button
                key={val}
                onClick={() => setAmount(val)}
                className={`py-2 px-4 rounded-lg border font-medium text-sm transition-all ${
                  amount === val
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-700 ring-1 ring-indigo-600'
                    : 'border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                ${val}
              </button>
            ))}
          </div>
          <div className="relative mt-2">
            <span className="absolute left-3 top-2.5 text-slate-500">$</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full pl-7 pr-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Method Selection */}
        <div className="space-y-2">
           <label className="text-sm font-medium text-slate-700">Payment Method</label>
           <div className="flex gap-2">
              <button 
                onClick={() => setMethod(PaymentMethod.STRIPE)}
                className={`flex-1 flex flex-col items-center justify-center p-3 rounded-lg border transition-all ${
                  method === PaymentMethod.STRIPE ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <CreditCard size={20} className="mb-1" />
                <span className="text-xs font-medium">Card</span>
              </button>
              <button 
                onClick={() => setMethod(PaymentMethod.CRYPTO)}
                className={`flex-1 flex flex-col items-center justify-center p-3 rounded-lg border transition-all ${
                  method === PaymentMethod.CRYPTO ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Bitcoin size={20} className="mb-1" />
                <span className="text-xs font-medium">Crypto</span>
              </button>
              <button 
                onClick={() => setMethod(PaymentMethod.LOCAL)}
                className={`flex-1 flex flex-col items-center justify-center p-3 rounded-lg border transition-all ${
                  method === PaymentMethod.LOCAL ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Globe size={20} className="mb-1" />
                <span className="text-xs font-medium">Local</span>
              </button>
           </div>
        </div>

        {/* Dynamic Payment Content */}
        {renderPaymentContent()}
      </div>
    </Modal>
  );
};