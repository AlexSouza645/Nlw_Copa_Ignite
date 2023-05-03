import { Button as ButtonNativeBase, Text, IButtonProps } from "native-base" //Button as ButtonNativeBase é usado para renomear componen
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
            // bg={type === 'SECONDARY' ? 'red.500' : 'yellow.500'}
            // _pressed={
            //     bg: type === 'SECONDARY' ? 'red.400' : 'yellow.600'
            // }



{...rest }>
    <Text />{ title }


        </ButtonNativeBase >
    );
}