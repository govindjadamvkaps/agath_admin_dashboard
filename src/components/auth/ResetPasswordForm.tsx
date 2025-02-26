"use client";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
// import Button from "@/components/ui/button/Button";
import React from "react";
import toast from "react-hot-toast";
import CustomButton from "../ui/button/CustomButton";

export default function SignInForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const toastId = toast.loading('Sending reset link...')
       setTimeout(() => {
      toast.success('Reset link sent successfully', { id: toastId });
}, 2000);
  };
  return (
    <div className="flex flex-col flex-1 lg:w-1/2 w-full">
    
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
              Reset your password
            </h1>

          </div>
          <div>
           
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <Label>
                    Email <span className="text-error-500">*</span>{" "}
                  </Label>
                  <Input placeholder="info@gmail.com" type="email" />
                </div>
    
                <div>
                  <CustomButton className="w-full"  type="submit">
                   Sent Reset Link
                  </CustomButton>
                </div>
              </div>
            </form>


          </div>
        </div>
      </div>
    </div>
  );
}
