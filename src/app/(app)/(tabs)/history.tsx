import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Page() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1" style={{ paddingTop: insets.top }}>
      <View className="px-4 py-6">
        <Text className="text-2xl font-bold mb-4">History</Text>
        <Text className="text-gray-600">
          Your activity history will appear here.
        </Text>
      </View>
    </View>
  );
}
