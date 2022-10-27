import { useField } from "formik";
import {
    RadioGroup as ChakraRadioGroup,
    RadioGroupProps as ChakraRadioGroupProps,
} from "@chakra-ui/react";
import * as React from "react";

type Props = ChakraRadioGroupProps;

const RadioGroup = ({ name, children, ...props }: Props) => {
    const [field, , { setValue }] = useField({
        name: name as string,
        value: props.value,
    });

    const namedChildren = React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return;

        return React.cloneElement(child, {
            //@ts-ignore
            name,
        });
    });

    return (
        <ChakraRadioGroup
            {...props}
            {...field}
            onChange={setValue}
            // eslint-disable-next-line react/no-children-prop
            children={namedChildren}
        />
    );
};

export default React.memo(RadioGroup);
