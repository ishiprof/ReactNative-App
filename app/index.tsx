import { View, Text } from "react-native";
// import Todo from "@/components/Todo";
import TodoCopy from "@/components/TodoCopy";
import { SafeAreaView } from "react-native-safe-area-context";
import TodoForm from "@/components/TodoForm";
import { Link } from "expo-router";

export default function index() {
  return (
    <SafeAreaView>
      <View>
        <TodoForm text="追加" />
        {/* <Todo /> */}
        <TodoCopy />
        <Link href="/about">
          <Text style={{ color: "blue", marginTop: 20 }}>Go to About</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}
