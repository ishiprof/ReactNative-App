import { View, Text } from "react-native";
// import Todo from "@/components/Todo";
import TodoCopy from "@/components/TodoCopy";
import { SafeAreaView } from "react-native-safe-area-context";
import TodoForm from "@/components/TodoForm";

export default function index() {
  return (
    <SafeAreaView>
      <View>
        <TodoForm text="追加" />
        {/* <Todo /> */}
        <TodoCopy />
      </View>
    </SafeAreaView>
  );
}
