import { Button, ButtonText, Box } from "@gluestack-ui/themed"
import { HomeLayout } from "../../../layout"
import { Image } from 'expo-image';
import { useAppDispatch } from "../../../hooks/store";
import { clearAuthState } from "../../../state/features/auth/authSlice";
import styles from "./styles"

export const MenuScreen = () => {

    const dispatch = useAppDispatch()

    const handleLogout = () => {
        dispatch(clearAuthState())
    }

    return (
        <HomeLayout>
            <Box padding={'$10'} justifyContent="space-between" flex={1} alignContent="center">
                <Image
                    source={require('../../../assets/bye.png')}
                    alt="bye"
                    style={styles.image}
                />
                <Button
                    mt={2}
                    size='md'
                    variant='solid'
                    action='primary'
                    onPress={handleLogout}
                >
                    <ButtonText>Logout</ButtonText>
                </Button>
            </Box>
        </HomeLayout>
    )
}
