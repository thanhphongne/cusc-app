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
import { CadresDataType } from "../types/cadresDataType";
import SelectRole from "./SelectRole";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (formvalue: any) => void;
    cadres: CadresDataType | undefined;
};

const UpdateRoleCadresDialog = ({
    isOpen,
    onClose,
    onSubmit,
    cadres,
}: Props) => {
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
                initialValues={{
                    ...cadres,
                }}
                onSubmit={onSubmit}
            >
                <Form>
                    <ModalContent>
                        <ModalHeader>Cập nhật chức vụ</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <InputField
                                name="name"
                                placeholder="Họ và Tên"
                                label="Họ và tên"
                                type="text"
                                disabled={true}
                            />
                            <Box mt={4}>
                                <SelectRole name="role" />
                            </Box>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme="blue" mr={3} type="submit">
                                Cập nhật
                            </Button>
                            <Button onClick={onClose}>Hủy bỏ</Button>
                        </ModalFooter>
                    </ModalContent>
                </Form>
            </Formik>
        </Modal>
    );
};

export default UpdateRoleCadresDialog;
