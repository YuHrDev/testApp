import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  DARK_THEME_ID,
  FONT_SIZE,
  ICON_COLOR,
  ICON_SIZE,
  LIGHT_THEME_ID,
} from "@/constants/ThemeConsts";

export type ThemeIdType = typeof DARK_THEME_ID | typeof LIGHT_THEME_ID;

export interface Props {
  initial: ThemeIdType;
  children?: React.ReactNode;
}

export interface ProvidedValue {
  theme: "light" | "dark";
  fontSize: string;
  iconSize: string;
  iconColor: string;
  toggleTheme: (theme: ThemeIdType) => void;
  changeFontSize: (newFontSize: string) => void;
  changeIconSize: (newIconSize: string) => void;
  changeIconColor: (newIconSize: string) => void;
}

const themeDisabled = () => {
  console.log("ThemeProvider is not rendered!");
};

const Context = React.createContext<ProvidedValue>({
  theme: LIGHT_THEME_ID,
  fontSize: FONT_SIZE,
  iconSize: ICON_SIZE,
  iconColor: ICON_COLOR,
  toggleTheme: () => themeDisabled(),
  changeFontSize: () => themeDisabled(),
  changeIconSize: () => themeDisabled(),
  changeIconColor: () => themeDisabled(),
});

const getStorageData = async (name: string) => {
  const data = await AsyncStorage.getItem(name);
  return data;
};

const setStorageData = async (name: string, value: any) => {
  const data = await AsyncStorage.setItem(name, value);
  return data;
};

export const ThemeProvider = React.memo<Props>((props) => {
  const [theme, setTheme] = React.useState<ThemeIdType>(props.initial);
  const [fontSize, setFontSize] = React.useState<string>(FONT_SIZE);
  const [iconSize, setIconSize] = React.useState<string>(ICON_SIZE);
  const [iconColor, setIconColor] = React.useState<string>(ICON_COLOR);

  React.useLayoutEffect(() => {
    async function getTheme() {
      const fontSize = await getStorageData("fontSize");
      const iconSize = await getStorageData("iconSize");
      const iconColor = await getStorageData("iconColor");
      const theme = await getStorageData("theme");
      setFontSize(fontSize ?? FONT_SIZE);
      setIconSize(iconSize ?? ICON_SIZE);
      setIconColor(iconColor ?? ICON_COLOR);
      setTheme(theme === DARK_THEME_ID ? DARK_THEME_ID : props.initial);
      return;
    }
    getTheme();
  }, []);

  const ToggleThemeCallback = React.useCallback(
    async (themeID: ThemeIdType) => {
      await setStorageData("theme", themeID);
      setTheme((currentTheme) => {
        if (themeID === LIGHT_THEME_ID) {
          return LIGHT_THEME_ID;
        }
        if (themeID === DARK_THEME_ID) {
          return DARK_THEME_ID;
        }
        return currentTheme;
      });
    },
    []
  );

  const ChangeFontSizeCallback = React.useCallback(async (fontSize: string) => {
    await setStorageData("fontSize", fontSize);
    setFontSize((currentFontSize) => {
      if (fontSize !== currentFontSize) {
        return fontSize;
      }
      return FONT_SIZE;
    });
  }, []);

  const ChangeIconSizeCallback = React.useCallback(async (iconSize: string) => {
    await setStorageData("iconSize", iconSize);
    setIconSize((currentIconSize) => {
      if (iconSize !== currentIconSize) {
        return iconSize;
      }
      return ICON_SIZE;
    });
  }, []);

  const ChangeIconColorCallback = React.useCallback(
    async (iconColor: string) => {
      await setStorageData("iconColor", iconColor);
      setIconColor((currentIconColor) => {
        if (iconColor !== currentIconColor) {
          return iconColor;
        }
        return ICON_COLOR;
      });
    },
    []
  );

  const MemoizedValue = React.useMemo(() => {
    const value: ProvidedValue = {
      theme,
      fontSize,
      iconSize,
      iconColor,
      toggleTheme: ToggleThemeCallback,
      changeFontSize: ChangeFontSizeCallback,
      changeIconSize: ChangeIconSizeCallback,
      changeIconColor: ChangeIconColorCallback,
    };
    return value;
  }, [
    theme,
    ToggleThemeCallback,
    fontSize,
    ChangeFontSizeCallback,
    iconSize,
    ChangeIconSizeCallback,
    iconColor,
    ChangeIconColorCallback,
  ]);

  return (
    <Context.Provider value={MemoizedValue}>{props.children}</Context.Provider>
  );
});

export const useTheme = () => React.useContext(Context);
