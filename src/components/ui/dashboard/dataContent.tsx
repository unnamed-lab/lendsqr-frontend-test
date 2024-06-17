import Pagination from "./dataPagination";
import DataTable from "./dataTable";

export default function DataContent() {
  return (
    <section className="app-dashboard_data">
      <DataTable />
      <Pagination />
    </section>
  );
}
