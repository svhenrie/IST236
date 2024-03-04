import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import { RadioGroup } from "react-native-radio-buttons-group";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Colors from "../constants/colors";
import { Switch } from "react-native";

function HomeScreen(props) {
  // Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();
  return (
    // Background image to cover the screen
    <ImageBackground
      source={require("../assets/images/bikeShop.jpg")}
      resizeMode="cover"
      style={styles.rootContainer}
      imageStyle={styles.backkgroundImage}
    >
      <View
        style={[
          styles.rootContainer,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
        ]}
      >
        {/* Repair Shop Name */}
        <View style={styles.titleContainer}>
          <Title>Beach Bike Repair</Title>
        </View>
        {/* Radio Buttons to determine repair time */}
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.radioContainer}>
            <Text style={styles.radioHeader}>Repair Time:</Text>
            <RadioGroup
              radioButtons={props.repairTimeRadioButtons}
              onPress={props.onSetRepairTimeId}
              selectedId={props.repairTimeId}
              layout="row"
              containerStyle={styles.radioGroup}
              labelStyle={styles.radioGroupLabels}
            />
          </View>
          {/* Check Boxes to determine services selected */}
          <View style={styles.rowContainer}>
            <View style={styles.checkBoxContainer}>
              <Text style={styles.checkBoxHeader}>Service Options:</Text>
              <View style={styles.checkBoxSubContainer}>
                {props.services.map((item) => {
                  return (
                    <BouncyCheckbox
                      key={item.id}
                      text={item.name}
                      onPress={props.onSetServices.bind(this, item.id)}
                      textStyle={{
                        textDecorationLine: "none",
                        color: Colors.primary500,
                      }}
                      innerIconStyle={{
                        borderRadius: 0,
                        borderColor: Colors.primary500,
                      }}
                      iconStyle={{
                        borderRadius: 0,
                      }}
                      fillColor={Colors.primary500}
                      style={{
                        padding: 2,
                      }}
                    />
                  );
                })}
              </View>
            </View>
          </View>
          {/* Switch for Newsletter */}
          <View style={styles.addOnsContainer}>
            <View style={styles.addOnsSubContainer}>
              <Text style={styles.addOnsLabel}>Join Newsletter</Text>
              <Switch
                onValueChange={props.onSetNewsletter}
                value={props.newsletter}
                thumbColor={
                  props.newsletter ? Colors.primary500 : Colors.primary800
                }
                trackColor={{
                  false: Colors.primary500,
                  true: Colors.primary800,
                }}
              />
            </View>
            {/* Switch for Rental Membership */}
            <View style={styles.addOnsSubContainer}>
              <Text style={styles.addOnsLabel}>
                Sign Up for Rental Membership
              </Text>
              <Switch
                onValueChange={props.onSetRentalMembership}
                value={props.rentalMembership}
                thumbColor={
                  props.rentalMembership ? Colors.primary500 : Colors.primary800
                }
                trackColor={{
                  false: Colors.primary500,
                  true: Colors.primary800,
                }}
              />
            </View>
          </View>
          {/* Submit Button to bring user to OrderScreen */}
          <View style={styles.buttonContainer}>
            <NavButton onPress={props.onNext}>Submit</NavButton>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    width: 500,
  },
  titleContainer: {
    marginBottom: 20,
    marginHorizontal: 50,
    paddingVertical: 3,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primary500,
  },
  radioContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  radioHeader: {
    fontSize: 30,
    color: Colors.primary500,
  },
  radioGroup: {
    paddingBottom: 20,
  },
  radioGroupLabels: {
    fontSize: 15,
    colors: Colors.primary500,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: 20,
  },
  checkBoxContainer: {},
  checkBoxHeader: {
    fontSize: 20,
    color: Colors.primary500,
  },
  checkBoxSubContainer: {
    padding: 2,
  },
  cheeseContainer: {
    alignItems: "center",
  },
  addOnsContainer: {
    justifyContent: "space-between",
  },
  addOnsSubContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  addOnsLabel: {
    color: Colors.primary500,
    fontSize: 20,
  },
  buttonContainer: {
    alignItems: "center",
  },
  backkgroundImage: {
    opacity: 0.18,
  },
});
