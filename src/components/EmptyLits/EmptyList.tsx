
import { Text, View } from "@gluestack-ui/themed"
import styles from "./styles"
import { FontAwesome } from '@expo/vector-icons';

const EmptyList = () => {
    return (
        <View style={styles.emptyContainer}>
            <FontAwesome name="archive" size={50} color="gray" />
            <Text style={styles.emptyText}>
                No items to display
            </Text>
        </View>
    )
}

export default EmptyList