import { GenericFlatList, HomeLayout } from "../../../components"
import { useGetAllEpisodesQuery, useLazyGetAllEpisodesQuery } from "../../../services/rick_morty"
import { ActivityIndicator, ListRenderItem } from "react-native"
import { useCallback, useEffect, useRef } from "react"
import EpisodeItemList from "./components/EpisodeItemList/EpisodeItemList"
import { useAppDispatch, useTypedSelector } from "../../../hooks/store"
import { selectRickMorty, setEpisodes, setInfoEpisodes } from "../../../state/features/rick_morty/rickMortySlice"


export const EpisodesScreen = () => {

    const pageRef = useRef(1)
    const firstLoad = useRef(true)
    const { data, isLoading, isSuccess } = useGetAllEpisodesQuery(pageRef.current)
    const [trigger, { isLoading: isLoadingLazy }] = useLazyGetAllEpisodesQuery()

    const dispatch = useAppDispatch()
    const { episodes } = useTypedSelector(selectRickMorty)

    useEffect(() => {
        if (isSuccess) {
            dispatch(setEpisodes({ results: data?.results ?? [] }))
            dispatch(setInfoEpisodes(data.info))
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
                dispatch(setEpisodes({ results: results ?? [] }))
                dispatch(setInfoEpisodes(info))
            }
        } catch (error) {
            console.error(error)
        }
    };

    const renderFooter = () => {
        if (!isLoadingLazy) return null;
        return <ActivityIndicator size="large" color="#0000ff" />;
    };


    const renderItem: ListRenderItem<TEpisode> = useCallback(({ item }) => (
        <EpisodeItemList item={item} />
    ), [])

    return (
        <HomeLayout>
            {isLoading ?
                <ActivityIndicator />
                :
                <GenericFlatList
                    data={episodes}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={renderItem}
                    onEndReached={loadMoreData}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={renderFooter}
                />
            }

        </HomeLayout>
    )
}
