import React from 'react'
import { FormControl, Input, InputField } from '@gluestack-ui/themed'
import { Text } from '@gluestack-ui/themed'
import { Image } from 'expo-image';
import { AuthLayout } from '../../../components';
import styles from './styles'
import { LoginScreenProps } from '../../../navigation';

type TProps = LoginScreenProps

export const LoginScreen = ({ navigation }: TProps) => {
    return (
        <AuthLayout
            buttonText='Sign in'
            handlePressButton={() => { }}
            handleNavigate={() => navigation.navigate('SignUp')}
        >
            <Image
                source={require('../../../assets/logo.png')}
                alt='Logo'
                style={styles.image}
            />
            <FormControl>
                <FormControl.Label>
                    <Text>E-mail</Text  >
                </FormControl.Label>
                <Input
                    variant="outline"
                    size="md"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                >
                    <InputField placeholder="Enter e-mail" />
                </Input>
            </FormControl>

            <FormControl>
                <FormControl.Label>
                    <Text>Password</Text>
                </FormControl.Label>
                <Input
                    variant="outline"
                    size="md"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}

                >
                    <InputField placeholder="Enter password" type='password' />
                </Input>
            </FormControl>
        </AuthLayout>
    )
}
