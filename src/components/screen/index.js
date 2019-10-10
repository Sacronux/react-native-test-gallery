import {createStackNavigator} from 'react-navigation';
import HomeScreen from './homeScreen';
import PhotoScreen from './photoScreen';
import {
  GALLERY_HOME,
  GALLERY_PHOTO
} from '../../routes';

export default createStackNavigator(
  {
    GALLERY_HOME: HomeScreen,
    GALLERY_PHOTO: PhotoScreen
  },
  {
    headerMode: 'none'
  }
)