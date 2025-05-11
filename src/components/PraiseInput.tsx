
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface PraiseInputProps {
  onSubmit: (message: string) => void;
}

const PraiseInput: React.FC<PraiseInputProps> = ({ onSubmit }) => {
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = () => {
    if (message.trim() === "") {
      toast({
        title: "输入不能为空",
        description: "请分享一些内容让我们来夸夸你吧~",
        variant: "destructive",
      });
      return;
    }
    onSubmit(message);
    setMessage("");
  };

  return (
    <Card className="w-full max-w-md bg-white shadow-lg border-praise">
      <CardHeader className="pb-2">
        <h3 className="text-lg font-bold text-center text-warm-dark">
          分享你的心情，让大家来夸夸你~
        </h3>
      </CardHeader>
      <CardContent>
        <Textarea
          placeholder="今天发生了什么让你需要被夸夸呢？"
          className="min-h-[100px] border-warm"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleSubmit} 
          className="w-full bg-praise hover:bg-praise-dark text-white transition-all"
        >
          匿名分享 & 获取夸赞
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PraiseInput;
