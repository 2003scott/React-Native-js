import React from "react";
import { View, Text,FlatList } from "react-native";
import repositories from "../data/repositories";
import { RepositoryIteam } from "./RepositoryIteam";

const RepositoryList = () => {
    return(
        <FlatList data={repositories}
            ItemSeparatorComponent={() => <Text></Text>}
            renderItem={({item : repo}) => (
                <RepositoryIteam {...repo}/>
            )}>
        </FlatList>
    )
}

export default RepositoryList;