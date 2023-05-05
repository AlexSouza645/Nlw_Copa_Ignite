import { Button as ButtonNativeBase, Text, IButtonProps, Center, View } from "native-base" //Button as ButtonNativeBase é usado para renomear componen
interface Props extends IButtonProps {
    title: string;
    type?: 'PRIMARY' | 'SECONDARY'// sera opcional o type do button 

}

export function Button({ title, type = 'PRIMARY', ...rest }: Props) {
    return (
        <ButtonNativeBase
            w='full'
            h={14}
            rounded='sm'//cantos arredondados super small
            fontSize='md'
            textTransform={'uppercase'}
            bg={type === 'SECONDARY' ? 'red.500' : 'yellow.500'}
            _pressed={{
                bg: type === 'SECONDARY' ? 'red.600' : 'yellow.600'
            }

            }

            _loading={{

                _spinner: {
                    color: 'black'
                }

            }}




            {...rest}>


            <Center>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text
                        fontSize='sm'
                        fontFamily='heading'
                        color={type === 'SECONDARY' ? 'white' : 'black'}




                    >{title} </Text>
                </View>
            </Center>



        </ButtonNativeBase >
    );
}