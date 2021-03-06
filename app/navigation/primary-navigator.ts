import createNativeStackNavigator from "react-native-screens/createNativeStackNavigator"
import {
  MainScreen,
  DetailsScreen,
  ImportScreen,
  RequestScreen
} from "../screens"

export const PrimaryNavigator = createNativeStackNavigator(
  {
    main: { screen: MainScreen },
    request: { screen: RequestScreen },
    details: { screen: DetailsScreen },
    import: { screen: ImportScreen }
  },
  {
    headerMode: "none",
  },
)

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 */
export const exitRoutes: string[] = ["main"]
