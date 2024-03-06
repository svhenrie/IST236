import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import {
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Pressable,
  Platform,
  Text,
  useWindowDimensions,
  Modal,
  Button,
} from "react-native";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import Colors from "../constants/colors";
import WheelPicker from "react-native-wheely";
import NavButton from "../components/NavButton";

function HomeScreen() {
  // Reliably handle safe areas
  const insets = useSafeAreaInsets();

  // State variables to track checkIn date and display
  const [checkIn, setCheckIn] = useState(new Date());
  const [showCheckIn, setShowCheckIn] = useState(false);

  // Function makes datetimepicker visable for date selection
  function showCheckInPicker() {
    setShowCheckIn(true);
  }

  // Function makes datetimepicker nonvisable
  function hideCheckInPicker() {
    setShowCheckIn(false);
  }

  // Function sets user selected date and handles datetimepicker
  // response for android devices
  function onChangeCheckIn(event, selectedDate) {
    const currentDate = selectedDate;
    if (Platform.OS === "android") {
      hideCheckInPicker(true);
    }
    setCheckIn(currentDate);
  }

  // State variables to track checkOut date and display
  const [checkOut, setCheckOut] = useState(new Date());
  const [showCheckOut, setShowCheckOut] = useState(false);

  // Function makes datetimepicker visable for date selection
  function showCheckOutPicker() {
    setShowCheckOut(true);
  }

  // Function makes datetimepicker nonvisable
  function hideCheckOutPicker() {
    setShowCheckOut(false);
  }

  // Function sets user selected date and handles datetimepicker
  // response for android devices
  function onChangeCheckOut(event, selectedDate) {
    const currentDate = selectedDate;
    if (Platform.OS === "android") {
      hideCheckOutPicker(true);
    }
    setCheckOut(currentDate);
  }

  // Wheely component will allow numbers in range of 1-15 to be selected
  // for number of campers
  const camperCounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  // State variables to track number of campers and display
  const [numCampers, setNumCampers] = useState(0);
  const [showNumCampers, setShowNumCampers] = useState(false);

  // Function makes wheely visable for campers selection
  function showNumCampersPicker() {
    setShowNumCampers(true);
  }

  // Function makes wheely nonvisable
  function hideNumCampersPicker() {
    setShowNumCampers(false);
  }

  // Function receives the array index and sets the number of campers to
  // that number
  function onChangeNumCampers(index) {
    setNumCampers(index);
  }

  // Wheely component will allow numbers in range of 1-5 to be selected
  // for number of campsites
  const campsiteCounts = [1, 2, 3, 4, 5];
  // State variables to track number of campsites and display
  const [numCampsites, setNumCampsites] = useState(0);
  const [showNumCampsites, setShowNumCampsites] = useState(false);

  // Function makes wheely visable for campsites selection
  function showNumCampsitesPicker() {
    setShowNumCampsites(true);
  }

  // Function makes wheely nonvisable
  function hideNumCampsitesPicker() {
    setShowNumCampsites(false);
  }

  // Function receives the array index and sets the number of
  // campsites to that number
  function onChangeNumCampsites(index) {
    setNumCampsites(index);
  }

  // State variable to track the results of user selections
  const [results, setResults] = useState("");

  // Function compiles the reservation information into a string to be
  // output to the screen for user confirmation
  function onReserveHandler() {
    let res = `Check In:\t\t${checkIn.toDateString()}\n`;
    res = res + `Check Out:\t\t${checkOut.toDateString()}\n`;
    res = res + `Number of Campers:\t\t${camperCounts[numCampers]}\n`;
    res = res + `Number of Campsites:\t\t${campsiteCounts[numCampsites]}\n`;
    setResults(res);
  }

  // Update values when screen size or font scale changes
  const { width, height } = useWindowDimensions();

  // Font scale
  const dateLabelFlex = {
    fontSize: width * 0.1,
  };
  // Font scale
  const dateTextFlex = {
    fontSize: width * 0.05,
  };

  return (
    // Image Background for home screen
    <ImageBackground
      source={require("../assets/images/camping.jpg")}
      resizeMode="cover"
      style={styles.rootContainer}
      imageStyle={styles.backkgroundImage}
    >
      {/* Set safe areas */}
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
        <ScrollView style={styles.scrollContainer}>
          {/* Title of Campground */}
          <View style={styles.titleContainer}>
            <Title>Salty Acres</Title>
          </View>

          {/* Check in datetime picker and text */}
          <View style={styles.rowContainer}>
            <View style={styles.dateContainer}>
              <Text style={[styles.dateLabel, dateLabelFlex]}>Check In:</Text>
              <Pressable onPress={showCheckInPicker}>
                <Text style={[styles.dateText, dateTextFlex]}>
                  {checkIn.toDateString()}
                </Text>
              </Pressable>
            </View>
            {/* Check out datetime picker and text */}
            <View style={styles.dateContainer}>
              <Text style={[styles.dateLabel, dateLabelFlex]}>Check Out:</Text>
              <Pressable onPress={showCheckOutPicker}>
                <Text style={[styles.dateText, dateTextFlex]}>
                  {checkOut.toDateString()}
                </Text>
              </Pressable>
            </View>
          </View>

          <View>
            {/* Handle datetime picker based on device OS */}
            {showCheckIn && Platform.OS === "android" && (
              <DateTimePicker
                testID="dateTimePickerCheckInAndroid"
                value={checkIn}
                mode={"date"}
                display="spinner"
                onChange={onChangeCheckIn}
              />
            )}
            {showCheckIn && Platform.OS === "ios" && (
              <Modal
                animationType="slide"
                transparent={true}
                supportedOrientations={["portrait", "landscape"]}
              >
                <View style={styles.centeredModalView}>
                  <View style={styles.modalView}>
                    <DateTimePicker
                      testID="dateTimePickerCheckInIOS"
                      value={checkIn}
                      mode={"date"}
                      diaplay="spinner"
                      onChange={onChangeCheckIn}
                    />
                    <Button title="Confirm" onPress={hideCheckInPicker} />
                  </View>
                </View>
              </Modal>
            )}
            {/* Handle datetime picker based on device OS */}
            {showCheckOut && Platform.OS === "android" && (
              <DateTimePicker
                testID="dateTimePickerCheckOutAndroid"
                value={checkOut}
                mode={"date"}
                display="spinner"
                onChange={onChangeCheckOut}
              />
            )}
            {showCheckOut && Platform.OS === "ios" && (
              <Modal
                animationType="slide"
                transparent={true}
                supportedOrientations={["portrait", "landscape"]}
              >
                <View style={styles.centeredModalView}>
                  <View style={styles.modalView}>
                    <DateTimePicker
                      testID="dateTimePickerCheckOutIOS"
                      value={checkOut}
                      mode={"date"}
                      diaplay="spinner"
                      onChange={onChangeCheckOut}
                    />
                    <Button title="Confirm" onPress={hideCheckOutPicker} />
                  </View>
                </View>
              </Modal>
            )}
          </View>

          {/* Number of campers wheel selector and text */}
          <View style={styles.rowContainer}>
            <Text style={[styles.dateLabel, dateLabelFlex]}>
              Number of Campers:
            </Text>
            <Pressable onPress={showNumCampersPicker}>
              <View style={styles.dateContainer}>
                <Text style={[styles.dateText, dateTextFlex]}>
                  {camperCounts[numCampers]}
                </Text>
              </View>
            </Pressable>

            <Modal
              animationType="slide"
              transparent={true}
              visible={showNumCampers}
              supportedOrientations={["portrait", "landscape"]}
            >
              <View style={styles.centeredModalView}>
                <View style={styles.modalView}>
                  <Text style={[styles.dateText, dateTextFlex]}>
                    Enter Number of Campers:
                  </Text>
                  <WheelPicker
                    selectedIndex={numCampers}
                    options={camperCounts}
                    onChange={onChangeNumCampers}
                    containerStyle={{ width: 200 }}
                  />
                  <Button title="Confirm" onPress={hideNumCampersPicker} />
                </View>
              </View>
            </Modal>
          </View>

          {/* Number of campsites wheel selector and text */}
          <View style={styles.rowContainer}>
            <Text style={[styles.dateLabel, dateLabelFlex]}>
              Number of Campsites:
            </Text>
            <Pressable onPress={showNumCampsitesPicker}>
              <View style={styles.dateContainer}>
                <Text style={[styles.dateText, dateTextFlex]}>
                  {campsiteCounts[numCampsites]}
                </Text>
              </View>
            </Pressable>

            <Modal
              animationType="slide"
              transparent={true}
              visible={showNumCampsites}
              supportedOrientations={["portrait", "landscape"]}
            >
              <View style={styles.centeredModalView}>
                <View style={styles.modalView}>
                  <Text style={[styles.dateText, dateTextFlex]}>
                    Enter Number of Campsites:
                  </Text>
                  <WheelPicker
                    selectedIndex={numCampsites}
                    options={campsiteCounts}
                    onChange={onChangeNumCampsites}
                    containerStyle={{ width: 200 }}
                  />
                  <Button title="Confirm" onPress={hideNumCampsitesPicker} />
                </View>
              </View>
            </Modal>
          </View>

          {/* Reserve Button */}
          <View style={styles.buttonContainer}>
            <NavButton onPress={onReserveHandler}>Reserve Now</NavButton>
          </View>

          {/* Display user selections to the screen */}
          <View style={styles.resultsContainer}>
            <Text style={[styles.results, dateLabelFlex]}>{results}</Text>
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
    alignItems: "center",
    justifyContent: "center",
  },
  backkgroundImage: {
    opacity: 0.3,
  },
  titleContainer: {
    padding: 7,
    marginVertical: 20,
    marginHorizontal: 20,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primary500,
    backgroundColor: Colors.primary300,
  },
  scrollContainer: {
    flex: 1,
    width: 3000,
    maxWidth: "95%",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 20,
    marginBottom: 20,
  },
  dateContainer: {
    backgroundColor: Colors.primary300o5,
    padding: 10,
  },
  dateLabel: {
    fontSize: 100,
    color: Colors.primary500,
    fontFamily: "mountain",
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  dateText: {
    color: Colors.primary800,
    fontSize: 20,
    fontWeight: "bold",
  },
  centeredModalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.primary300,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    alignItems: "center",
  },
  results: {
    textAlign: "center",
    color: Colors.primary500,
    fontFamily: "mountain",
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
});
