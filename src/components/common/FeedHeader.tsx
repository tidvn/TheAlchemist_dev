import { Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import LogoTheAlchemist from '~/components/svgs/logo-thealchemist'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';


export default function FeedHeader(props: any) {
  const insets = useSafeAreaInsets()

  return (
    <View style={{ paddingTop: insets.top  }} className="px-3 my-3 border-b border-slate-200">
      <View className=" flex flex-row items-center justify-between space-x-0 ">
        <View>
          <LogoTheAlchemist />
        </View>
        <View className="flex flex-row items-center gap-3 ">
          <TouchableOpacity >
            <Ionicons name="search" size={32} color="black" />
          </TouchableOpacity>
          <TouchableOpacity >
            <Avatar alt="Rick Sanchez's Avatar" className='h-10 w-10'>
              <AvatarImage source={{ uri: "https://i.pinimg.com/originals/ef/a2/8d/efa28d18a04e7fa40ed49eeb0ab660db.jpg" }} />
              <AvatarFallback>
                <Text>RS</Text>
              </AvatarFallback>
            </Avatar>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
