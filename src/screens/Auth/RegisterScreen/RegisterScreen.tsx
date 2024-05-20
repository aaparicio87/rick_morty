import {
    FormControl,
    FormControlErrorText,
    FormControlLabelText,
    Input,
    InputField,
    InputIcon,
    KeyboardAvoidingView,
} from '@gluestack-ui/themed'
import { SignUpScreenProps } from '../../../navigation'
import { AuthLayout } from '../../../layout'
import { zodResolver } from '@hookform/resolvers/zod'
import { SIGN_UP_VALIDATION_SCHEMA } from '../../../helpers/validationSchemas'
import { FormControlLabel } from '@gluestack-ui/themed'
import { Controller, useForm } from 'react-hook-form'
import { Keyboard, Platform, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { InputSlot } from '@gluestack-ui/themed'
import { EyeIcon } from '@gluestack-ui/themed'
import { EyeOffIcon } from '@gluestack-ui/themed'

type TProps = SignUpScreenProps
interface ISignUp {
    email: string,
    password: string,
    confirm: string
}

const INITIAL_STATE: ISignUp = {
    email: "",
    password: "",
    confirm: ""
}

export const RegisterScreen = ({ navigation }: TProps) => {
    const { control, handleSubmit, formState: { errors, isValid, isLoading }, reset } = useForm<ISignUp>({
        defaultValues: {
            ...INITIAL_STATE
        },
        resolver: zodResolver(SIGN_UP_VALIDATION_SCHEMA)
    });

    const [showPassword, setShowPassword] = React.useState(false)
    const [showConfirm, setShowConfirm] = React.useState(false)

    const handleStatePassword = () => {
        setShowPassword((showState) => {
            return !showState
        })
    }

    const handleStateConfirm = () => {
        setShowConfirm((showState) => {
            return !showState
        })
    }

    //Registe with firerebase auth
    const onSubmit = async (data: ISignUp) => {
        try {
            reset();
            navigation.navigate('Login')
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
                    sigIn={false}
                    buttonText='Sign up'
                    handleNavigate={() => navigation.navigate('Login')}
                    handlePressButton={handleSubmit(onSubmit)}
                >
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
                                        keyboardType='email-address'
                                        autoCapitalize='none'
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
                            <InputSlot pr="$3" onPress={handleStatePassword}>
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
                    <FormControl>
                        <FormControlLabel>
                            <FormControlLabelText>Confirm Password</FormControlLabelText>
                        </FormControlLabel>
                        <Input
                            variant="outline"
                            size="md"
                            isDisabled={false}
                            isInvalid={!!errors.confirm}
                            isReadOnly={false}
                        >
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <InputField
                                        placeholder="Enter password"
                                        type={showConfirm ? 'text' : 'password'}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                    />
                                )}
                                name="confirm"
                                defaultValue=""
                            />
                            <InputSlot pr="$3" onPress={handleStateConfirm}>
                                <InputIcon
                                    as={showConfirm ? EyeIcon : EyeOffIcon}
                                    color="$darkBlue500"
                                />
                            </InputSlot>
                        </Input>
                        {errors.confirm && (
                            <FormControlErrorText>
                                {errors.confirm.message}
                            </FormControlErrorText>
                        )}
                    </FormControl>
                </AuthLayout>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
