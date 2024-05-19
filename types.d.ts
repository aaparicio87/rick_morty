type RootStackParamList = {
  BottomTab: undefined;
  Login: undefined;
  SignUp:undefined
};

type BottomTabNavigatorParamList = {
  Home: undefined;
  Episodes: undefined;
  Menu: undefined
};

interface UserResponse {
  token: string
}


interface LoginRequest {
  username: string
  password: string
}

