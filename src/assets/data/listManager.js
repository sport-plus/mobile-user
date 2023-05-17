import { AntDesign, Feather, SimpleLineIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants";

export const ListManager = [
  {
    id: "1",
    name: "Sport Center",
    icon: <AntDesign name="appstore-o" size={30} color={COLORS.primary} />,
    path: "SportCenter",
  },
  {
    id: "2",
    name: "Booking Manager",
    icon: <AntDesign name="copy1" size={30} color={COLORS.primary} />,
    path: "BookingManager",
  },
  {
    id: "3",
    name: "Booking Calendar",
    icon: <Feather name="calendar" size={30} color={COLORS.primary} />,
    path: "BookingCalendar",
  },
  {
    id: "4",
    name: "Customer Information",
    icon: <Feather name="users" size={30} color={COLORS.primary} />,
    path: "CustomerInformation",
  },
  {
    id: "5",
    name: "Statistics",
    icon: <SimpleLineIcons name="pie-chart" size={30} color={COLORS.primary} />,
    path: "Statistic",
  },
  {
    id: "6",
    name: "Services",
    icon: <Feather name="flag" size={30} color={COLORS.primary} />,
    path: "Service",
  },
];
