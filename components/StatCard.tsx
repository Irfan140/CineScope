import { View, Text } from "react-native";
import React from "react";
import { Image } from "expo-image";

const StatCard = ({ icon, label, value, color }: StatCardProps) => (
  <View className="flex-1 bg-dark-100 rounded-xl p-4 items-center">
    <View
      className={`rounded-full p-3 mb-3`}
      style={{ backgroundColor: `${color}20` }}
    >
      <Image source={icon} className="size-6" tintColor={color} />
    </View>
    <Text className="text-2xl text-white font-bold mb-1">{value}</Text>
    <Text className="text-light-300 text-xs text-center">{label}</Text>
  </View>
);
export default StatCard;
