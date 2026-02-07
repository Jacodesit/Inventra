import CategoryHeading from "../headings/category-heading"
import DashboardHeading from "../headings/dashboard-heading"
import ProductHeading from "../headings/product-heading"
import ReportHeading from "../headings/report-heading"
import StockHeading from "../headings/stock-heading"

export default function HeaderLayout() {
    switch(window.location.pathname) {
        case '/dashboard':
            return <DashboardHeading />
        case '/products':
            return <ProductHeading />
        case '/categories':
            return <CategoryHeading />
        case '/stock':
            return <StockHeading />
        case '/reports':
            return <ReportHeading />
    }
}
