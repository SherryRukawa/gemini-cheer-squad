
import React, { useState } from "react";
import PraiseInput from "@/components/PraiseInput";
import PaymentModal from "@/components/PaymentModal";
import PraiseContainer from "@/components/PraiseContainer";
import { Button } from "@/components/ui/button";
import { generatePraises } from "@/utils/praiseGenerator";
import { getMultipleRandomAvatars } from "@/utils/avatarData";
import { useToast } from "@/hooks/use-toast";
import { Heart } from "lucide-react";

const Index = () => {
  const [userMessage, setUserMessage] = useState("");
  const [showPayment, setShowPayment] = useState(false);
  const [praises, setPraises] = useState<any[]>([]);
  const [paid, setPaid] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (message: string) => {
    setUserMessage(message);
    setShowPayment(true);
  };

  const handlePaymentSuccess = async () => {
    setShowPayment(false);
    setPaid(true);
    toast({
      title: "支付成功！",
      description: "让温暖的夸赞开始吧~",
    });
    
    // 生成夸赞内容
    const praisesText = await generatePraises(userMessage, 8);
    const avatars = getMultipleRandomAvatars(praisesText.length);
    
    // 创建带有头像和名字的夸赞消息
    const praisesWithAvatars = praisesText.map((text, index) => ({
      message: text,
      avatar: avatars[index].avatar,
      name: avatars[index].name,
    }));
    
    setPraises(praisesWithAvatars);
  };

  const handleReset = () => {
    setPaid(false);
    setPraises([]);
    setUserMessage("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-warm-light to-praise-light py-10">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-2">
            <Heart className="h-8 w-8 text-praise-dark mr-2" />
            <h1 className="text-3xl font-bold text-warm-dark">夸夸群</h1>
            <Heart className="h-8 w-8 text-praise-dark ml-2" />
          </div>
          <p className="text-gray-600 max-w-md mx-auto">
            分享你的心情，获得源源不断的温暖与鼓励。每一句话都值得被温柔以待~
          </p>
        </div>

        {!paid ? (
          <div className="flex justify-center">
            <PraiseInput onSubmit={handleSubmit} />
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <PraiseContainer messages={praises} userMessage={userMessage} />
            <Button 
              onClick={handleReset}
              className="mt-6 bg-warm hover:bg-warm-dark text-white"
            >
              重新开始
            </Button>
          </div>
        )}

        <PaymentModal
          isOpen={showPayment}
          onClose={() => setShowPayment(false)}
          onPaymentSuccess={handlePaymentSuccess}
        />

        <footer className="text-center text-gray-500 text-sm mt-16">
          © 2025 夸夸群 · 用温暖的话语传递力量
        </footer>
      </div>
    </div>
  );
};

export default Index;
