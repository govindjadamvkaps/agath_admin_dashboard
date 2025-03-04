'use client'
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Button from "@/components/ui/button/Button";

export default function Feedback() {
  const feedbackData = [
    { id: 1, user: "John Doe", message: "Great service!", rating: 5, status: "Resolved", date: "2025-03-04" },
    { id: 2, user: "Jane Smith", message: "Need improvement in delivery.", rating: 3, status: "Pending", date: "2025-03-03" },
  ];

  return (
    <div>
      <PageBreadcrumb pageTitle="Feedback" />
        {feedbackData.map((feedback) => (
          <div key={feedback.id} className="flex justify-between items-center border-b pb-2 dark:text-white/90">
            <div>
              <h4 className="font-semibold">{feedback.user}</h4>
              <p className="text-sm">{feedback.message}</p>
              <span className={`text-xs ${feedback.status === "Resolved" ? "text-green-600" : "text-yellow-600"}`}>
                {feedback.status}
              </span>
            </div>
            <div className="space-x-2">
              <Button variant="outline" size="sm">View</Button>
              <Button variant="primary" size="sm">Delete</Button>
            </div>
          </div>
        ))}
    </div>
  );
}
