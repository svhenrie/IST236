import { View, Text } from "react-native";
import { REPORTS } from "../data/dummy_data";
import List from "../components/List/List";

// Function searches dummy data for all articles of "US"
// type and returns items to the screen
function  UsNewsScreen() {
    const type = "Us";
    const displayedReports = REPORTS.filter((reportItem) => {
      return reportItem.type === type;
    });
  
    return <List items={displayedReports} />;
  }

export default UsNewsScreen;