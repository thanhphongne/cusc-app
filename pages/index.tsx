import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import AlertDeleteCadres from "../components/AlertDeleteCadres";
import CreateCadresDialog from "../components/CreateCadresDialog";
import TableComponent from "../components/TableComponent";
import UpdateCadresDialog from "../components/UpdateCadresDialog";
import UpdateRoleCadresDialog from "../components/UpdateRoleCadresDialog";

import styles from "../styles/Home.module.css";
import { CadresDataType } from "../types/cadresDataType";

const DATA: CadresDataType[] = [
    {
        id: 1,
        name: "Nguyễn Văn A",
        female: false,
        address: "Cần Thơ",
        phone: "0123456789",
        email: "nva@gmail.com",
        role: "Giám Đốc",
    },
    {
        id: 2,
        name: "Nguyễn Thị B",
        female: true,
        address: "Hậu Giang",
        phone: "0123456789",
        email: "ntb@gmail.com",
        role: "Trưởng Phòng",
    },
    {
        id: 3,
        name: "Nguyễn Văn C",
        female: false,
        address: "Vĩnh Long",
        phone: "0123456789",
        email: "nvc@gmail.com",
        role: "Nhân Viên",
    },
];

export default function Home() {
    const [cadres, setCadres] = useState(DATA);
    const [selectedCadres, setSelectedCadres] = useState<
        CadresDataType | undefined
    >();
    const {
        isOpen: isCreateCadres,
        onClose: onCloseCreateCadres,
        onOpen: onOpenCreateCadres,
    } = useDisclosure();
    const {
        isOpen: isUpdateCadres,
        onClose: onCloseUpdateCadres,
        onOpen: onOpenUpdateCadres,
    } = useDisclosure();
    const {
        isOpen: isUpdateRoleCadres,
        onClose: onCloseUpdateRoleCadres,
        onOpen: onOpenUpdateRoleCadres,
    } = useDisclosure();
    const {
        isOpen: isRemoveCadres,
        onClose: onCloseRemoveCadres,
        onOpen: onOpenRemoveCadres,
    } = useDisclosure();

    const handleCreateCadres = (fromValue: any) => {
        setCadres((prev) => [
            ...prev,
            {
                id: prev.length + 1,
                female: fromValue.gender === "female",
                ...fromValue,
            },
        ]);
        onCloseCreateCadres();
    };

    const onUpdate = (cadres: CadresDataType) => {
        setSelectedCadres(cadres);
        onOpenUpdateCadres();
    };
    const onUpdateSubmit = (fromValue: any) => {
        const newState = cadres.map((item) => {
            if (item.id === fromValue.id) {
                return { ...fromValue };
            } else return item;
        });

        setCadres(newState);
        onCloseUpdateCadres();
        onCloseUpdateRoleCadres();
    };

    const onUpdateRole = (cadres: CadresDataType) => {
        setSelectedCadres(cadres);
        onOpenUpdateRoleCadres();
    };
    const onRemove = (cadres: CadresDataType) => {
        setSelectedCadres(cadres);
        onOpenRemoveCadres();
    };
    const onRemoveSubmit = () => {
        const newState = cadres.filter(
            (item) => item.id !== selectedCadres?.id
        );

        setCadres(newState);
        onCloseRemoveCadres();
    };

    return (
        <Flex
            direction={"column"}
            flex={1}
            justify="center"
            align={"center"}
            height="100vh"
        >
            <Button onClick={onOpenCreateCadres}>Thêm mới cán bộ</Button>
            <TableComponent
                data={cadres}
                onUpdate={onUpdate}
                onRemove={onRemove}
                onUpdateRole={onUpdateRole}
            />
            <CreateCadresDialog
                isOpen={isCreateCadres}
                onClose={onCloseCreateCadres}
                onSubmit={handleCreateCadres}
            />
            <UpdateCadresDialog
                isOpen={isUpdateCadres}
                onClose={onCloseUpdateCadres}
                onSubmit={onUpdateSubmit}
                cadres={selectedCadres}
            />
            <UpdateRoleCadresDialog
                isOpen={isUpdateRoleCadres}
                onClose={onCloseUpdateRoleCadres}
                onSubmit={onUpdateSubmit}
                cadres={selectedCadres}
            />
            <AlertDeleteCadres
                isOpen={isRemoveCadres}
                onClose={onCloseRemoveCadres}
                onSubmit={onRemoveSubmit}
            />
        </Flex>
    );
}
