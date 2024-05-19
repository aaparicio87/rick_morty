import { TouchableOpacity } from 'react-native'
import { Link, LinkText } from '@gluestack-ui/themed'

type TProps = {
    text: string
    handlePressLink: () => void
}

export const CustomLink = ({ text, handlePressLink }: TProps) => {
    return (
        <Link
            as={TouchableOpacity}
            onPress={handlePressLink}
        >
            <LinkText
                color='$indigo500'
                fontWeight={'$medium'}
                fontSize={'$md'}
            >
                {text}
            </LinkText>
        </Link>
    )
}
