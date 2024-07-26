"use client";

import React from "react";
import Image from "next/image";

import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { user, isSignedIn } = useUser();

  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      {/* Logo  */}
      <div className="flex flex-row items-center space-x-2">
        <Image src={"/chart-donut.svg"} alt="logo" width={40} height={40} />
        <span className="text-blue-800 font-bold text-xl ">FinanceSmart</span>
      </div>

      {/* side buttons  */}
      {isSignedIn ? (
        <Link href={"/dashboard"}>
          <Button variant="outline" className="rounded-full">
            Dashboard
          </Button>
        </Link>
      ) : (
          <Link href={"/sign-in"}>
            <Button className="rounded-full">Get Started</Button>
          </Link>
      )}
    </div>
  );
};

export default Header;
