import { LargeP, P, SmallP } from "@components/Text";
import Wrapper from "@components/Wrapper";
import NotificationIcon from "@components/icons/NotificationIcon";
import Colors from "@constants/Colors";
import { notifications } from "@utils/seeders/notifications";
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

function isNotToday(dateString: Date): boolean {
  const dateToCheck = new Date(dateString);

  const today = new Date();

  today.setHours(0, 0, 0, 0);
  dateToCheck.setHours(0, 0, 0, 0);

  return dateToCheck < today;
}

const NotificationsSection = ({
  notifications,
}: {
  notifications: NotificationType[];
}) => {
  const renderNotification = ({ item }: { item: NotificationType }) => (
    <TouchableOpacity
      style={{
        backgroundColor: "rgba(217, 217, 217, .75)",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 12,
      }}
    >
      <View style={{ width: "85%" }}>
        <P style={{ fontWeight: "bold", marginBottom: 5 }}>{item.title}</P>
        <SmallP style={{ color: Colors.neutral, fontWeight: "600" }}>
          {item.description}
        </SmallP>
      </View>
      <NotificationIcon />
    </TouchableOpacity>
  );

  return (
    <View style={styles.notificationsContainer as StyleProp<ViewStyle>}>
      <View>
        <View style={styles.headerContainer as StyleProp<ViewStyle>}>
          <SmallP style={{ textAlign: "center", fontWeight: "bold" }}>
            Today
          </SmallP>
        </View>
        <FlatList
          data={notifications}
          keyExtractor={(item, index) => `${index}-${item.id}`}
          renderItem={renderNotification}
          ListHeaderComponent={<View></View>}
          ListFooterComponent={<View></View>}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        />
      </View>
      <View>
        <View style={styles.headerContainer as StyleProp<ViewStyle>}>
          <SmallP style={{ textAlign: "center", fontWeight: "bold" }}>
            Others
          </SmallP>
        </View>
        <FlatList
          data={notifications.filter((notification) =>
            isNotToday(notification.date)
          )}
          renderItem={renderNotification}
          ListHeaderComponent={<View></View>}
          ListFooterComponent={<View></View>}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        />
      </View>
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
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.gray,
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
  notificationsContainer: { flexDirection: "column", gap: 20 },
};
