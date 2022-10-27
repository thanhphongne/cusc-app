import {
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialogFooter,
    Button,
} from "@chakra-ui/react";
import React from "react";
import { CadresDataType } from "../types/cadresDataType";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: () => void;
};

const AlertDeleteCadres = ({ isOpen, onClose, onSubmit }: Props) => {
    const cancelRef = React.useRef();

    return (
        <AlertDialog
            isOpen={isOpen}
            //@ts-ignore
            leastDestructiveRef={cancelRef}
            onClose={onClose}
        >
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        Xóa cán bộ
                    </AlertDialogHeader>

                    <AlertDialogBody>
                        Bạn có chắc chắn muốn xóa cán bộ này không?
                    </AlertDialogBody>

                    <AlertDialogFooter>
                        {/* @ts-ignore */}
                        <Button ref={cancelRef} onClick={onClose}>
                            Hủy bỏ
                        </Button>
                        <Button colorScheme="red" onClick={onSubmit} ml={3}>
                            Chắc chắn
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    );
};

export default AlertDeleteCadres;
