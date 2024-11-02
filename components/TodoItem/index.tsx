import { View, Text, TouchableOpacity } from "react-native";
import style from "./style";
import { API_URL } from "@/constants/urls";

export default function TodoItem({ id, title, content }: TodoList) {
  const deleteTodo = async (id: number) => {
    try {
      await fetch(`${API_URL}/api/todos/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={style.flex}>
      <Text style={[style.text, style.title]}>{title}</Text>
      <Text style={[style.text, style.contents]}>{content}</Text>
      <TouchableOpacity
        style={style.submit}
        onPress={() => {
          deleteTodo(id!);
        }}
      >
        <Text style={[style.text, style.delete]}>削除</Text>
      </TouchableOpacity>
    </View>
  );
}
