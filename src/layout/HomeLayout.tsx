import { SafeAreaView, Box } from "@gluestack-ui/themed"

type TProps = React.PropsWithChildren

export const HomeLayout = ({ children }: TProps) => {

    return (
        <Box as={SafeAreaView} p={'$2'} w={"100%"} flex={1}>
            {children}
        </Box>
    )
}