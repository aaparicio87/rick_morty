import {
    FormControl,
    Input,
    InputField,
    Text
} from '@gluestack-ui/themed'
import { SignUpScreenProps } from '../../../navigation'
import { AuthLayout } from '../../../layout'

type TProps = SignUpScreenProps

export const RegisterScreen = ({ navigation }: TProps) => {
    return (
        <AuthLayout
            sigIn={false}
            buttonText='Sign up'
            handleNavigate={() => navigation.navigate('Login')}
            handlePressButton={() => { }}
        >
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
            <FormControl>
                <FormControl.Label>
                    <Text>Confirm Password</Text>
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
