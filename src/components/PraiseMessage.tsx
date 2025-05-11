
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export interface PraiseMessageProps {
  message: string;
  avatar: string;
  name: string;
  delay?: number;
}

const PraiseMessage: React.FC<PraiseMessageProps> = ({ 
  message, 
  avatar, 
  name,
  delay = 0 
}) => {
  return (
    <Card 
      className={cn(
        "flex items-start p-3 mb-3 bg-warm-light border-warm animate-fade-in",
        delay ? `opacity-0` : ""
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <Avatar className="h-10 w-10 mr-3 border-2 border-praise">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback className="bg-praise text-white">
          {name.substring(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <CardContent className="p-0">
        <p className="font-bold text-warm-dark mb-1">{name}</p>
        <p className="text-gray-700">{message}</p>
      </CardContent>
    </Card>
  );
};

export default PraiseMessage;
