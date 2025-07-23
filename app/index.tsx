import { offers } from "@/constants";
import { FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex size-full  justify-center">
      <Text className="text-3xl text-primary font-quicksand-bold">
        Welcome to the Expo Router!
      </Text>
      <FlatList
        data={offers}
        className="flex flex-col gap-4 mt-4"
        renderItem={({ item, index }) => (
          <View key={item.id}>
            <Pressable className="text-lg my-4 flex flex-col justify-center items-center text-gray-600 font-quicksand-medium bg-amber-600 h-40 rounded-xl">
              <Text>{item.title}</Text>
            </Pressable>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
