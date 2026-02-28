"use client";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export default function Backdrop({ children, isOpen, onClose }: Props) {
  return (
    <div
      className={`
        fixed inset-0 z-500000
        flex items-center justify-center
        transition-opacity duration-300
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
      `}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50"
      />
      {/* Modal Content */}
      <div className="relative shrink-0 z-10">
        {children}
      </div>
    </div>
  );
}
