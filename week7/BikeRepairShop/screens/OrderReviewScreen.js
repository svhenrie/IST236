import { StyleSheet, View, Text } from "react-native";
import Title from "../components/Title";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../constants/colors";
import NavButton from "../components/NavButton";
import { LinearGradient } from "expo-linear-gradient";

function OrderReviewScreen(props) {
  // Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();
  return (
    // Linear gradiant color effect on the screen
    <LinearGradient colors={[Colors.accent500, Colors.accent300]}>
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
        <View style={styles.titleContainer}>
          <Title>Repair Summary</Title>
        </View>

        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>
            Your repair request has been placed with details below.
          </Text>
        </View>
        {/* Output user selectes for radio buttons, check boxes, and switches */}
        <View style={styles.optionsContainer}>
          <Text style={styles.options}>Repair Time:</Text>
          <Text style={styles.choices}>{props.time}</Text>
          <Text style={styles.options}>Services:</Text>
          {props.services.map((item) => {
            if (item.value) {
              return (
                <Text key={item.id} style={styles.choices}>
                  {item.name}
                </Text>
              );
            }
          })}
          <Text style={styles.options}>Add Ons:</Text>
          <Text style={styles.choices}>
            {props.newsletter ? "Newsletter" : ""}
          </Text>
          <Text style={styles.choices}>
            {props.rentalMembership ? "Rental Membership" : ""}
          </Text>
        </View>
        {/* Calculate subtotal */}
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>
            Subtotal: ${props.price.toFixed(2)}
          </Text>
          {/* Calculate tax at 6% */}
          <Text style={styles.subTitle}>
            Sales Tax: ${(props.price * 0.06).toFixed(2)}
          </Text>
          {/* Calculate total */}
          <Text style={styles.subTitle}>
            Total: ${(props.price + props.price * 0.06).toFixed(2)}
          </Text>
        </View>
        {/* Buttons brings user back to home screen */}
        <View style={styles.buttonContainer}>
          <NavButton onPress={props.onNext}>Return Home</NavButton>
        </View>
      </View>
    </LinearGradient>
  );
}

export default OrderReviewScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: 425,
  },
  titleContainer: {
    marginBottom: 20,
    marginHorizontal: 50,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primary500,
  },
  subTitleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    paddingBottom: 15,
  },
  subTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.primary500,
  },
  optionsContainer: {
    flex: 3,
  },
  options: {
    paddingLeft: 20,
    fontSize: 20,
    color: Colors.primary500,
  },
  choices: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
  },
  buttonContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
});
