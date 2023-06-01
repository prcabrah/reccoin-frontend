import CompanyDashboardLayout from "../../components/dashboard_components/CompanyDashboardLayout"
import Deposit from "../../components/dashboard_components/Deposit"

const CompanyDashboard = () => {
  return (
    <CompanyDashboardLayout active_link={"Dashboard"} dashboard_content={
      <Deposit/>
    } />
  )
}

export default CompanyDashboard