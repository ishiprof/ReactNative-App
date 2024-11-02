import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  list: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  text: {
    fontFamily: "NotoSansJP_700Bold",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "#ccceee",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  title: {
    width: "60%",
  },
  contents: {
    width: "40%",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
  },
});

export default style;
