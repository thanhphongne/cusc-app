import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { useField } from "formik";
import React from "react";

type Props = {
    name: string;
};

const SelectRole = (props: Props) => {
    const [field, { error }] = useField(props);
    return (
        <FormControl>
            <FormLabel>Chức vụ</FormLabel>
            <Select {...field} id={field.name}>
                <option value={"Giám Đốc"}>Giám Đốc</option>
                <option value={"Trưởng Phòng"}>Trưởng Phòng</option>
                <option value={"Nhân Viên"}>Nhân Viên</option>
            </Select>
        </FormControl>
    );
};

export default SelectRole;
