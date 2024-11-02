import { View, Text, FlatList, ActivityIndicator } from "react-native";
import style from "./style";
// import { TodoData } from "@/constants/data";
import TodoItem from "../TodoItem";
import { useEffect, useState } from "react";
import { API_URL } from "@/constants/urls";

export default function Todo() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<TodoList[]>([]);
  const getTodos = async () => {
    try {
      const response = await fetch(`${API_URL}/api/todos`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getTodos();
  }, [data]);
  return (
    <>
      <View style={style.container}>
        <Text style={[style.text, style.title]}>タイトル</Text>
        <Text style={[style.text, style.contents]}>内容</Text>
      </View>
      {/* <FlatList
        data={TodoData || []}
        renderItem={({ item }) => (
          <TodoItem title={item.title} content={item.content} />
        )}
        keyExtractor={(item) => item.id.toString()}
        style={style.list}
      /> */}
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TodoItem id={item.id} title={item.title} content={item.content} />
          )}
          keyExtractor={(item) => item.id!.toString()}
          style={style.list}
        />
      )}
    </>
  );
}
