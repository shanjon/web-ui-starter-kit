import logo from '../../logo.svg';
import '../../App.css';
import {
  Button,
  AppLayout,
  Header
 } from "@cloudscape-design/components"
import TopNavigation from "../../components/TopNavigation/TopNav";
import SideNavigation from "../../components/SideNavigation/SideNav";
import ContentLayout from "../../components/ContentLayout";
import {
  tableHeader,
  searchPlaceholder,
  columnDefinitions,
  columnDisplay,
  columnItems
} from "./tableview-config.jsx";
import {
  sideNavHeader,
  sideNavPages
} from "../../components/SideNavigation/sidenav-config";
import { topNavHeader, topNavMenu } from "../../components/TopNavigation/topnav-config"
import Table from "../../components/Table/Table";


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
      content={<Table
          variant="full-page"
          tableHeader={tableHeader}
          searchPlaceholder={searchPlaceholder}
          columnDefinitions={columnDefinitions}
          columnDisplay={columnDisplay}
          columnItems={columnItems}
      />}
    />
    </div>
  );
}

export default TableView;
