import { Path, Svg } from "react-native-svg";

export default function BellIcon({
  color,
  fill,
}: {
  color?: string;
  fill?: string;
}) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill={fill ?? "none"}>
      <Path
        d="M12 10.5199C11.59 10.5199 11.25 10.1799 11.25 9.76994V6.43994C11.25 6.02994 11.59 5.68994 12 5.68994C12.41 5.68994 12.75 6.02994 12.75 6.43994V9.76994C12.75 10.1899 12.41 10.5199 12 10.5199Z"
        fill={color ?? "#797979"}
      />
      <Path
        d="M12.0201 20.35C9.44011 20.35 6.87011 19.94 4.42011 19.12C3.51011 18.82 2.82011 18.17 2.52011 17.35C2.22011 16.53 2.32011 15.59 2.81011 14.77L4.08011 12.65C4.36011 12.18 4.61011 11.3 4.61011 10.75V8.64999C4.61011 4.55999 7.93011 1.23999 12.0201 1.23999C16.1101 1.23999 19.4301 4.55999 19.4301 8.64999V10.75C19.4301 11.29 19.6801 12.18 19.9601 12.65L21.2301 14.77C21.7001 15.55 21.7801 16.48 21.4701 17.33C21.1601 18.18 20.4801 18.83 19.6201 19.12C17.1701 19.95 14.6001 20.35 12.0201 20.35ZM12.0201 2.74999C8.76011 2.74999 6.11011 5.39999 6.11011 8.65999V10.76C6.11011 11.57 5.79011 12.74 5.37011 13.43L4.10011 15.56C3.84011 15.99 3.78011 16.45 3.93011 16.85C4.08011 17.25 4.42011 17.55 4.90011 17.71C9.50011 19.24 14.5601 19.24 19.1601 17.71C19.5901 17.57 19.9201 17.25 20.0701 16.83C20.2301 16.41 20.1801 15.95 19.9501 15.56L18.6801 13.44C18.2601 12.75 17.9401 11.58 17.9401 10.77V8.66999C17.9301 5.39999 15.2801 2.74999 12.0201 2.74999Z"
        fill={color ?? "#797979"}
      />
      <Path
        d="M11.9999 22.9001C10.9299 22.9001 9.87992 22.4601 9.11992 21.7001C8.35992 20.9401 7.91992 19.8901 7.91992 18.8201H9.41992C9.41992 19.5001 9.69992 20.1601 10.1799 20.6401C10.6599 21.1201 11.3199 21.4001 11.9999 21.4001C13.4199 21.4001 14.5799 20.2401 14.5799 18.8201H16.0799C16.0799 21.0701 14.2499 22.9001 11.9999 22.9001Z"
        fill={color ?? "#797979"}
      />
    </Svg>
  );
}
