import {
    Card,
    Image,
    Text,
    View
} from '@gluestack-ui/themed'
import styles from './styles'

type TProps = {
    item: TCharacter
}


const CharacterItem = ({ item }: TProps) => {
    return (
        <Card style={styles.card}>
            <View style={styles.cardContent}>
                <Image
                    source={{ uri: item.image }}
                    style={styles.avatar}
                    alt={item.name}
                />
                <View style={styles.info}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.name}>{item.species}</Text>
                    <Text style={styles.name}>{item.gender === 'unknown' ? '-' : item.gender}</Text>
                </View>
            </View>
        </Card>
    )
}

export default CharacterItem