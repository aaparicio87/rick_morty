import React from 'react'
import {
    AlertIcon,
    AlertText,
    CloseCircleIcon,
    EyeIcon,
    EyeOffIcon,
    FormControl,
    FormControlErrorText,
    FormControlLabel,
    FormControlLabelText,
    InfoIcon,
    Input,
    InputField,
    InputIcon,
    InputSlot,
    KeyboardAvoidingView
} from '@gluestack-ui/themed'
import { Image } from 'expo-image';
import styles from './styles'
import { LoginScreenProps } from '../../../navigation';
import { AuthLayout } from '../../../layout';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LOGIN_VALIDATION_SCHEMA } from '../../../helpers/validationSchemas';
import { Keyboard, Platform, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { useAppDispatch } from '../../../hooks/store';
import { setCredentials } from '../../../state/features/auth/authSlice';
import { Alert } from '@gluestack-ui/themed';

type TProps = LoginScreenProps

interface ILogin {
    email: string,
    password: string,
}

const INITIAL_STATE: ILogin = {
    email: "",
    password: "",
}


export const LoginScreen = ({ navigation }: TProps) => {

    const dispatch = useAppDispatch()
    const { control, handleSubmit, formState: { errors } } = useForm<ILogin>({
        defaultValues: {
            ...INITIAL_STATE
        },
        resolver: zodResolver(LOGIN_VALIDATION_SCHEMA)
    });

    const [showAlertDialog, setShowAlertDialog] = React.useState(false)
    const [showPassword, setShowPassword] = React.useState(false)
    const handleState = () => {
        setShowPassword((showState) => {
            return !showState
        })
    }

    const onSubmit = async (data: ILogin) => {
        try {
            const { email, password } = data
            if (email === 'admin@gmail.com' && password == 'ASDasd11*') {
                dispatch(setCredentials({ token: '123abc' }))
            } else {
                setShowAlertDialog((prev) => !prev)
            }
        } catch (error) {
            console.error("Login Error", JSON.stringify(error))
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <AuthLayout
                    buttonText='Sign in'
                    handlePressButton={handleSubmit(onSubmit)}
                    handleNavigate={() => navigation.navigate('SignUp')}
                >

                    <Image
                        source={require('../../../assets/logo.png')}
                        alt='Logo'
                        style={styles.image}
                    />
                    {showAlertDialog &&
                        <Alert mx="$2.5" action="error" variant="accent">

                            <AlertIcon as={InfoIcon} mr="$3" />
                            <AlertText>
                                Bad email or password
                            </AlertText>
                            <TouchableOpacity onPress={() => setShowAlertDialog(false)}>
                                <CloseCircleIcon />
                            </TouchableOpacity>
                        </Alert>
                    }
                    <FormControl>
                        <FormControlLabel>
                            <FormControlLabelText>E-mail</FormControlLabelText>
                        </FormControlLabel>

                        <Input
                            variant="outline"
                            size="md"
                            isDisabled={false}
                            isInvalid={!!errors.email}
                            isReadOnly={false}
                        >
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <InputField
                                        placeholder="Enter e-mail"
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        autoCapitalize='none'
                                        keyboardType='email-address'
                                    />
                                )}
                                name="email"
                                defaultValue=""
                            />
                        </Input>
                        {errors.email && (
                            <FormControlErrorText>
                                {errors.email.message}
                            </FormControlErrorText>
                        )}
                    </FormControl>

                    <FormControl>
                        <FormControlLabel>
                            <FormControlLabelText>Password</FormControlLabelText>
                        </FormControlLabel>
                        <Input
                            variant="outline"
                            size="md"
                            isDisabled={false}
                            isInvalid={!!errors.password}
                            isReadOnly={false}

                        >
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <InputField
                                        placeholder="Enter password"
                                        type={showPassword ? 'text' : 'password'}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                    />
                                )}
                                name="password"
                                defaultValue=""
                            />
                            <InputSlot pr="$3" onPress={handleState}>
                                <InputIcon
                                    as={showPassword ? EyeIcon : EyeOffIcon}
                                    color="$darkBlue500"
                                />
                            </InputSlot>
                        </Input>
                        {errors.password && (

                            <FormControlErrorText>
                                {errors.password.message}
                            </FormControlErrorText>
                        )}
                    </FormControl>
                </AuthLayout>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
