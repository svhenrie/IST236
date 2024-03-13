import { useLayoutEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { DESTINATIONS, COUNTRIES } from "../data/dummy-data";
import DestinationItem from "../components/DestinationItem";
import Destination from "../models/destinations";

function VacationsOverviewScreen(props) {
  const countryId = props.route.params.countryId;

  useLayoutEffect(() => {
    const country = COUNTRIES.find((country) => country.id === countryId);
    props.navigation.setOptions({ title: country ? country.name : null });
  }, [countryId, props.navigation]);

  const displayedDestinations = DESTINATIONS.filter((destinationItem) => {
    return destinationItem.countryId === countryId;
  });

  function renderDestinationItem(itemData) {
    const destinationItemProps = {
      name: itemData.item.name,
      imageUrl: itemData.item.imageUrl,
      foundedYear: itemData.item.foundedYear,
      avgCost: itemData.item.avgCost,
      rating: itemData.item.rating,
      listIndex: itemData.index,
    };
    return <DestinationItem {...destinationItemProps} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedDestinations}
        keyExtractor={(item) => item.id}
        renderItem={renderDestinationItem}
      />
    </View>
  );
}

export default VacationsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
})
