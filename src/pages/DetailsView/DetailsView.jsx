import logo from '../../logo.svg';
import '../../App.css';
import {
  Button,
  AppLayout,
  Header,
  ColumnLayout,
  Box,
  StatusIndicator,
  SpaceBetween,
  Tabs,
  BreadcrumbGroup
} from "@cloudscape-design/components"
import TopNavigation from "../../components/TopNavigation/TopNav";
import SideNavigation from "../../components/SideNavigation/SideNav";
import ContentLayout from "../../components/ContentLayout";
import {
  pageHeader,
  pageDescription,
  alert,
  containerHeader,
  containerDescription,
  containerContent,
  tabsContent,
  breadcrumbGroup
} from "./detailsview-config.jsx";
import {
  sideNavHeader,
  sideNavPages
} from "../../components/SideNavigation/sidenav-config";
import { topNavHeader, topNavMenu } from "../../components/TopNavigation/topnav-config"
import Container from "../../components/Containers/ColumnContainer"

// Styles
import "@cloudscape-design/global-styles/index.css"

function DetailsPage() {
  return (
    <div>
    <TopNavigation
      topNavHeader={topNavHeader}
      topNavMenu={topNavMenu}/>
    <AppLayout
      breadcrumbs={<BreadcrumbGroup
        items={breadcrumbGroup} />}
      navigation={<SideNavigation
        sideNavHeader={sideNavHeader}
        sideNavPages={sideNavPages}/>}
      content={
      <div>
      <SpaceBetween size="l">
      <ContentLayout
        pageDescription={pageDescription}
        pageHeader={pageHeader}
        containerHeader={containerHeader}
        containerContent={containerContent}
        
      >
      </ContentLayout> 
      
        <Tabs
        tabs={tabsContent}
        variant="container"
      />
      </SpaceBetween>
      </div>
      }
    />
    </div>
  );
}

export default DetailsPage;
