"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PetTipProps {
  petType: string;
}

export default function PetTip({ petType }: PetTipProps) {
  const tips: Record<string, string> = {
    dog: "Make sure to provide daily exercise and a balanced diet.",
    cat: "Keep litter boxes clean and provide scratching posts.",
    bird: "Offer fresh water daily and a varied diet of seeds and fruits.",
    fish: "Maintain clean water and proper temperature for your fish.",
    rabbit: "Provide hay and fresh vegetables, and a safe enclosure.",
  };

  const tip = tips[petType.toLowerCase()] || "Enjoy caring for your pet!";

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Pet Care Tip</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          Here is a tip for caring for a <strong>{petType}</strong>:
        </p>
        <p className="font-medium">{tip}</p>
      </CardContent>
    </Card>
  );
}
