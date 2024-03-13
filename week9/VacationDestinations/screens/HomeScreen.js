import { View, Text, FlatList } from "react-native";
import { COUNTRIES } from "../data/dummy-data";
import CountryGridTile from "../components/CountryGridTile";

function HomeScreen(props) {
  function renderCountryItem(itemData) {
    function pressHandler() {
      props.navigation.navigate("VacationsOverviewScreen", {
        countryId: itemData.item.id,
      });
    }
    return (
      <CountryGridTile
        name={itemData.item.name}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <View>
      <FlatList
        data={COUNTRIES}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={renderCountryItem}
        numColums={2}
      />
    </View>
  );
}

export default HomeScreen;
