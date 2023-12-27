import Image from "next/image";
import React from "react";
import { PricingCard } from "./pricing-card";

export const Pricing = () => {
  return (
    <div className="max-w-7xl mx-auto container">
     <div className={'flex items-center justify-center flex-col mt-[120px]'}>
       <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold max-w-2xl text-center">
         One tool for your whole company. Free for teams to try.
       </h1>
       <p className="uppercase opacity-70">TRUSTED BY TEAMS AT</p>
     </div>


      <div className="mt-6">
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {cards.map((card, idx) => (
            <PricingCard key={idx} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

const cards = [
  {
    title: "Free",
    subtitle: "For organizing every corner of your work & life.",
    options:
      "Collaborative workspace, Integrate with Slack, GitHub & more, Basic page analytics, 7 day page history, Invite 10 guests",
    price: "Free",
  },
  {
    title: "Plus",
    subtitle: "A place for small groups to plan & get organized.",
    options:
      "Unlimited blocks for teams, Unlimited file uploads, 30 day page history, Invite 100 guests",
    price: "158",
    priceId: "price_1ORpeJHUZbsEJsN7t47b31Fj",
  },
  {
    title: "Business",
    subtitle: "For companies using Notion to connect several teams & tools.",
    options:
      "SAML SSO, Private teamspaces, Bulk PDF export, Advanced page analytics, 90 day page history, Invite 250 guests",
    price: "246",
    priceId: "price_1ORpeJHUZbsEJsN7t47b31Fj",
  },
];
