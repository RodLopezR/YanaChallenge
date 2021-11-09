import React, { FC, useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { styles } from '../theme/theme';
import UITextInput from '../components/UITextInput';
import { login } from '../redux/stores/auth/auth.reducer';
import UIButton from '../components/UIButton/UIButton.component';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

interface LoginScreenProps extends NativeStackScreenProps<any, any> {}

const LoginScreen: FC<LoginScreenProps> = () => {
  const { top: paddingTop } = useSafeAreaInsets();
  const dispatch = useDispatch();

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    if (user.length === 0 || email.length === 0 || password.length === 0)
      return;
    dispatch(
      login({
        name: user,
        email,
        password,
      }),
    );
  };

  return (
    <View style={[styles.page, { backgroundColor: 'white', paddingTop }]}>
      <View style={{ flex: 1, paddingTop: 50 }}>
        <Text style={{ textAlign: 'center', fontSize: 30, paddingBottom: 20 }}>
          Regístrate
        </Text>
        <UITextInput
          value={user}
          onChangeText={setUser}
          style={{ marginBottom: 10 }}
          placeholder="Nombre de usuario"
        />
        <UITextInput
          value={email}
          onChangeText={setEmail}
          style={{ marginBottom: 10 }}
          placeholder="Correo electrónico"
        />
        <UITextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Contraseña"
          style={{ marginBottom: 10 }}
        />
      </View>
      <View>
        <UIButton title="Crear Cuenta" onPress={handleClick} />
      </View>
    </View>
  );
};
//onPress={() => navigation.navigate('TopTabScreen')}

export default LoginScreen;
