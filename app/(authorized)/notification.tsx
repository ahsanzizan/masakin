import { LargeP, P, SmallP } from "@components/Text";
import Wrapper from "@components/Wrapper";
import Colors from "@constants/Colors";
import { Dispatch, SetStateAction, useState } from "react";
import {
  FlatList,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { NotificationType } from "../../types/entities";
import { notifications } from "@utils/seeders/notifications";

type TabsType = "All" | "Read" | "Unread";

const Header = () => (
  <View style={styles.headerContainer as StyleProp<ViewStyle>}>
    <LargeP style={styles.title as TextStyle}>Notifications</LargeP>
  </View>
);

const TabButtons = ({
  tab,
  setTab,
}: {
  tab: TabsType;
  setTab: Dispatch<SetStateAction<TabsType>>;
}) => {
  const renderButton = (text: TabsType, tab: TabsType) => (
    <TouchableOpacity
      style={{
        ...(styles.tabButton as object),
        backgroundColor: tab === text ? Colors.primary : Colors.white,
      }}
      onPress={() => setTab(text)}
    >
      <SmallP style={styles.tabButtonText as TextStyle} isDark={tab === text}>
        {text}
      </SmallP>
    </TouchableOpacity>
  );

  return (
    <View style={styles.tabsContainer as StyleProp<ViewStyle>}>
      {renderButton("All", tab)}
      {renderButton("Read", tab)}
      {renderButton("Unread", tab)}
    </View>
  );
};

const NotificationsSection = ({
  notifications,
}: {
  notifications: NotificationType[];
}) => {
  const renderNotification = ({ item }: { item: NotificationType }) => (
    <View
      style={{
        backgroundColor: Colors.neutral,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 12,
      }}
    >
      <View>
        <P style={{ fontWeight: "bold", marginBottom: 5 }}>{item.title}</P>
        <SmallP style={{ color: Colors.gray, fontWeight: "600" }}>
          {item.description}
        </SmallP>
      </View>
    </View>
  );

  return (
    <View>
      <View style={styles.headerContainer as StyleProp<ViewStyle>}>
        <SmallP style={{ textAlign: "center", fontWeight: "bold" }}>
          Today
        </SmallP>
      </View>
      <FlatList
        data={notifications}
        renderItem={renderNotification}
        ListHeaderComponent={View}
        ListFooterComponent={View}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      />
    </View>
  );
};

export default function Notification() {
  const [tab, setTab] = useState<TabsType>("All");

  return (
    <Wrapper>
      <Header />
      <TabButtons tab={tab} setTab={setTab} />
      <NotificationsSection notifications={notifications} />
    </Wrapper>
  );
}

const styles = {
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 22,
  },
  title: {
    fontWeight: "bold",
  },
  tabsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  tabButton: {
    width: "33.3333%",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
  },
  tabButtonText: {
    textAlign: "center",
    fontWeight: "600",
  },
};
