
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPaymentSuccess: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  onPaymentSuccess,
}) => {
  const handlePaypalPayment = () => {
    // 这里只是模拟支付成功
    // 实际项目中，需要集成真实的PayPal支付功能
    setTimeout(() => {
      onPaymentSuccess();
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl text-warm-dark">
            获取温暖的夸赞
          </DialogTitle>
          <DialogDescription className="text-center">
            仅需1美元，AI将给你源源不断的鼓励和赞美
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center p-4">
          <p className="text-sm text-gray-500 mb-4 text-center">
            点击下方按钮通过PayPal支付1美元，享受无限夸赞
          </p>
          <Button
            onClick={handlePaypalPayment}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2"
          >
            PayPal支付 $1
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
