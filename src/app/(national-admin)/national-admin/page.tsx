import { redirect } from "next/navigation";
import React from "react";

const page = () => {
  redirect(`/national-admin/dashboard`);
  return <div>page</div>;
};

export default page;
