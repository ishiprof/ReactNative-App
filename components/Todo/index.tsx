import { View, Text, FlatList } from "react-native";
import style from "./style";

interface Item {
  id: string;
  title: string;
  content: string;
}

const DATA: Item[] = [
  { id: "1", title: "ジム", content: "メモ" },
  { id: "2", title: "散歩", content: "メモ" },
];

export default function Todo() {
  const renderItem = ({ item }: { item: Item }) => (
    <View style={style.flex}>
      <Text style={[style.text, style.title]}>{item.title}</Text>
      <Text style={[style.text, style.contents]}>{item.content}</Text>
    </View>
  );
  return (
    <>
      <View style={style.container}>
        <Text style={[style.text, style.title]}>タイトル</Text>
        <Text style={[style.text, style.contents]}>内容</Text>
      </View>
      <FlatList
        data={DATA || []}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={style.list}
      />
    </>
  );
}
