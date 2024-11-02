import { View, Text, TouchableOpacity, TextInput } from "react-native";
import style from "./style";
import { useState } from "react";
import { API_URL } from "@/constants/urls";

export default function TodoForm({ text }: Submit) {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  console.log(title, content);
  const createTodo = async ({ title, content }: TodoList) => {
    try {
      await fetch(`${API_URL}/api/todos`, {
        method: "POST",
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
      <TextInput
        style={style.input}
        placeholder="タイトル"
        onChangeText={setTitle}
        value={title}
      />
      <TextInput
        style={style.input}
        placeholder="内容"
        onChangeText={setContent}
        value={content}
      />
      <TouchableOpacity
        style={style.submit}
        onPress={() => {
          if (!title || !content) return;
          createTodo({ title, content });
          setTitle("");
          setContent("");
        }}
      >
        <Text style={style.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}
