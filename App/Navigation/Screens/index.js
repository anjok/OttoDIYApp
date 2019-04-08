import { Start, Web } from 'App/Containers'
import {
  Home,
  Rate,
  Settings,
  Connect,
  Play,
  Drive,
  Discover,
  CodeLab,
  Lessons,
  GetStarted,
  Lab} from 'App/Modules'

export default {
  StartScreen: {
    screen: Start,
    navigationOptions: ({navigation}) => ({
      header: null
    })
  },
  WebScreen: {
    screen: Web
  },
  HomeScreen: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      title: 'Code & Robots'
    })
  },
  RateScreen: {
    screen: Rate,
    navigationOptions: ({navigation}) => ({
      title: 'Spread the word'
    })
  },
  SettingsScreen: {
    screen: Settings,
    navigationOptions: ({navigation}) => ({
      title: 'Settings'
    })
  },
  ConnectScreen: {
    screen: Connect,
    navigationOptions: ({navigation}) => ({
      title: 'Connect'
    })
  },
  PlayScreen: {
    screen: Play,
    navigationOptions: ({navigation}) => ({
      title: 'Play & Explore'
    })
  },
  DriveScreen: {
    screen: Drive,
    navigationOptions: ({navigation}) => ({
      title: 'Drive'
    })
  },
  DiscoverScreen: {
    screen: Discover,
    navigationOptions: ({navigation}) => ({
      title: 'Discover'
    })
  },
  CodeLabScreen: {
    screen: CodeLab,
    navigationOptions: ({navigation}) => ({
      title: 'Code Lab'
    })
  },
  LearnScreen: {
    screen: Lessons,
    navigationOptions: ({navigation}) => ({
      title: 'Learn'
    })
  },
  GetStartedScreen: {
    screen: GetStarted,
    navigationOptions: ({navigation}) => ({
      title: 'Get Started'
    })
  },
  LabScreen: {
    screen: Lab,
    navigationOptions: ({navigation}) => ({
      title: 'Lab'
    })
  }
}
