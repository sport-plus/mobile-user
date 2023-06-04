import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants";

export const ListServices = [
  {
    id: "1",
    name: "Parking sport",
    icon: <AntDesign name="car" size={24} color={COLORS.primary} />,
  },
  {
    id: "2",
    name: "Changing rooms",
    icon: <MaterialIcons name="checkroom" size={24} color={COLORS.primary} />,
  },
  {
    id: "3",
    name: "Water shop",
    icon: <Fontisto name="shopping-store" size={24} color={COLORS.primary} />,
  },
  {
    id: "4",
    name: "Camera",
    icon: (
      <Octicons name="device-camera-video" size={24} color={COLORS.primary} />
    ),
  },
  {
    id: "5",
    name: "Waiting area",
    icon: <MaterialIcons name="roofing" size={24} color={COLORS.primary} />,
  },
];
