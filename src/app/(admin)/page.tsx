import type { Metadata } from "next";
import { Cards } from "@/components/ecommerce/EcommerceMetrics";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import LessonPlanTable from "@/components/tables/LessonPlanTable";
// import MonthlyTarget from "@/components/ecommerce/MonthlyTarget";
// import MonthlySalesChart from "@/components/ecommerce/MonthlySalesChart";
// import StatisticsChart from "@/components/ecommerce/StatisticsChart";
// import RecentOrders from "@/components/ecommerce/RecentOrders";
// import DemographicCard from "@/components/ecommerce/DemographicCard";

export const metadata: Metadata = {
  title:
    "Agatha Admin Dashboard",
  description: "Agatha Admin Dashboard - Modern and responsive admin panel",
};

export default function Ecommerce() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12">
        <Cards />

        {/* <MonthlySalesChart /> */}
      </div>

      {/* <div className="col-span-12 xl:col-span-5">
        <MonthlyTarget />
      </div> */}

      {/* <div className="col-span-12">
        <StatisticsChart />
      </div> */}
{/* 
      <div className="col-span-12 xl:col-span-5">
        <DemographicCard />
      </div> */}

      {/* <div className="col-span-12 xl:col-span-7">
        <RecentOrders />
      </div> */}
      <div className="col-span-12">
      <ComponentCard title="Lesson Plan Table">
          <LessonPlanTable />
        </ComponentCard>
      </div>
    </div>
  );
}
