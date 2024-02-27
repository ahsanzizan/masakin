import { Redirect } from "expo-router";
import { useSession } from "@lib/auth";
import { useEffect, useState } from "react";
import { getSecureItemSync, setSecureItemSync } from "@utils/secureStoreManager";
import OnBoarding from "./onboarding";

export default function Root() {
  const { loggedIn } = useSession();
  const [firstLaunch, setFirstLaunch] = useState<boolean | null>(null);

  useEffect(() => {
    const init = async () => {
      const getFirstLaunch = await getSecureItemSync("firstLaunch");

      if (getFirstLaunch === null) {
        setFirstLaunch(true);
        setSecureItemSync("firstLaunch", "false");
      } else {
        setFirstLaunch(false);
      }
    };

    init();
  }, []);

  if (!loggedIn && !firstLaunch) return <Redirect href={"/login"} />;

  if (firstLaunch) return <OnBoarding />;

  return <Redirect href={"/home"} />;
}
