import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, View, Text, Switch } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Slider from "@react-native-community/slider";
import { useTheme } from "@/theme";
import ColorPicker, {
  Preview,
  OpacitySlider,
  BrightnessSlider,
  HueSlider,
  SaturationSlider,
} from "reanimated-color-picker";
import { Colors } from "@/constants/Colors";

export default function SettingsTab() {
  const {
    fontSize,
    changeFontSize,
    theme,
    changeIconSize,
    iconSize,
    iconColor,
    changeIconColor,
    toggleTheme,
  } = useTheme();
  const toggleSwitch = () => toggleTheme(theme === "light" ? "dark" : "light");
  const defaultColor = theme === "dark" ? "#ffffff" : "#000000";
  const rangeColor = theme === "dark" ? "#353636" : "#D0D0D0";
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons
          size={310}
          name="settings-outline"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.darkModeContainer}>
        <ThemedText type="title">Dark Mode</ThemedText>
        <Switch
          trackColor={{
            false: Colors[theme].trackColorFalse,
            true: Colors[theme].trackColorTrue,
          }}
          thumbColor={
            theme === "dark"
              ? Colors[theme].thumbColorEnabled
              : Colors[theme].thumbColorDisabled
          }
          ios_backgroundColor={Colors[theme].switch_ios_backgroundColor}
          onValueChange={toggleSwitch}
          value={theme === "dark"}
        />
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Text Size</ThemedText>
        <Slider
          style={{ width: "100%", height: 40 }}
          minimumValue={14}
          maximumValue={22}
          step={2}
          value={Number(fontSize)}
          minimumTrackTintColor={defaultColor}
          maximumTrackTintColor={rangeColor}
          onValueChange={(value) => {
            changeFontSize(value?.toString());
          }}
        />
        <View style={styles.textSizeContainer}>
          <Text
            style={{
              fontSize: 14,
              color: defaultColor,
              paddingLeft: 10,
            }}
          >
            Aa
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: defaultColor,
              paddingLeft: 8,
            }}
          >
            Aa
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: defaultColor,
              paddingLeft: 6,
            }}
          >
            Aa
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: defaultColor,
              paddingLeft: 4,
            }}
          >
            Aa
          </Text>
          <Text
            style={{
              fontSize: 22,
              color: defaultColor,
              paddingLeft: 2,
            }}
          >
            Aa
          </Text>
        </View>
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Icon Size</ThemedText>
        <Slider
          style={{ width: "100%", height: 40 }}
          minimumValue={24}
          maximumValue={40}
          step={4}
          value={Number(iconSize)}
          minimumTrackTintColor={defaultColor}
          maximumTrackTintColor={rangeColor}
          onValueChange={(value) => {
            changeIconSize(value?.toString());
          }}
        />
        <View style={styles.textSizeContainer}>
          <Ionicons name="earth" size={24} color={iconColor} />
          <Ionicons
            name="earth"
            size={28}
            color={iconColor}
            style={{ marginLeft: 15 }}
          />
          <Ionicons
            name="earth"
            size={32}
            color={iconColor}
            style={{ marginLeft: 10 }}
          />
          <Ionicons
            name="earth"
            size={36}
            color={iconColor}
            style={{ marginLeft: 5 }}
          />
          <Ionicons name="earth" size={40} color={iconColor} />
        </View>
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Icon Color</ThemedText>
        <ColorPicker
          value={iconColor}
          style={{ width: "100%", justifyContent: "center" }}
          sliderThickness={30}
          thumbSize={40}
          onComplete={(color) => {
            changeIconColor(color?.rgba);
          }}
        >
          <Preview
            textStyle={{ fontSize: 18 }}
            colorFormat="rgba"
            hideInitialColor
          />
          <ThemedText>Hue:</ThemedText>
          <HueSlider />
          <ThemedText>Brightness:</ThemedText>
          <BrightnessSlider />
          <ThemedText>Saturation:</ThemedText>
          <SaturationSlider />
          <ThemedText>Opacity:</ThemedText>
          <OpacitySlider />
        </ColorPicker>
      </ThemedView>
      <ThemedText>
        This app includes settings of theme color, font size, icon size, icon
        color.
      </ThemedText>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    gap: 8,
  },
  darkModeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textSizeContainer: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "baseline",
  },
});
