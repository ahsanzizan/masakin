import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { LargeP, P, SmallP } from "@components/Text";
import MoreIcon from "@components/icons/MoreIcon";
import Colors from "@constants/Colors";
import { useSession } from "@lib/auth";
import dimensions from "@utils/dimensions";
import LoadingModal from "@components/LoadingModal";

export default function Profile() {
  const { user } = useSession();

  return (
    <>
      <LoadingModal isActive={user.username === null} />
      <ScrollView
        style={{
          width: dimensions.windows.width,
        }}
        contentContainerStyle={{ paddingHorizontal: 30, paddingVertical: 94 }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Placeholder only */}
          <View></View>
          {/* Placeholder only */}
          <LargeP style={{ fontWeight: "bold" }}>Profile</LargeP>
          <TouchableOpacity>
            <MoreIcon />
          </TouchableOpacity>
        </View>
        <View style={{ paddingVertical: 10 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 18,
            }}
          >
            <Image
              source={
                user.avatar
                  ? {
                      uri: user.avatar,
                    }
                  : require("@assets/images/profile_picture_placeholder.jpg")
              }
              style={{ width: 84, height: 84, borderRadius: 100 }}
            />
            <View
              style={{ flexDirection: "row", gap: 18, alignItems: "center" }}
            >
              <View
                style={{
                  flexDirection: "column",
                  gap: 2,
                  alignItems: "center",
                }}
              >
                <SmallP style={{ color: Colors.neutral }}>Recipes</SmallP>
                <LargeP style={{ fontWeight: "bold" }}>4</LargeP>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  gap: 2,
                  alignItems: "center",
                }}
              >
                <SmallP style={{ color: Colors.neutral }}>Followers</SmallP>
                <LargeP style={{ fontWeight: "bold" }}>25M</LargeP>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  gap: 2,
                  alignItems: "center",
                }}
              >
                <SmallP style={{ color: Colors.neutral }}>Following</SmallP>
                <LargeP style={{ fontWeight: "bold" }}>1</LargeP>
              </View>
            </View>
          </View>
          <View>
            <P style={{ fontWeight: "bold", marginBottom: 10 }}>
              {user.username}
            </P>
            <SmallP>
              Private Chef That Passionate about food and life 🥘🍲🍝🍱
            </SmallP>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
