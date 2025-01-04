import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Platform } from "react-native";
import {
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import {
  PaperProvider,
  Text,
  Divider,
  TextInput,
  Button,
} from "react-native-paper";
export default function ContactUs() {
  const [name, setName] = useState();
  const navigation = useNavigation();
  return (
    <PaperProvider>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.container}>
            <View style={styles.header}>
              <Text variant="headlineLarge">Contact Us</Text>
              <Divider />
            </View>
            <View style={styles.body}>
              <Text variant="bodyMedium">
                Video provides a powerful way to help you prove your point. When
                you click Online Video, you can paste in the embed code for the
                video you want to add. You can also type a keyword to search
                online for the video that best fits your document. To make your
                document look professionally produced, Word provides header,
                footer, cover page, and text box designs that complement each
                other. For example, you can add a matching cover page, header,
                and sidebar.
              </Text>
              <View style={styles.input}>
                <TextInput
                  label="Name"
                  mode="outlined"
                  value={name}
                  onChangeText={setName}
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  label="Email"
                  mode="outlined"
                  keyboardType="email-address"
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  label="Phone number"
                  mode="outlined"
                  keyboardType="phone-pad"
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  label="Message"
                  mode="outlined"
                  multiline
                  numberOfLines={5}
                />
              </View>
              <View style={styles.input}>
                <Button
                  mode="contained"
                  onPress={() => navigation.navigate("aboutus")}
                >
                  About Us
                </Button>
              </View>
              <Text>{name}</Text>
            </View>
            <View style={styles.footer}>
              <Text>MyApp © 2024</Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    padding: 10,
  },
  header: {
    flex: 3,
    width: "100%",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
  },
  body: {
    flex: 5,
    width: "100%",
  },
  footer: {
    flex: 2,
    width: "100%",
    alignItems: "center",
  },
  input: {
    padding: 8,
    marginBottom: 7,
  },
  scrollView: {
    flexGrow: 1, // Ensures the ScrollView behaves correctly
  },
  keyboardAvoidingView: {
    flex: 1, // Ensures proper layout with keyboard adjustments
  },
});
