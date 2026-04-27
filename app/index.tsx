import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Page</Text>

      {/* Link navigation */}
      <Link href="/about" style={styles.link}>
        Go to About Page
      </Link>

      {/* Dynamic routes */}
      <Link href="/user/123" style={styles.link}>
        Go to User 123
      </Link>

      <Link href="/user/456" style={styles.link}>
        Go to User 456
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111",
  },
  title: {
    fontSize: 24,
    color: "white",
    marginBottom: 20,
  },
  link: {
    color: "#4da6ff",
    marginVertical: 10,
    fontSize: 16,
  },
});