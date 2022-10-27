import { FormControl, FormErrorMessage, Input } from "@chakra-ui/react";
import { useField } from "formik";
import { memo } from "react";

interface InputFieldProps {
    name: string;
    label: string;
    placeholder: string;
    type: string;
    disabled?: boolean;
}

const InputField = ({ ...props }: InputFieldProps) => {
    const [field, { error }] = useField(props);
    return (
        <FormControl isInvalid={!!error}>
            <Input {...field} id={field.name} {...props} />

            {error && <FormErrorMessage>{error}</FormErrorMessage>}
        </FormControl>
    );
};

export default memo(InputField);
