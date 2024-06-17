import {
  DatabaseIcon,
  DataRecordIcon,
  PersonIcon,
  UsersIcon,
} from "@/components/icons/dashboard";
import { CustomerSummaryArray, CustomerSummaryProps } from "@/types/dashboard";

export default function CustomerSummary() {
  const data: CustomerSummaryArray = [
    { title: "users", quantity: 2453, icon: () => <PersonIcon /> },
    { title: "active users", quantity: 2145, icon: () => <UsersIcon /> },
    {
      title: "users with loans",
      quantity: 12453,
      icon: () => <DataRecordIcon />,
    },
    {
      title: "users with savings",
      quantity: 102453,
      icon: () => <DatabaseIcon />,
    },
  ];
  return (
    <section className="app-dashboard_summary">
      <h1>Users</h1>
      <div className="app-dashboard_summary_grid">
        {data.map((el, i) => {
          return <SummaryDataCard key={i} {...el} />;
        })}
      </div>
    </section>
  );
}

function SummaryDataCard({ title, quantity, icon }: CustomerSummaryProps) {
  return (
    <div className="app-dashboard_summary_item">
      <span>{icon()}</span>
      <h2>{title}</h2>
      <h3>{quantity.toLocaleString("en-UK")}</h3>
    </div>
  );
}
