import { Button, ButtonText, Box } from "@gluestack-ui/themed"
import { HomeLayout } from "../../../layout"
import styles from "./styles"
import { Image } from 'expo-image';

export const MenuScreen = () => {
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
                    onPress={() => { }}
                >
                    <ButtonText>Logout</ButtonText>
                </Button>
            </Box>
        </HomeLayout>
    )
}
