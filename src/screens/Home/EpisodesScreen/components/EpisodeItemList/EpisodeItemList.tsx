import { Card, Image, Text, View } from "@gluestack-ui/themed"
import styles from "./styles"

type TProps = {
    item: TEpisode
}

const EpisodeItemList = ({ item }: TProps) => {
    return (
        <Card style={styles.card}>
            <View style={styles.cardContent}>
                <View style={styles.info}>
                    <Text style={styles.title}>{item.episode}</Text>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
            </View>
        </Card>
    )
}

export default EpisodeItemList