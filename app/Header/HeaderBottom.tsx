// import React from 'react';
// import { Box, Center, VStack, HStack, Icon } from 'native-base';
// import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';


// const HeaderBottom = () => {
//   return (
//     <Box
//       position="absolute"
//       bottom={0}
//       width="100%"
//       height="100px"
//       bg={background} // Using the imported background constant
//       pb="10px"
//       borderRadius="10px 0px 0px 0px"
//       justifyContent="center"
//       alignItems="center"
//       safeAreaBottom
//     >
//       <Center mt={4}>
//         <HStack justifyContent="space-around" alignItems="center" width="90%">
//           <VStack alignItems="center" space={1}>
//             <Icon as={Ionicons} name="home-sharp" color="white" size="xl" />
//             <StyledText>Главная</StyledText>
//           </VStack>
//           <VStack alignItems="center" space={1}>
//             <Icon as={FontAwesome} name="history" color="white" size="xl" />
//             <StyledText>История</StyledText>
//           </VStack>
//           <VStack alignItems="center" space={1}>
//             <Icon as={MaterialIcons} name="notifications" color="white" size="xl" />
//             <StyledText>Уведомления</StyledText>
//           </VStack>
//           <VStack alignItems="center" space={1}>
//             <Icon as={FontAwesome} name="user" color="white" size="xl" />
//             <StyledText>Профиль</StyledText>
//           </VStack>
//         </HStack>
//       </Center>
//     </Box>
//   );
// };

// export default HeaderBottom;

import React, { useState } from 'react';
import { Box, Center, VStack, HStack, Icon, Pressable } from 'native-base';
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { background } from '../constants/Colors'; 
import StyledText from '../constants/TextConstants';

const HeaderBottom = () => {
  const [pressedIcon, setPressedIcon] = useState<string | null>(null);

  const handlePressIn = (iconName: string) => {
    setPressedIcon(iconName);
  };

  const handlePressOut = () => {
    setPressedIcon(null);
  };

  const iconColor = (iconName: string) =>
    pressedIcon === iconName ? 'lightgrey' : 'white';

  return (
    <Box
      position="absolute"
      bottom={0}
      width="100%"
      height="100px"
      bg={background}
      pb="10px"
      borderRadius="10px 0px 0px 0px"
      justifyContent="center"
      alignItems="center"
      safeAreaBottom
    >
      <Center mt={4}>
        <HStack space={8} justifyContent="space-around" alignItems="center" width="90%">
          <Pressable
            onPressIn={() => handlePressIn('home')}
            onPressOut={handlePressOut}
          >
            <VStack alignItems="center">
              <Icon as={FontAwesome} name="home" color={iconColor('home')} size="xl" mb={1} />
              <StyledText>Главная</StyledText>
            </VStack>
          </Pressable>
          <Pressable
            onPressIn={() => handlePressIn('history')}
            onPressOut={handlePressOut}
          >
            <VStack alignItems="center">
              <Icon as={FontAwesome} name="history" color={iconColor('history')} size="xl" mb={1} />
              <StyledText>История</StyledText>
            </VStack>
          </Pressable>
          <Pressable
            onPressIn={() => handlePressIn('notifications')}
            onPressOut={handlePressOut}
          >
            <VStack alignItems="center">
              <Icon as={MaterialIcons} name="notifications" color={iconColor('notifications')} size="xl" mb={1} />
              <StyledText>Уведомления</StyledText>
            </VStack>
          </Pressable>
          <Pressable
            onPressIn={() => handlePressIn('profile')}
            onPressOut={handlePressOut}
          >
            <VStack alignItems="center">
              <Icon as={FontAwesome} name="user-circle" color={iconColor('profile')} size="xl" mb={1} />
              <StyledText>Профиль</StyledText>
            </VStack>
          </Pressable>
        </HStack>
      </Center>
    </Box>
  );
};

export default HeaderBottom;

