import {
    FlatList,
    FlatListProps,
    ListRenderItem
} from "react-native";
import EmptyList from "../EmptyLits/EmptyList";

interface GenericFlatListProps<T> extends FlatListProps<T> {
    renderItem: ListRenderItem<T>;
    keyExtractor: (item: T) => string;

}


export const GenericFlatList = <T,>({
    renderItem,
    keyExtractor,
    ...flatListProps
}: GenericFlatListProps<T>) => {

    return (
        <FlatList
            {...flatListProps}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            ListEmptyComponent={EmptyList}
        />
    )
}
