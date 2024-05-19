
import { useCallback, useEffect, useRef } from 'react'
import { GenericFlatList } from '../../../components'
import { useGetAllCharactersQuery, useLazyGetAllCharactersQuery } from '../../../services/rick_morty'
import CharacterItem from './components/CharacterItemList/CharacterItem'
import { ActivityIndicator, ListRenderItem } from 'react-native'
import { View } from '@gluestack-ui/themed'
import { useAppDispatch, useTypedSelector } from '../../../hooks/store'
import { selectRickMorty, setCharacters, setInfoCharacters } from '../../../state/features/rick_morty/rickMortySlice'
import { HomeLayout } from '../../../layout'


export const HomeScreen = () => {
    const pageRef = useRef(1)
    const firstLoad = useRef(true)
    const { data, isLoading, isSuccess } = useGetAllCharactersQuery(pageRef.current)
    const [trigger, { isLoading: isLoadingLazy }] = useLazyGetAllCharactersQuery()
    const dispatch = useAppDispatch()
    const { characters } = useTypedSelector(selectRickMorty)


    useEffect(() => {
        if (isSuccess) {
            dispatch(setCharacters({ results: data?.results ?? [] }))
            dispatch(setInfoCharacters(data.info))
        }
    }, [isSuccess])

    const loadMoreData = async () => {
        try {
            if (firstLoad.current) {
                firstLoad.current = false
                return
            }
            if (data?.info.next) {
                pageRef.current = pageRef.current + 1
                const { info, results } = await trigger(pageRef.current).unwrap()
                dispatch(setCharacters({ results: results ?? [] }))
                dispatch(setInfoCharacters(info))
            }
        } catch (error) {
            console.error(error)
        }
    };

    const renderFooter = () => {
        if (!isLoadingLazy) return null;
        return <ActivityIndicator size="large" color="#0000ff" />;
    };


    const renderItem: ListRenderItem<TCharacter> = useCallback(({ item }) => (
        <CharacterItem item={item} />
    ), [])

    return (
        <HomeLayout>
            <View flex={1}>
                {
                    isLoading
                        ? <ActivityIndicator />
                        : <GenericFlatList
                            data={characters}
                            keyExtractor={(item) => String(item.id)}
                            renderItem={renderItem}
                            onEndReached={loadMoreData}
                            onEndReachedThreshold={0.5}
                            ListFooterComponent={renderFooter}
                        />
                }
            </View>
        </HomeLayout>
    )
}