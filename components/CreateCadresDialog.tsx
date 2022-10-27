import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormLabel,
    Input,
    ModalFooter,
    Button,
    Box,
    Radio,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import * as yup from "yup";
import React from "react";
import InputField from "./InputField";
import RadioInput from "./RadioInput";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (formvalue: any) => void;
};
const initialValues = {
    name: "",
    gender: "male",
    address: "",
    phone: "",
    email: "",
};
const createCadresValidationSchema = yup.object().shape({
    name: yup
        .string()
        .min(3, "Họ và tên phải dài hơn 3 ký tự")
        .max(20, "Họ và tên phải ngắn hơn 10 ký tự"),
    address: yup
        .string()
        .min(10, "Địa chỉ phải dài hơn 10 ký tự")
        .max(30, "Địa chỉ phải ngắn hơn 30 ký tự"),
    phone: yup.string().min(10, "Số điện thoạiphải lớn hơn bằng 10 ký tự."),
    email: yup.string().email("Email không hợp lệ"),
});

const CreateCadresDialog = ({ isOpen, onClose, onSubmit }: Props) => {
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    return (
        <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay />
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={createCadresValidationSchema}
            >
                <Form>
                    <ModalContent>
                        <ModalHeader>Thêm mới/Cập nhật cán bộ</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <InputField
                                name="name"
                                placeholder="Họ và Tên"
                                label="Họ và tên"
                                type="text"
                            />
                            <Box mt={4}>
                                <RadioInput
                                    name="gender"
                                    placeholder="Giới tính"
                                >
                                    <Radio ml={4} value={"male"}>
                                        Nam
                                    </Radio>
                                    <Radio ml={4} value={"female"}>
                                        Nữ
                                    </Radio>
                                </RadioInput>
                            </Box>
                            <Box mt={4}>
                                <InputField
                                    name="address"
                                    placeholder="Địa chỉ"
                                    label="Địa chỉ"
                                    type="text"
                                />
                            </Box>
                            <Box mt={4}>
                                <InputField
                                    name="phone"
                                    placeholder="Số điện thoại"
                                    label="Số điện thoại"
                                    type="text"
                                />
                            </Box>
                            <Box mt={4}>
                                <InputField
                                    name="email"
                                    placeholder="Email"
                                    label="Email"
                                    type="text"
                                />
                            </Box>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme="blue" mr={3} type="submit">
                                Thêm
                            </Button>
                            <Button onClick={onClose}>Thêm</Button>
                        </ModalFooter>
                    </ModalContent>
                </Form>
            </Formik>
        </Modal>
    );
};

export default CreateCadresDialog;
