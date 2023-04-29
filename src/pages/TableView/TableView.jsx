import logo from '../../logo.svg';
import '../../App.css';
import Button from "@cloudscape-design/components/button"
import AppLayout from "@cloudscape-design/components/app-layout";
import TopNavigation from "../../components/TopNavigation/TopNav";
import SideNavigation from "../../components/SideNavigation/SideNav";
import ContentLayout from "../../components/ContentLayout";
import {
  pageHeader,
  pageDescription,
  alert,
  containerHeader,
  containerDescription,
  containerContent
} from "./tableview-config.jsx";
import {
  sideNavHeader,
  sideNavPages
} from "../../components/SideNavigation/sidenav-config";
import { topNavHeader, topNavMenu } from "../../components/TopNavigation/topnav-config"

// Styles
import "@cloudscape-design/global-styles/index.css"

function TableView() {
  return (
    <div>
    <TopNavigation
      topNavHeader={topNavHeader}
      topNavMenu={topNavMenu}/>
    <AppLayout
      navigation={<SideNavigation
        sideNavHeader={sideNavHeader}
        sideNavPages={sideNavPages}/>}
      content={<ContentLayout
        pageDescription={pageDescription}
        pageHeader={pageHeader}
        alert={alert}
        containerHeader={containerHeader}
        containerDescription={containerDescription}
        containerContent={containerContent}
      />}
    />
    </div>
  );
}

export default TableView;