import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import Palette from '../theme/palette';
import StoreType from '../redux/Store.type';
import { logOut } from '../redux/stores/auth/auth.reducer';
import { UserType } from '../redux/stores/auth/auth.state';
import { cleanAll } from '../redux/stores/chat/chat.reducer';
import UIButton from '../components/UIButton/UIButton.component';
import { selectAuthUserStore } from '../redux/stores/auth/auth.selectors';

const UserScreen: FC = () => {
  const dispatch = useDispatch();
  const user = useSelector<StoreType, UserType>(selectAuthUserStore);

  const handleLogout = () => {
    dispatch(cleanAll());
    dispatch(logOut());
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar} />
        </View>
        <View style={{ height: 50 }} />
        <Text style={styles.titleLabel}>Nombre de usuario</Text>
        <Text style={styles.textLabel}>{user.name}</Text>
        <View style={{ height: 50 }} />
        <Text style={styles.titleLabel}>Correo electrónico</Text>
        <Text style={styles.textLabel}>{user.email}</Text>
      </View>
      <View
        style={{
          height: 150,
          justifyContent: 'center',
          paddingHorizontal: 20,
        }}>
        <UIButton title="Cerrar sesión" onPress={handleLogout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  avatar: {
    height: 100,
    width: 100,
    backgroundColor: Palette.normal.color,
    borderRadius: 50,
  },
  titleLabel: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: Palette.normal.color,
  },
  textLabel: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: Palette.normal.dark,
  },
});

export default UserScreen;
