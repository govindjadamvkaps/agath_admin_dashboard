'use client'
import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import LessonPlanTable from "@/components/tables/LessonPlanTable";
import Pagination from "@/components/tables/Pagination";

import React from "react";

export default function BasicTables() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Lesson Plan Management" />
      <div className="space-y-6">
        <ComponentCard title="Lesson Plan Table">
          <LessonPlanTable />
        </ComponentCard>
        <Pagination currentPage={1} totalPages={15} onPageChange={() => console.log('page changed')}/>
      </div>
    </div>
  );
}
