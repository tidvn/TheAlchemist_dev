import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import LogoTheAlchemist from '../svgs/logo-thealchemist'
import { cn } from '~/lib/utils'

export default function FeedHeader(props: { className?: string }) {
  const insets = useSafeAreaInsets()

  return (
    <View style={{ paddingTop: insets.top }} className={cn("py-3", props.className)}>
      <View className="flex flex-row items-center justify-between">
        <LogoTheAlchemist width={200} />
        {/* <View className="flex flex-row space-x-3 pr-1">

        </View> */}
      </View>
    </View>
  )
}
