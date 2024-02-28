import LoadingModal from "@components/LoadingModal";
import { LargeP, P, SmallP } from "@components/Text";
import Wrapper from "@components/Wrapper";
import MoreIcon from "@components/icons/MoreIcon";
import Colors from "@constants/Colors";
import { useSession } from "@lib/auth";
import {
  Image,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { AuthUser } from "../../types/auth";

const Header = () => (
  <View style={styles.headerContainer as StyleProp<ViewStyle>}>
    {/* Placeholder only */}
    <View></View>
    {/* Placeholder only */}
    <LargeP style={styles.title as TextStyle}>Profile</LargeP>
    <TouchableOpacity>
      <MoreIcon />
    </TouchableOpacity>
  </View>
);

const UserStats = () => {
  const renderStatItem = (label: string, value: string) => (
    <View style={styles.statItem as StyleProp<ViewStyle>}>
      <SmallP style={styles.statLabel as TextStyle}>{label}</SmallP>
      <LargeP style={styles.statValue as TextStyle}>{value}</LargeP>
    </View>
  );

  return (
    <View style={styles.statsContainer as StyleProp<ViewStyle>}>
      {renderStatItem("Recipes", "4")}
      {renderStatItem("Followers", "25M")}
      {renderStatItem("Following", "1")}
    </View>
  );
};

const ProfileStats = ({ user }: { user: AuthUser }) => (
  <View style={styles.contentContainer}>
    <View style={styles.profileContainer as StyleProp<ViewStyle>}>
      <Image
        source={
          user.avatar
            ? {
                uri: user.avatar,
              }
            : require("@assets/images/profile_picture_placeholder.jpg")
        }
        style={styles.profileImage}
      />
      <UserStats />
    </View>
    <View style={styles.userInfoContainer}>
      <P style={styles.username as TextStyle}>{user.username}</P>
      <SmallP>Private Chef That Passionate about food and life 🥘🍲🍝🍱</SmallP>
    </View>
  </View>
);

export default function Profile() {
  const { user } = useSession();

  return (
    <>
      <LoadingModal isActive={user.username === null} />
      <Wrapper>
        <Header />
        <ProfileStats user={user} />
      </Wrapper>
    </>
  );
}

const styles = {
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
  },
  contentContainer: {
    paddingVertical: 10,
  },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  profileImage: {
    width: 84,
    height: 84,
    borderRadius: 100,
  },
  statsContainer: {
    flexDirection: "row",
    gap: 18,
    alignItems: "center",
  },
  statItem: {
    flexDirection: "column",
    gap: 2,
    alignItems: "center",
  },
  statLabel: {
    color: Colors.neutral,
  },
  statValue: {
    fontWeight: "bold",
  },
  userInfoContainer: {
    marginBottom: 10,
  },
  username: {
    fontWeight: "bold",
    marginBottom: 10,
  },
};
