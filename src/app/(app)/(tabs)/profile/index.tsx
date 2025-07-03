import React, { useState } from "react";
import { Text, View, TouchableOpacity, Alert } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAuth } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";

export default function Profile() {
  const insets = useSafeAreaInsets();
  const { signOut } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignOut = async () => {
    Alert.alert("Sign Out", "Are you sure you want to sign out?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Sign Out",
        style: "destructive",
        onPress: async () => {
          setIsLoading(true);
          try {
            await signOut();
          } catch (error) {
            console.error("Error signing out:", error);
            Alert.alert("Error", "Failed to sign out. Please try again.");
          } finally {
            setIsLoading(false);
          }
        },
      },
    ]);
  };

  return (
    <View className="flex-1 bg-gray-50" style={{ paddingTop: insets.top }}>
      <View className="px-4 py-6">
        <Text className="text-2xl font-bold mb-4 text-gray-900">Profile</Text>
        <Text className="text-gray-600 mb-8">
          Your profile information will appear here.
        </Text>

        {/* Sign Out Button */}
        <View className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <TouchableOpacity
            onPress={handleSignOut}
            className={`flex-row items-center justify-center rounded-xl py-4 shadow-sm ${
              isLoading ? "bg-gray-400" : "bg-red-600"
            }`}
            activeOpacity={0.8}
            disabled={isLoading}
          >
            <Ionicons
              name="log-out-outline"
              size={20}
              color="white"
              style={{ marginRight: 8 }}
            />
            <Text className="text-white font-semibold text-lg">
              {isLoading ? "Signing Out..." : "Sign Out"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
