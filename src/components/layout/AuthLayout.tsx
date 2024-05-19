import {
    Box,
    Button,
    ButtonText,
    Center,
    HStack,
    SafeAreaView,
    Text, VStack
} from "@gluestack-ui/themed"
import { CustomLink } from "../CustomLink/CustomLink"

type TProps = React.PropsWithChildren & {
    buttonText: string
    sigIn?: boolean
    handlePressButton: () => void
    handleNavigate: () => void
}

export const AuthLayout = ({
    children,
    buttonText,
    sigIn = true,
    handlePressButton,
    handleNavigate = () => { }
}: TProps) => {

    return (
        <Center flex={1} px={3}>
            <Center w="100%">
                <Box as={SafeAreaView} p={2} maxWidth={290} w={"90%"}>
                    <VStack mt={5} space='4xl'>
                        {children}
                        <Button
                            mt={2}
                            size='md'
                            variant='solid'
                            action='primary'
                            onPress={handlePressButton}
                        >
                            <ButtonText>{buttonText}</ButtonText>
                        </Button>


                        <HStack mt={6} justifyContent="center">
                            <Text fontSize="$md" color="coolGray.600" >
                                {sigIn
                                    ? `I'm a new user.`
                                    : `Have an account?`
                                }{" "}
                            </Text>

                            <CustomLink
                                text={`Sign ${sigIn ? 'Up' : 'In'}`}
                                handlePressLink={handleNavigate}
                            />
                        </HStack>

                    </VStack>
                </Box>
            </Center>
        </Center>
    )
}
