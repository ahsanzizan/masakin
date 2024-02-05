import { Path, Svg } from "react-native-svg";

export default function PlusIcon({ color }: { color?: string }) {
  return (
    <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.2132 5.21409C12.2132 4.54357 11.6701 4 11.0001 4C10.3302 4 9.78705 4.54357 9.78705 5.21409V9.78588H5.21306C4.54311 9.78588 4 10.3295 4 11C4 11.6705 4.54311 12.2141 5.21306 12.2141H9.78705V16.7859C9.78705 17.4564 10.3302 18 11.0001 18C11.6701 18 12.2132 17.4564 12.2132 16.7859V12.2141H16.7869C17.4569 12.2141 18 11.6705 18 11C18 10.3295 17.4569 9.78588 16.7869 9.78588H12.2132V5.21409Z"
        fill={color ?? "white"}
      />
    </Svg>
  );
}
